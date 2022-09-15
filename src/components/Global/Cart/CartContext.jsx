import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const addItem = (product) =>{
        setCartList([
            ...cartList,
            product
        ])
    }
    const removeItem = () => {

    }
    const clear = () => {

    }
  return (
    <CartContext.Provider value={{cartList, addItem, removeItem, clear}}>
        {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
