import React, { useContext } from "react";
import { myContext } from "./UseContextHook";

export default function Modal() {
  const { modalData, setModalData } = useContext(myContext);

  if (Object.keys(modalData).length) {
    return <div className="modal">
        <div className="modal-data-display">
          <h3>{modalData.productName}</h3>
          <p>{modalData.description}</p>
          <h3>${modalData.price}</h3>
        </div>
        <div className="close-modal" onClick={()=>setModalData({})}>
        <i className="fa-solid fa-xmark"></i>
        </div>
    </div>;
  } else {
    return null;
  }
}
