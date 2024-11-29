import React, {useState} from 'react'

export default function App() {

  const [dataItems, setDataItems] = useState({
    data1:["item 1", "item 2", "item 3"],
    data2:["item 1", "item 2", "item 3"],
});

  const [draggedIndex, setDraggedIndex] = useState({index:'', dataContainer:''});
  return (
    <div className='main-container'>
        <div className='item-container'>
          <h2 className=''>First Data Container</h2>

          <div className="items-wrapper">
          {dataItems.data1.map((item, index)=>{
            return (
              <div className='item' key={index} draggable={true}>
                  {item}
              </div>
            )
          })}
          </div>
        </div>
        <div className='item-container'>
        <h2 className=''>Second Data Container</h2>

          <div className="items-wrapper">
          {dataItems.data1.map((item, index)=>{
            return (
              <div className='item' key={index} draggable={true}>
                  {item}
              </div>
            )
          })}
          </div>
        </div>
    </div>
  )
}
