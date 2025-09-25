import React from 'react'
import './style.css'
import { Routes, Route, Link } from 'react-router-dom'; 
import Pined from './pined.jsx';
import Pinmap from './pinmap.jsx';
import Pincreate from './pincreate.jsx';
import Mypin from './mypin.jsx';
import Pinggle from './pinggle.jsx';

function Nav() {
   return (
    <>
      <div className='glass-card'>
        <nav>
          <Link to="/pined">pined</Link>{" "}
          <Link to="/pinmap">pinmap</Link>{" "}
          <Link to="/pincreate">pincreate</Link>{" "}
          <Link to="/mypin">mypin</Link>{" "}
          <Link to="/pinggle">pinggle</Link>{" "}
        </nav>
      </div>
      <Routes>
        <Route path="/pined" element={<Pined />} />
        <Route path="/pinmap" element={<Pinmap />} />
        <Route path="/pincreate" element={<Pincreate />} />
        <Route path="/mypin" element={<Mypin />} />
        <Route path="/pinggle" element={<Pinggle />} />
      </Routes>
    </>
  )
}

export default Nav
