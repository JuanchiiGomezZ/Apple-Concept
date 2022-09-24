import React, {useState} from "react";
import helper from "../../assets/images/iphone/Helper.jpg";
import { Link } from "react-router-dom";
import ItemCount from '../Products/ItemCount/ItemCount'
import {useCartContext} from '../Global/Cart/CartContext.jsx'
import FeaturesIphone from "./Features/FeaturesIphone";
import FeaturesMac from './Features/FeaturesMac';
import FeaturesIpad from "./Features/FeaturesIpad";

const ItemDetail = ({ data }) => {

  const [goToCart, setGoToCart] = useState(false);
  const {addProductToCart} = useCartContext();
  const [selectedStorage, setSelectedStorage] = useState("")
  const [selectedColor, setSelectedColor] = useState("")


  const onAdd = (quantity) => {
    setGoToCart(true);
    addProductToCart(data, quantity, selectedStorage, selectedColor);
  };

  const clickStorage = (e, a) =>{
    setSelectedStorage(a)
    e.currentTarget.classList.toggle('active');
  }
  const clickColor = (e, a) =>{
    setSelectedColor(a)
    e.currentTarget.classList.toggle('active');
  }


  const featuresSelector = () =>{
    if(data.category === 'iPhone'){
     return <FeaturesIphone data={data} />  
    }
    else if(data.category === 'Mac'){
      return <FeaturesMac data={data} />  
    }
    else if(data.category === 'iPad'){
      return <FeaturesIpad data={data} />
    }


  }

  return (
    <div className="iphoneDetail">
      <Link to={`/Shop/${data.category}`}  className="goBack">
        <i className="fa-solid fa-angle-left"></i>
        <p>Store</p>
      </Link>
      <div className="iphoneDetailHeading">
        <div className="iphoneDetailTitle">
          <p className="new">{data.new}</p>
          <h1>Buy {data.name}</h1>
          <p className="fromPrice">
            From ${data.price} or ${(data.price / 24).toFixed(2)}/mo.per month
            for 24 mo.months before trade-in*
          </p>
        </div>
        <div className="help">
          <img src={helper} alt="" />
          <div className="helpText">
            <p>Need shopping help?</p>
            <a href="##">Ask an iPhone Specialist</a>
          </div>
        </div>
      </div>

      <div className="iphoneDetailContainer">
        {
          <div className="images">
            <img className="principalImage" src={data.image1} alt={data.name} />
            <div className={`secondaryImage ${data.category}`}>
              <img src={data.image2} alt={data.name} />
              <img src={data.image3} alt={data.name} />
            </div>
          </div>
        }
        <div className="selectorContainer">
          <div className="colors">
            <div className="colorsTitle">
              <h3>Colors.</h3>
              <h3 className="gray">Pick your favorite.</h3>
            </div>
            <h4>Color - {selectedColor.charAt(0).toUpperCase() + (selectedColor).slice(1).toLowerCase()}</h4>
            <div className="colorsContainer">
              <div className={`circle ${data.color1}`} onClick={(e) => clickColor(e, data.color1)}></div>
              <div className={`circle ${data.color2}`} onClick={(e) => clickColor(e, data.color2)}></div>
              <div className={`circle ${data.color3}`} onClick={(e) => clickColor(e, data.color3)}></div>
              <div className={`circle ${data.color4}`} onClick={(e) => clickColor(e, data.color4)}></div>
              <div className={`circle ${data.color5}`} onClick={(e) => clickColor(e, data.color5)}></div>
            </div>
          </div>
          <div className={`storage ${data.hide}`}>
            <div className="storageTitle">
              <h3>Storage.</h3>
              <h3 className="gray">How much space?</h3>
            </div>
            <div className="storageCards">
              <div className={`gb ${data.classStorage1}`} onClick={(e) => clickStorage(e, data.storage1)}>
                <h3>{data.storage1} </h3>
                <p>From ${data.price + 100}</p>
              </div>
              <div className={`gb ${data.classStorage2}`} onClick={(e) => clickStorage(e, data.storage2)}>
                <h3>{data.storage2}</h3>
                <p>From ${data.price + 200}</p>
              </div>
              <div className={`gb ${data.classStorage3}`} onClick={(e) => clickStorage(e, data.storage4)}>
                <h3>{data.storage3}</h3>
                <p>From ${data.price + 400}</p>
              </div>
              <div className={`gb ${data.classStorage4}`} onClick={(e) => clickStorage(e, data.storage4)}>
                <h3>{data.storage4}</h3>
                <p>From ${data.price + 600}</p>
              </div>
            </div>
          </div>
          {
              goToCart 
              ? <Link to="/Cart" className="checkOut" href="##">Checkout</Link>
              : <> <ItemCount itemStock={data.stock} onAdd={onAdd}/></>
            }
        </div>
      </div>
          {
            featuresSelector()
          }
         
    </div>
  );
};


export default ItemDetail;
