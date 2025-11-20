import React from "react";
import {Link } from 'react-router-dom'; 

import Bg from "./img/profileOther.png"

import Logo from "./img/logo.png"
import Bell from "./img/bell.png"
import Profile from "./img/influencer.png"
import Icon1 from "./img/user.png"
import Icon2 from "./img/heart.png"
import Icon3 from "./img/thumbs-up.png"
import Edit from "./img/profileEditIcon.png"

import Img1 from "./img/profile1.png"
import Img2 from "./img/profile2.png"
import Img3 from "./img/profile3.png"
import Arrow from "./img/arrowIcon.png"

function pinprofile() {
    return (
        <>
            <div className="profile-bg" style={{backgroundImage: `url(${Bg})`, backgroundSize:"cover"}}>
                <div className="profile-top">
                    <img src= {Logo}/>
                    <img src= {Bell} style={{width: "24px", height: "24px"}}/>
                </div>
                <div className="profile-first" style={{marginTop: "252px"}}>
                    <img src= {Profile} style={{width: "113px", height: "113px"}}/>
                </div>
                <div className="profile-box">
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <div className="text-first">이다빈</div>
                        <div className="profile-peed">
                            <img src= {Edit}/> 프로필설정
                        </div>
                    </div>
                    <div className="text-second">#KOR0028</div>
                    <div className="text-third">오늘도 피니모하다</div>
                    <div className="profile-iconbox">
                        <div className="profile-icon">
                            <img src={Icon1} style={{width: "21px", height: "21px", marginRight: "3px"}}/>
                            531
                        </div>
                        <div className="profile-icon">
                            <img src={Icon2} style={{width: "21px", height: "21px", marginRight: "3px"}}/>
                            6.3k
                        </div>
                        <div className="profile-icon">
                            <img src={Icon3} style={{width: "21px", height: "21px", marginRight: "3px"}}/>
                            4.8k
                        </div>
                    </div>
                </div>
                <div className="three-box">
                    <Link to="/friend">
                        <div className="min-box">
                            <div className="min-icon"><img src={Img1}/><img src={Arrow} style={{marginLeft:"45px", transform: "scaleX(-1)"}}/></div>
                            <div style={{marginLeft:"15px", marginTop: "9px", fontSize:"14px", color:"#fff"}}>친구목록</div>
                        </div>
                    </Link>
                    <Link to="/group">
                        <div className="min-box">
                            <div className="min-icon"><img src={Img2}/><img src={Arrow} style={{marginLeft:"45px", transform: "scaleX(-1)"}}/></div>
                            <div style={{marginLeft:"15px", marginTop: "9px", fontSize:"14px", color:"#fff"}}>그룹관리</div>
                        </div>
                    </Link>
                    <Link to='/setting'>
                        <div className="min-box">
                            <div className="min-icon"><img src={Img3}/><img src={Arrow} style={{marginLeft:"45px", transform: "scaleX(-1)"}}/></div>
                            <div style={{marginLeft:"15px", marginTop: "9px", fontSize:"14px", color:"#fff"}}>환경설정</div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default pinprofile;