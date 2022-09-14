import React from "react";
import helper from "../../assets/images/iphone/Helper.jpg";
import { Link } from "react-router-dom";
import ItemCount from '../../utils/ItemCount/ItemCount'

const ItemDetail = ({ data }) => {
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
            for 24 mo.months before trade‑in*
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
            <h4>Color - Green</h4>
            <div className="colorsContainer">
              <div className={data.color1}></div>
              <div className={data.color2}></div>
              <div className={data.color3}></div>
              <div className={data.color4}></div>
              <div className={data.color5}></div>
            </div>
          </div>
          <div className="storage">
            <div className="storageTitle">
              <h3>Storage.</h3>
              <h3 className="gray">How much space?</h3>
            </div>
            <div className="storageCards">
              <div className="gb">
                <h3>128GB</h3>
                <p>From ${data.price + 100}</p>
              </div>
              <div className="gb">
                <h3>256GB</h3>
                <p>From ${data.price + 200}</p>
              </div>
              <div className="gb">
                <h3>512GB</h3>
                <p>From ${data.price + 400}</p>
              </div>
              <div className="gb">
                <h3>1TB</h3>
                <p>From ${data.price + 600}</p>
              </div>
            </div>
            <ItemCount/>
            <button id="addCartButton">Add to cart</button>
          </div>
        </div>
      </div>

      <div className="featuresContainer">
        <div className="featuresTitle">
          <h1>{data.name}.</h1>
          <h1 className="gray">Features.</h1>
        </div>
        <div className="features">
          <div className="feature">
            <img src="https://i.postimg.cc/63kfpRcx/A15-Bionic.png" alt="" />
            <p>A15 Bionic chip</p>
            <p className="gray">5-core GPU</p>
          </div>
          <div className="feature">
            <img src="https://i.postimg.cc/mgsNH6D5/Screen.png" alt="" />
            <h2>6.1″</h2>
            <p>All-screen OLED display with ProMotion</p>
          </div>
          <div className="feature">
            <img src="https://i.postimg.cc/tR6zmSRq/Camera-Iphone.png" alt="" />
            <p>Pro camera system</p>
            <p className="gray">Telephoto, Wide, UltraWide</p>
          </div>
          <div className="feature">
            <img src="https://i.postimg.cc/wvykzFhk/5G.png" alt="" />
            <p>Superfast 5G cellular</p>
          </div>
          <div className="feature">
            <img src="https://i.postimg.cc/C5bHB1rB/Batery.png" alt="" />
            <p>Up to 28 hours video playback</p>
          </div>
          <div className="feature">
            <img src="https://i.postimg.cc/Yqwxc6j1/Face-ID.png" alt="" />
            <h2>Face ID</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
