import React, {useRef, useEffect, useContext} from 'react'
import {myContext} from './UseContextHook'
export default function Navbar() {
  const sidebarRef=useRef()
  const bookmarkRef=useRef()
  const {totalBookmark, bookmarkItems}=useContext(myContext)

  useEffect(()=>{
    const handleResize=()=>{
      sidebarRef.current.style.transform='translateX(0)'
    }
    window.addEventListener('resize', handleResize)

    return ()=>{
      window.removeEventListener('resize', handleResize)
    }
  }, [])
 
  const handleHamburgerClick=()=>{
    sidebarRef.current.style.transform='translateX(0)'
  }
  const handleCloseSidebar=()=>{
    sidebarRef.current.style.transform='translateX(100%)'
  }
  const handleViewBookmark=()=>{
    bookmarkRef.current.style.display='flex'
  }
  return(
    <nav className='navbar'>
        <div className='logo-wrapper' style={{fontSize: '2rem'}}>
            <span><strong>Car</strong><strong style={{color: '#ffa31a'}}>Hub</strong></span>
        </div>
        <div className='hamburger-wrapper'>
            <button className='hamburger' onClick={()=> handleHamburgerClick()}><i className="fa-solid fa-bars"></i></button>
        </div>
        <div className='nav-link' ref={sidebarRef}>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
                <button className='navbar-button'><i className="fa-solid fa-cart-shopping" onClick={()=>handleViewBookmark()}></i><span className='addedCount'>{totalBookmark?totalBookmark:''}</span></button>
                <div className='bookmark-items' ref={bookmarkRef}>
                    {bookmarkItems.map((item, index)=>{
                      return <p key={index}>{item.productName}</p>
                    })}
                </div>
            <div className='hideSidebar' onClick={()=> handleCloseSidebar()}><i className="fa-solid fa-xmark"></i></div>    
        </div>
    </nav>
  )
}
