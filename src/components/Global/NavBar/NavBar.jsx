import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import scrollTopOnClick from "../../../utils/scrollTopOnClick";



const NavBar = () => {
  return (
    <header>
      <div className="nav">
        <NavLink to="/" onClick={scrollTopOnClick}><i className="fa-brands fa-apple"></i></NavLink>
        <div className="headerSections">
          <div className="sections">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/" onClick={scrollCategoriesOnClick}>Store</NavLink>
            <a href="##">Services</a>
            <a href="##">Support</a>
          </div>
          <div className="desktop">
            <CartWidget/>
          </div>
        </div>
        <div className="mobile">
          <CartWidget/>
        </div>
      </div>
    </header>
  );
};


const scrollCategoriesOnClick = () => {
  window.scroll({
    top: 650,
    behavior: "smooth"
})
}

export default NavBar;
