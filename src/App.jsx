import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './style.css'
import Nav from './nav.jsx'
import Pined from './pined.jsx';
import Pinmap from './pinmap.jsx';
import Pincreate from './pincreate.jsx';
import Mypin from './mypin.jsx';
import Pinggle from './pinggle.jsx';
import { BrowserRouter } from 'react-router-dom';



function App() {
  return(
    <>
      <Nav/>
      <Routes>
        <Route path="/pinmap" element={<Pinmap />} />
        <Route path="/pined" element={<Pined />} />
        <Route path="/pincreate" element={<Pincreate />} />
        <Route path="/mypin" element={<Mypin />} />
        <Route path="/pinggle" element={<Pinggle />} />
      </Routes>
    </>
  )
}

export default App
