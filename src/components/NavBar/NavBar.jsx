import React from "react";

const NavBar = () => {
  return (
    <header>
      <div className="nav">
        <i class="fa-brands fa-apple"></i>
        <div className="headerSections">
          <div className="sections">
            <a href="##">Store</a>
            <a href="##">Services</a>
            <a href="##">Support</a>
          </div>
          <i class="fa-solid fa-bag-shopping"></i>
        </div>
        <i class="fa-solid fa-bag-shopping mobile"></i>
      </div>
    </header>
  );
};

export default NavBar;
