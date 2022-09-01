import React, { useState } from "react";

const ItemCount = () => {
  const [counter, setCounter] = useState(1);
  let numStock = 7;
  const [stock, setStock] = useState(numStock-1);
  const onAdd = () =>{
    console.log(counter+1 + ' productos agredado al carro');
  }

  const incremento = () => {
    if(numStock > counter){
        setCounter(counter + 1);
        onAdd()
        setStock(stock - 1);
    }
    else if(stock === 0){
        alert('No queda mas stock')
    }
  };
  const decremento = () => {
    if(counter > 1){
        setCounter(counter - 1);
        setStock(stock + 1);
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
