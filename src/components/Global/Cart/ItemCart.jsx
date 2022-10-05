import React,{useState} from "react";
import { useCartContext } from "./CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane, faBox, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import {faApple} from "@fortawesome/free-brands-svg-icons"

const ItemCart = ({ product }) => {
  const { removeProduct } = useCartContext();


  const [appleCare, setAppleCare] = useState(0);
  const [showAppleCare, setShowAppleCare] = useState(false);


  const addApleCare = (e, a) =>{
    setAppleCare(a);
    setShowAppleCare(true);
  }

  return (
    <div className="productBoxInCart">
      <div className="hLine"></div>
      <div className="productInCart">
        <div className="productImage">
          <img src={product.imageCart} alt="" />
        </div>
        <div className="productDescription">
          <div className="productHead">
            <div className="productHeadMain">
              <div className="productTitle">
                <h2>{product.name}</h2>
              </div>
              <div className="productQuantity">
                <h2>{product.quantity}</h2>
              </div>
              <div className="productPrice">
                <h2>${product.price * product.quantity}</h2>
              </div>
            </div>
            <div className="productHeadSecond">
              <p>Paying for 12 months: </p>
              <p>${((product.price * product.quantity) / 12).toFixed(2)}/mo</p>
            </div>
            <div className="remover">
            <p className="removeItem" onClick={() => removeProduct(product.id, product.selectedColor, product.selectedStorage)}>
              Remove
            </p>
            </div>
         
            <div className="productHeadThird">
              <div className="productFeatures">
                <div className="color">
                  <p>Color: {(product.selectedColor).charAt(0).toUpperCase() + (product.selectedColor).slice(1).toLowerCase()}</p>
                  <div className={`circle ${product.selectedColor}`}></div>
                </div>
                <p>Storage: {product.selectedStorage}</p>
              </div>
            </div>
          </div>
          <div className="hLine"></div>
          <div className="appleCare">
            <div className="appleCareHead">
              <div className="appleCareTitle">
              <FontAwesomeIcon icon={faApple}></FontAwesomeIcon>
                
                <p>Apple Care for ${Math.round(product.price * 0.15)}</p>
              </div>
              {
                showAppleCare
                ? <p className="add">{appleCare}</p>
                :<p className="add" onClick={(e) => addApleCare(e, Math.round(product.price * product.quantity * 0.15))}>Add</p>
              }
            </div>
            <div className="appleCareDescription">
              <p>
                Get up three yeats of technical anda ccidental damage
                protection.
              </p>
              <a href="##">Learn More</a>
            </div>
          </div>
          <div className="hLine"></div>
          <div className="shipping">
            <div className="shippingTitle">
              <FontAwesomeIcon icon={faPlane}></FontAwesomeIcon>
              <p>Shipping</p>
            </div>
            <div className="shippingDescription">
              <div className="shippingWay">
              <FontAwesomeIcon icon={faBox}></FontAwesomeIcon>
                <p>In stock and ready to ship</p>
              </div>
              <div className="shippingWay">
              <FontAwesomeIcon icon={faBagShopping}></FontAwesomeIcon>
                <p>Pick up at an Apple Store near you.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hLine"></div>
    </div>
  );
};

export default ItemCart;
