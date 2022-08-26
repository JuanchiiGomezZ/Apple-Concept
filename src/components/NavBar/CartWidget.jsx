import React from "react";
import shoppingBag from "../../assets/images/shopping-bag.png";

const CartWidget = (props) => {
  return (
    <div className="cart">
      <img src={shoppingBag} alt="Cart" />
      <p>{props.cartQuantity}</p>
    </div>
  );
};

export default CartWidget;
