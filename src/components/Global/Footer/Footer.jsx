import React, { useState } from "react";

const Footer = () => {

  /* Making responsive the footer adding the function  */
  const [showShop, setShowShop] = useState(false);
  let toggleShowShop = showShop ? "active" : "hide2";
  const [showServices, setShowServices] = useState(false);
  let toggleShowServices = showServices ? "active" : "hide2";
  const [showStore, setShowStore] = useState(false);
  let toggleShowStore = showStore ? "active" : "hide2";
  const [showBusiness, setShowBusiness] = useState(false);
  let toggleShowBusiness = showBusiness ? "active" : "hide2";
  const [showValue, setShowValue] = useState(false);
  let toggleShowValue = showValue ? "active" : "hide2";



  return (
    <footer>
      <div className="hLine"></div>
      <div className="footerContainer">
        <div>
          <p
            className={`footerTitle `}
            onClick={(e) => setShowShop((showShop) => !showShop)}
          >
            Shop and Learn
          </p>
          <div className={`footerBody ${toggleShowShop}`}>
            <a href="##">Store</a>
            <a href="##">Mac</a>
            <a href="##">iPad</a>
            <a href="##">iPhone</a>
            <a href="##">Watch</a>
            <a href="##">AirPods</a>
          </div>
        </div>
        <div>
          <p
            className="footerTitle"
            onClick={(e) => setShowServices((showServices) => !showServices)}
          >
            Services
          </p>
          <div className={`footerBody ${toggleShowServices}`}>
            <a href="##">Apple Music</a>
            <a href="##">Apple TV+</a>
            <a href="##">Apple Books</a>
            <a href="##">App Store</a>
            <a href="##">iCloud</a>
            <a href="##">Apple Podcast</a>
          </div>
        </div>
        <div>
          <p
            className="footerTitle"
            onClick={(e) => setShowStore((showStore) => !showStore)}
          >
            Apple Store
          </p>
          <div className={`footerBody ${toggleShowStore}`}>
            <a href="##">Find a Store</a>
            <a href="##">Genius Bar</a>
            <a href="##">Apple Camp</a>
            <a href="##">Financing</a>
            <a href="##">Order Status</a>
            <a href="##">Shopping Help</a>
          </div>
        </div>
        <div>
          <p
            className="footerTitle"
            onClick={(e) => setShowBusiness((showBusiness) => !showBusiness)}
          >
            For Business
          </p>
          <div className={`footerBody ${toggleShowBusiness}`}>
            <a href="##">Apple and Business</a>
            <a href="##">Shop for Business</a>
            <a href="##">Shop for Goverment</a>
            <a href="##">Shop for College</a>
            <a href="##">Apple Education</a>
            <a href="##">Apple in HealthCare</a>
          </div>
        </div>
        <div>
          <p
            className="footerTitle"
            onClick={(e) => setShowValue((showValue) => !showValue)}
          >
            Apple Values
          </p>
          <div className={`footerBody ${toggleShowValue}`}>
            <a href="##">Accessibility</a>
            <a href="##">Education</a>
            <a href="##">Environment</a>
            <a href="##">Privacy</a>
            <a href="##">Investors</a>
            <a href="##">Contact Apple</a>
          </div>
        </div>
      </div>
      <div className="footerTerms">
        <a href="##">Privacy Policy</a>
        <a href="##">Legal</a>
        <a href="##">Terms of Use</a>
        <a className="quitar" href="##">
          Site Map
        </a>
      </div>
      <div className="hLine"></div>
      <div className="flexColumn">
        <div className="copyright">
          <p>Copyright</p>
          <i className="fa-regular fa-copyright"></i>
        </div>
        <p>2022 Apple Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
