import React, { useState, useRef } from "react";
import useMapInteraction from "./useMapInteraction"; // 🔥 훅 임포트
// 🚨 이미지 경로는 실제 프로젝트 구조에 맞게 수정해주세요.
import Map from "./img/map/map.png"
import Arrow3 from "./img/arrow3.png"
import Plus from "./img/plusIcon.png"

import Img1 from "./img/pinmapimg1.png"
import Img2 from "./img/pinmapimg2.png"
import Img3 from "./img/pinmapimg3.png"

import Rute1 from "./img/map/map_rute1.png"
import Icon from "./img/heart.png"


// ❌ getDistance, clampTranslation 헬퍼 함수 삭제

// 🚨 onSwipeLeft와 onSwipeRight props를 받습니다.
function Pinmap({ onSwipeLeft, onSwipeRight }) {
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

    // ----------------- JSX 렌더링 (기존 코드 유지) -----------------
    return (
        <>
            <div className="container" style={{ width: '100%', height: '100%', position: 'relative' }}>
                <div 
                className="pinmap-bg"
                ref={containerRef}
                style={{
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden', // 지도가 줌되어 튀어나가도 잘라줍니다.
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
                    src={Rute1} // Rute1, Rute3으로 변경
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
                <div style={{display:"flex", flexDirection:"column", width:"361px", height:"56px",}}>
                    <div style={{fontSize:"20px", color:"#fff"}}>다양한 장소와 발자취를 공유해보세요</div>
                    <div style={{fontSize:"12px", color:"#fff", marginTop:"10px"}}>나의 취향에 맞는 경로와 장소를 찾아보세요</div>
                </div>

                <div style={{display:"flex", padding:"16px 0", width:"361px", justifyContent: "space-between"}}>
                    <div className="pinmap-keyword">좋아요 Top 10</div>
                    <div className="pinmap-keyword">추천장소</div>
                    <div className="pinmap-keyword">유형별 안내</div>
                    <div className="pinmap-keyword">아이템</div>
                    <div className="pinmap-keyword"><img src={Plus} alt="Plus Icon" style={{width: "15px", height: "15px"}}/></div>
                </div>

                <div style={{display:"flex", flexDirection:"column", width:"361px", height:"56px", marginTop:"10px"}}>
                    <div style={{fontSize:"20px", color:"#fff"}}>좋아요 TOP 10</div>
                    <div style={{fontSize:"12px", color:"#fff", marginTop:"10px"}}>사람들이 가장 좋아하는 장소에요</div>
                </div>

                <div style={{display:"flex", marginTop:"16px", width:"361px", justifyContent: "space-between"}}>
                    <div style={{width:"108px", height:"152px", position:"relative"}}>
                        <div className="rute-button" style={{width:"21px", height:"21px", zIndex:"500", position:"absolute"}}>1</div>
                        <img src={Img1} alt="Location 1" style={{margin:"7px 0 0 5px"}}/>
                        <div style={{fontSize:"14px", color:"#fff", height:"20px", margin:"8px 0 0 5px"}}>서울 숲 공원</div>
                        <div style={{height: "14px", margin:"4px 0 0 5px", display:"flex",flexDirection:"row", alignItems: "center"}}>
                            <img src={Icon} alt="Heart Icon" style={{width:"14px", height:"14px", opacity:"50%"}}/>
                            <div style={{fontSize:"14px", color:"#989898", marginLeft:"4px"}}>108</div>
                        </div>
                    </div>

                    <div style={{width:"108px", height:"152px", position:"relative"}}>
                        <div className="rute-button" style={{width:"21px", height:"21px", zIndex:"500", position:"absolute"}}>2</div>
                        <img src={Img2} alt="Location 2" style={{margin:"7px 0 0 5px"}}/>
                        <div style={{fontSize:"14px", color:"#fff", height:"20px", margin:"8px 0 0 5px"}}>차이들</div>
                        <div style={{height: "14px", margin:"4px 0 0 5px", display:"flex",flexDirection:"row", alignItems: "center"}}>
                            <img src={Icon} alt="Heart Icon" style={{width:"14px", height:"14px", opacity:"50%"}}/>
                            <div style={{fontSize:"14px", color:"#989898", marginLeft:"4px"}}>108</div>
                        </div>
                    </div>

                    <div style={{width:"108px", height:"152px", position:"relative"}}>
                        <div className="rute-button" style={{width:"21px", height:"21px", zIndex:"500", position:"absolute"}}>3</div>
                        <img src={Img3} alt="Location 3" style={{margin:"7px 0 0 5px"}}/>
                        <div style={{fontSize:"14px", color:"#fff", height:"20px", margin:"8px 0 0 5px"}}>엠플레이그라운드</div>
                        <div style={{height: "14px", margin:"4px 0 0 5px", display:"flex",flexDirection:"row", alignItems: "center"}}>
                            <img src={Icon} alt="Heart Icon" style={{width:"14px", height:"14px", opacity:"50%"}}/>
                            <div style={{fontSize:"14px", color:"#989898", marginLeft:"4px"}}>108</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Pinmap;