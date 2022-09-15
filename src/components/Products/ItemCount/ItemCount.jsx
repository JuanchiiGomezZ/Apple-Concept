import React, { useState } from "react";

const ItemCount = () => {
  const [counter, setCounter] = useState(1);
  let numStock = 7;
  const [stock, setStock] = useState(numStock - 1);


  const incremento = () => {
    if (numStock > counter) {
      setCounter(counter + 1);
      setStock(stock - 1);
    } else if (stock === 0) {
      alert("No queda mas stock");
    }
  };
  const decremento = () => {
    if (counter > 1) {
      setCounter(counter - 1);
      setStock(stock + 1);
    }
  };
  return (
    <div className="hooks">
      <div className="itemCounter">
        <p className="operator" onClick={decremento}>
          -
        </p>
        <p className="counter">{counter}</p>
        <p className="operator" onClick={incremento}>
          +
        </p>
      </div>
      <p>Disponibles: {stock}</p>
      
    </div>
    
  );
};

export default ItemCount;
