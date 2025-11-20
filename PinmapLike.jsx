import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import useMapInteraction from "./useMapInteraction"; // 🔥 훅 임포트
// 🚨 이미지 경로는 실제 프로젝트 구조에 맞게 수정해주세요.
import Map from "./img/map/map.png"
import Arrow3 from "./img/arrow3.png"

import Img1 from "./img/map/img1.png"
import Img2 from "./img/map/img2.png"
import Img3 from "./img/map/img3.png"
import Img4 from "./img/map/img4.png"
import Img5 from "./img/map/img5.png"

import Bg1 from "./img/map/bg1.png"
import Bg2 from "./img/map/bg2.png"
import Bg3 from "./img/map/bg3.png"

import Rute3 from "./img/map/map_rute3.png"

// ❌ getDistance, clampTranslation 헬퍼 함수 삭제

// 🚨 PinmapLike 컴포넌트 이름을 명확하게 변경합니다.
function PinmapLike({ onSwipeLeft, onSwipeRight }) { 
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
                <div className="container" style={{ width: '100%', height: '100%', position: 'relative' }}>
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
                        src={Rute3} // Rute1, Rute3으로 변경
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
                <div style={{width:"100%", display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                            <img src={Img1}/>
                            <div style={{fontSize:"12px", color:"#fff", marginTop:"8px"}}>이세현</div>
                        </div>
                         <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                            <img src={Img2}/>
                            <div style={{fontSize:"12px", color:"#fff", marginTop:"8px"}}>박현진</div>
                        </div>
                         <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                            <img src={Img3}/>
                            <div style={{fontSize:"12px", color:"#fff", marginTop:"8px"}}>이지혜</div>
                        </div>
                         <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                            <img src={Img4}/>
                            <div style={{fontSize:"12px", color:"#fff", marginTop:"8px"}}>홍수진</div>
                        </div>
                         <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                            <img src={Img5}/>
                            <div style={{fontSize:"12px", color:"#fff", marginTop:"8px"}}>정영찬</div>
                        </div>
                </div>
                <div style={{display:"flex", flexDirection:"column", width:"361px", height:"56px", marginTop:"30px"}}>
                    <div style={{fontSize:"20px", color:"#fff"}}>유다희님이 방문한 장소</div>
                    <div style={{fontSize:"12px", color:"#fff", marginTop:"8px"}}>친구가 방문한 장소를 확인해보세요</div>
                </div>

                <div style={{display:"flex", marginTop:"16px", width:"361px", justifyContent: "space-between"}}>
                    <div>
                        <img src={Bg1}/>
                        <div style={{fontSize:"14px", color:"#fff"}}>스페이스 카페</div>
                        <div style={{fontSize:"12px", color:"#ABABAB"}}>25분 전</div>
                    </div>

                    <div>
                        <img src={Bg2}/>
                        <div style={{fontSize:"14px", color:"#fff"}}>차이들</div>
                        <div style={{fontSize:"12px", color:"#ABABAB"}}>1시간 전</div>
                    </div>

                    <div>
                        <img src={Bg3}/>
                        <div style={{fontSize:"14px", color:"#fff"}}>엠플레이그라운드</div>
                        <div style={{fontSize:"12px", color:"#ABABAB"}}>3시간 전</div>
                    </div>
                </div>
            </div>
        </>
    );
}
// export default Pinmap; // 기존 내보내기 이름도 PinmapLike로 변경하는 것을 권장
export default PinmapLike;