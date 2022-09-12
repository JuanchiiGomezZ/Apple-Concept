import React from "react";

import { Link } from "react-router-dom";
import scrollTopOnClick from "../../utils/scrollTopOnClick";

const Items = ({
  id,
  name,
  newProd,
  image,
  color1,
  color2,
  color3,
  color4,
  color5,
  color6,
  price,
}) => {
  return (
    <>
      <div key={id} className="productCard">
         <p>{newProd}</p>
         <h2 className="productTitle">{name}</h2>
         <img src={image} alt={name} />
         <div className="colors">
           <div className={color1}></div>
           <div className={color2}></div>
           <div className={color3}></div>
           <div className={color4}></div>
           <div className={color5}></div>
           <div className={color6}></div>
         </div>
         <div className="description">
           <h2 className="productPrice">${price}</h2>
           <Link to={`/Shop/iPhone/${id}`} onClick={scrollTopOnClick}>Buy</Link>
         </div>
       </div>
    </>
  );
};

export default Items;
