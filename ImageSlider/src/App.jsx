import React, {useState, useEffect} from "react";
import img1 from "./assets/game-of-thrones-night-king-and-white-walkers-nz.jpg";
import img2 from "./assets/lake-sky-stars-sunset-4k-sk.jpg";
import img3 from "./assets/lovely_space_kitten-wallpaper-1920x1200.jpg";
import img4 from "./assets/low_polygonal_wolf-wallpaper-1920x1200.jpg";
import "./App.css";
import Slider from "./Slider";

export default function App() {
  const images = [img1, img2, img3, img4];
  const [screenSize, setScreenSize] = useState({
    width:window.innerWidth,
    height:window.innerHeight
  });
  const [imageCount, setImageCount] = useState(0);
  useEffect(() => {
    const handleResize=()=>{
      setScreenSize({
        width:window.innerWidth,
        height:window.innerHeight
      })
    }
    window.addEventListener("resize",handleResize)

    return () => window.removeEventListener("resize",handleResize)
  }, [])


  return (
    <div className="main-container">
      <div className="container">
        {images.map((item, index) => {
          return (
            <Slider
              key={index}
              src={item}
              imageCount={imageCount}
              setImageCount={setImageCount}
              screenSize={screenSize}
              alt={`img${index}`}
            />
          );
        })}
      </div>
        <button className="previous-btn">
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button className="next-btn">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
    </div>
  );
}
