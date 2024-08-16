import React from 'react'

export default function Navbar({totalBookmark}) {
  return (
    <nav className='navbar'>
        <div className='logo-wrapper' style={{fontSize: '2rem'}}>
            <span><strong>Car</strong><strong style={{color: '#ffa31a'}}>Hub</strong></span>
        </div>
        <div className='nav-link'>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
                <button className='navbar-button'><i className="fa-solid fa-cart-shopping"></i><span className='addedCount'>{totalBookmark?totalBookmark:''}</span></button>
        </div>
    </nav>
  )
}
