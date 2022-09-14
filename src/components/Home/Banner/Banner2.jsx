import React from "react";

const Banner2 = () => {
  return (
    <div className="squares">
      <div className="sq1" href="##">
        <div className="sq1Text">
          <h2>iPhone 13 Pro</h2>
          <p>Oh. So. Pro.</p>
          <a href="##">Learn More</a>
          <a href="##">Buy</a>
        </div>
        <img
          src="https://www.apple.com/v/iphone/home/bi/images/overview/hero/iphone_13_pro_hero__gqclakbze4a6_large_2x.png"
          alt="iPadAir"
        />
      </div>
      <div className="sq2" href="##">
        <div className="sq2Text">
          <div className="sq2Title">
            <i className="fa-brands fa-apple"></i>
            <h2>Watch</h2>
          </div>
          <p className="watchSeries">SERIES 8</p>
          <p>A healthy leap ahead.</p>
          <a href="##">Learn More</a>
          <a href="##">Buy</a>
        </div>
      </div>
      <div className="sq3" href="##">
        <div className="sq3Text">
          <h2>iPad</h2>
          <h2 className="ipadAir">Air</h2>
          <p>Light. Bright. Full of might.</p>
          <a href="##">Learn More</a>
          <a href="##">Buy</a>
        </div>
        <img
          src="https://www.apple.com/v/ipad-air/r/images/overview/features/iris__fnhnshkpwl6y_large.jpg"
          alt="iPadAir"
        />
      </div>
      <div className="sq4" href="##">
        <div className="sq4Text">
          <div className="titleWatch">
            <i className="fa-brands fa-apple"></i>
            <h2>Watch</h2>
            <h2 className="watchSE">SE</h2>
          </div>
          <p>Heavy on features. Light on price</p>
          <a href="##">Learn More</a>
          <a href="##">Buy</a>
        </div>
        <img
          src="https://www.apple.com/v/watch/ax/images/overview/se/tile-watch-se__knji2d25x8qe_large_2x.jpg"
          alt="AppleWatch"
        />
      </div>
    </div>
  );
};

export default Banner2;
