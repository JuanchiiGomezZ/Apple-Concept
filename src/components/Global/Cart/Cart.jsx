import React from "react";
import ItemCart from "./ItemCart";
import { useCartContext } from "./CartContext";

function Cart() {
  const { cart, totalPrice } = useCartContext();
  if (cart.length === 0) {
    return (
      <>
        <div className="emptyContainer">
          <div className="cartCont">
            <h1>Empty Cart</h1>
          </div>
          <div className="totalContainer">
            <div className="totalDescriptionContainer">
              <div className="totalDescription">
                <p>Subtotal</p>
                <p>0</p>
              </div>
              <div className="totalDescription">
                <p>Shipping</p>
                <p>0</p>
              </div>
              <div className="totalDescription">
                <p>Estimated Taxes: </p>
                <p>0</p>
              </div>
            </div>
            <div className="hLine"></div>
            <div className="total">
              <h2>Total</h2>
              <h2>0</h2>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="cart">
        <div className="cartTitle">
          <h1>Review your bag.</h1>
          <p>Free delivery and free returns.</p>
        </div>

        <div className="productsInCartContainer">
          {cart.map((product) => (
            <ItemCart key={product.id} product={product} />
          ))}
        </div>

        <div className="totalContainer">
          <div className="totalDescriptionContainer">
            <div className="totalDescription">
              <p>Subtotal</p>
              <p>{totalPrice()}</p>
            </div>
            <div className="totalDescription">
              <p>Shipping</p>
              <p>FREE</p>
            </div>
            <div className="totalDescription">
              <p>Estimated Taxes: </p>
              <p>{(totalPrice() * 0.1).toFixed(2)}</p>
            </div>
          </div>
          <div className="hLine"></div>
          <div className="total">
            <h2>Total</h2>
            <h2>{(totalPrice() + totalPrice() * 0.1).toFixed(2)}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
