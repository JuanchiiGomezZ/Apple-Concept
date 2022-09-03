import { useState, useEffect } from "react";
import dataCategories from "../../utils/dataCategories";
import customFetch from "../../utils/customFetch";

const Categories = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    customFetch(3000, dataCategories)
      .then((datos) => setData(dataCategories))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="categories">
      <h1>Our Products.</h1>
      <div className="categoriesContainer">
        {data.map((category, i) => {
          return (
            <a key={i} href="##" className="category">
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
