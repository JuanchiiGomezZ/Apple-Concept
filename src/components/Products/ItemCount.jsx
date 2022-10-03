import React, { useState } from "react";

const ItemCount = ({ itemStock, onAdd, btnShow }) => {
  const [counter, setCounter] = useState(1);
  
  const incremento = () => {
    if (itemStock > counter) {
      setCounter(counter + 1);
    }
    console.log(btnShow)
  };
  const decremento = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <div className="hooks">
        <div className="itemCounter">
          <p className="operator" onClick={decremento}>
            -
          </p>
          <p className={`counter`}>{counter}</p>
          <p className="operator" onClick={incremento}>
            +
          </p>
        </div>
        <p>Disponibles:{itemStock - counter}</p>
      </div>
      <button id="addCartButton" onClick={()=>onAdd(counter)}>
        Add to cart
      </button>
    </>
  );
};

export default ItemCount;
