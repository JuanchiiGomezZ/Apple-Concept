import React, { useState } from "react";

const ItemCount = () => {
  const [counter, setCounter] = useState(1);
  let numStock = 7;
  const [stock, setCounter2] = useState(numStock);

  const incremento = () => {
    if(numStock >= counter){
        setCounter(counter + 1);
        setCounter2(stock - 1);
    }
  };
  const decremento = () => {
    if(counter > 1){
        setCounter(counter - 1);
        setCounter2(stock + 1);
    }
    
  };
  return (
    <div className="hooks">
    <div className="itemCounter">
      <p onClick={decremento}>-</p>
      <p>{counter}</p>
      <p onClick={incremento}>+</p>
    </div>
    <h2>Stock: {stock}</h2>
    </div>
  );
};


export default ItemCount;
