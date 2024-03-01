import React from 'react'
import './navbar.css'
import Search from '../assets/Search'

function Navbar() {
  return (
    <div className='nav'>   
        <div className='content'>
            <div className='search'>
                <Search className='search-btn'/>
                <input type="text"/>
            </div>
            <div className='cat'><p>Categories</p></div>
            <div className='cat'><p>Website Builders</p></div>
            <div className='cat'><p className='left'>Today's deals</p></div>
        </div>
    </div>
  )
}

export default Navbar