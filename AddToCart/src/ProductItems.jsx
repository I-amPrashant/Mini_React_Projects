import React, { useState } from "react";

export default function ProductItems({ item }) {
  const changeImage = (e) => {
    e.target.src = item.image[0];
  };
  const defaultImage = (e) => {
    e.target.src = item.image[1];
  };
  return (
    <div className="productItem">
      <img
        src={item.image[1]}
        alt="image"
        onMouseEnter={(e) => changeImage(e)}
        onMouseLeave={(e) => defaultImage(e)}
      />
      <h2>{item.productName}</h2>
    </div>
  );
}
