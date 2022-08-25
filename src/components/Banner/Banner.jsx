import React from "react";

const Banner = () => {
  return (
    <div className="banner">
      <div className="bannerContainer">
        <div className="bannerText">
          <p className="new">New</p>
          <p className="iphoneSE">iPhone <p className="SE">SE</p></p>
          <h2 className="loveThe">Love the power.</h2>
          <h2 className="loveThe">Love the price.</h2>
          <button>Buy</button>
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
