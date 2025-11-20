// src/hooks/useMapInteraction.js (경로 확인)

import { useState, useRef, useEffect } from "react";

// ----------------- 헬퍼 함수 -----------------

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
        // 맵이 컨테이너보다 클 때 (확대된 상태)
        const minTranslate = -(mapSize - containerSize); 
        const maxTranslate = 0; 
        newTranslate = Math.max(minTranslate, Math.min(maxTranslate, newTranslate));
    } else {
        // 맵이 컨테이너보다 작거나 같을 때
        newTranslate = 0;
    }
    return newTranslate;
};


// ----------------- Custom Hook 정의 -----------------

/**
 * 지도 줌(Pinch Zoom), 패닝(Panning), 페이지 스와이프 로직을 처리하는 Hook.
 * @param {React.MutableRefObject<HTMLElement>} containerRef 지도가 들어있는 DOM 컨테이너의 Ref.
 * @param {function} onSwipeLeft 왼쪽 페이지 스와이프 시 호출될 콜백.
 * @param {function} onSwipeRight 오른쪽 페이지 스와이프 시 호출될 콜백.
 * @param {function} onPanelToggle 하단 패널 토글 시 호출될 콜백 (true:열림, false:닫힘). ⭐️ 새로 추가
 * @returns {{zoomLevel: number, translateX: number, translateY: number}} 현재 지도 변환 상태
 */
const useMapInteraction = (containerRef, onSwipeLeft, onSwipeRight, onPanelToggle) => { // ⭐️ onPanelToggle 추가
    // 1. UI 렌더링을 위한 주 상태들
    const [zoomLevel, setZoomLevel] = useState(1.0); 
    const [translateX, setTranslateX] = useState(0); 
    const [translateY, setTranslateY] = useState(0); 

    // 2. 지도 조작을 위한 Ref
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

    // 3. 페이지 스와이프 및 패널 스와이프 조작을 위한 Ref 
    const swipeRef = useRef({
        startX: 0,
        startY: 0, // ⭐️ Y 좌표 추가
        isSwipingPage: false, 
        isMapInteraction: false, 
        isSwipingPanel: false, // ⭐️ 패널 스와이프 상태 추가
    });
    
    // 4. 상태가 변경될 때마다 stateRef를 업데이트합니다.
    useEffect(() => {
        stateRef.current.zoomLevel = zoomLevel;
        stateRef.current.translateX = translateX;
        stateRef.current.translateY = translateY;
    }, [zoomLevel, translateX, translateY]);

    
    // 5. 터치 이벤트 리스너 등록 및 로직 처리
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const ref = stateRef.current;
        const swipe = swipeRef.current; 
        
        // ----------------- 고정된 이미지 크기 (PinmapX.jsx와 일치해야 함!) -----------------
        const IMG_WIDTH = 1331.25; 
        const IMG_HEIGHT = 852; 
        const PANEL_HANDLE_HEIGHT = 50; // 하단 패널 스와이프 활성화 영역 높이 (50px)

        // ----------------- Panning/Zooming & Swipe Logic -----------------
        
        const handleTouchStart = (event) => {
            const touch = event.touches[0];
            const containerWidth = container.offsetWidth;
            const mapWidth = IMG_WIDTH * ref.zoomLevel;
            
            if (event.touches.length === 2) {
                // 🚀 핀치 줌 모드 (지도 조작 우선)
                ref.initialDistance = getDistance(event.touches);
                ref.initialZoom = ref.zoomLevel;
                ref.initialTranslateX = ref.translateX;
                ref.initialTranslateY = ref.translateY;
                ref.isDragging = false;
                
                swipe.isMapInteraction = true; 
                swipe.isSwipingPage = false;
                swipe.isSwipingPanel = false;
            } else if (event.touches.length === 1) {
                
                // 줌 레벨이 1.0보다 크거나, 맵이 컨테이너보다 클 때 (패닝 필요)
                if (mapWidth > containerWidth || ref.zoomLevel > 1.05) { 
                    // ✋ 드래그(Panning) 모드
                    ref.isDragging = true;
                    ref.lastTouchX = touch.clientX;
                    ref.lastTouchY = touch.clientY;
                    swipe.isMapInteraction = true; 
                    swipe.isSwipingPage = false;
                    swipe.isSwipingPanel = false;
                } else {
                    // 👈 페이지 스와이프 또는 패널 스와이프 모드
                    ref.isDragging = false;
                    swipe.isMapInteraction = false; 
                    swipe.startX = touch.clientX; 
                    swipe.startY = touch.clientY; // ⭐️ Y 좌표 저장
                    swipe.isSwipingPage = true; 
                    
                    // ⭐️ 하단 50px 영역에서 시작되었는지 확인
                    const isBottomArea = container.offsetHeight - touch.clientY <= PANEL_HANDLE_HEIGHT; 
                    
                    swipe.isSwipingPanel = isBottomArea;
                    // 페이지 스와이프와 패널 스와이프를 동시에 처리하지 않도록 우선순위를 줄 수 있지만,
                    // 여기서는 isSwipingPanel이 true이면, handleTouchEnd에서 패널 로직을 우선 처리하도록 합니다.
                }
                ref.initialDistance = null;
            }
        };

        const handleTouchMove = (event) => {
            const containerWidth = container.offsetWidth;
            const containerHeight = container.offsetHeight;
            
            // ⭐️ 지도 조작 중이거나 핀치 줌 중일 때만 기본 동작(페이지 스와이프/스크롤)을 막습니다.
            if (swipe.isMapInteraction || event.touches.length === 2) {
                event.preventDefault(); 
            } 

            if (event.touches.length === 2 && ref.initialDistance !== null) {
                // 🚀 핀치 줌 로직 (동일) 
                const newDistance = getDistance(event.touches);
                const scaleFactor = newDistance / ref.initialDistance;
                const targetZoom = ref.initialZoom * scaleFactor; 

                const MIN_ZOOM = 1.0;
                const MAX_ZOOM = 3.0; 
                const finalZoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, targetZoom));
                
                setZoomLevel(finalZoom); 
                
                // Translation 경계 보정
                const correctedX = clampTranslation(ref.translateX, containerWidth, IMG_WIDTH, finalZoom);
                const correctedY = clampTranslation(ref.translateY, containerHeight, IMG_HEIGHT, finalZoom);
                
                setTranslateX(correctedX);
                setTranslateY(correctedY);
                
            } else if (ref.isDragging && event.touches.length === 1 && swipe.isMapInteraction) {
                // ✋ 드래그 (Panning) 로직 (동일)
                const touch = event.touches[0];
                const dx = touch.clientX - ref.lastTouchX;
                const dy = touch.clientY - ref.lastTouchY;
                
                const tempTranslateX = ref.translateX + dx;
                const tempTranslateY = ref.translateY + dy;

                // 드래그 후 경계 보정
                const newTranslateX = clampTranslation(tempTranslateX, containerWidth, IMG_WIDTH, ref.zoomLevel);
                const newTranslateY = clampTranslation(tempTranslateY, containerHeight, IMG_HEIGHT, ref.zoomLevel);

                // 렌더링 및 ref 업데이트
                setTranslateX(newTranslateX);
                setTranslateY(newTranslateY);
                
                ref.lastTouchX = touch.clientX;
                ref.lastTouchY = touch.clientY;
                ref.translateX = newTranslateX; 
                ref.translateY = newTranslateY; 
            }
        };

        const handleTouchEnd = (event) => {
            const touch = event.changedTouches[0];
            const dx = touch.clientX - swipe.startX;
            const dy = touch.clientY - swipe.startY; // ⭐️ Y 변화량 사용
            const SWIPE_THRESHOLD = 80; // 페이지 전환을 위한 최소 수평 드래그 거리 (80px)
            const PANEL_SWIPE_THRESHOLD = 50; // 패널 토글을 위한 최소 수직 드래그 거리 (50px)

            // 1. 하단 패널 스와이프 로직 (지도 조작 중이 아니고, 패널 스와이프 모드일 때)
            if (swipe.isSwipingPanel && !swipe.isMapInteraction) {
                 // 위로 스와이프 (dy가 음수)
                if (dy < -PANEL_SWIPE_THRESHOLD) {
                    if (onPanelToggle) onPanelToggle(true); // 패널 열기
                }
                // 아래로 스와이프 (dy가 양수)
                else if (dy > PANEL_SWIPE_THRESHOLD) {
                    if (onPanelToggle) onPanelToggle(false); // 패널 닫기
                }
            }
            
            // 2. 일반 페이지 스와이프 로직 (패널 스와이프 모드가 아니었고, 지도 조작 중이 아닐 때)
            else if (swipe.isSwipingPage && !swipe.isMapInteraction) {
                 if (Math.abs(dx) > SWIPE_THRESHOLD) {
                    if (dx < 0) { // dx가 음수면 왼쪽으로 스와이프 (다음 페이지)
                        if (onSwipeLeft) onSwipeLeft(); 
                    } else { // dx가 양수면 오른쪽으로 스와이프 (이전 페이지)
                        if (onSwipeRight) onSwipeRight();
                    }
                }
            }


            // 상태 초기화
            ref.initialDistance = null;
            ref.isDragging = false;
            swipe.isSwipingPage = false; 
            swipe.isMapInteraction = false; 
            swipe.isSwipingPanel = false; // ⭐️ 패널 스와이프 상태 초기화
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
    // ⭐️ onPanelToggle을 종속성 배열에 추가
    }, [containerRef, onSwipeLeft, onSwipeRight, onPanelToggle]); 

    return { zoomLevel, translateX, translateY };
}

export default useMapInteraction;