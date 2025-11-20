import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './style.css'
import Nav from './nav.jsx'
import Pinmap from './Pinmap.jsx'
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
import MypinAll from "./mypinAll.jsx"
import Friend from "./friend.jsx"
import Group from "./group.jsx"
import AddGroupMembers from './AddGroupMembers.jsx';
import CreateGroup from "./CreateGroup.jsx"
import Seeting from "./setting.jsx"
import PinggleBg from "./pinggleBg.jsx"
import PinmapOther from './PinmapOther.jsx';
import PinmapLike from './PinmapLike.jsx';
import PinmapWrapper from './PinmapWrapper.jsx';


function App() {
  return(
    <>
      <Nav/>
      <Routes>
        <Route index element={<Pined />} />      

        <Route path="/pined/*" element={<Pined />} />
        <Route path="/Pinmap" element={<Pinmap />} />
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

        <Route path='/mypinAll' element={<MypinAll/>}/>

        <Route path='/friend' element={<Friend/>}/>
        <Route path='/group' element={<Group/>}/>
        <Route path='/AddGroupMembers' element={<AddGroupMembers/>}/>
        <Route path='/CreateGroup' element={<CreateGroup/>}/>
        <Route path='/setting' element={<Seeting/>}/>

        <Route path='/pinggleBg' element={<PinggleBg/>}/>

        <Route path="/PinmapOther" element={<PinmapOther />} />
        <Route path="/PinmapLike" element={<PinmapLike />} />
        <Route path="/PinmapWrapper" element={<PinmapWrapper />} />
      </Routes>
    </>
  )
}

export default App
