import React from "react";
import Loading from "../../../utils/Loading";
import { useCartContext } from "./CartContext";
import Swal from 'sweetalert2'
const PucharseSummary = ({order}) => {
  const { clearCart } = useCartContext();

  const payBtn = () =>{
    Swal.fire({
      icon:'success',
      title:'Your order has been accepted!',
      text:`Order ID: ${order.id}`,
    })
    .then(clearCart)
  }

  if(order.id !== undefined){
    return(   
      <div className="pucharseInformation">
      <h1>Check the data.</h1>
      <h2>Contact.</h2>
      <p>Email: {order.buyerData.email}</p>
      <p>Phone: {order.buyerData.phoneNumber}</p>
      <h2>Shipping.</h2>
      <p>Destiny: {order.shippingData.state}, {order.shippingData.city} ({order.shippingData.postalCode})</p>
      <p>Street: {order.shippingData.street} {order.shippingData.houseNumber}</p>
      <h2>Payment.</h2>
      <p>Card: **** **** **** {(order.paymentData.number).slice(-4)}</p> 
      <button onClick={payBtn}>Pay</button>
    </div>)
  }
  else{
    return <Loading/>
  }
 
  };


export default PucharseSummary;
