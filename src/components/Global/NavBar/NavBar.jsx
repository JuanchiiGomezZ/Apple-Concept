import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";




const NavBar = () => {
  return (
    <header>
      <div className="nav">
        <NavLink to="/"><i className="fa-brands fa-apple"></i></NavLink>
        <div className="headerSections">
          <div className="sections">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">Store</NavLink>
            <a href="##">Services</a>
            <a href="##">Support</a>
          </div>
          <div className="desktop">
            <CartWidget cartQuantity="2"/>
          </div>
        </div>
        <div className="mobile">
          <CartWidget cartQuantity="2"/>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
