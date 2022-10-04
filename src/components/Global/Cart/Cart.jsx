import React, { useState } from "react";
import ItemCart from "./ItemCart";
import { useCartContext } from "./CartContext";
import PaymentForm from "./PaymentDataForm";




const Cart = () => {
  /* hide the btn and show the form after u continue to pay */
  const [btnState, setBtnState] = useState(false);
  const showForm = () => {
    setBtnState(true);
    setCheckoutToggle(false);
    window.scroll({
      top: 2500,
      behavior: "smooth",
  })
  };
  let toggleClassCheck = btnState ? "active" : "hide";
  const [checkoutToggle, setCheckoutToggle] = useState(true);
  let toggleCheckout = checkoutToggle ? "active" : "hide";


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
      <>
        <div className="cart">
          <div className="cartTitle">
            <h1>Review your bag.</h1>
            <p>Free delivery and free returns.</p>
          </div>

          <div className="productsInCartContainer">
            {cart.map((product) => (
              <ItemCart key={product.id + product.selectedColor + product.selectedStorage} product={product} />
            ))}
          </div>

          <div className="totalContainer">
            <div className="totalDescriptionContainer">
              <div className="totalDescription">
                <p>Subtotal</p>
                <p>${(totalPrice()/1.1).toFixed(0)}</p>
              </div>
              <div className="totalDescription">
                <p>Shipping</p>
                <p>FREE</p>
              </div>
              <div className="totalDescription">
                <p>Estimated Taxes (10%): </p>
                <p>${((totalPrice()/1.1)*0.1).toFixed(0)}</p>
              </div>
            </div>
            <div className="hLine"></div>
            <div className="total">
              <h2>Total</h2>
              <h2>${(totalPrice()).toFixed(0)}</h2>
            </div>
            <div className="checkOut">
              <button  className={toggleCheckout} id="checkOutBtn" onClick={(e) => showForm(e)}>
                Check out
              </button>
            </div>
          </div>
          <div id="dataBuyerForm">
              <PaymentForm show={toggleClassCheck} />
          </div>
        </div>
      </>
    );
  }
};

export default Cart;
