import React from 'react'

export default function Pagination({setCurrentIndex, startIndex, endIndex, totalPages, currentIndex}) {

  const handleClick=(e)=>{
    if(e.target.className.includes('prev-btn')){
        setCurrentIndex(prev=>prev-1);
    }else{
        setCurrentIndex(prev=>prev+1);
    }
  }
  const pageClick=(e)=>{
    setCurrentIndex(Number(e.target.innerHTML));
  }
 const buttonArray=Array.from({length:totalPages});
  return (
    <div className='pagination'>
      <button onClick={(e)=>handleClick(e)} disabled={startIndex && true} className='prev-btn'>Previous</button>
      {buttonArray.length < 4?(
        <ul>
         { buttonArray.map((_,index)=>{
            return (<li key={index}><button onClick={(e)=>pageClick(e)}>{index+1}</button></li>)
          })}
        </ul>
      ):(
        <ul>
          <li><button onClick={(e)=>pageClick(e)}>{currentIndex}</button></li>
          <li><button onClick={(e)=>pageClick(e)}>{currentIndex+1}</button></li>
          <li>.....</li>
          <li><button onClick={(e)=>pageClick(e)}>{totalPages}</button></li>
        </ul>
      )}
      <button onClick={(e)=>handleClick(e)} disabled={endIndex && true} className='next-btn'>Next</button>
    </div>
  )
}
