import React from 'react'
import './style.css'
import {Link } from 'react-router-dom'; 
import PinedIcon from './img/pinedIcon.png';


function Nav() {
   return (
    <>
      <div className='glass-screen'>
        <div className='glass-card'>
          <nav>
            <Link to="/pinmap"><img src="PinedIcon" style={{width: '24px', height: '36px'}}/></Link>{" "}          
            <Link to="/pined">pined</Link>{" "}
            <Link to="/pincreate">pincreate</Link>{" "}
            <Link to="/mypin">mypin</Link>{" "}
            <Link to="/pinggle">pinggle</Link>{" "}
          </nav>
        </div>
      </div>
    </>
  )
}

export default Nav
