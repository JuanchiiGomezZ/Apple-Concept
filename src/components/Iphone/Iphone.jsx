/* import react from "react"; */
import dataIphones from "../../utils/dataIphones";

const Iphone = () => {
  return (
    <>
      <div className="shopTitle">
        <h1>Shop iPhone</h1>
        <div className="shopSubtitle">
          <h2>All models.</h2>
          <h2 className="gray">Take your pick.</h2>
        </div>
      </div>
      <div className="shopContainer">
        {dataIphones.map((product) => {
            return(
                <div key={product.id} className="productCard">
                <p>{product.new}</p>
                <h2 className="productTitle">{product.name}</h2>
                <img
                  src={product.img}
                  alt={product.name}
                />
                <div className="colors">
                  <div className={product.color1}></div>
                  <div className={product.color2}></div>
                  <div className={product.color3}></div>
                  <div className={product.color4}></div>
                  <div className={product.color5}></div>
                  <div className={product.color6}></div>

                </div>
                <div className="description">
                  <h2 className="productPrice">${product.price}</h2>
                  <button>Buy</button>
                </div>
              </div>
            )
        })}
      </div>
    </>
  );
};

export default Iphone;
