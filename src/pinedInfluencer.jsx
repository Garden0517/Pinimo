import React from "react";
import './style.css'
import Influencer1 from "./img/influencer-post1.png"

function pinedInfluencer () {
    return(
        <>
        <div className="influencer-bg">
            <div className="post-bg">
                <div className="post-group">
                    <img src={Influencer1}/>
                    <div className="post-font">
                        <div className="post-title">유다희</div>
                    <div className="post-Introduction">서울을 사랑하는 사람</div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default pinedInfluencer