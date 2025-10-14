import React, { useState, useRef, useEffect, useCallback } from 'react';

/**
 * Custom hook logic (formerly useDialLogic.js)
 */
const useDialLogic = (maxValue = 30, degreesPerValue = 360, onValueChange) => { 
    // State for the current rotation angle and the final calculated value
    const [rotation, setRotation] = useState(0); 
    const [value, setValue] = useState(0);       

    // Refs for tracking DOM element, drag state, and the angle when dragging started
    const dialRef = useRef(null);
    const isDragging = useRef(false);
    const lastAngle = useRef(0);

    // Helper function to calculate the angle from the dial center to the mouse position
    const calculateAngle = useCallback((clientX, clientY) => {
        if (!dialRef.current) return 0;

        const rect = dialRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const dx = clientX - centerX;
        const dy = clientY - centerY;

        // Use Math.atan2 to get the angle in radians, then convert to degrees
        return Math.atan2(dy, dx) * (180 / Math.PI);
    }, []); // Dependencies are empty as ref doesn't change

    // Helper function to calculate the value based on rotation
    const calculateValue = useCallback((currentRotation) => {
      const invertedRotation = -currentRotation;

              // 1. 회전 값을 0에서 degreesPerValue (360) 범위로 정규화합니다.
        const normalizedRotation = (invertedRotation % degreesPerValue + degreesPerValue) % degreesPerValue;
        
        // 2. 값(Value)을 계산합니다.
        // calculatedValue는 0.0에서 maxValue (30.0) 사이의 값이 됩니다.
        let calculatedValue = (normalizedRotation / degreesPerValue) * maxValue;

        // 최종 값을 반올림합니다.
        let finalValue = Math.round(calculatedValue);

        // 3. 🌟 핵심 수정: 결과가 0일 때, maxValue로 조정합니다.
        // 0도는 보통 360도의 끝 지점과 동일하게 계산됩니다.
        if (finalValue === 0) {
            finalValue = maxValue; 
        }
        
        // 주의: 이 로직은 360도 회전 시 30이 아닌 31이 계산되는 오차를 방지하기 위해 
        // Math.round()를 사용했으나, 완벽하게 1~30 사이를 보장하기 위해
        // Math.ceil() 또는 Math.floor()와 추가 조정이 필요할 수 있습니다.
        // 현재 로직에서는 360도에 가까울 때 30으로 반올림되고, 0도에 가까울 때 0으로 반올림되므로,
        // 0일 때 30으로 강제하는 것이 가장 간단합니다.

        return finalValue;
    }, [maxValue, degreesPerValue]);

    // Handler for starting the drag
    const handleMouseDown = useCallback((e) => {
        e.preventDefault();
        isDragging.current = true;

        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;

        lastAngle.current = calculateAngle(clientX, clientY);
    }, [calculateAngle]);

    // Handler for mouse movement (only active when dragging is true)
    const handleMouseMove = useCallback((e) => {
        if (!isDragging.current) return;

        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;

        const currentAngle = calculateAngle(clientX, clientY);
        
        let delta = currentAngle - lastAngle.current;

        // Small correction for wrap-around when crossing the -180/180 degree line
        if (Math.abs(delta) > 180) {
            delta = delta > 0 ? delta - 360 : delta + 360;
        }
        
        lastAngle.current = currentAngle; // 마지막 각도 업데이트

        setRotation(prevRotation => {
            const newRotation = prevRotation + delta;

            const newValue = calculateValue(newRotation);
            
            // 🚨 setValue 호출: 업데이트될 newRotation 값을 기반으로 value를 계산 및 업데이트
            setValue(newValue);
            
            if (onValueChange) {
              onValueChange(newValue);
            }

            return newRotation;
        });
    }, [calculateAngle, calculateValue, onValueChange]);

    // Handler for stopping the drag
    const handleMouseUp = useCallback(() => {
        isDragging.current = false;
    }, []);

    // Effect to attach and cleanup global mouse event listeners (crucial for dragging outside the dial)
    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        
        document.addEventListener('touchmove', handleMouseMove, { passive: false }); // 이동 중 기본 동작(스크롤) 방지
        document.addEventListener('touchend', handleMouseUp);

        const currentDial = dialRef.current;
        if (currentDial) {
            // touchstart는 Passive가 아니어야 preventDefault가 작동합니다.
            currentDial.addEventListener('touchstart', handleMouseDown, { passive: false });
        }
        
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);

            document.removeEventListener('touchmove', handleMouseMove, { passive: false });
            document.removeEventListener('touchend', handleMouseUp);

            if (currentDial) {
                currentDial.removeEventListener('touchstart', handleMouseDown, { passive: false });
            }
        };
    }, [handleMouseMove, handleMouseUp, handleMouseDown]); // Re-run effect if handlers change

    // Initialize value on mount
    useEffect(() => {
        const initialValue = calculateValue(rotation);
        setValue(initialValue);

        if (onValueChange) {
        // 다음 프레임(렌더링 완료 후)에 호출되도록 지연
        const timeoutId = setTimeout(() => {
            onValueChange(initialValue);
        }, 0); 
        return () => clearTimeout(timeoutId); // 클린업 함수
      }
    }, [calculateValue, rotation, onValueChange]);


    return { rotation, value, dialRef, handleMouseDown };
};
// -------------------------------------------------------------

/**
 * A reusable circular dial component that allows interactive rotation to adjust a value.
 */
export default function DialControl({ onValueChange }) { 
  // useDialLogic Hook을 사용하여 로직을 가져옵니다.
  const MAX_VALUE = 30; // 💡 상수화하여 사용
  const RADIUS_PX = 250; // dial-box의 반지름 (500px/2)
  const TICK_DISTANCE = RADIUS_PX - 20; // 250px - 20px = 230px (숫자가 테두리 안쪽에 오도록)

  // useDialLogic Hook을 사용하여 로직을 가져옵니다.
  const { rotation, value, dialRef, handleMouseDown } = useDialLogic(MAX_VALUE, 360, onValueChange);
  // 💡 눈금(Tick)을 표시하기 위한 배열을 생성합니다. (예: 0, 10, 20, ..., 100)
  const totalTicks = 30;
  const tickNumbers = Array.from({ length: totalTicks + 1 }, (_, i) => i);

  return (
    <div className="mypin-dial">
      
      {/* 상단 날짜값 */}
      <div className='mypintop-text'>2025.09.{value}</div>

        {/* 1. 다이얼 컨테이너 */}
        <div className="dial-box">

          {/* 2. 회전하는 다이얼 요소 */}
          <div
            ref={dialRef}
            onMouseDown={handleMouseDown}
            className="dial-number"
            style={{
              // Hook에서 계산된 rotation 값을 CSS transform에 적용
              transform: `rotate(${rotation}deg)`,
              userSelect: 'none',
              WebkitUserSelect: 'none',
            }}>

            {/* 💡 배열을 맵핑하여 눈금 숫자들을 생성합니다. */}
            {tickNumbers.map((num, index) => {

              if (num === 0) {
                return null;
              }

              const max = MAX_VALUE; // ✅ useDialLogic의 maxValue와 일치
              const degrees = 360;

              // 눈금 숫자가 위치해야 할 각도를 계산합니다.
              const tickRotation = (num / max) * degrees; // 0은 0도, 30은 360도
              
              // 눈금 유형 결정
              const isMajorTick = num % 3 === 0; // 3의 배수

              // 눈금 막대와 숫자에 모두 적용할 공통 Transform
              const commonTransform = `
                rotate(${tickRotation}deg) 
                translate(0, -${TICK_DISTANCE}px)
              `;

                return (
                  <React.Fragment key={index}>

                    {/* 1. ✅ 눈금 막대 (Line) 추가 */}
                    <div
                      className={`dial-tick-line ${isMajorTick ? 'major-tick' : 'minor-tick'}`}
                        style={{
                        // 눈금 막대는 다이얼의 회전과 함께 움직이며 기울어지도록 합니다.
                          transform: commonTransform
                      }}
                    />

                    {/* 2. 숫자 (Number) - 5의 배수일 때만 숫자를 렌더링합니다. */}
                    {isMajorTick && (
                      <div
                        className="dial-tick-number"
                        style={{
                          transform: `${commonTransform} rotate(${-tickRotation - rotation}deg)`
                        }}
                      >
                        {num}
                      </div>
                    )}
                  </React.Fragment>
                );
            })}
        </div>
      </div>
    </div>
  );
}