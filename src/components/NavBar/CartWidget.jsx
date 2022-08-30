import React from "react";
import shoppingBag from "../../assets/images/shopping-bag.png";

const CartWidget = (props) => {
  return (
    <div className="logoCart" onClick={openCart}>
      <img src={shoppingBag} alt="Cart" />
      <p>{props.cartQuantity}</p>
    </div>
  );
};


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
