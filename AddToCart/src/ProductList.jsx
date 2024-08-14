import React from "react";
import ProductItems from "./ProductItems";
import images from "./images";

export default function ProductList() {

  return (
    <div className="productList-wrapper">
      <div className="productSearch-wrapper">
        <h1>Search for products</h1>
        <div className="input-wrapper">
          <input type="text" placeholder="search for items..."/>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div className="productList">
        {images.map((item, index)=>{
          return <ProductItems key={index} item={item}/>
        })}
      </div>
    </div>
  );
}
