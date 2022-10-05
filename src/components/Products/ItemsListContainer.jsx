import React, { useState, useEffect } from "react";
import ItemsList from "./ItemsList";
/* import dataProducts from "../../utils/dataProducts"; */
import { useParams } from "react-router-dom";
import Loading from "../../utils/Loading";
import helper from "../../assets/images/iphone/Helper.jpg";
import BannersIphone from './Banners/BannersIphone';
import BannersMac from "./Banners/BannersMac";
import BannerIpad from './Banners/BannerIpad';
import ServicesBanner from "./Banners/ServicesBanner";
import { where, collection, getDocs, query } from 'firebase/firestore';
import {db} from '../../firebaseConfig';


const ItemsListContainer = () => {
  const [data, setData] = useState([]);
  const { categoryId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setIsLoading(true);
    const queryCollection = collection(db, 'productsApple');
    if (categoryId) {
        const queryFilter = query(queryCollection, where('category', '==', categoryId));
        getDocs(queryFilter)
            .then((res) => setData(res.docs.map((product) => ({ id: product.id, ...product.data(setIsLoading(false)) }))));
    } else {
        getDocs(queryCollection)
            .then((res) => setData(res.docs.map((product) => ({ id: product.id, ...product.data(setIsLoading(false)) }))));
    }
  }, [categoryId]);




  const bannerSelector = () =>{
    if(categoryId === 'iPhone'){
      return <BannersIphone/>
    }
    else if(categoryId === 'Mac'){
      return <BannersMac/>
    }
    else if(categoryId === 'iPad'){
      return <BannerIpad/>
    }
    
  }
  return (
    <>
      {isLoading ? <Loading/>:(
        <>
          <div className="shopTitle">
            <div className="shopHeading">
              <h1>Shop {categoryId}</h1>
              <div className="help">
                <img src={helper} alt="" />
                <div className="helpText">
                  <p>Need shopping help?</p>
                  <a href="##">Ask an iPhone Specialist</a>
                </div>
              </div>
            </div>
            <div className="shopSubtitle">
              <h2>All models.</h2>
              <h2 className="gray">Take your pick.</h2>
            </div>
          </div>
          <div className="shopContainer">
            <ItemsList data={data} />
          </div>
          {bannerSelector()}
          <ServicesBanner/>
        </>
      )
      }
    </>
  );
};




export default ItemsListContainer;


