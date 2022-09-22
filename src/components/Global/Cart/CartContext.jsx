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


  const addProductToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((product) => {
          return product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product;
        })
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
    
  };

  const clearCart = () => setCart([]);

  const isInCart = (id) =>
    cart.find((product) => product.id === id) ? true : false;

  const removeProduct = (id) =>
    setCart(cart.filter((product) => product.id !== id));


  const totalPrice = () =>{
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
  }  

  
  const totalProducts = () =>cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        clearCart,
        isInCart,
        removeProduct,
        addProductToCart,
        totalPrice,
        totalProducts,
        cart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
