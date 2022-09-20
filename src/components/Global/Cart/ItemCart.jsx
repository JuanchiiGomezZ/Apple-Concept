import React from "react";
import { useCartContext } from "./CartContext";

const ItemCart = ({ product }) => {
  const { removeProduct } = useCartContext();
  return (
    <div className="productBoxInCart">
      <div className="hLine"></div>
      <div className="productInCart">
        <div className="productImage">
          <img src={product.imageCart} alt="" />
        </div>
        <div className="productDescription">
          <div className="productHead">
            <div className="productHeadMain">
              <div className="productTitle">
                <h2>{product.name}</h2>
              </div>
              <div className="productQuantity">
                <h2>{product.quantity}</h2>
              </div>
              <div className="productPrice">
                <h2>${product.price * product.quantity}</h2>
              </div>
            </div>
            <div className="productHeadSecond">
              <p>Paying for 12 months: </p>
              <p>${((product.price * product.quantity) / 12).toFixed(2)}/mo</p>
            </div>
            <p className="removeItem" onClick={() => removeProduct(product.id)}>
              Remove
            </p>
            <div className="productHeadThird">
              <div className="productFeatures">
                <div className="color">
                  <p>Space Gray</p>
                  <div className="circle gray"></div>
                </div>
                <p>512 GB SSD</p>
              </div>
            </div>
          </div>
          <div className="hLine"></div>
          <div className="appleCare">
            <div className="appleCareHead">
              <div className="appleCareTitle">
                <i className="fa-brands fa-apple"></i>
                <p>Apple Care for $399</p>
              </div>
              <p className="add">Add</p>
            </div>
            <div className="appleCareDescription">
              <p>
                Get up three yeats of technical anda ccidental damage
                protection.
              </p>
              <a href="##">Learn More</a>
            </div>
          </div>
          <div className="hLine"></div>
          <div className="shipping">
            <div className="shippingTitle">
              <i className="fa-solid fa-plane"></i>
              <p>Shipping</p>
            </div>
            <div className="shippingDescription">
              <div className="shippingWay">
                <i className="fa-solid fa-box"></i>
                <p>In stock and ready to ship</p>
              </div>
              <div className="shippingWay">
                <i className="fa-solid fa-bag-shopping"></i>
                <p>Pick up at an Apple Store near you.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hLine"></div>
    </div>
  );
};

export default ItemCart;
