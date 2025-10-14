import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './style.css'
import Nav from './nav.jsx'
import Pinmap from './pinmap.jsx';
import Pined from './pined.jsx';
import Pincreate from './pincreate.jsx';
import Mypin from './mypin.jsx';
import Pinggle from './pinggle.jsx';

import Pinprofile from './pinprofile.jsx'
import ProfileOther from "./profileOther.jsx"
import PinpostOther from "./pinpostOther.jsx"
import Pinpost from "./pinpost.jsx"
import PinedOther from "./pinedOther.jsx"
import PincreateEdit from "./pincreateEdit.jsx"
import PincreateText from "./pincreateText.jsx"
import PincreateFinal from "./pincreateFinal.jsx"

function App() {
  return(
    <>
      <Nav/>
      <Routes>
        <Route index element={<Pinmap />} />      

        <Route path="/pined/*" element={<Pined />} />
        <Route path="/pinmap" element={<Pinmap />} />
        <Route path="/pincreate" element={<Pincreate />} />
        <Route path="/mypin" element={<Mypin />} />
        <Route path="/pinggle" element={<Pinggle />} />

        <Route path="/pinprofile" element={<Pinprofile/>} />
        <Route path="/profileOther" element={<ProfileOther/>} />

        <Route path="/pinpost" element={<Pinpost/>} />
        <Route path='/pinpostOther' element={<PinpostOther/>} /> 

        <Route path='/pinedOther' element={<PinedOther/>}/>

        <Route path='/pincreateEdit' element={<PincreateEdit/>}/>
        <Route path='/pincreateText' element={<PincreateText/>}/>
        <Route path='/pincreateFinal' element={<PincreateFinal/>}/>
      </Routes>
    </>
  )
}

export default App
