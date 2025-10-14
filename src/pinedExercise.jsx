import React from "react";

import Bg1 from "./img/exercise/exercise-peedbg1.png"
import Bg2 from "./img/exercise/exercise-peedbg2.png"
import Bg3 from "./img/exercise/exercise-peedbg3.png"
import Bg4 from "./img/exercise/exercise-peedbg4.png"
import Bg5 from "./img/exercise/exercise-peedbg5.png"

import Profile1 from "./img/exercise/exercise-post1.png"
import Profile2 from "./img/exercise/exercise-post2.png"
import Profile3 from "./img/exercise/exercise-post3.png"
import Profile4 from "./img/exercise/exercise-post4.png"
import Profile5 from "./img/exercise/exercise-post5.png"

function pinedExercise() {
    return (
        <>
            <div className="influencer-bg" style={{backgroundImage: `url(${Bg1})`}}>
                <div className="post-bg">
                    <div className="post-group">
                        <img src={Profile1}/>
                        <div className="post-font">
                            <div className="post-title">정영찬</div>
                        <div className="post-Introduction">오운완</div>
                        </div>
                    </div>
                </div>
            </div>
                        <div className="influencer-bg" style={{backgroundImage: `url(${Bg2})`}}>
                <div className="post-bg">
                    <div className="post-group">
                        <img src={Profile2}/>
                        <div className="post-font">
                            <div className="post-title">김솔</div>
                        <div className="post-Introduction">운동 힘들다!</div>
                        </div>
                    </div>
                </div>
            </div>
                        <div className="influencer-bg" style={{backgroundImage: `url(${Bg3})`}}>
                <div className="post-bg">
                    <div className="post-group">
                        <img src={Profile3}/>
                        <div className="post-font">
                            <div className="post-title">송지아</div>
                        <div className="post-Introduction">같이 러닝 뛰어요!</div>
                        </div>
                    </div>
                </div>
            </div>
                        <div className="influencer-bg" style={{backgroundImage: `url(${Bg4})`}}>
                <div className="post-bg">
                    <div className="post-group">
                        <img src={Profile4}/>
                        <div className="post-font">
                            <div className="post-title">백준서</div>
                        <div className="post-Introduction">해변 러닝~</div>
                        </div>
                    </div>
                </div>
            </div>
                        <div className="influencer-bg" style={{backgroundImage: `url(${Bg5})`}}>
                <div className="post-bg">
                    <div className="post-group">
                        <img src={Profile5}/>
                        <div className="post-font">
                            <div className="post-title">정민서</div>
                        <div className="post-Introduction">하루 마무리는 운동</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default pinedExercise