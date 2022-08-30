import React from "react";

const CartContainer = () => {
  return (
    <div className="cartContainer hidden" id="cart">
      <div className="cartProductsContainer">
        <div className="productInCart">
          <div className="productBoxInCart">
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-silver-select?wid=110&hei=78&fmt=jpeg&qlt=95&.v=1645552346280"
              alt=""/>
            <div className="nameProductInCart">
              <p>Iphone 13 Pro Max 128GB Silver</p>
            </div>
          </div>
          <div className="h-line"></div>
        </div>
        <div className="productInCart">
          <div className="productBoxInCart">
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-silver-select?wid=110&hei=78&fmt=jpeg&qlt=95&.v=1645552346280"
              alt=""/>
            <div className="nameProductInCart">
              <p>Iphone 13 Pro Max 128GB Silver</p>
            </div>
          </div>
          <div className="h-line"></div>
        </div>
      </div>
      <a className="checkOut" href="##">
        Check Out
      </a>
    </div>
  );
};

export default CartContainer;
