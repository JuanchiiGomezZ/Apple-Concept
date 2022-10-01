import React, { useState, useEffect } from "react";
/* import Loading from "../../utils/Loading"; */
import { getDoc, getFirestore, doc } from "firebase/firestore";
import PucharseSummary from "./PucharseSummary";

const PucharseSummaryContainer = ({ orderId }) => {
    

  const [order, setOrder] = useState({});
  useEffect(() => {
    if (orderId !== "") {
      const querydb = getFirestore();
      const queryDoc = doc(querydb, "orders", orderId);
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
