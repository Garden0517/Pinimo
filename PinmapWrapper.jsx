import React, { useState,} from 'react';
// 💡 react-swipeable 라이브러리 import
import { useSwipeable } from 'react-swipeable'; 

// 🚨 사용자님의 파일에서 onSwipeLeft, onSwipeRight props를 받는 컴포넌트들을 import 합니다.
import Pinmap from './Pinmap.jsx';
import PinmapOther from './PinmapOther.jsx'; 
import PinmapLike from './PinmapLike.jsx';

// --- 페이지 목록 정의 ---
const PAGES = [
    { name: 'PinmapOther', Component: PinmapOther, index: 0 }, // 0번 인덱스 (왼쪽)
    { name: 'Pinmap', Component: Pinmap, index: 1 },// 1번 인덱스 (중앙 메인)
    { name: 'PinmapLike', Component: PinmapLike, index: 2 } // 2번 인덱스 (오른쪽)
];
const LAST_INDEX = PAGES.length - 1; // 2

function PinmapWrapper() {
    // 현재 페이지 인덱스 상태 (초기값: 1, 즉 'pinmap')
    const [currentPageIndex, setCurrentPageIndex] = useState(1); 
    
    // --- 페이지 이동 핸들러 ---
    const handleSwipeLeft = () => {
        setCurrentPageIndex(prevIndex => {
            const nextIndex = Math.min(prevIndex + 1, LAST_INDEX);
            if (nextIndex !== prevIndex) {
                console.log(`[Wrapper] Left Swipe (Pinmap -> PinmapLike)`);
            }
            return nextIndex;
        });
    };

    const handleSwipeRight = () => {
        setCurrentPageIndex(prevIndex => {
            const nextIndex = Math.max(prevIndex - 1, 0);
            if (nextIndex !== prevIndex) {
                console.log(`[Wrapper] Right Swipe (Pinmap -> PinmapOther)`);
            }
            return nextIndex;
        });
    };

    // 💡 useSwipeable 훅을 사용하여 스와이프 기능 구현
    const swipeHandlers = useSwipeable({
        // 사용자가 왼쪽으로 스와이프 -> 페이지 인덱스 증가 (시각적으로 왼쪽으로 밀림)
        onSwipedLeft: handleSwipeLeft,
        // 사용자가 오른쪽으로 스와이프 -> 페이지 인덱스 감소 (시각적으로 오른쪽으로 밀림)
        onSwipedRight: handleSwipeRight,
        // 지도의 줌/패닝 기능과 충돌을 막기 위해 터치 동작에 대해 기본 동작 방지
        preventDefaultTouchmoveEvent: false, 
        trackMouse: true, // 마우스 드래그도 지원
    });

    // 현재 인덱스에 기반한 CSS transform 값 계산
    const transformStyle = `translateX(-${currentPageIndex * 100}vw)`;
    
    return (
        // 1. 전체 화면 컨테이너 (Viewport)에 스와이프 핸들러 연결
        <div 
            {...swipeHandlers} // 💡 스와이프 핸들러 연결
            style={{ 
                width: '100vw', 
                height: '100vh', 
                overflow: 'hidden', 
                position: 'relative',
                // 지도의 패닝/줌 동작이 페이지 스와이프를 방해할 수 있으므로 
                // 지도가 줌된 상태에서는 이 컨테이너에서 스와이프가 일어나지 않도록 처리해야 합니다.
                // 하지만 현재 하위 컴포넌트의 지도 로직이 touchmove.preventDefault()를 포함하므로,
                // 지도 영역 밖이나 확대되지 않은 상태에서만 페이지 스와이프가 동작할 가능성이 높습니다.
                margin: 0,
                padding: 0
            }}
        >
            
            {/* 2. 페이지 슬라이드 컨테이너 (총 300vw 너비) */}
            <div style={{
                display: 'flex',
                width: `${PAGES.length * 100}vw`, // 300vw
                height: '100%',
                transition: 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)', 
                transform: transformStyle // 현재 인덱스에 따라 컨테이너 이동
            }}>
                
                {/* 3. 각 페이지 컴포넌트 렌더링 */}
                {PAGES.map((page) => (
                    // 각 페이지는 정확히 100vw를 차지해야 합니다.
                    <div key={page.name} style={{ width: `100vw`, height: '100%', flexShrink: 0 }}>
                        {/* Pinmap, PinmapOther, PinmapLike 컴포넌트가 자체적으로 
                            onSwipeLeft, onSwipeRight props를 받으므로 전달해줍니다.
                            (비록 상위에서 스와이프를 처리하지만, 하위 컴포넌트의 props 구조를 유지합니다.) 
                        */}
                        <page.Component 
                            onSwipeLeft={handleSwipeLeft}
                            onSwipeRight={handleSwipeRight}
                        />
                    </div>
                ))}
            </div>

            {/* 현재 페이지 디버깅 정보 */}
            <div style={{ 
                position: 'fixed', 
                top: 10, 
                left: 10, 
                color: 'white', 
                background: 'rgba(0,0,0,0.6)', 
                padding: '5px 10px', 
                borderRadius: '8px', 
                zIndex: 1000,
                fontSize: '14px'
            }}>
                현재 화면: **{PAGES[currentPageIndex].name}** (Index: {currentPageIndex})
            </div>
        </div>
    );
}

export default PinmapWrapper;