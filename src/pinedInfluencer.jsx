import React from "react";
import './style.css'
import {Link } from 'react-router-dom';

import Bg1 from "./img/influencer/influencer-peedbg1.png"
import Bg2 from "./img/influencer/influencer-peedbg2.png"
import Bg3 from "./img/influencer/influencer-peedbg3.png"
import Bg4 from "./img/influencer/influencer-peedbg4.png"
import Bg5 from "./img/influencer/influencer-peedbg5.png"

import Profile1 from "./img/influencer/influencer-post1.png"
import Profile2 from "./img/influencer/influencer-post2.png"
import Profile3 from "./img/influencer/influencer-post3.png"
import Profile4 from "./img/influencer/influencer-post4.png"
import Profile5 from "./img/influencer/influencer-post5.png"


function pinedInfluencer () {
    return(
        <>
        <div className="influencer-bg" style={{backgroundImage: `url(${Bg1})`}}>
            <Link to="/pinedOther"><div className="click-post"></div></Link>
            <div className="post-bg1">
                <div className="post-group">
                    <Link to="/profileOther"><img src={Profile1}/></Link>
                    <div className="post-font">
                        <div className="post-title">유다희</div>
                        <div className="post-Introduction">서울을 사랑하는 사람</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="influencer-bg" style={{backgroundImage: `url(${Bg2})`}}>
            <div className="post-bg">
                <div className="post-group">
                    <img src={Profile2}/>
                    <div className="post-font">
                        <div className="post-title">이세현</div>
                    <div className="post-Introduction">분위기 좋은 카페 찾아용</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="influencer-bg" style={{backgroundImage: `url(${Bg3})`}}>
            <div className="post-bg">
                <div className="post-group">
                    <img src={Profile3}/>
                    <div className="post-font">
                        <div className="post-title">서정희</div>
                    <div className="post-Introduction">카페투어 마니아</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="influencer-bg" style={{backgroundImage: `url(${Bg4})`}}>
            <div className="post-bg">
                <div className="post-group">
                    <img src={Profile4}/>
                    <div className="post-font">
                        <div className="post-title">이해린</div>
                    <div className="post-Introduction">빈티지 옷 좋아해요</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="influencer-bg" style={{backgroundImage: `url(${Bg5})`}}>
            <div className="post-bg">
                <div className="post-group">
                    <img src={Profile5}/>
                    <div className="post-font">
                        <div className="post-title">유지연</div>
                    <div className="post-Introduction">분위기 좋은 가게 찾아요</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default pinedInfluencer