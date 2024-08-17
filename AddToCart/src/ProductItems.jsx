import React, { useState, useContext } from "react";
import { myContext } from "./UseContextHook";
export default function ProductItems({ item}) {

  const {setTotalBookmark, setBookmarkItems}=useContext(myContext);
  const [liked, setLiked] = useState(false);
  const changeImage = (e) => {
    e.target.src = item.image[0];
  };
  const defaultImage = (e) => {
    e.target.src = item.image[1];
  };

  const handleLikeClick=()=>{
    if(!liked){
      setTotalBookmark(prev=>prev+1)
      setBookmarkItems(prev=>[...prev, item])
      item.liked=true
    }else{
      setTotalBookmark(prev=>prev-1)
      setBookmarkItems(prev=> {
       return prev.filter(el=>el.productName!==item.productName)
      })
      item.liked=false;
    }
    setLiked(!liked);
  }
  return (
    <div className="productItem">
      <img
        src={item.image[1]}
        alt="image"
        onMouseEnter={(e) => changeImage(e)}
        onMouseLeave={(e) => defaultImage(e)}
      />
      <h2>{item.productName}</h2>
      <p>{item.description.length>75?`${item.description.slice(0,75)}...`:item.description} <span style={{color:'black', fontWeight:'500'}}>Read more</span></p>
      <div className="likedIndicator"><i className={`fa-${liked?"solid":"regular"} fa-heart ${liked?'fa-beat':''}`} onClick={() => handleLikeClick()}></i></div>
    </div>
  );
}
