import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './style.css'
import Nav from './nav.jsx'
import Pinmap from './pinmap.jsx';
import Pined from './pined.jsx';
import Pincreate from './pincreate.jsx';
import Mypin from './mypin.jsx';
import Pinggle from './pinggle.jsx';


function App() {
  return(
    <>
      <Nav/>
      <Routes>
        <Route path="/pined/*" element={<Pined />} />
        <Route path="/pinmap" element={<Pinmap />} />
        <Route path="/pincreate" element={<Pincreate />} />
        <Route path="/mypin" element={<Mypin />} />
        <Route path="/pinggle" element={<Pinggle />} />
      </Routes>
    </>
  )
}

export default App
