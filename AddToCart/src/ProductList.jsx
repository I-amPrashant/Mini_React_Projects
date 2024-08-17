import React, { useContext, useEffect } from "react";
import ProductItems from "./ProductItems";
import Modal from "./Modal";
import { myContext } from "./UseContextHook";
import images from "./images.jsx";

export default function ProductList() {
  const { imagesList, setImagesList } = useContext(myContext);

  useEffect(() => {
    setImagesList(images);
  }, [])

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
          {imagesList.length && imagesList.map((item, index) => {
            return <ProductItems key={index} item={item} />;
          })}
        </div>
      </div>
        <Modal />
    </>
  );
}
