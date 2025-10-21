import React, { useState, useRef, useEffect } from "react";
import Map from "./img/map.png";
import Arrow3 from "./img/arrow3.png"
import Plus from "./img/plusIcon.png"

import Img1 from "./img/pinmapimg1.png"
import Img2 from "./img/pinmapimg2.png"
import Img3 from "./img/pinmapimg3.png"

import Icon from "./img/heart.png"

// 두 손가락 사이의 거리를 계산 (컴포넌트 외부에 유지)
// 두 손가락 사이의 거리를 계산 (유클리드 거리)
const getDistance = (touches) => {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
};

// 이동(Translate) 값이 허용된 경계 내에 있는지 확인하고 보정하는 헬퍼 함수
const clampTranslation = (
    currentTranslate,
    containerSize, 
    mapIntrinsicSize, // CSS에 설정된 이미지의 원래 크기 (픽셀)
    zoom
) => {
    const mapSize = mapIntrinsicSize * zoom;
    let newTranslate = currentTranslate;
    
    if (mapSize > containerSize) {
        // 1. 최소 이동량 (minTranslate): 지도의 우측 끝이 컨테이너의 우측 끝에 닿았을 때의 값 (음수)
        const minTranslate = -(mapSize - containerSize); 
        
        // 2. 최대 이동량 (maxTranslate): 지도의 좌측 끝이 컨테이너의 좌측 끝에 닿았을 때의 값 (0)
        const maxTranslate = 0; 

        // 3. 현재 이동량을 [minTranslate, maxTranslate] 범위 내로 제한
        newTranslate = Math.max(minTranslate, Math.min(maxTranslate, newTranslate));
        
        
    } else {
        // 지도가 화면보다 작거나 같을 때 (최소 줌 레벨)
        // 지도를 컨테이너 중앙에 위치시킵니다.
        newTranslate = 0;
    }
    return newTranslate;
};


function Pinmap() {
    // 1. UI 렌더링을 위한 주 상태들
    const [zoomLevel, setZoomLevel] = useState(1.0); 
    const [translateX, setTranslateX] = useState(0); 
    const [translateY, setTranslateY] = useState(0); 

    // 2. 이벤트 핸들러 내에서 최신 상태 및 임시 변수를 참조하기 위한 Ref
    const stateRef = useRef({
        zoomLevel: 1.0,
        translateX: 0,
        translateY: 0,
        initialDistance: null,
        initialZoom: 1.0,
        initialTranslateX: 0,
        initialTranslateY: 0,
        isDragging: false,
        lastTouchX: 0,
        lastTouchY: 0,
    });
    
    // 3. 렌더링 상태가 변경될 때마다 stateRef를 업데이트합니다. (최신 값 동기화)
    useEffect(() => {
        stateRef.current.zoomLevel = zoomLevel;
        stateRef.current.translateX = translateX;
        stateRef.current.translateY = translateY;
    }, [zoomLevel, translateX, translateY]);

    // 4. 나머지 Ref들
    const containerRef = useRef(null); 
    
    // --- useEffect를 사용하여 DOM에 이벤트 리스너 등록 (Passive: false 적용) ---
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const ref = stateRef.current;
        
        // ----------------- 고정된 이미지 크기 (CSS와 일치해야 함!) -----------------
        // ⚠️ 이 값들은 CSS의 .pinmap-bg img { width: 1331.25px; height: 852px; }과 일치해야 합니다.
        const IMG_WIDTH = 1331.25; 
        const IMG_HEIGHT = 852; 

        // ----------------- Panning/Zooming Logic -----------------
        
        const handleTouchStart = (event) => {
            if (event.touches.length === 2) {
                // 🚀 핀치 줌 모드
                ref.initialDistance = getDistance(event.touches);
                ref.initialZoom = ref.zoomLevel;
                ref.initialTranslateX = ref.translateX;
                ref.initialTranslateY = ref.translateY;
                ref.isDragging = false;
            } else if (event.touches.length === 1) {
                // ✋ 드래그(Panning) 모드
                const touch = event.touches[0];
                ref.isDragging = true;
                ref.lastTouchX = touch.clientX;
                ref.lastTouchY = touch.clientY;
                ref.initialDistance = null;
            }
        };

        const handleTouchMove = (event) => {
            const containerWidth = container.offsetWidth;
            const containerHeight = container.offsetHeight;

            if (event.touches.length === 2 && ref.initialDistance !== null) {
                // 🚀 핀치 줌 (Zoom)
                const newDistance = getDistance(event.touches);
                const scaleFactor = newDistance / ref.initialDistance;
                const targetZoom = ref.initialZoom * scaleFactor; 

                const MIN_ZOOM = 1.0;
                const MAX_ZOOM = 1.5; // 최대 줌 레벨
                const finalZoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, targetZoom));
                
                // 1. Z O O M  업데이트
                setZoomLevel(finalZoom); 
                
                // 2. T R A N S L A T I O N  경계 보정
                const correctedX = clampTranslation(
                    ref.translateX, containerWidth, IMG_WIDTH, finalZoom
                );
                const correctedY = clampTranslation(
                    ref.translateY, containerHeight, IMG_HEIGHT, finalZoom
                );
                
                setTranslateX(correctedX);
                setTranslateY(correctedY);
                
                // 핀치 줌 시 화면 스크롤 방지
                event.preventDefault(); 
                
            } else if (ref.isDragging && event.touches.length === 1) {
                // ✋ 드래그 (Panning)
                const touch = event.touches[0];
                const dx = touch.clientX - ref.lastTouchX;
                const dy = touch.clientY - ref.lastTouchY;
                
                const tempTranslateX = ref.translateX + dx;
                const tempTranslateY = ref.translateY + dy;

                // 드래그 후 경계 보정
                const newTranslateX = clampTranslation(
                    tempTranslateX, containerWidth, IMG_WIDTH, ref.zoomLevel 
                );
                const newTranslateY = clampTranslation(
                    tempTranslateY, containerHeight, IMG_HEIGHT, ref.zoomLevel 
                );

                // 렌더링 및 ref 업데이트
                setTranslateX(newTranslateX);
                setTranslateY(newTranslateY);
                
                ref.lastTouchX = touch.clientX;
                ref.lastTouchY = touch.clientY;
                ref.translateX = newTranslateX; 
                ref.translateY = newTranslateY; 

                // 드래그 시 스크롤 방지
                event.preventDefault(); 
            }
        };

        const handleTouchEnd = () => {
            ref.initialDistance = null;
            ref.isDragging = false;
        };

        // 이벤트 리스너 등록
        container.addEventListener('touchstart', handleTouchStart, { passive: false });
        container.addEventListener('touchmove', handleTouchMove, { passive: false });
        container.addEventListener('touchend', handleTouchEnd); 

        return () => {
            container.removeEventListener('touchstart', handleTouchStart);
            container.removeEventListener('touchmove', handleTouchMove);
            container.removeEventListener('touchend', handleTouchEnd);
        };
    // 종속성 배열을 비워 이벤트 리스너가 한 번만 등록되도록 합니다.
    }, []); 

    // ----------------- JSX 렌더링 -----------------
    return (
        <>
            <div 
                className="pinmap-bg"
                ref={containerRef}>
                <img 
                    src={Map} 
                    style={{
                        // translate와 scale을 합쳐서 적용합니다.
                        transform: `translate(${translateX}px, ${translateY}px) scale(${zoomLevel})`,
                        // 줌의 중심을 이미지의 좌측 상단으로 설정
                        transformOrigin: '0 0', 
                    }}
                />
            </div>

            <div className="pinmap-box">
                <div className="rute-button">ON</div>
                <div className="rute-button"><img src={Arrow3}/></div>
            </div>

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
                    <div className="pinmap-keyword"><img src={Plus} style={{width: "15px", height: "15px"}}/></div>
                </div>

                <div style={{display:"flex", flexDirection:"column", width:"361px", height:"56px", marginTop:"10px"}}>
                    <div style={{fontSize:"20px", color:"#fff"}}>좋아요 TOP 10</div>
                    <div style={{fontSize:"12px", color:"#fff", marginTop:"10px"}}>사람들이 가장 좋아하는 장소에요</div>
                </div>

                <div style={{display:"flex", marginTop:"16px", width:"361px", justifyContent: "space-between"}}>
                    <div style={{width:"108px", height:"152px", position:"relative"}}>
                        <div className="rute-button" style={{width:"21px", height:"21px", zIndex:"500", position:"absolute"}}>1</div>
                        <img src={Img1} style={{margin:"7px 0 0 5px"}}/>
                        <div style={{fontSize:"14px", color:"#fff", height:"20px", margin:"8px 0 0 5px"}}>서울 숲 공원</div>
                        <div style={{height: "14px", margin:"4px 0 0 5px", display:"flex",flexDirection:"row", alignItems: "center"}}>
                            <img src={Icon} style={{width:"14px", height:"14px", opacity:"50%"}}/>
                            <div style={{fontSize:"14px", color:"#989898", marginLeft:"4px"}}>108</div>
                        </div>
                    </div>

                    <div style={{width:"108px", height:"152px", position:"relative"}}>
                        <div className="rute-button" style={{width:"21px", height:"21px", zIndex:"500", position:"absolute"}}>2</div>
                        <img src={Img2} style={{margin:"7px 0 0 5px"}}/>
                        <div style={{fontSize:"14px", color:"#fff", height:"20px", margin:"8px 0 0 5px"}}>차이들</div>
                        <div style={{height: "14px", margin:"4px 0 0 5px", display:"flex",flexDirection:"row", alignItems: "center"}}>
                            <img src={Icon} style={{width:"14px", height:"14px", opacity:"50%"}}/>
                            <div style={{fontSize:"14px", color:"#989898", marginLeft:"4px"}}>108</div>
                        </div>
                    </div>

                    <div style={{width:"108px", height:"152px", position:"relative"}}>
                        <div className="rute-button" style={{width:"21px", height:"21px", zIndex:"500", position:"absolute"}}>3</div>
                        <img src={Img3} style={{margin:"7px 0 0 5px"}}/>
                        <div style={{fontSize:"14px", color:"#fff", height:"20px", margin:"8px 0 0 5px"}}>엠플레이그라운드</div>
                        <div style={{height: "14px", margin:"4px 0 0 5px", display:"flex",flexDirection:"row", alignItems: "center"}}>
                            <img src={Icon} style={{width:"14px", height:"14px", opacity:"50%"}}/>
                            <div style={{fontSize:"14px", color:"#989898", marginLeft:"4px"}}>108</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Pinmap;