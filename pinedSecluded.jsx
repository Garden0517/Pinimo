import React from "react";

import Bg1 from "./img/secluded/secluded-peedbg1.png"
import Bg2 from "./img/secluded/secluded-peedbg2.png"
import Bg3 from "./img/secluded/secluded-peedbg3.png"
import Bg4 from "./img/secluded/secluded-peedbg4.png"
import Bg5 from "./img/secluded/secluded-peedbg5.png"

import Profile1 from "./img/secluded/secluded-post1.png"
import Profile2 from "./img/secluded/secluded-post2.png"
import Profile3 from "./img/secluded/secluded-post3.png"
import Profile4 from "./img/secluded/secluded-post4.png"
import Profile5 from "./img/secluded/secluded-post5.png"

function pinedSecluded () {
    return (
        <>
            <div className="influencer-bg" style={{backgroundImage: `url(${Bg1})`}}>
                <div className="post-bg">
                    <div className="post-group">
                        <img src={Profile1}/>
                        <div className="post-font">
                            <div className="post-title">이지혜</div>
                        <div className="post-Introduction">집에서 쉬는게 최고...!</div>
                        </div>
                    </div>
                </div>
            </div>
                        <div className="influencer-bg" style={{backgroundImage: `url(${Bg2})`}}>
                <div className="post-bg">
                    <div className="post-group">
                        <img src={Profile2}/>
                        <div className="post-font">
                            <div className="post-title">이유빈</div>
                        <div className="post-Introduction">집에서만 놀아요</div>
                        </div>
                    </div>
                </div>
            </div>
                        <div className="influencer-bg" style={{backgroundImage: `url(${Bg3})`}}>
                <div className="post-bg">
                    <div className="post-group">
                        <img src={Profile3}/>
                        <div className="post-font">
                            <div className="post-title">안성빈</div>
                        <div className="post-Introduction">집에서 게임 하는게 제일 좋아</div>
                        </div>
                    </div>
                </div>
            </div>
                        <div className="influencer-bg" style={{backgroundImage: `url(${Bg4})`}}>
                <div className="post-bg">
                    <div className="post-group">
                        <img src={Profile4}/>
                        <div className="post-font">
                            <div className="post-title">한예지</div>
                        <div className="post-Introduction">책 읽으면서 쉬기~</div>
                        </div>
                    </div>
                </div>
            </div>
                        <div className="influencer-bg" style={{backgroundImage: `url(${Bg5})`}}>
                <div className="post-bg">
                    <div className="post-group">
                        <img src={Profile5}/>
                        <div className="post-font">
                            <div className="post-title">채예진</div>
                        <div className="post-Introduction">집순이</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default pinedSecluded