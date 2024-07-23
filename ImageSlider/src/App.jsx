import React, {useState, useEffect, useRef} from "react";
import img1 from "./assets/ammunition_weapons-wallpaper-1920x1200.jpg";
import img2 from "./assets/black-panther-minimalist-laptop-screen-e2mt0mc85gfbjatu.jpg";
import img3 from "./assets/low_polygonal_wolf-wallpaper-1920x1200.jpg";
import img4 from "./assets/music_16-wallpaper-1920x1200.jpg";
import img5 from "./assets/today-you-die-img.jpg"
import img6 from "./assets/black-panther-minimalist-laptop-screen-e2mt0mc85gfbjatu.jpg"
import "./App.css";
import Slider from "./Slider";

export default function App() {
  const images = [img1, img2, img3, img4, img5, img6];
  const [screenSize, setScreenSize] = useState({
    width:window.innerWidth,
    height:window.innerHeight
  });
  const [imageCount, setImageCount] = useState(0);
  const [openModel, setOpenModel] = useState(false);
  const [modalSrc, setModalSrc] = useState("");
  const intervalRef = useRef(null);
  const openModelRef = useRef(false);
  const containerRef=useRef();

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
  useEffect(() => {
    openModelRef.current = openModel;
  }, [openModel]);
  
  const handlePrevClick=()=>{
    if(imageCount===3){
      const scrollAmount=(containerRef.current.clientWidth*33.33)/100
      containerRef.current.scrollLeft+=scrollAmount
    }else if(imageCount===2){
      const scrollAmount=(containerRef.current.clientWidth*50)/100
      containerRef.current.scrollLeft+=scrollAmount
    }else{
      const scrollAmount=(containerRef.current.clientWidth*100)/100
      containerRef.current.scrollLeft+=scrollAmount
    }
  }
  const handleNextClick=()=>{
    if(imageCount===3){
      const scrollAmount=(containerRef.current.clientWidth*33.33)/100
      containerRef.current.scrollLeft-=scrollAmount
    }else if(imageCount===2){
      const scrollAmount=(containerRef.current.clientWidth*50)/100
      containerRef.current.scrollLeft-=scrollAmount
    }else{
      const scrollAmount=(containerRef.current.clientWidth*100)/100
      containerRef.current.scrollLeft-=scrollAmount
    }
  }

  const handleImageCLick=()=>{
    setOpenModel(true)
  }
  useEffect(() => {
    if (intervalRef.current === null) {
      const interval = setInterval(() => {
        if (!openModelRef.current) {
          handlePrevClick();
        }
      }, 3000);
      intervalRef.current = interval;
    }
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [imageCount]);
  return (
    <>
    <div className="main-container">
      <div className="container" ref={containerRef}>
        {images.map((item, index) => {
          return (
            <Slider
              key={index}
              src={item}
              imageCount={imageCount}
              setImageCount={setImageCount}
              screenSize={screenSize}
              handleImageCLick={handleImageCLick}
              setModalSrc={setModalSrc}
              alt={`img${index}`}
            />
          );
        })}
      </div>
        <button className="previous-btn" onClick={()=> handleNextClick()}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button className="next-btn"   onClick={()=> handlePrevClick()}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
    </div>

        {openModel && (
          <div className="modal">
              <img
                src={modalSrc}
                alt="modal"
                onClick={() => setOpenModel(false)}
              />
          </div>
        )}
    </>
  );
}
