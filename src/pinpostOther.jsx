import React from "react";

import {Link} from 'react-router-dom'

import Bg from "./img/pined_bg.png"
import Arrow from "./img/arrowIcon.png"
import Heart from "./img/heart.png"
import Rute from "./img/rute2.png"
import Sun from "./img/sunIcon.png"
import Plus from "./img/plusIcon.png"
import Story from "./img/story-post.png"
import Post1 from "./img/post1.png"
import Post2 from "./img/post2.png"
import Post3 from "./img/post3.png"

function Pinpost () {
    return (
        <>
            <div className="pinpost-bg" style={{backgroundImage: `url(${Bg})`}}>
                <div className="bg-black">
                    <div className="pinpost-top">
                        <Link to="/pined"><img src= {Arrow} /></Link>
                    </div>
                    <div className="rute-box">
                        <img src= {Rute} style={{width: "240px", height: "152px"}}/>
                    </div>
                    <div className="date-box">
                        <div style={{display: "flex"}}>
                            <div className="date-first">25.09.01 <img src= {Sun} style={{width: "33px", height: "33px", marginLeft: "13px"}}/></div>
                        <div className="date-heart">108 <img src={Heart} style={{width: "18px", height:"18px", marginLeft: "5px"}}/></div>
                        </div>
                        <div className="date-sceond">MON</div>
                    </div>
                    <div className="pinpost-text">
                        <div style={{marginTop: "24px",marginLeft: "16px",marginRight: "16px", fontSize: "15px"}}>
                            오늘은 진석이랑 같이 성수에서 놀았다. <br />
                            성수는 밥먹고 카페가기 좋은 동네같다. <br />
                            진석이랑 심별회관에서 밥을 먹고, 뉴욕베이글에서 커피랑 빵을 먹었다. <br />
                            카페에서 쉬다가 서울숲에서 걷고 저녁에는 페르디에서 칵테일을 마셨다.
                        </div>
                        <div style={{marginBottom: "24px",marginTop:"20px", marginLeft: "16px", fontSize: "14px"}}>#심별회관 #뉴욕베이글 #무봄 #페르디</div>
                    </div>
                    <div style={{marginTop: "40px", flexDirection: "column", marginLeft: "16px", marginRight: "16px", }}>
                        <div className="pinpost-location">장소 <img src={Plus} style={{width: "24px", height: "24px", marginLeft: "302px"}}/></div>
                        <div className="pinpost-hashtagbox">
                            <div className="pinpost-hashtag">심별회관</div>
                            <div className="pinpost-hashtag">뉴욕베이글</div>
                            <div className="pinpost-hashtag">서울숲</div>
                        </div>
                    </div>
                    <div style={{marginTop: "40px", flexDirection: "column", marginLeft: "16px", marginRight: "16px", }}>
                        <div className="pinpost-location">스토리 <img src={Plus} style={{width: "24px", height: "24px", marginLeft: "285px"}}/></div>
                        <div><img src={Story} style={{marginTop: "10px"}}/></div>
                    </div>
                    <div style={{marginTop: "40px", flexDirection: "column", marginLeft: "16px", marginRight: "16px", paddingBottom: "114px"}}>
                        <div className="pinpost-location">게시물 <img src={Plus} style={{width: "24px", height: "24px", marginLeft: "285px"}}/></div>
                        <div style={{marginTop: "10px"}}>
                            <img src={Post1}/>
                            <img src={Post2} style={{marginLeft: "5px"}}/>
                            <img src={Post3} style={{marginLeft: "5px"}}/>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Pinpost