import React, { useState } from "react";
import Cards from "react-credit-cards";
import { useCartContext } from "../CartContext";
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";

const PaymentDataForm = (toggleClassCheck) => {
  const { clearCart, cart, totalPrice } = useCartContext();

  const [number, setNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [floor, setFloor] = useState("");

  const [btnState, setBtnState] = useState(false);
  let toggleClass = btnState ? "active" : "hide";
  const [errorState, setErrorState] = useState(false);
  let toggleError = errorState ? "active" : "hide";
  const [error2State, setError2State] = useState(false);
  let toggleError2 = error2State ? "active" : "hide";

  const showPayment = (e) => {
    if (
      name !== "" &&
      email !== "" &&
      idNumber !== "" &&
      phoneNumber !== "" &&
      postalCode !== "" &&
      city !== "" &&
      state !== "" &&
      street !== "" &&
      houseNumber !== ""
    ) {
      setBtnState((btnState) => !btnState);
      setErrorState(false);
    } else {
      setErrorState(true);
      
    }
    console.log(orderData)
  };

  const finishPayment = (e) => {
    if (cardName !== "" && number.length === 16 && cvc.length === 3 && expiry.length === 4) {
      const db = getFirestore();
      const ordersCollection = collection(db, "orders");
      addDoc(ordersCollection, orderData);
      clearCart();
    } else {
      setError2State(true);
    }
  };

  let orderData = {
    buyerData: {
      name,
      email,
      idNumber,
      phoneNumber,
    },
    shippingData: {
      postalCode,
      city,
      state,
      street,
      houseNumber,
      floor,
    },
    paymentData: {
      cardName,
      number,
      cvc ,
      expiry,
    },
    productsData: cart.map((product) => ({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: product.quantity,
    })),
    total: totalPrice().toFixed(0),
    date: serverTimestamp(),
  };

  

  return (
    <div className="paymentForms">
      <div className={`personalDataFrom ${toggleClassCheck.show}`}>
        <h1>Personal information.</h1>
        <div className="formsContainer">
          <form>
            <div className="personalData">
              <input
                type="text"
                placeholder="Full name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="number"
                placeholder="ID number"
                required
                value={idNumber}
                onChange={(e) => setIdNumber(e.target.value)}
              />
              <input
                type="number"
                placeholder="Phone Number"
                required
                value={phoneNumber}
                onChange={(e) => setphoneNumber(e.target.value)}
              />
            </div>
            <h1>Shipping Information</h1>
            <div className="shippingData">
              <input
                type="number"
                placeholder="Postal code"
                required
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              />
              <input
                type="text"
                placeholder="State"
                required
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
              <input
                type="text"
                placeholder="City"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <input
                type="text"
                placeholder="Street"
                required
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
              <input
                type="number"
                placeholder="Number"
                required
                value={houseNumber}
                onChange={(e) => setHouseNumber(e.target.value)}
              />
              <input
                type="text"
                placeholder="Floor"
                required
                value={floor}
                onChange={(e) => setFloor(e.target.value)}
              />
            </div>
            <div className={`dataIsMissing ${toggleError}`}>
              <i className="fa-solid fa-triangle-exclamation"></i>
              <p className="error">Error:</p>
              <p>Complete all the fields. </p>
            </div>
            <input
              type="button"
              className="submitBtn"
              value={"Continue"}
              onClick={(e) => showPayment(e)}
            />
          </form>
        </div>
      </div>
      <div className={`dataPaymentForm ${toggleClass}`}>
        <h1>Payment Information</h1>
        <Cards
          number={number}
          name={cardName}
          expiry={expiry}
          cvc={cvc}
          focused={focus}
        />
        <div className="dataForms">
          <form>
            <input
              type="tel"
              name="number"
              placeholder="Card Number"
              maxLength={16}
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
              required
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              maxLength={35}
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
              required
            />
            <input
              type="tel"
              name="expiry"
              placeholder="MM/YY Expiry"
              maxLength={4}
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
              required
            />
            <input
              type="tel"
              name="cvc"
              placeholder="CVC"
              maxLength={3}
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
              required
            />
            <div className={`dataIsMissing ${toggleError2}`}>
              <i className="fa-solid fa-triangle-exclamation"></i>
              <p className="error">Error:</p>
              <p>Complete all the fields. </p>
            </div>
            <input
              type="button"
              id="payBtn"
              value={"Finish"}
              onClick={(e) => {
                finishPayment(e);
              }}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentDataForm;
