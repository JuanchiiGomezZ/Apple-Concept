import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <header>
      <div className="nav">
        <i class="fa-brands fa-apple"></i>
        <div className="headerSections">
          <div className="sections">
            <a href="##">Home</a>
            <a href="##">Store</a>
            <a href="##">Services</a>
            <a href="##">Support</a>
          </div>
          <div className="desktop">
            <CartWidget cartQuantity="3"/>
          </div>
        </div>
        <div className="mobile">
          <CartWidget cartQuantity="4"/>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
