import React from "react";
import { Link } from "react-router-dom";
import ItemCartNav from "./ItemCartNav";

const CartContainer = () => {
  return (
    <div className="cartContainer hidden" id="cart">
      <div className="cartHeading">
        <h1>Your Cart</h1>
      </div>
      <div className="cartProductsContainer">
        <ItemCartNav />
      </div>
      <Link to="/Cart" className="checkOut" href="##">
        Check Out
      </Link>
    </div>
  );
};

export default CartContainer;
