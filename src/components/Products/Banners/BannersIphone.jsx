import React from "react";


const BannersIphone = () => {
  return (
    <div className="bannersIphone">
      <div className="bannerIphone1">
        <div className="bannerIphone1Text">
          <h1>Why Apple is the best place to buy iPhone.</h1>
          <p>
            You can choose a payment option that works for you, pay less with a
            trade in, connect your new iPhone to your carrier, and get set up
            quickly. You can also chat with a Specialist anytime.
          </p>
        </div>
      </div>
      <div className="bannerIphone2">
        <div className="bannerIphone2Text">
          <h1>iPhone accesories</h1>
          <p>
            Snap on a magnetic case, wallet, or both. And get faster wireless
            charging.
          </p>
        </div>
        <img
          src="https://www.apple.com/v/iphone/home/bi/images/overview/accessories/magsafe__bfji5hb1mqsy_medium_2x.jpg"
          alt="iPhone Accesories"
        />
      </div>
    </div>
  );
};

export default BannersIphone;
