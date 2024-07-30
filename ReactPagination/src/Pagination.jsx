import React from 'react'

export default function Pagination({setCurrentIndex, startIndex, endIndex}) {

  const handleClick=(e)=>{
    if(e.target.className.includes('prev-btn')){
        setCurrentIndex(prev=>prev-1);
    }else{
        setCurrentIndex(prev=>prev+1);
    }
  }
 
  return (
    <div className='pagination'>
      <button onClick={(e)=>handleClick(e)} disabled={startIndex && true} className='prev-btn'>Previous</button>
      <button onClick={(e)=>handleClick(e)} disabled={endIndex && true} className='next-btn'>Next</button>
    </div>
  )
}
