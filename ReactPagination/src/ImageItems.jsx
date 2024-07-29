import React from 'react'
import loadingImage from './assets/loading.gif'

export default function ImageItems({perPageData, loading}) {
  return (
    <div className='images-container'>
      {loading && <img src={loadingImage} alt='loading' className='loading'/>}
       {perPageData.map((item, index)=>{
        return (
          <img src={item.download_url} className='image' alt={`img${index}`} key={index}/>
        )
       })}
    </div>
  )
}
