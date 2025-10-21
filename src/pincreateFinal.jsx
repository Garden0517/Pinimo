import React, { useState } from "react";
import {Link } from 'react-router-dom';

import Arrow from "./img/arrowIcon.png"

import ChangeIcon from "./img/changeIcon.png"

import Insta from "./img/insta.png"
import Face from "./img/facebook.png"
import Thread from './img/thread.png'
import Twiter from './img/twiter.png'

import Img1 from "./img/pincreate/img1.png"
import Img2 from "./img/pincreate/img7.png"
import Img3 from "./img/pincreate/img8.png"
import Img4 from "./img/pincreate/img9.png"

function PincreateFinal () {
        const [texts, setTexts] = useState({
            all: '', // 모든 사람의 텍스트
            friend: '', // 친구의 텍스트
            closeFriend: '', // 친한친구의 텍스트
        });

        // 현재 선택된 공개 범위 상태를 추가합니다. 기본값은 'all' (모든 사람)
        const [currentScope, setCurrentScope] = useState('all'); 

        // 현재 선택된 범위의 텍스트를 업데이트하는 핸들러 함수
        const handleTextChange = (e) => {
            setTexts({
                ...texts, // 기존의 다른 범위 텍스트는 유지
                [currentScope]: e.target.value, // 현재 선택된 범위의 텍스트만 업데이트
            });
        };

        const [platformTexts, setPlatformTexts] = useState({
            insta: '',
            facebook: '',
            thread: '',
            twiter: '',
        });

        // 새로운 상태 추가: 현재 선택된 플랫폼. 기본값은 'insta'로 설정
        const [currentPlatform, setCurrentPlatform] = useState('insta'); 
        
        // 플랫폼 텍스트를 업데이트하는 핸들러 함수
        const handlePlatformTextChange = (e) => {
            setPlatformTexts({
                ...platformTexts, // 기존의 다른 플랫폼 텍스트는 유지
                [currentPlatform]: e.target.value, // 현재 선택된 플랫폼의 텍스트만 업데이트
            });
        };
    return (
        <>
        <div style={{height: "130px", position: "fixed", backgroundColor:"#1F1F1F", zIndex:"2000"}}>
            <div className="create-top">
                <div className="title-box">
                    <div><Link to='/pincreateText'><img src={Arrow}/></Link></div>
                    <div style={{fontSize: "24px", color:"#fff", width: "42px", marginLeft: "136px"}}>제작</div>
                    <Link to='/pinmap'><div className="x-button">x</div></Link>
                </div>
            </div>
            <div className="under-box">
                <div className="under-bar"></div>
                <div className="under-bar"></div>
                <div className="under-bar"></div>
            </div>
        </div>

        <div className="createText-box" style={{height:"auto", marginTop:"147px", position:"relative"}}>
            <div style={{fontSize:"20px", color:"#fff"}}>공개 범위에 따른 게시물이에요</div>
            <div style={{display:"flex", flexDirection:"row", width:"220px", height:"auto", justifyContent:"space-between", marginTop:"16px"}}>
                <div 
                    style={{
                        fontSize:"17px", 
                        color:"#fff", 
                        borderBottom: currentScope === 'all' ? "3px solid #fff" : "3px solid transparent", // 'all' 선택 시 border 표시
                        height:"28px",
                        cursor: "pointer" // 클릭 가능함을 표시
                    }}
                    onClick={() => setCurrentScope('all')} // 클릭 시 상태를 'all'로 변경
                >
                    모든 사람
                </div>
                <div 
                    style={{
                        fontSize:"17px", 
                        color:"#fff", 
                        borderBottom: currentScope === 'friend' ? "3px solid #fff" : "3px solid transparent", // 'friend' 선택 시 border 표시
                        height:"28px",
                        cursor: "pointer"
                    }}
                    onClick={() => setCurrentScope('friend')} // 클릭 시 상태를 'friend'로 변경
                >
                    친구
                </div>
                <div 
                    style={{
                        fontSize:"17px", 
                        color:"#fff", 
                        borderBottom: currentScope === 'closeFriend' ? "3px solid #fff" : "3px solid transparent", // 'closeFriend' 선택 시 border 표시
                        height:"28px",
                        cursor: "pointer"
                    }}
                    onClick={() => setCurrentScope('closeFriend')} // 클릭 시 상태를 'closeFriend'로 변경
                >
                    친한친구
                </div>
            </div>
            <textarea
                // 현재 선택된 범위(currentScope)에 해당하는 텍스트를 표시
                value={texts[currentScope]}
                // 텍스트 변경 시 handleTextChange 함수 호출
                onChange={handleTextChange}
                placeholder=" 오늘의 카페 탐방 아메리카노 한 잔으로 충전 완료!"
                className="textbox-glass" 
                style={{
                    // 내부 텍스트 스타일
                    fontFamily: 'Inter, pretentard',
                    lineHeight: '1.5',
                    marginTop:"16px",
                    height:"140px",
                    color:"#fff",
                }}
            />
            <div className="glass-change" style={{margin:"198px 0 0 329px"}}><img src={ChangeIcon} style={{width:"14px", height:"14px"}}/></div>
            <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between", marginTop:"10px"}}>
                <div className="textbox-glass" style={{height:"24px", width: "auto", padding:"0 10px", fontSize:"12px", color:"white", fontFamily:"300"}}>#인스타맛집</div>
                <div className="textbox-glass" style={{height:"24px", width: "auto", padding:"0 10px", fontSize:"12px", color:"white", fontFamily:"300"}}>#셀카찍기좋은카페</div>
                <div className="textbox-glass" style={{height:"24px", width: "auto", padding:"0 10px", fontSize:"12px", color:"white", fontFamily:"300"}}>#방송출연맛집</div>
                <div className="textbox-glass" style={{height:"24px", width: "auto", padding:"0 10px", fontSize:"12px", color:"white", fontFamily:"300"}}>더보기</div>
            </div>
        </div>

         <div className="createText-box" style={{height:"auto"}}>
            <div style={{fontSize:"20px", color:"#fff"}}>다른 플랫폼과 연동해보세요</div>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", marginTop:"16px"}}>
                <div 
                    style={{
                        display:"flex", 
                        justifyContent:"center", 
                        width:"64px", 
                        height:"64px", 
                        borderBottom: currentPlatform === 'insta' ? "3px solid #fff" : "3px solid transparent", // 'insta' 선택 시 border 표시
                        cursor: "pointer"
                    }}
                    onClick={() => setCurrentPlatform('insta')} // 클릭 시 'insta'로 변경
                >
                    <img src={Insta} style={{width:"49px", height:"49px"}}/>
                </div>
                <div 
                    style={{
                        display:"flex", 
                        justifyContent:"center", 
                        width:"64px", 
                        height:"64px", 
                        borderBottom: currentPlatform === 'facebook' ? "3px solid #fff" : "3px solid transparent", // 'facebook' 선택 시 border 표시
                        cursor: "pointer"
                    }}
                    onClick={() => setCurrentPlatform('facebook')} // 클릭 시 'facebook'으로 변경
                >
                    <img src={Face} style={{width:"49px", height:"49px"}}/>
                </div>
                <div 
                    style={{
                        display:"flex", 
                        justifyContent:"center", 
                        width:"64px", 
                        height:"64px", 
                        borderBottom: currentPlatform === 'thread' ? "3px solid #fff" : "3px solid transparent", // 'thread' 선택 시 border 표시
                        cursor: "pointer"
                    }}
                    onClick={() => setCurrentPlatform('thread')} // 클릭 시 'thread'로 변경
                >
                    <img src={Thread} style={{width:"49px", height:"49px"}}/>
                </div>
                <div 
                    style={{
                        display:"flex", 
                        justifyContent:"center", 
                        width:"64px", 
                        height:"64px", 
                        borderBottom: currentPlatform === 'twiter' ? "3px solid #fff" : "3px solid transparent", // 'twiter' 선택 시 border 표시
                        cursor: "pointer"
                    }}
                    onClick={() => setCurrentPlatform('twiter')} // 클릭 시 'twiter'로 변경
                >
                    <img src={Twiter} style={{width:"49px", height:"49px"}}/>
                </div>
            </div>
            <div className="glass-change" style={{margin:"234px 0 0 329px"}}><img src={ChangeIcon} style={{width:"14px", height:"14px"}}/></div>
            <textarea
                // 현재 선택된 플랫폼(currentPlatform)에 해당하는 텍스트를 표시
                value={platformTexts[currentPlatform]}
                // 텍스트 변경 시 handlePlatformTextChange 함수 호출
                onChange={handlePlatformTextChange}
                placeholder=" 오늘의 카페 탐방 아메리카노 한 잔으로 충전 완료! (플랫폼별 커스텀)"
                className="textbox-glass" 
                style={{
                    // 내부 텍스트 스타일
                    fontFamily: 'Inter, pretentard',
                    lineHeight: '1.5',
                    marginTop:"16px",
                    height:"140px",
                    color:"#fff",
                }}
            />
            <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between", marginTop:"10px"}}>
                <div className="textbox-glass" style={{height:"24px", width: "auto", padding:"0 10px", fontSize:"12px", color:"white", fontFamily:"300"}}>#인스타맛집</div>
                <div className="textbox-glass" style={{height:"24px", width: "auto", padding:"0 10px", fontSize:"12px", color:"white", fontFamily:"300"}}>#셀카찍기좋은카페</div>
                <div className="textbox-glass" style={{height:"24px", width: "auto", padding:"0 10px", fontSize:"12px", color:"white", fontFamily:"300"}}>#방송출연맛집</div>
                <div className="textbox-glass" style={{height:"24px", width: "auto", padding:"0 10px", fontSize:"12px", color:"white", fontFamily:"300"}}>더보기</div>
            </div>
        </div>

        <div className="createText-box" style={{height:"auto"}}>
            <div style={{fontSize:"20px", color:"#fff"}}>사진 변경 및 수정</div>
            <div className="edit-glass" style={{height:"auto", marginTop:"16px", padding:"20px 12px"}}>
                <div className="edit-in">
                    <div><img src={Img1} style={{width:"115px", height:"139px", marginRight:"12px"}}/></div>
                    <div><img src={Img2} style={{width:"115px", height:"139px", marginRight:"12px"}}/></div>
                    <div><img src={Img3} style={{width:"115px", height:"139px", marginRight:"12px"}}/></div>
                    <div><img src={Img4} style={{width:"115px", height:"139px"}}/></div>
                </div>
            </div>
        </div>
        <div  style={{zIndex:"2000", paddingTop:"17px",paddingBottom:"50px", backgroundColor:"#1F1F1F"}}>
            <Link to="/mypin"><div className="upload-button">업로드</div></Link>
        </div>
        </>
    )
}

export default PincreateFinal