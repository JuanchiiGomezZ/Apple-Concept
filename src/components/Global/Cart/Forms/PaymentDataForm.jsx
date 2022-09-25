import React, { useState } from "react";
import Cards from "react-credit-cards";
import { useCartContext} from '../CartContext'



const PaymentDataForm = () => {
  const {clearCart} = useCartContext();

  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  return (
    <>
      <h1>Payment Information</h1>
      <Cards
        number={number}
        name={name}
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
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            maxLength={25}
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
          <input
            type="tel"
            name="expiry"
            placeholder="MM/YY Expiry"
            maxLength={4}
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
          <input
            type="tel"
            name="cvc"
            placeholder="CVC"
            maxLength={3}
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
          <input type="button" id="payBtn" value={'Finish'} onClick={clearCart}/>
        </form>
      </div>
    </>
  );
};

export default PaymentDataForm;
