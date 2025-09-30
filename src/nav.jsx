import React from 'react'
import './style.css'
import {Link } from 'react-router-dom'; 


function Nav() {
   return (
    <>
      <div className='glass-card'>
        <nav>
          <Link to="/pinmap">pinmap</Link>{" "}          
          <Link to="/pined">pined</Link>{" "}
          <Link to="/pincreate">pincreate</Link>{" "}
          <Link to="/mypin">mypin</Link>{" "}
          <Link to="/pinggle">pinggle</Link>{" "}
        </nav>
      </div>
    </>
  )
}

export default Nav
