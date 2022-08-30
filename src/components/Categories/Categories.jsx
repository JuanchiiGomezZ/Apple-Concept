import React from "react";

const categoriesData = [
  {
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-mac-nav-202203?wid=200&hei=130&fmt=png-alpha&.v=1645051958490",
    name: "Mac",
  },
  {
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202109_GEO_US?wid=200&hei=130&fmt=png-alpha&.v=1630706116000",
    name: "iPhone",
  },
  {
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-ipad-nav-202108?wid=200&hei=130&fmt=png-alpha&.v=1625783381000",
    name: "iPad",
  },
  {
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-watch-nav-202203?wid=200&hei=130&fmt=png-alpha&.v=1645052537409",
    name: "Apple Watch",
  },
  {
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airpods-nav-202110?wid=200&hei=130&fmt=png-alpha&.v=1633718741000",
    name: "AirPods",
  },
];

const Categories = () => {
  return (
    <div className="categories">
      <h1>Our Products.</h1>
      <div className="categoriesContainer">
        {categoriesData.map((category) => {
          return (
            <a href ="##" className="category">
              <img src={category.img} alt={category.name} />
              <p>{category.name}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
