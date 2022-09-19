import React from "react";



function Cart() {



  return (
    <div className="cart">
      <div className="cartTitle">
        <h1>Review your bag.</h1>
        <p>Free delivery and free returns.</p>
      </div>

      <div className="productsInCartContainer">
        <div className="productBoxInCart">
          <div className="hLine"></div>
          <div className="productInCart">
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-select-202110?"
              alt=""
            />
            <div className="productDescription">
              <div className="productHead">
                <div className="productHeadMain">
                  <div className="productTitle">
                    <h2>MacBook Pro</h2>
                  </div>
                  <div className="productQuantity">
                    <h2>1</h2>
                  </div>
                  <div className="productPrice">
                    <h2>$3499</h2>
                  </div>
                </div>
                <div className="productHeadSecond">
                  <p>Paying for 12 months: </p>
                  <p>$291.58/mo</p>
                </div>
                <div className="productHeadThird">
                  <div className="productFeatures">
                    <div className="color">
                      <p>Space Gray</p>
                      <div className="circle gray"></div>
                    </div>
                    <p>512 GB SSD</p>
                  </div>
                </div>
              </div>
              <div className="hLine"></div>
              <div className="appleCare">
                <div className="appleCareHead">
                  <div className="appleCareTitle">
                    <i className="fa-brands fa-apple"></i>
                    <p>Apple Care for $399</p>
                  </div>
                  <p className="add">Add</p>
                </div>
                <div className="appleCareDescription">
                  <p>
                    Get up three yeats of technical anda ccidental damage
                    protection.
                  </p>
                  <a href="##">Learn More</a>
                </div>
              </div>
              <div className="hLine"></div>
              <div className="shipping">
                <div className="shippingTitle">
                  <i className="fa-solid fa-plane"></i>
                  <p>Shipping</p>
                </div>
                <div className="shippingDescription">
                  <div className="shippingWay">
                    <i className="fa-solid fa-box"></i>
                    <p>In stock and ready to ship</p>
                  </div>
                  <div className="shippingWay">
                    <i className="fa-solid fa-bag-shopping"></i>
                    <p>Pick up at an Apple Store near you.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hLine"></div>
        </div>
        <div className="productBoxInCart">
          <div className="hLine"></div>
          <div className="productInCart">
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-select-202110?"
              alt=""
            />
            <div className="productDescription">
              <div className="productHead">
                <div className="productHeadMain">
                  <div className="productTitle">
                    <h2>MacBook Pro</h2>
                  </div>
                  <div className="productQuantity">
                    <h2>1</h2>
                  </div>
                  <div className="productPrice">
                    <h2>$3499</h2>
                  </div>
                </div>
                <div className="productHeadSecond">
                  <p>Paying for 12 months: </p>
                  <p>$291.58/mo</p>
                </div>
                <div className="productHeadThird">
                  <div className="productFeatures">
                    <div className="color">
                      <p>Space Gray</p>
                      <div className="circle gray"></div>
                    </div>
                    <p>512 GB SSD</p>
                  </div>
                </div>
              </div>
              <div className="hLine"></div>
              <div className="appleCare">
                <div className="appleCareHead">
                  <div className="appleCareTitle">
                    <i className="fa-brands fa-apple"></i>
                    <p>Apple Care for $399</p>
                  </div>
                  <p className="add">Add</p>
                </div>
                <div className="appleCareDescription">
                  <p>
                    Get up three yeats of technical anda ccidental damage
                    protection.
                  </p>
                  <a href="##">Learn More</a>
                </div>
              </div>
              <div className="hLine"></div>
              <div className="shipping">
                <div className="shippingTitle">
                  <i className="fa-solid fa-plane"></i>
                  <p>Shipping</p>
                </div>
                <div className="shippingDescription">
                  <div className="shippingWay">
                    <i className="fa-solid fa-box"></i>
                    <p>In stock and ready to ship</p>
                  </div>
                  <div className="shippingWay">
                    <i className="fa-solid fa-bag-shopping"></i>
                    <p>Pick up at an Apple Store near you.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hLine"></div>
        </div>
      </div>

      <div className="totalContainer">
        <div className="totalDescriptionContainer">
          <div className="totalDescription">
            <p>Subtotal</p>
            <p>$6998</p>
          </div>
          <div className="totalDescription">
            <p>Shipping</p>
            <p>FREE</p>
          </div>
          <div className="totalDescription">
            <p>Estimated Taxes: </p>
            <p>$698</p>
          </div>
        </div>
        <div className="hLine"></div>
        <div className="total">
          <h2>Total</h2>
          <h2>$7969</h2>
        </div>
      </div>
    </div>
  );
  
}

export default Cart;
