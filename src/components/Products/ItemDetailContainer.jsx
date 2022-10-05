import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Loading from "../../utils/Loading";
import { getDoc, doc } from "firebase/firestore";
import {db} from '../../firebaseConfig';

const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const { productId } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const queryDoc = doc(db, "productsApple", productId);
    getDoc(queryDoc).then((res) =>
      setData({ id: res.id, ...res.data(setIsLoading(false)) })
    );
  }, [productId]);
  

  return <>{isLoading ? <Loading /> : <ItemDetail data={data} />}</>;
};

export default ItemDetailContainer;
