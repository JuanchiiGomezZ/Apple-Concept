import { useState, useEffect } from "react";
import dataCategories from "../../../utils/dataCategories";
import customFetch from "../../../utils/customFetch";
import { NavLink } from "react-router-dom";

const Categories = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    customFetch(0, dataCategories)
      .then((datos) => setData(dataCategories))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>   
    <div id="store"></div>
    <div className="categories">
      <h1>Our Products.</h1>
      <div className="categoriesContainer">
        {data.map((category, i) => {
          return (
            <NavLink key={i} to={category.route} className="category">
              <img src={category.img} alt={category.name} />
              <p>{category.name}</p>
            </NavLink>
          );
        })}
      </div>
    </div>
    </> 
  );
};

export default Categories;
