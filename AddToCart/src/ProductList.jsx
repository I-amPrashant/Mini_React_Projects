import React, { useContext } from "react";
import ProductItems from "./ProductItems";
import images from "./images";
import Modal from "./Modal";
import { myContext } from "./UseContextHook";

export default function ProductList() {
  const { modalData } = useContext(myContext);

  return (
    <>
      <div className="productList-wrapper">
        <div className="productSearch-wrapper">
          <h3>Search for products</h3>
          <div className="input-wrapper">
            <input type="text" placeholder="search for items..." />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div className="productList">
          {images.map((item, index) => {
            return <ProductItems key={index} item={item} />;
          })}
        </div>
      </div>
        <Modal />
    </>
  );
}
