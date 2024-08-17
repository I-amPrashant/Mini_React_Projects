import React, { useContext } from "react";
import { myContext } from "./UseContextHook";

export default function Modal() {
  const { modalData, setModalData } = useContext(myContext);

  if (Object.keys(modalData).length) {
    return <div className="modal">
        <div className="modal-data-display">
          <div className="modal-image-wrapper">
            {modalData.image.map((item, index) => {
              return <img src={item} alt={`image${index}`} key={index} />;
            })}
          </div>
          <div className="modal-details-wrapper">
            <h2 className="product-name">
                <p>{modalData.productName}</p>
                <span className="likedIndicator" style={{cursor: 'pointer'}}>{modalData.liked?<i className="fa-solid fa-heart"></i>:<i className="fa-regular fa-heart"></i>}</span>
            </h2>
            <p style={{ color: "#040404", fontSize: "14px", fontWeight: "500" }}>Price: &nbsp;&nbsp;${modalData.productCost}</p>
            <h4 style={{ color: "#040404", fontSize: "14px", fontWeight: "500" }}>Description: &nbsp;&nbsp;{modalData.description.length>200?modalData.description.slice(0, 200)+'...':modalData.description} {modalData.description.length>200?<a href="#" style={{color: 'purple', cursor: 'pointer'}}>Read More</a>:''}</h4>
            <button className="addToCart">{modalData.liked?"Remove From Cart":"Add To Cart"}</button>
          </div>
        </div>
        <div className="close-modal" onClick={()=>setModalData({})}>
        <i className="fa-solid fa-xmark"></i>
        </div>
    </div>;
  } else {
    return null;
  }
}
