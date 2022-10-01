import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loading from "../../utils/Loading";
import { getDoc, getFirestore, doc } from "firebase/firestore";


const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const { productId } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "productsApple", productId);
    getDoc(queryDoc).then((res) =>
      setData({ id: res.id, ...res.data(setIsLoading(false)) })
    );
  }, [productId]);
  

  return <>{isLoading ? <Loading /> : <ItemDetail data={data} />}</>;
};

export default ItemDetailContainer;
