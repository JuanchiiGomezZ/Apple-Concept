/* import react from "react"; */
import data from "../../utils/data";
import BannersIphone from "./BannersIphone";
import helper from "../../assets/images/iphone/Helper.jpg";
import { Link } from "react-router-dom";


const Iphone = () => {

  return (
    <>
      <div className="shopTitle">
        <div className="shopHeading">
          <h1>Shop iPhone</h1>
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
        {data.map((product) => {
          return (
            <div key={product.id} className="productCard">
              <p>{product.new}</p>
              <h2 className="productTitle">{product.name}</h2>
              <img src={product.img} alt={product.name} />
              <div className="colors">
                <div className={product.color1}></div>
                <div className={product.color2}></div>
                <div className={product.color3}></div>
                <div className={product.color4}></div>
                <div className={product.color5}></div>
                <div className={product.color6}></div>
              </div>
              <div className="description">
                <h2 className="productPrice">${product.price}</h2>
                <Link to={`/Shop/iPhone/${product.id}`}>Buy</Link>
             
              </div>
            </div>
          );
        })}
      </div>
      <BannersIphone />
    </>
    
  );
};

export default Iphone;
