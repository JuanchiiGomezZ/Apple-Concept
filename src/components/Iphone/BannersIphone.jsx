import React from "react";

const BannersIphone = () => {
  return (
    <div className="bannersIphone">
      <div className="bannerIphone1">
        <div className="bannerIphone1Text">
          <h1>Why Apple is the best place to buy iPhone.</h1>
          <p>
            You can choose a payment option that works for you, pay less with a
            trade‑in, connect your new iPhone to your carrier, and get set up
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

      <div className="servicesContainer">
        <div className="servicesIphone">
          <img
            src="https://i.postimg.cc/4dZhf4P9/package-1.png"
            alt="Deliver"
          />
          <div className="servicesIphoneText">
            <h3>Free next-day delivery</h3>
            <p>
              On any in‑stock iPhone ordered by 5:00 p.m. Or pick up available
              items at an Apple Store.
            </p>
          </div>
        </div>
        <div className="servicesIphone">
          <img src="https://i.postimg.cc/bv1tfSxP/coin-1.png" alt="Pay" />
          <div className="servicesIphoneText">
            <h3>Pay monthly at 0% APR</h3>
            <p>
              You can pay over time when you choose to check out with Apple Card
              Monthly.
            </p>
          </div>
        </div>
        <div className="servicesIphone">
          <img src="https://i.postimg.cc/YC5WPzm8/group.png" alt="Help" />
          <div className="servicesIphoneText">
            <h3>Get help buying</h3>
            <p>
              Have a question? Call a Specialist or chat online. Call1‑800‑MY‑APPLE.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannersIphone;
