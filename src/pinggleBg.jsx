import React, { useState } from "react";

import {Link } from 'react-router-dom';

import BgIcon from "./img/bgIcon1.png";
import EditIcon from "./img/editIcon.png";

import Item1 from "./img/pinggle/influencer_item_1.png"
import Item2 from "./img/pinggle/influencer_item_2.png"
import Item3 from "./img/pinggle/influencer_item_3.png"

import Item4 from "./img/pinggle/influencer_item_4.png"
import Item5 from "./img/pinggle/influencer_item_5.png"
import Item6 from "./img/pinggle/influencer_item_6.png"

// 배열 1: 첫 번째 줄 이미지 그룹
const itemGroupA = [
    Item1,
    Item2,
    Item3,
];

// 배열 2: import된 변수를 사용하여 배열 정의
const itemGroupB = [
    Item4,
    Item5,
    Item6,
];

function PinggleBg() {

    // 1. 첫 번째 줄 이미지 배열의 현재 인덱스
    const [indexA, setIndexA] = useState(0); 
    
    // 2. 두 번째 줄 이미지 배열의 현재 인덱스
    const [indexB, setIndexB] = useState(0);

    // 첫 번째 줄 div 클릭 핸들러
    const handleNextImageA = () => {
        // 현재 인덱스에 1을 더하고, 배열 길이로 나눈 나머지(%)를 새로운 인덱스로 설정합니다.
        // (배열의 끝에 도달하면 자동으로 0으로 돌아가 순환)
        setIndexA((prevIndex) => (prevIndex + 1) % itemGroupA.length);
    };

    // 두 번째 줄 div 클릭 핸들러
    const handleNextImageB = () => {
        setIndexB((prevIndex) => (prevIndex + 1) % itemGroupB.length);
    };
    return (
        <>
            <div className="pinggleBg-bg">
                <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between", margin:"92px 0 0 315px", width:"42px", height:"104px"}}>
                <Link to='/pinggle'><div className="bgicon"><img src={BgIcon} /></div></Link>
                <div className="editicon"><img src={EditIcon} /></div>
            </div>
                <div className="pinggle-itembox">
                    {/* 첫 번째 줄: 클릭 시 handleNextImageA 실행 */}
                    <div className="pinggle-item" onClick={handleNextImageA}>
                        {/* 배열 A의 현재 인덱스에 해당하는 이미지를 표시 */}
                        <img src={itemGroupA[indexA]} alt="Item A" />
                        {/* 기존에 있던 나머지 2개의 img 태그는 제거했습니다. */}
                    </div>
                    
                    {/* 두 번째 줄: 클릭 시 handleNextImageB 실행 */}
                    <div className="pinggle-item" onClick={handleNextImageB}>
                        {/* 배열 B의 현재 인덱스에 해당하는 이미지를 표시 */}
                        <img src={itemGroupB[indexB]} alt="Item B" />
                        {/* 기존에 있던 나머지 2개의 img 태그는 제거했습니다. */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default PinggleBg;