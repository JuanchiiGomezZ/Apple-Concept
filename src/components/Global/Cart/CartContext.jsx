import React, { useState, useEffect } from "react";
import { useContext } from "react";

/* Creating the context */
const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  /* localStorage for cart */
  const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
  /* Cart state */
  const [cart, setCart] = useState(cartFromLocalStorage);
  /* Storing on localstorage */
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  /* function to send the product to cart */
  const addProductToCart = (item, quantity, selectedStorage, selectedColor) => {
    /* Check if there are already something equal than the product u have choosen */
    if (isInCart(item.id, selectedColor, selectedStorage)) {
      /* check if there are stock */
        if (areThereStock(item.stock)) {
          setCart(
            cart.map((product) => {
              /* accumulates the quantity if you want to enter another equal product */
              return product.id === item.id && product.selectedColor === selectedColor && product.selectedStorage === selectedStorage
                ? { ...product, quantity: product.quantity + quantity }
                : product;
            })
          );
        } else {
          alert("No hay stock");
        }
  /* if there is not something on cart, it is created */
    } else {
      setCart([
        ...cart,
        {
          ...item,
          quantity: quantity,
          selectedStorage: selectedStorage,
          selectedColor: selectedColor,
        },
      ]);
    }
  };


  const clearCart = () => setCart([]);

  
  const isInCart = (id, selectedColor, selectedStorage) => {
    /* check  */
    return cart.find(
      (product) =>
        product.id === id &&
        product.selectedColor === selectedColor &&
        product.selectedStorage === selectedStorage
    )
      ? true
      : false;
  };


  const areThereStock = (stock) =>
    cart.find((product) => stock > product.quantity) ? true : false;

  const removeProduct = (id, selectedColor, selectedStorage) => {
    console.log(selectedColor);
    setCart(
      cart.filter(
        (product) =>
          product.id !== id ||
          product.selectedColor !== selectedColor ||
          product.selectedStorage !== selectedStorage
      )
    );
  };
/* calculates the total price of the order */
  const totalPrice = () => {
    return cart.reduce(
      (prev, act) => (prev + act.quantity * act.price) * 1.1,
      0
    );
  };

/* calculates the number of products there are in cart */
  const totalProducts = () =>
    cart.reduce(
      (acumulador, productoActual) => acumulador + productoActual.quantity,
      0
    );

  return (
    <CartContext.Provider
      value={{
        clearCart,
        isInCart,
        removeProduct,
        addProductToCart,
        totalPrice,
        totalProducts,
        areThereStock,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
