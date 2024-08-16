import React, {useState} from 'react'
import Navbar from './Navbar'
import ProductList from './ProductList'

export default function App(){
  const [totalBookmark, setTotalBookmark] = useState(0)
  const [bookmarkItems, setBookmarkItems] = useState([])
  return (
    <div>
      <Navbar totalBookmark={totalBookmark}/>
      <ProductList setTotalBookmark={setTotalBookmark} setBookmarkItems={setBookmarkItems}/>
    </div>
  )
}
