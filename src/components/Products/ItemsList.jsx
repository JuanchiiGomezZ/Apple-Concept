import React from "react";
import Items from './Items';

const ItemsList =({data})=>{
    return(
        <>
        {data.map((product)=>(
            <Items
            key={product.id}
            id ={product.id}
            name = {product.name}
            newProd = {product.new}
            image = {product.img}
            color1 ={product.color1}
            color2 ={product.color2}
            color3 ={product.color3}
            color4 ={product.color4}
            color5 ={product.color5}
            color6 ={product.color6}
            price = {product.price}
            category = {product.category}
            />
        ))}
        </>
    )
}

export default ItemsList;