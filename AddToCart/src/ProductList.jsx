import React from "react";

export default function ProductList() {
  return (
    <div className="productList-wrapper">
      <div className="productSearch-wrapper">
        <h1>Search for products</h1>
        <div className="input-wrapper">
          <input type="text" placeholder="search for items..."/>
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </div>
  );
}
