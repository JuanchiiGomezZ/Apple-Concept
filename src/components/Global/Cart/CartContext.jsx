import React, { useState, useEffect } from "react";
import { useContext } from "react";



const CartContext = React.createContext([]);
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || "[]");
  const [cart, setCart] = useState(cartFromLocalStorage);
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  const addProductToCart = (item, quantity, selectedStorage, selectedColor) => {
    if (isInCart(item.id, selectedColor, selectedStorage)) {
      if((areThereStock(item.stock))){
        setCart(
          cart.map((product) => {
            return product.id === item.id && product.selectedColor === selectedColor && product.selectedStorage === selectedStorage 
              ? { ...product, quantity: product.quantity + quantity}
              : product;
          })
        );
      } else{
        alert('No hay stock')
      }
      }else {
        setCart([...cart, { ...item, quantity: quantity, selectedStorage: selectedStorage, selectedColor: selectedColor}]);
      }
  };

  const clearCart = () => setCart([]);

  const isInCart = (id, selectedColor, selectedStorage) =>{
    return cart.find((product) => product.id === id && product.selectedColor === selectedColor && product.selectedStorage === selectedStorage) ? true : false;
  }
  const isInCart2 = (selectedColor, selectedStorage) =>{
    return cart.find((product) => product.selectedColor === selectedColor && product.selectedStorage === selectedStorage ) ? true : false;
  }
   
  /* const areThereStock2 = (stock, counter) => (cart.find((product) => stock - product.quantity >= counter) ? true : false); */
  const areThereStock = (stock) =>  cart.find((product) => stock > product.quantity) ? true : false;

  const removeProduct = (id, selectedColor, selectedStorage) =>{
    console.log(selectedColor)
    setCart(cart.filter((product) => product.id !== id || product.selectedColor !== selectedColor || product.selectedStorage !== selectedStorage));
  }
    

  const totalPrice = () =>{
    return cart.reduce((prev, act) => (prev + act.quantity * act.price)* 1.1, 0);
  }

  const totalProducts = () =>cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        clearCart,
        isInCart,
        isInCart2,
        removeProduct,
        addProductToCart,
        totalPrice,
        totalProducts,
        areThereStock,
        /* areThereStock2, */
        cart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
