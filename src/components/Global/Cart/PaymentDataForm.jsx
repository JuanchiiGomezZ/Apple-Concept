import React, { useState /* useEffect */ } from "react";
import { useCartContext } from "./CartContext";
import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import PucharseSummary from "./PucharseSummaryContainer";
import AOS from 'aos';
import {db} from '../../../utils/firebaseConfig'


const PaymentDataForm = (toggleClassCheck) => {
  /* Calling the cart content and the total */
  const { cart, totalPrice } = useCartContext();

/*Setting the states where the data of the inputs will be stored  */
  const [number, setNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
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


  /* Playing with states to hide and show the inputs container */
  const [btnState, setBtnState] = useState(false);
  let toggleClass = btnState ? "active" : "hide";
  const [errorState, setErrorState] = useState(false);
  let toggleError = errorState ? "active" : "hide";
  const [error2State, setError2State] = useState(false);
  let toggleError2 = error2State ? "active" : "hide";
  const [checkoutToggle, setCheckoutToggle] = useState(true);
  let toggleCheckout = checkoutToggle ? "active" : "hide";

  /* Creating the state orderId where the content of the order will be stored */
  const [orderId, setOrderId] = useState("");
  const [showSummary, setShowSummary] = useState(false);



  const showPayment = (e) => {
    /* if for validate the inputs */
    if ( name && email && idNumber && phoneNumber && postalCode && city && state && street && houseNumber !== "") {
      setBtnState((btnState) => !btnState);
      setErrorState(false);
      setCheckoutToggle(false);
      window.scroll({
        top: 2500,
        behavior: "smooth",
    })

    } else {
      setErrorState(true);
    }
  };

  const finishPayment = (e) => {
    if ( cardName !== "" && number.length === 16 && cvc.length === 3 && expiry.length === 4) {
      uploadOrderToFirebase();
      setShowSummary(true);
      window.scroll({
        top: 1000,
        behavior: "smooth",
    })
    } else {
      setError2State(true);
    }
  };

  /* Object where it is stored the data of the inputs */
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
      cvc,
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


/* Function to upload the data to firebase */
  const uploadOrderToFirebase = () => {
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, orderData).then(({ id }) => setOrderId(id));
  };

  AOS.init({
    // initialise with other settings
    duration : 1000,
    offset: 100,
    once:true,
  });

/* this it will be true when we click on finishPayment */
  if (showSummary) {
    return <PucharseSummary orderId={orderId} />;
  }
  return (
    <div className="paymentForms">
      <div className={`personalDataFrom ${toggleClassCheck.show}`}data-aos="fade-down">
        <h1>Personal information.</h1>
        <div className="formsContainer">
          <form>
            <div className="personalData">
              <input
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="number"
                placeholder="ID number"
                value={idNumber}
                onChange={(e) => setIdNumber(e.target.value)}
              />
              <input
                type="number"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setphoneNumber(e.target.value)}
              />
            </div>
            <h1>Shipping Information.</h1>
            <div className="shippingData">
              <input
                type="number"
                placeholder="Postal code"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              />
              <input
                type="text"
                placeholder="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <input
                type="text"
                placeholder="Street"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
              <input
                type="number"
                placeholder="Number"
                value={houseNumber}
                onChange={(e) => setHouseNumber(e.target.value)}
              />
              <input
                type="text"
                placeholder="Floor"
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
              className={`submitBtn ${toggleCheckout}`}
              value={"Continue"}
              onClick={(e) => showPayment(e)}
            />
          </form>
        </div>
      </div>
      <div className={`dataPaymentForm ${toggleClass}`}data-aos="fade-down">
        <h1>Payment Information.</h1>
        <div className="dataForms">
          <form>
            <input
              type="tel"
              name="number"
              placeholder="Card Number"
              maxLength={16}
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              maxLength={35}
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              
            />
            <input
              type="tel"
              name="expiry"
              placeholder="MM/YY Expiry"
              maxLength={4}
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              
            />
            <input
              type="tel"
              name="cvc"
              placeholder="CVC"
              maxLength={3}
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              
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
