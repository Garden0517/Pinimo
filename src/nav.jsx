import React from 'react'
import './style.css'
import {Link } from 'react-router-dom'; 
import PinedIcon from './img/pinedIcon.png';
import PinmapIcon from './img/pinmapIcon.png';
import Pincreate from './img/pinplusIcon.png';
import Mypin from './img/mypinIcon.png';
import Pinggle from './img/pinggleIcon.png';



function Nav() {
   return (
    <>
      <div className='glass-screen'>
        <div className='glass-card'>
          <nav>
            <Link to="/pined"><img src={PinedIcon} style={{width: '24px', height: '24px', paddingRight: '35px'}}/></Link>{" "}          
            <Link to="/Pinmap"><img src={PinmapIcon} style={{width: '24px', height: '24px', paddingRight: '35px'}}/></Link>{" "}
            {/* <Link to="/PinmapWrapper"><img src={PinmapIcon} style={{width: '24px', height: '24px', paddingRight: '35px'}}/></Link>{" "} */}
            <Link to="/pincreate"><img src={Pincreate} style={{width: '36px', height: '36px', paddingRight: '35px'}}/></Link>{" "}
            <Link to="/mypin"><img src={Mypin} style={{width: '24px', height: '24px', paddingRight: '35px'}}/></Link>{" "}
            <Link to="/pinggle"><img src={Pinggle} style={{width: '24px', height: '24px',}}/></Link>{" "}
          </nav>
        </div>
      </div>
    </>
  )
}

export default Nav
