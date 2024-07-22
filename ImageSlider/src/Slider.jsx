import React, { useEffect } from 'react'

export default function Slider({src, alt, screenSize, imageCount, setImageCount, handleImageCLick, setModalSrc}) {
    
    useEffect(() => {
        if(screenSize.width<600){
            setImageCount(1);
        }else if(screenSize.width<950){
            setImageCount(2);
        }else{
            setImageCount(3);
        }
        }, [screenSize])

    const  imageSize=()=>{
        if(imageCount===3){
            return '33.33%'
       }else if(imageCount===2){
        return '50%';
       }else{
        return '100%';
       }
    }
    const imageStyle={
        objectFit:"cover",
        width:imageSize(),
        height:"auto",
        maxHeight:'500px',
        minHeight:'300px',
        scrollSnapAlign:'start'
    }
    return (
    <img src={src} alt={alt} style={imageStyle} loading='lazy' onClick={()=>{
        setModalSrc(src);
        handleImageCLick()
    }}/>
  )
}
