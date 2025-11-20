import React from "react";

import Bg1 from "./img/excellency/excellency-peedbg1.png"
import Bg2 from "./img/excellency/excellency-peedbg2.png"
import Bg3 from "./img/excellency/excellency-peedbg3.png"
import Bg4 from "./img/excellency/excellency-peedbg4.png"
import Bg5 from "./img/excellency/excellency-peedbg5.png"

import Profile1 from "./img/excellency/excellency-post1.png"
import Profile2 from "./img/excellency/excellency-post2.png"
import Profile3 from "./img/excellency/excellency-post3.png"
import Profile4 from "./img/excellency/excellency-post4.png"
import Profile5 from "./img/excellency/excellency-post5.png"

function pinedExcellency() {
    return (
        <>
            <div className="influencer-bg" style={{backgroundImage: `url(${Bg1})`}}>
                <div className="post-bg">
                    <div className="post-group">
                        <img src={Profile1}/>
                        <div className="post-font">
                            <div className="post-title">박현진</div>
                        <div className="post-Introduction">공원에서 책 읽는게 좋아요</div>
                        </div>
                    </div>
                </div>
            </div>
                        <div className="influencer-bg" style={{backgroundImage: `url(${Bg2})`}}>
                <div className="post-bg">
                    <div className="post-group">
                        <img src={Profile2}/>
                        <div className="post-font">
                            <div className="post-title">한지윤</div>
                        <div className="post-Introduction">도서관에서 공부하는게 제일 좋아</div>
                        </div>
                    </div>
                </div>
            </div>
                        <div className="influencer-bg" style={{backgroundImage: `url(${Bg3})`}}>
                <div className="post-bg">
                    <div className="post-group">
                        <img src={Profile3}/>
                        <div className="post-font">
                            <div className="post-title">황재혁</div>
                        <div className="post-Introduction">과탑이 목표</div>
                        </div>
                    </div>
                </div>
            </div>
                        <div className="influencer-bg" style={{backgroundImage: `url(${Bg4})`}}>
                <div className="post-bg">
                    <div className="post-group">
                        <img src={Profile4}/>
                        <div className="post-font">
                            <div className="post-title">송주이</div>
                        <div className="post-Introduction">시험기간이야...ㅜㅜ</div>
                        </div>
                    </div>
                </div>
            </div>
                        <div className="influencer-bg" style={{backgroundImage: `url(${Bg5})`}}>
                <div className="post-bg">
                    <div className="post-group">
                        <img src={Profile5}/>
                        <div className="post-font">
                            <div className="post-title">황수빈</div>
                        <div className="post-Introduction">새벽 공부 뿌듯하다</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default pinedExcellency