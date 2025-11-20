import React, { useState } from "react";

import Bg from "./img/profileOther.png"

import Logo from "./img/logo.png"
import Bell from "./img/bell.png"
import Profile from "./img/profile-profile.png"
import Friend from "./img/plusIcon.png"
import Icon1 from "./img/user.png"
import Icon2 from "./img/heart.png"
import Icon3 from "./img/thumbs-up.png"
import Edit from "./img/profileEditIcon.png"


function ProfileOther () {

    const [isProfileClicked, setIsProfileClicked] = useState(false);
    const [isPeedClicked, setIsPeedClicked] = useState(false); 


    const handleProfileClick = () => {
        setIsProfileClicked(!isProfileClicked);
        if (isPeedClicked) {
            setIsPeedClicked(false);
        }
    };

    const handlePeedClick = () => {
        // friend-peed 클릭 시 상태를 토글합니다.
        setIsPeedClicked(!isPeedClicked);
    };

    const [selectedValue, setSelectedValue] = useState('opt1'); // 'opt1'을 기본값으로 설정

    const handleRadioChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <>
            <div className="profile-bg" style={{backgroundImage: `url(${Bg})`}}>
                <div className="profile-top">
                    <img src= {Logo}/>
                    <img src= {Bell} style={{width: "24px", height: "24px"}}/>
                </div>
                {isPeedClicked && (
                    <div className="peed-detail">
                        <input 
                            type="radio" 
                            id="option1" 
                            name="myRadioGroup" 
                            value="opt1" 
                            className="hidden-radio"
                            checked={selectedValue === 'opt1'}
                            onChange={handleRadioChange}/>
                        <label 
                            htmlFor="option1"
                            className="custom-radio-label">
                            친한 친구
                        </label>
                            <input 
                            type="radio" 
                            id="option2" 
                            name="myRadioGroup" 
                            value="opt2" 
                            className="hidden-radio"
                            checked={selectedValue === 'opt2'}
                            onChange={handleRadioChange}/>
                        <label 
                            htmlFor="option2" 
                            className="custom-radio-label">
                            학교 동기
                        </label>
                        <input 
                            type="radio" 
                            id="option3" 
                            name="myRadioGroup" 
                            value="opt3" 
                            className="hidden-radio"
                            checked={selectedValue === 'opt3'}
                            onChange={handleRadioChange}/>
                        <label 
                            htmlFor="option3" 
                            className="custom-radio-label">
                            러닝 크루
                        </label>
                        <input 
                            type="radio" 
                            id="option4" 
                            name="myRadioGroup" 
                            value="opt4" 
                            className="hidden-radio"
                            checked={selectedValue === 'opt4'}
                            onChange={handleRadioChange}/>
                        <label 
                            htmlFor="option4" 
                            className="custom-radio-label">
                            고등학교 친구
                        </label>
                        <input 
                            type="radio" 
                            id="option5" 
                            name="myRadioGroup" 
                            value="opt5" 
                            className="hidden-radio"
                            checked={selectedValue === 'opt5'}
                            onChange={handleRadioChange}/>
                        <label 
                            htmlFor="option5" 
                            className="custom-radio-label">
                            독서모임
                        </label>
                    </div>
                )}
                <div className="profile-first" style={{marginTop: "335px"}}>
                    <img src= {Profile}/>
                    <div className="friend-box" onClick={handleProfileClick}>
                        <img src= {Friend} style={{width: "12px", height: "12px"}}/>
                        {isProfileClicked ? "게시글 보기" : "친구 추가"} 
                    </div>
                </div>
                <div className="profile-box">
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <div className="text-first">유다빈</div>
                        {isProfileClicked && (
                            <div className="friend-peed" onClick={handlePeedClick}>
                                <img src= {Edit}/> 그룹설정
                            </div>
                        )}
                    </div>
                    <div className="text-second">#KOR1015</div>
                    <div className="text-third">서울을 사랑하는 사람</div>
                    <div className="profile-iconbox">
                        <div className="profile-icon">
                            <img src={Icon1} style={{width: "21px", height: "21px", marginRight: "3px"}}/>
                            134
                        </div>
                        <div className="profile-icon">
                            <img src={Icon2} style={{width: "21px", height: "21px", marginRight: "3px"}}/>
                            3.4k
                        </div>
                        <div className="profile-icon">
                            <img src={Icon3} style={{width: "21px", height: "21px", marginRight: "3px"}}/>
                            1.1k
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileOther