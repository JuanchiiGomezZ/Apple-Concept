import React, { useState, useEffect } from "react";
import { getDoc, doc } from "firebase/firestore";
import PucharseSummary from "./PucharseSummary";
import {db} from '../../../utils/firebaseConfig'

const PucharseSummaryContainer = ({ orderId }) => {
    
  /* Creating the state where it will be stored the data of the order */
  const [order, setOrder] = useState({});
  useEffect(() => {
    /* ordedrId comes from paymentDataForm which is the id of the order who was stored on firebase  */
    if (orderId !== "") {
      /* Here we search from the database the id of the order and it returns its content  */
      const queryDoc = doc(db, "orders", orderId);
      getDoc(queryDoc).then((res) => setOrder({ id: res.id, ...res.data() }))
    }
  }, [orderId]);

  

  return (
    <>
      <PucharseSummary order={order} />
    </>
  );
};

export default PucharseSummaryContainer;
