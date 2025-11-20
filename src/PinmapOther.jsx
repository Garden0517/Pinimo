import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import useMapInteraction from "./useMapInteraction"; // 🔥 훅 임포트
// 🚨 이미지 경로는 실제 프로젝트 구조에 맞게 수정해주세요.
import Map from "./img/map/map.png"
import Arrow3 from "./img/arrow3.png"
import Plus from "./img/plusIcon.png"

import Img1 from "./img/map/Other1.png"
import Img2 from "./img/map/Other2.png"
// import Img3 from "./img/pinmapimg3.png" // 사용되지 않아 주석 처리

import Rute2 from "./img/map/map_rute2.png"

// ❌ getDistance, clampTranslation 헬퍼 함수 삭제

// 🚨 onSwipeLeft와 onSwipeRight props를 받습니다.
function PinmapOther({ onSwipeLeft, onSwipeRight }) {
    // 1. UI 렌더링을 위한 주 상태들
    const [isRouteVisible, setIsRouteVisible] = useState(true);

    // 2. 맵 컨테이너 Ref 정의
    const containerRef = useRef(null); 
    
    // 3. 🔥 Custom Hook을 사용하여 지도 상호작용 상태를 가져옵니다.
    const { zoomLevel, translateX, translateY } = useMapInteraction(
        containerRef, 
        onSwipeLeft, 
        onSwipeRight
    );

    // ❌ 모든 상태 Ref (stateRef, swipeRef) 및 useEffect 로직 삭제됨!
    
    // 6. 경로 이미지 토글 핸들러 함수
    const toggleRoute = () => {
        setIsRouteVisible(prev => !prev);
    }

    const navigate = useNavigate();

    // 왼쪽 영역 터치 시 실행될 함수
    const goToPreviousPage = () => {
        // 💡 navigate 함수에 이동할 리액트 라우트 경로를 전달
        // 'previous_page.html' 대신, 라우터에 정의된 경로를 사용합니다.
        navigate('/Pinmap'); 
    };

    // 오른쪽 영역 터치 시 실행될 함수
    const goToNextPage = () => {
        navigate('/Pinmap');
    };

    // ----------------- JSX 렌더링 (기존 코드 유지) -----------------
    return (
        <>
                <div className="container" style={{ width: '100%', height: '100%', position: 'relative' }} >
                    <div id="left-touch-area" style={{width:"10%", height:"70%", position:"absolute", zIndex:'480', bottom:"0"}} onClick={goToPreviousPage}></div>
                    <div id="right-touch-area" style={{width:"10%", height:"70%", position:"absolute", zIndex:'480', right: '0', bottom:"0"}} onClick={goToNextPage}></div>
                    <div 
                    className="pinmap-bg"
                    ref={containerRef}
                    style={{
                        width: '100%',
                        height: '100%',
                        overflow: 'hidden', // 지도가 줌되어 튀어나가도 잘라줍니다.
                        position: 'relative', // 자식 요소(지도 이미지)의 absolute 기준
                        zIndex: 1, // 지도가 다른 UI 위에 올라타지 않도록 낮은 zIndex
                    }}
                >
                    {/* 맵 배경 이미지 */}
                    <img 
                        src={Map} 
                        alt="Map Background"
                        style={{
                            position: 'absolute', // ⭐️ 지도 이미지는 absolute로 설정
                            // 맵의 원래 크기를 여기에 명시해야 `useMapInteraction`의 IMG_WIDTH/HEIGHT와 일치합니다.
                            // (CSS 파일이 없으므로 inline style로 지정합니다.)
                            width: '1331.25px', // useMapInteraction.js의 IMG_WIDTH와 일치
                            height: '852px',   // useMapInteraction.js의 IMG_HEIGHT와 일치
                            // 줌/패닝 적용
                            transform: `translate(${translateX}px, ${translateY}px) scale(${zoomLevel})`,
                            transformOrigin: 'top left', // 변환 기준점을 좌측 상단으로 설정
                        }}
                    />
                    {/* 경로 이미지 (맵과 같은 변환 적용) */}
                    <img
                        src={Rute2} // Rute1, Rute3으로 변경
                        alt="Map Route"
                        className="pinmap-rute"
                        style={{
                            position: 'absolute', // ⭐️ 경로 이미지도 absolute로 설정
                            width: '1331.25px', // 맵 이미지와 같은 크기
                            height: '852px',
                            // 줌/패닝 적용
                            transform: `translate(${translateX}px, ${translateY}px) scale(${zoomLevel})`,
                            transformOrigin: 'top left',
                            opacity: isRouteVisible ? 1 : 0, 
                            transition: 'opacity 0.3s ease',
                        }}
                    />
                </div>
                
                <div className="pinmap-box">
                    <div className="rute-button" onClick={toggleRoute}>
                        {isRouteVisible ? "ON" : "OFF"}
                    </div>
                    <div className="rute-button"><img src={Arrow3} alt="Arrow"/></div>
                </div>
            </div>

            {/* ... 하단 정보 섹션 (생략) ... */}
            <div className="pinmap-under">
                <div style={{display:"flex", flexDirection:"column", width:"361px", height:"100px",}}>
                    <div style={{display:"flex", flexDirection:"row", marginTop:"10px", justifyContent:"space-between"}}>
                        <div style={{fontSize:"12px", color:"#7FFF6C"}}>맞춤형 장소 추천</div>
                        <div style={{fontSize:"14px", color:"#979797"}}>3시간 전</div>
                    </div>
                    <div style={{fontSize:"20px", color:"#fff"}}>아이오니아 공원</div>
                    <div style={{display:"flex", flexDirection:"row",}}>
                        <div style={{fontSize:"12px", color:"#979797", marginRight:"6px"}}>핀스토리</div>
                        <div style={{fontSize:"12px", color:"#7FFF6C", marginRight:"6px"}}>1,135</div>
                        <div style={{fontSize:"12px", color:"#979797", marginRight:"6px"}}>핀스토리</div>
                        <div style={{fontSize:"12px", color:"#7FFF6C", marginRight:"6px"}}>3467</div>
                    </div>
                    <div style={{display:"flex", flexDirection:"row", marginTop:"5px"}}>
                        <div style={{fontSize:"14px", color:"#fff", marginRight:"14px"}}>543m</div>
                        <div style={{fontSize:"14px", color:"#fff"}}>서울시 영등포구 여의도동 11-1</div>
                    </div>
                </div>

                <div style={{display:"flex", flexDirection:"column", marginTop:"16px", width:"361px", justifyContent: "space-between"}}>
                    <img src={Img1}/>
                    <img src={Img2} style={{marginTop:"6px"}}/>
                </div>
            </div>
        </>
    );
}
export default PinmapOther;