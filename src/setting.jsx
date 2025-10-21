import React from "react";
import {Link } from 'react-router-dom'; 

import Arrow from "./img/arrowIcon.png"
import Plus from "./img/plusIcon.png"

import Img1 from "./img/setting/1.png"
import Img2 from "./img/setting/2.png"
import Img3 from "./img/setting/3.png"
import Img4 from "./img/setting/4.png"
import Img5 from "./img/setting/5.png"
import Img6 from "./img/setting/6.png"
import Img7 from "./img/setting/7.png"
import Img8 from "./img/setting/8.png"
import Img9 from "./img/setting/9.png"
import Img10 from "./img/setting/10.png"
import Img11 from "./img/setting/11.png"
import Img12 from "./img/setting/12.png"
import Search from "./img/setting/search.png"

function Setting() {
    return(
        <>
            <div style={{display:"flex", flexDirection:"row", width:"361px", alignItems:"center", marginTop:"74px"}}>
                <Link to="/pinprofile"><img src={Arrow}/></Link>
                <div className="friend-title">설정</div>
            </div>

            <div style={{display:"flex", flexDirection:"row", width:"361px", height:"38px", justifyContent:"space-between",marginTop:"22px", marginBottom:"20px"}}>
                <div className="glass" style={{width:"361px", height:"38px",borderRadius:"8px",display:"flex", alignItems:"center", fontSize:"16px", color:"#878787"}}>
                    <img src={Search} style={{marginLeft:"10px", marginRight:"10px"}}/>
                    검색
                </div>
            </div>    

            <div style={{display:"flex", marginBottom:"11px", flexDirection:"column", width:"361px", height:"auto", borderBottom:"1px #fff solid", paddingBottom:"11px"}}>
                <div style={{fontSize:"14px", color:"#777777", margin:"3px 0 7px 16px"}}>내 계정</div>
                <div  style={{display:"flex",  flexDirection:"row", justifyContent:"space-between", margin:"11px 0 1px 16px"}}>
                    <div style={{display:"flex",  flexDirection:"row", width:"210px", height:"24px", alignItems:"center"}}>
                        <img src={Img1}/>
                        <div style={{fontSize:"20px",  color:"#fff", marginLeft:"15px"}}>계정 센터</div>
                    </div>
                    <img src={Arrow} style={{marginRight:"16px", transform: "scaleX(-1)"}}/>
                </div>
                <div style={{fontSize:"12px",  color:"#777777", marginLeft:"54px", marginBottom:"10px"}}>비밀번호, 보안, 개인정보 설정</div>
                <div style={{fontSize:"10px",  color:"#777777", margin:"4px 0 3px 16px"}}>Pingle 및 연동된 기타 서비스의 환경 및 계정 설정을 함께 관리해보세요.</div>
            </div>


            <div style={{display:"flex", marginBottom:"11px", flexDirection:"column", width:"361px", height:"auto", borderBottom:"1px #fff solid", paddingBottom:"11px"}}>
                <div style={{fontSize:"14px", color:"#777777", margin:"3px 0 7px 16px"}}>Pinimo 사용 방식</div>
                <div  style={{display:"flex",  flexDirection:"row", justifyContent:"space-between", margin:"11px 0 11px 16px"}}>
                    <div style={{display:"flex",  flexDirection:"row", width:"210px", height:"24px", alignItems:"center"}}>
                        <img src={Img2}/>
                        <div style={{fontSize:"20px",  color:"#fff", marginLeft:"15px"}}>내 활동</div>
                    </div>
                    <img src={Arrow} style={{marginRight:"16px", transform: "scaleX(-1)"}}/>
                </div>
                <div  style={{display:"flex",  flexDirection:"row", justifyContent:"space-between", margin:"11px 0 11px 16px"}}>
                    <div style={{display:"flex",  flexDirection:"row", width:"210px", height:"24px", alignItems:"center"}}>
                        <img src={Img3}/>
                        <div style={{fontSize:"20px",  color:"#fff", marginLeft:"15px"}}>알림</div>
                    </div>
                    <img src={Arrow} style={{marginRight:"16px", transform: "scaleX(-1)"}}/>
                </div>
                <div  style={{display:"flex",  flexDirection:"row", justifyContent:"space-between", margin:"11px 0 11px 16px"}}>
                    <div style={{display:"flex",  flexDirection:"row", width:"210px", height:"24px", alignItems:"center"}}>
                        <img src={Img4}/>
                        <div style={{fontSize:"20px",  color:"#fff", marginLeft:"15px"}}>시간 관리</div>
                    </div>
                    <img src={Arrow} style={{marginRight:"16px", transform: "scaleX(-1)"}}/>
                </div>
            </div>

            <div style={{display:"flex", marginBottom:"11px", flexDirection:"column", width:"361px", height:"auto", borderBottom:"1px #fff solid", paddingBottom:"11px"}}>
                <div style={{fontSize:"14px", color:"#777777", margin:"3px 0 7px 16px"}}>내 앱 및 미디어</div>
                <div  style={{display:"flex",  flexDirection:"row", justifyContent:"space-between", margin:"11px 0 11px 16px"}}>
                    <div style={{display:"flex",  flexDirection:"row", width:"210px", height:"24px", alignItems:"center"}}>
                        <img src={Img5}/>
                        <div style={{fontSize:"20px",  color:"#fff", marginLeft:"15px"}}>기기 권한 설정</div>
                    </div>
                    <img src={Arrow} style={{marginRight:"16px", transform: "scaleX(-1)"}}/>
                </div>
                <div  style={{display:"flex",  flexDirection:"row", justifyContent:"space-between", margin:"11px 0 11px 16px"}}>
                    <div style={{display:"flex",  flexDirection:"row", width:"210px", height:"24px", alignItems:"center"}}>
                        <img src={Img6}/>
                        <div style={{fontSize:"20px",  color:"#fff", marginLeft:"15px"}}>언어 및 지역</div>
                    </div>
                    <img src={Arrow} style={{marginRight:"16px", transform: "scaleX(-1)"}}/>
                </div>
                <div  style={{display:"flex",  flexDirection:"row", justifyContent:"space-between", margin:"11px 0 11px 16px"}}>
                    <div style={{display:"flex",  flexDirection:"row", width:"210px", height:"24px", alignItems:"center"}}>
                        <img src={Img7}/>
                        <div style={{fontSize:"20px",  color:"#fff", marginLeft:"15px"}}>보관 및 다운로드</div>
                    </div>
                    <img src={Arrow} style={{marginRight:"16px", transform: "scaleX(-1)"}}/>
                </div>
            </div>

            <div style={{display:"flex", marginBottom:"11px", flexDirection:"column", width:"361px", height:"auto", borderBottom:"1px #fff solid", paddingBottom:"11px"}}>
                <div style={{fontSize:"14px", color:"#777777", margin:"3px 0 7px 16px"}}>정보 및 지원</div>
                <div  style={{display:"flex",  flexDirection:"row", justifyContent:"space-between", margin:"11px 0 11px 16px"}}>
                    <div style={{display:"flex",  flexDirection:"row", width:"210px", height:"24px", alignItems:"center"}}>
                        <img src={Img8}/>
                        <div style={{fontSize:"20px",  color:"#fff", marginLeft:"15px"}}>버전 정보</div>
                    </div>
                    <img src={Arrow} style={{marginRight:"16px", transform: "scaleX(-1)"}}/>
                </div>
                <div  style={{display:"flex",  flexDirection:"row", justifyContent:"space-between", margin:"11px 0 11px 16px"}}>
                    <div style={{display:"flex",  flexDirection:"row", width:"210px", height:"24px", alignItems:"center"}}>
                        <img src={Img9}/>
                        <div style={{fontSize:"20px",  color:"#fff", marginLeft:"15px"}}>서비스 이용약관</div>
                    </div>
                    <img src={Arrow} style={{marginRight:"16px", transform: "scaleX(-1)"}}/>
                </div>
                <div  style={{display:"flex",  flexDirection:"row", justifyContent:"space-between", margin:"11px 0 11px 16px"}}>
                    <div style={{display:"flex",  flexDirection:"row", width:"210px", height:"24px", alignItems:"center"}}>
                        <img src={Img10}/>
                        <div style={{fontSize:"20px",  color:"#fff", marginLeft:"15px"}}>개인정보 처리약관</div>
                    </div>
                    <img src={Arrow} style={{marginRight:"16px", transform: "scaleX(-1)"}}/>
                </div>
                                <div  style={{display:"flex",  flexDirection:"row", justifyContent:"space-between", margin:"11px 0 11px 16px"}}>
                    <div style={{display:"flex",  flexDirection:"row", width:"210px", height:"24px", alignItems:"center"}}>
                        <img src={Img11}/>
                        <div style={{fontSize:"20px",  color:"#fff", marginLeft:"15px"}}>고객센터 / 문의하기</div>
                    </div>
                    <img src={Arrow} style={{marginRight:"16px", transform: "scaleX(-1)"}}/>
                </div>
                <div  style={{display:"flex",  flexDirection:"row", justifyContent:"space-between", margin:"11px 0 11px 16px"}}>
                    <div style={{display:"flex",  flexDirection:"row", width:"210px", height:"24px", alignItems:"center"}}>
                        <img src={Img12}/>
                        <div style={{fontSize:"20px",  color:"#fff", marginLeft:"15px"}}>피드백 제안</div>
                    </div>
                    <img src={Arrow} style={{marginRight:"16px", transform: "scaleX(-1)"}}/>
                </div>
            </div>

            <div style={{display:"flex", marginBottom:"11px", flexDirection:"column", width:"361px", height:"auto", paddingBottom:"100px"}}>
                <div style={{fontSize:"20px", color:"#959595"}}>로그인</div>
                <div style={{fontSize:"20px", color:"#FF3535"}}>로그아웃</div>
            </div>
        </>
    )
}

export default Setting