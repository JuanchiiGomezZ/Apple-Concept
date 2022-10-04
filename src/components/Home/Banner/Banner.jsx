import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banners">
      <div className="bannerContainer">
        <div className="bannerText">
          <p className="new">New</p>
          <div className="iphoneSE">
            iPhone <p className="SE">SE</p>
          </div>
          <div className="midText">
            <h2 className="loveThe">Love the power.</h2>
            <h2 className="loveThe">Love the price.</h2>
          </div>
          <div className="loveThe"></div>

          <Link to="/Shop/iPhone/8" id="iPhoneSEButton">
            Buy
          </Link>
        </div>
        <img
          src="https://www.apple.com/v/iphone/home/bi/images/overview/hero/iphone_se_hero__gd586pazxqqa_large.jpg"
          alt="Banner"
        />
      </div>
    </div>
  );
};

export default Banner;
