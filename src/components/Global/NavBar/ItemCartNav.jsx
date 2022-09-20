import React from "react";
import { useCartContext } from "../Cart/CartContext";

const ItemCartNav = () => {
  const { cart } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <div className="emptyCart">
          <p> Empty cart</p>
        </div>
      </>
    );
  } else {
    return (
      <>
        {cart.map((product) => (
          <div className="productInCart">
            <div className="productBoxInCart">
              <img src={product.imageCart} alt="" />
              <div className="nameProductInCart">
                <p>{product.name}</p>
              </div>
            </div>
            <div className="h-line"></div>
          </div>
        ))}
      </>
    );
  }
};

export default ItemCartNav;
