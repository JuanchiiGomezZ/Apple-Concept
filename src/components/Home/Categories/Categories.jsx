import { NavLink } from "react-router-dom";


const Categories = () => {
  return (
    <>
      <div id="store"></div>
      <div className="categories">
        <h1>Our Products.</h1>
        <div className="categoriesContainer">
          <NavLink to="/Shop/Mac" className="category">
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-mac-nav-202203?wid=200&hei=130&fmt=png-alpha&.v=1645051958490"
              alt="Mac"
            />
            <p>Mac</p>
          </NavLink>
          <NavLink to="/Shop/iPhone" className="category">
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202109_GEO_US?wid=200&hei=130&fmt=png-alpha&.v=1630706116000"
              alt="iPhone"
            />
            <p>iPhone</p>
          </NavLink>
          <NavLink to="/" className="category">
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-ipad-nav-202108?wid=200&hei=130&fmt=png-alpha&.v=1625783381000"
              alt="iPad"
            />
            <p>iPad</p>
          </NavLink>
          <NavLink to="/" className="category">
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-watch-nav-202203?wid=200&hei=130&fmt=png-alpha&.v=164505253740"
              alt="Apple Watch"
            />
            <p>Apple Watch</p>
          </NavLink>
          <NavLink to="/" className="category">
            <img
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airpods-nav-202110?wid=200&hei=130&fmt=png-alpha&.v=1633718741000"
              alt="Air Pods"
            />
            <p>AirPods</p>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Categories;
