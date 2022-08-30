import React from "react";

const Categories = () => {
    return(
        <div className="categories">
            <h1>Our Products</h1>
            <div className="categoriesContainer">
                <div className="category">
                    <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-mac-nav-202203?wid=200&hei=130&fmt=png-alpha&.v=1645051958490" alt="Mac" />
                    <p>Mac</p>
                </div>
                <div className="category">
                    <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202109_GEO_US?wid=200&hei=130&fmt=png-alpha&.v=1630706116000" alt="Mac" />
                    <p>iPhone</p>
                </div>
                <div className="category">
                    <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-ipad-nav-202108?wid=200&hei=130&fmt=png-alpha&.v=1625783381000" alt="Mac" />
                    <p>iPad</p>
                </div>
                <div className="category">
                    <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-watch-nav-202203?wid=200&hei=130&fmt=png-alpha&.v=1645052537409" alt="Mac" />
                    <p>Apple Watch</p>
                </div>
                <div className="category">
                    <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airpods-nav-202110?wid=200&hei=130&fmt=png-alpha&.v=1633718741000" alt="Mac" />
                    <p>AirPods</p>
                </div>
            </div>
        </div>
    )
};

export default Categories;