import React from 'react'
import './footer.css'
import Down2 from '../assets/Down2'

function Footer() {
  return (
    <div className='footer'>
        <div className='categories'>
          <p className='head'>CATEGORIES</p>
          <p className='sub'>Web Builder</p>
          <p className='sub'>Hosting</p>
          <p className='sub'>Data Center</p>
          <p className='sub'>Robotic-Automation</p>
        </div>
        <div className='contact'>
          <p className='head'>CONTACT</p>
          <p className='sub'>Contact</p>
          <p className='sub'>Privacy Policy</p>
          <p className='sub'>Terms of Service</p>
          <p className='sub'>Categories</p>
          <p className='sub'>About</p>
        </div>
        <div className="location">
          <p>United States</p>
          <div className='sv'>
            <Down2/>
          </div>          
        </div>
    </div>
  )
}

export default Footer