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
          <div className="productInCart" key={product.id + product.selectedColor + product.selectedStorage}>
            <div className="productBoxInCart">
              <img src={product.imageCart} alt="" />
              <div>
                <p className="nameProductInCart">{product.name}</p>
                <div className="productDescriptionInCart">
                  <p>{(product.selectedColor).charAt(0).toUpperCase() + (product.selectedColor).slice(1).toLowerCase()} | {product.selectedStorage}</p>
                </div>
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
