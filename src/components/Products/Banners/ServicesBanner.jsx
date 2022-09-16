import React from "react";

const ServicesBanner = () => {
  return (
    <div className="servicesBannerContainer">
      <div className="servicesContainer">
        <div className="servicesIphone">
          <img
            src="https://i.postimg.cc/4dZhf4P9/package-1.png"
            alt="Deliver"
          />
          <div className="servicesIphoneText">
            <h3>Free next-day delivery</h3>
            <p>
              On any in stock iPhone ordered by 5:00 p.m. Or pick up available
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
          <img src="https://i.postimg.cc/W4VxgqJ8/people-2.png" alt="Help" />
          <div className="servicesIphoneText">
            <h3>Get help buying</h3>
            <p>
              Have a question? Call a Specialist or chat online. Call 800 MY
              APPLE.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesBanner;
