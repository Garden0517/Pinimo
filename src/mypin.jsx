import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom'; 
import DialControl from "./DialControl.jsx";
import Bg1 from "./img/mypin/mypin_bg1.png"
import Bg2 from "./img/mypin/mypin_bg2.png"
import Bg3 from "./img/mypin/mypin_bg3.png"
import Bg4 from "./img/mypin/mypin_bg4.png"
import Bg5 from "./img/mypin/mypin_bg5.png"
import Bg6 from "./img/mypin/mypin_bg6.png"
import Bg7 from "./img/mypin/mypin_bg7.png"
import Bg8 from "./img/mypin/mypin_bg8.png"
import Bg9 from "./img/mypin/mypin_bg9.png"
import Bg10 from "./img/mypin/mypin_bg10.png"
import Bg11 from "./img/mypin/mypin_bg11.png"
import Bg12 from "./img/mypin/mypin_bg12.png"
import Bg13 from "./img/mypin/mypin_bg13.png"
import Bg14 from "./img/mypin/mypin_bg14.png"
import Bg15 from "./img/mypin/mypin_bg15.png"
import Bg16 from "./img/mypin/mypin_bg16.png"
import Bg17 from "./img/mypin/mypin_bg17.png"
import Bg18 from "./img/mypin/mypin_bg18.png"
import Bg19 from "./img/mypin/mypin_bg19.png"
import Bg20 from "./img/mypin/mypin_bg20.png"
import Bg21 from "./img/mypin/mypin_bg21.png"
import Bg22 from "./img/mypin/mypin_bg22.png"
import Bg23 from "./img/mypin/mypin_bg23.png"
import Bg24 from "./img/mypin/mypin_bg24.png"
import Bg25 from "./img/mypin/mypin_bg25.png"
import Bg26 from "./img/mypin/mypin_bg26.png"
import Bg27 from "./img/mypin/mypin_bg27.png"
import Bg28 from "./img/mypin/mypin_bg28.png"
import Bg29 from "./img/mypin/mypin_bg29.png"
import Bg30 from "./img/mypin/mypin_bg30.png"

function Mypin() {
    
    const navigate = useNavigate(); 
    // 1. 다이얼 값을 저장할 상태
    const [currentValue, setCurrentValue] = useState(0); 

    const backgroundImages = useMemo(() => ([
        // 인덱스 0은 비워두거나 기본값으로 사용 (다이얼 값이 1부터 시작하므로)
        null, 
        Bg1, Bg2, Bg3, Bg4, Bg5, Bg6, Bg7, Bg8, Bg9, Bg10,
        Bg11, Bg12, Bg13, Bg14, Bg15, Bg16, Bg17, Bg18, Bg19, Bg20,
        Bg21, Bg22, Bg23, Bg24, Bg25, Bg26, Bg27, Bg28, Bg29, Bg30
    ]), []); // 이미지는 변하지 않으므로 종속성 배열은 비워둡니다.


    // 2. DialControl에서 값을 받을 핸들러 함수
    const handleValueChange = (newValue) => {
        setCurrentValue(newValue);
    };

    const handleBackgroundClick = () => {
        // value 값이 1일 때만 페이지를 이동합니다.
        if (currentValue === 1) {
            navigate('/pinpost'); 
        }
    };

    // 3. 값에 따라 배경 이미지 URL을 결정하는 함수
    const getBackgroundImage = (value) => {
        // 값이 1에서 30 사이이고 배열에 해당 이미지가 존재하는지 확인합니다.
        if (value >= 1 && value <= 30 && backgroundImages[value]) {
            // value가 1일 때 backgroundImages[1]을 가져옵니다.
            return `url(${backgroundImages[value]})`;
        }
        
        // 유효하지 않은 값이거나 0일 경우 기본 배경 사용 (Bg1을 기본값으로 사용한다고 가정)
        return `url(${Bg1})`; 
    };


    
    

    const dynamicStyle = {
        backgroundImage: getBackgroundImage(currentValue)
    };
    
    return (
        <>
        
            {/* 🌟 mypin-bg 클래스에 동적 style을 적용합니다. */}
<div 
                className="mypin-bg" 
                style={dynamicStyle}
                onClick={handleBackgroundClick} // 클릭 이벤트 추가
            >
                {/* 4. DialControl에 콜백 함수를 전달합니다. */}
                <DialControl onValueChange={handleValueChange}/>
            </div>
        </>
    )
}
export default Mypin;
