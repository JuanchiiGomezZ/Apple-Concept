import React from "react";
import shoppingBag from "../../../assets/images/shopping-bag.png";
import { useCartContext } from "../Cart/CartContext";

const CartWidget = () => {
  /* calling the total from the carContext */
  const { totalProducts } = useCartContext();

  return (
    <div className="logoCart" onClick={openCart}>
      <img src={shoppingBag} alt="Cart" />
      {
        (totalProducts() === 0)
        ? <p>0</p>
        : <p>{totalProducts()}</p>
      }
    </div>
  );
};  

/* Open and close cart */
const openCart = () => {
  const cartContainer = document.getElementById("cart");
  if (cartContainer.classList.contains("hidden")) {
    cartContainer.classList.add("active");
    cartContainer.classList.remove("hidden");
  } else if (cartContainer.classList.contains("active")) {
    cartContainer.classList.add("hidden");
    cartContainer.classList.remove("active");
  }
};



export default CartWidget;
