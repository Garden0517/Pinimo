import React from "react";

import {Link} from 'react-router-dom'

import Bg from "./img/pined_bg.png"
import Arrow from "./img/arrowIcon.png"
import Rute from "./img/rute3.png"
import Influencer1 from "./img/profile-profile.png"
import Other from "./img/pinedOther.png"

import Ex from "./img/ex.png"

import Eye from "./img/eye.png"
import Heart from "./img/heart.png"
import Like from "./img/thumbs-up.png"

function pinedOther () {
    return (
        <>
            <div className="pinedOther-bg" style={{backgroundImage: `url(${Bg})`}}>
                <div className="pinedOther-black">
                    <div className="pinedOther-top">
                        <Link to="/pined"><img src={Arrow} style={{width: "24px", height: "24px"}}/></Link>
                        <div className="pinedOther-text">
                            <div style={{fontSize: "24px", fontWeight: "700"}}>서울 숲 공원</div>
                            <div style={{fontSize: "18px", fontWeight: "500"}}>15:45 PM</div>
                        </div>
                    </div>
                    <div className="pinedOther-rute">
                        <img src={Rute}/>
                    </div>
                    <div className="pinedOther-group">
                        <Link to="/profileOther"><img src={Influencer1} style={{width: '60px', height: '60px'}}/></Link>
                        <div className="post-font">
                            <div className="post-title">유다희</div>
                            <div className="post-Introduction">서울을 사랑하는 사람</div>
                        </div>
                    </div>
                    <Link to="/pinpostOther">
                        <div className="pinedOther-box">
                            <img src={Other} style={{width: "337px", height: "246px"}}/>
                            <div className="pinedOther-iconbox">
                                <div style={{marginRight: "15px", display:"flex"}}><img src={Eye} style={{width: "24xp", height: "24px", marginRight: "10px"}}/>5,081</div>
                                <div style={{marginRight: "15px", display:"flex"}}><img src={Heart} style={{width: "24xp", height: "24px", marginRight: "10px"}}/>68</div>
                                <div style={{display:"flex"}}><img src={Like} style={{width: "24xp", height: "24px", marginRight: "10px"}}/>35</div>
                            </div>
                            <div className="pinedOther-title">
                                추워지기 전에 공원에서 피크닉!
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default pinedOther