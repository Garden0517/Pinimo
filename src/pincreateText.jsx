import React, { useState } from "react";
import {Link } from 'react-router-dom';

import Arrow from "./img/arrowIcon.png"
import Arrow2 from "./img/arrow2Icon.png"

import Insta from "./img/insta.png"
import Face from "./img/facebook.png"
import Thread from './img/thread.png'
import Twiter from './img/twiter.png'

function PincreateText() {
    const [selectedPlatforms, setSelectedPlatforms] = useState([]); 

    const handleCheckboxChange = (event) => {
    const { value, checked } = event.target; // 현재 체크박스의 값과 체크 상태를 가져옴
    
    setSelectedPlatforms(prev => {
        if (checked) {
            // ✅ 체크된 경우: 기존 배열에 새 값(value)을 추가
            return [...prev, value];
        } else {
            // ❌ 체크 해제된 경우: 기존 배열에서 해당 값(value)을 제거
            return prev.filter(platform => platform !== value);
        }
    });
};

    return (
        <>
        <div style={{height: "130px", position: "fixed", backgroundColor:"#1F1F1F", zIndex:"1000"}}>
            <div className="create-top">
                <div className="title-box">
                    <div><Link to='/pincreateEdit'><img src={Arrow}/></Link></div>
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

        <div className="createText-box" style={{height:"76px", marginTop:"147px"}}>
            <div style={{fontSize:"20px", color:"#fff"}}>게시물 제목을 입력하세요</div>
            <div className="textbox-glass" style={{height:"38px"}}></div>
        </div>

        <div className="createText-box" style={{height:"240px"}}>
            <div style={{fontSize:"20px", color:"#fff"}}>내용을 입력하세요</div>
            <div className="textbox-glass" style={{height:"210px"}}></div>
        </div>
        
        <div className="createText-box" style={{height:"94px"}}>
            <div style={{fontSize:"20px", color:"#fff"}}>감정을 입력하세요</div>
            <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between"}}>
                <div className="textbox-glass" style={{height:"24px", width: "35px"}}></div>
                <div className="textbox-glass" style={{height:"24px", width: "35px"}}></div>
                <div className="textbox-glass" style={{height:"24px", width: "35px"}}></div>
                <div className="textbox-glass" style={{height:"24px", width: "35px"}}></div>
                <div className="textbox-glass" style={{height:"24px", width: "35px"}}></div>
                <div className="textbox-glass" style={{height:"24px", width: "35px"}}></div>
            </div>
            <div className="textbox-glass" style={{height:"24px"}}></div>
        </div>

        <div className="createText-box" style={{height:"100px"}}>
            <div style={{fontSize:"20px", color:"#fff"}}>원하는 태그를 추가하세요</div>
            <div className="textbox-glass" style={{height:"38px"}}></div>
            <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between"}}>
                <div className="textbox-glass" style={{height:"24px", width: "auto", padding:"0 10px", fontSize:"12px", color:"white"}}>#인스타맛집</div>
                <div className="textbox-glass" style={{height:"24px", width: "auto", padding:"0 10px", fontSize:"12px", color:"white"}}>#셀카찍기좋은카페</div>
                <div className="textbox-glass" style={{height:"24px", width: "auto", padding:"0 10px", fontSize:"12px", color:"white"}}>#방송출연맛집</div>
                <div className="textbox-glass" style={{height:"24px", width: "auto", padding:"0 10px", fontSize:"12px", color:"white"}}>더보기</div>
            </div>
        </div>

        <div className="createText-box2" >
            <div className="create-icon"></div>
            <div style={{fontSize:"20px", color:"#fff", marginLeft:"16px"}}>원하는 태그를 추가하세요</div>
            <img src={Arrow} style={{width:"24px", height:"24px", transform: "scaleX(-1)", marginLeft:"97px"}}/>
        </div>

        <div className="createText-box2" >
            <div className="create-icon"></div>
            <div style={{fontSize:"20px", color:"#fff", marginLeft:"16px"}}>위치를 설정하세요</div>
            <img src={Arrow} style={{width:"24px", height:"24px", transform: "scaleX(-1)", marginLeft:"152px"}}/>
        </div>

        <div className="createText-box" style={{height:"160px"}}>
            <div style={{fontSize:"20px", color:"#fff"}}>다른 플랫폼과 연동해보세요</div>
            <div className="textbox-glass" style={{height:"120px", padding:"0 24px", width:"313px", justifyContent: "space-between"}}>
                <div className="platfom">
                    <img src={Insta} style={{marginBottom:"16px", width:"49px", height:"49px"}}/>
                    <div style={{display:"flex", width:"20px", height:"20px", justifyContent: "center"}}>
                        <input 
                            type="checkbox" 
                            id="option1" 
                            name="myRadioGroup" 
                            value="opt1" 
                            className="hidden-radio"
                            style={{margin:"0", padding:"0"}}
                            checked={selectedPlatforms.includes('opt1')}
                            onChange={handleCheckboxChange}/>
                        <label 
                            htmlFor="option1"
                            className="custom-radio-label"
                            style={{margin:"0", padding:"0"}}>
                        </label>
                   </div>
                </div>
                <div className="platfom">
                    <img src={Face} style={{marginBottom:"16px", width:"49px", height:"49px"}}/>
                    <div style={{display:"flex", width:"20px", height:"20px", justifyContent: "center"}}>
                        <input 
                            type="checkbox" 
                            id="option2" 
                            name="myRadioGroup" 
                            value="opt2" 
                            className="hidden-radio"
                            style={{margin:"0", padding:"0"}}
                            checked={selectedPlatforms.includes('opt2')}
                            onChange={handleCheckboxChange}/>
                        <label 
                            htmlFor="option2"
                            className="custom-radio-label"
                            style={{margin:"0", padding:"0"}}>
                        </label>
                   </div>
                </div>
                <div className="platfom">
                    <img src={Thread} style={{marginBottom:"16px", width:"49px", height:"49px"}}/>
                    <div style={{display:"flex", width:"20px", height:"20px", justifyContent: "center"}}>
                        <input 
                            type="checkbox" 
                            id="option3" 
                            name="myRadioGroup" 
                            value="opt3" 
                            className="hidden-radio"
                            style={{margin:"0", padding:"0"}}
                            checked={selectedPlatforms.includes('opt3')}
                            onChange={handleCheckboxChange}/>
                        <label 
                            htmlFor="option3"
                            className="custom-radio-label"
                            style={{margin:"0", padding:"0"}}>
                        </label>
                   </div>
                </div>
                <div className="platfom">
                    <img src={Twiter} style={{marginBottom:"16px", width:"49px", height:"49px"}}/>
                    <div style={{display:"flex", width:"20px", height:"20px", justifyContent: "center"}}>
                        <input 
                            type="checkbox" 
                            id="option4" 
                            name="myRadioGroup" 
                            value="opt4" 
                            className="hidden-radio"
                            style={{margin:"0", padding:"0"}}
                            checked={selectedPlatforms.includes('opt4')}
                            onChange={handleCheckboxChange}/>
                        <label 
                            htmlFor="option4"
                            className="custom-radio-label"
                            style={{margin:"0", padding:"0"}}>
                        </label>
                   </div>
                </div>
            </div>
        </div>

        <Link to='/pincreateFinal'><div className="next-button" style={{marginTop:"17px",marginLeft:"319px", marginBottom:"120px"}}>다음 <img src={Arrow2} style={{width: "12px", height: "12px", marginLeft: "3px"}}/></div></Link>
        </>
    )
}

export default PincreateText