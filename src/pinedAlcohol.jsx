import React from "react";

import Bg1 from "./img/alcohol/alcohol-peedbg1.png"
import Bg2 from "./img/alcohol/alcohol-peedbg2.png"
import Bg3 from "./img/alcohol/alcohol-peedbg3.png"
import Bg4 from "./img/alcohol/alcohol-peedbg4.png"
import Bg5 from "./img/alcohol/alcohol-peedbg5.png"

import Profile1 from "./img/alcohol/alcohol-post1.png"
import Profile2 from "./img/alcohol/alcohol-post2.png"
import Profile3 from "./img/alcohol/alcohol-post3.png"
import Profile4 from "./img/alcohol/alcohol-post4.png"
import Profile5 from "./img/alcohol/alcohol-post5.png"

function pinedAlcohol () {
    return(
        <>
            <div className="influencer-bg" style={{backgroundImage: `url(${Bg1})`}}>
                <div className="post-bg">
                    <div className="post-group">
                        <img src={Profile1}/>
                        <div className="post-font">
                            <div className="post-title">홍수진</div>
                        <div className="post-Introduction">술이 인생이고 인생이 술이다...</div>
                        </div>
                    </div>
                </div>
            </div>
                        <div className="influencer-bg" style={{backgroundImage: `url(${Bg2})`}}>
                <div className="post-bg">
                    <div className="post-group">
                        <img src={Profile2}/>
                        <div className="post-font">
                            <div className="post-title">박민정</div>
                        <div className="post-Introduction">좋은 사람과 좋은시간@@</div>
                        </div>
                    </div>
                </div>
            </div>
                        <div className="influencer-bg" style={{backgroundImage: `url(${Bg3})`}}>
                <div className="post-bg">
                    <div className="post-group">
                        <img src={Profile3}/>
                        <div className="post-font">
                            <div className="post-title">백해진</div>
                        <div className="post-Introduction">술집 찾아 다니는거 좋아해요</div>
                        </div>
                    </div>
                </div>
            </div>
                        <div className="influencer-bg" style={{backgroundImage: `url(${Bg4})`}}>
                <div className="post-bg">
                    <div className="post-group">
                        <img src={Profile4}/>
                        <div className="post-font">
                            <div className="post-title">구자현</div>
                        <div className="post-Introduction">성수동 칵테일바 바텐더</div>
                        </div>
                    </div>
                </div>
            </div>
                        <div className="influencer-bg" style={{backgroundImage: `url(${Bg5})`}}>
                <div className="post-bg">
                    <div className="post-group">
                        <img src={Profile5}/>
                        <div className="post-font">
                            <div className="post-title">최지연</div>
                        <div className="post-Introduction">달디달고 달디단 소주</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default pinedAlcohol