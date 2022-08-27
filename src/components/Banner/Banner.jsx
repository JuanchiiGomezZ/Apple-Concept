import React from "react";

const Banner = () => {
  return (
    <div className="banners">
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
      <div className="squares">
      <a className="sq1" href="##">
          <div className="sq1Text">
            <h2>iPhone 13 Pro</h2>
            <p>Oh. So. Pro.</p>
            <a href="##">Learn More</a>
            <a href="##">Buy</a>
          </div>
          <img src="https://www.apple.com/v/iphone/home/bi/images/overview/hero/iphone_13_pro_hero__gqclakbze4a6_large_2x.png" alt="iPadAir" />
        </a>
        <a className="sq2" href="##">
          <div className="sq2Text">
            <h2>Apple Event</h2>
            <p>Watch online on 9/7 at 10 a.m PT.</p>
            <a href="##">Learn More</a>
          </div>
        </a>
        <a className="sq3" href="##">
          <div className="sq3Text">
            <h2>iPad</h2><h2 className="ipadAir">Air</h2>
            <p>Light. Bright. Full of might.</p>
            <a href="##">Learn More</a>
            <a href="##">Buy</a>
          </div>
          <img src="https://www.apple.com/v/ipad-air/r/images/overview/features/iris__fnhnshkpwl6y_large.jpg" alt="iPadAir" />
        </a>
        <a className="sq4" href="##">
          <div className="sq4Text">
            <div className="titleWatch">
            <i class="fa-brands fa-apple"></i>
            <h2>Watch</h2><h2 className="watchSE">SE</h2>
            </div>
            <p>Heavy on features. Light on price</p>
            <a href="##">Learn More</a>
            <a href="##">Buy</a>
          </div>
          <img src="https://www.apple.com/v/watch/ax/images/overview/se/tile-watch-se__knji2d25x8qe_large_2x.jpg" alt="AppleWatch" />
        </a>
      </div>
    </div>
  );
};

export default Banner;
