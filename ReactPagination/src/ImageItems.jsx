import React from 'react'
import loadingImage from './assets/loading.gif'

export default function ImageItems({perPageData, loading}) {
  return (
    <>
    {loading?(
       <div className='loading-container'>
       <img src={loadingImage} alt='loading' className='loading' loading='lazy'/>
     </div>
    ):(
      <div className='images-container'>
      {perPageData && perPageData.map((item, index)=>{
       return (
         <img src={item.download_url} className='image' alt={`img${index}`} key={index} loading='lazy'/>
       )
      })}
   </div>
    )}
    </>
  )
}
