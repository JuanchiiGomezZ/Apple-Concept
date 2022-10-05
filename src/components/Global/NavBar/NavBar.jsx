import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import scrollTopOnClick from "../../../utils/scrollTopOnClick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faApple} from "@fortawesome/free-brands-svg-icons"


const NavBar = () => {
  return (
    <header>
      <div className="nav">
        <NavLink to="/" onClick={scrollTopOnClick}><FontAwesomeIcon icon={faApple}></FontAwesomeIcon></NavLink>
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

/* Scroll in the middle of the screen to go to Categories */
const scrollCategoriesOnClick = () => {
  window.scroll({
    top: 650,
    behavior: "smooth"
})
}

export default NavBar;
