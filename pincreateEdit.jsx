import React,{useState} from "react";
import {Link } from 'react-router-dom';

import Arrow from "./img/arrowIcon.png"
import Arrow2 from "./img/arrow2Icon.png"
import Change from "./img/changeIcon.png"

import Img1 from "./img/pincreate/img1.png"
import Img2 from "./img/pincreate/img7.png"
import Img3 from "./img/pincreate/img8.png"
import Img4 from "./img/pincreate/img9.png"

import Chacter from "./img/pincreate/chacter.png"

import Face from "./img/pincreate/face.png"
import Background from "./img/pincreate/background.png"
import Signboard from "./img/pincreate/signboard.png"

function PincreateEdit () {
        // 1. 스위치 상태 관리 (기본값: 꺼짐/false)
    const [isOn, setIsOn] = useState(false);

    // 2. 토글 핸들러
    const handleToggle = () => {
        setIsOn(prev => !prev);
    };

    // 3. 슬라이더의 동적 스타일 정의
    const sliderStyle = {
        // 기본 스타일
        width: '18px',
        height: '18px',
        borderRadius: '50%',
        backgroundColor: '#fff', // 슬라이더 색상
        transition: 'transform 0.3s ease-in-out',
        cursor: 'pointer',
        
        // 상태에 따른 위치 이동 (40px 트랙에서 18px 슬라이더, 2px 여백)
        transform: isOn 
            ? 'translateX(20px)' // ON 상태: 오른쪽으로 이동 (40 - 18 - 2 = 20px)
            : 'translateX(1px)',  // OFF 상태: 왼쪽 여백 1px
    };
    
    // 4. 트랙의 동적 스타일 (선택 사항: 켜짐 상태일 때 배경색 변경)
    const trackStyle = {
        // 기본 스타일 (CSS에서 가져옴)
        display: 'flex',
        width: '40px',
        height: '20px',
        marginLeft: '25px',
        borderRadius: '45px',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',

        // 켜짐 상태일 때 배경색 변경
        backgroundColor: isOn ? '#7FFF6C' : 'rgba(255, 255, 255, 0.1)',
        alignItems: 'center', // 슬라이더를 수직 중앙에 배치
        padding: '1px',      // 슬라이더가 끝에 붙지 않도록 약간의 패딩
    };

    // 1. 첫 번째 슬라이더(모자이크) 값 상태
    const [mosaicValue, setMosaicValue] = useState(50); 
        
    // 2. 두 번째 슬라이더(깊이감) 값 상태
    const [depthValue, setDepthValue] = useState(50); 

    // 3. 첫 번째 슬라이더 핸들러
    const handleMosaicChange = (e) => {
        setMosaicValue(e.target.value);
    };

    // 4. 두 번째 슬라이더 핸들러
    const handleDepthChange = (e) => {
        setDepthValue(e.target.value);
    };

    // 5. 커스텀 슬라이더 핸들 위치 계산을 위한 CSS 변수 (각각 별도 계산)
    const mosaicPercentage = `${mosaicValue}%`;
    const depthPercentage = `${depthValue}%`;

    // 버튼 클릭 핸들러 (상태를 업데이트)
    const [activeTab, setActiveTab] = useState('Ai 편집');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };


    // 다중 선택된 버튼의 이름을 저장하는 배열 상태
        const [selectedBrands, setSelectedBrands] = useState([]);

        const handleBrandToggle = (brandName) => {
            setSelectedBrands(prevSelectedBrands => {
                // 이미 선택된 항목이면 (배열에 이미 존재하면)
                if (prevSelectedBrands.includes(brandName)) {
                    // 해당 항목을 제외하고 새로운 배열을 반환 (선택 해제)
                    return prevSelectedBrands.filter(name => name !== brandName);
                } else {
                    // 선택되지 않은 항목이면 (배열에 없으면)
                    // 기존 배열에 추가하고 새로운 배열을 반환 (선택)
                    return [...prevSelectedBrands, brandName];
                }
            });
        };
        
    const defaultStyle = {}; // 기본 스타일
    const selectedStyle = { backgroundColor: '#7FFF6C', color: '#000' }; // 선택 시 스타일 (예: 초록색 배경, 검은색 텍스트)

    return (
        <>
        <div style={{height: "574px", position: "fixed"}}>
            <div className="create-top">
                <div className="title-box">
                    <div><Link to='/pincreate'><img src={Arrow}/></Link></div>
                    <div style={{fontSize: "24px", color:"#fff", width: "42px", marginLeft: "136px"}}>제작</div>
                    <Link to='/pinmap'><div className="x-button">x</div></Link>
                </div>
            </div>
            <div className="under-box">
                <div className="under-bar"></div>
                <div className="under-bar"></div>
                <div className="under-bar"></div>
            </div>
            <div 
                className="chacter"
                style={{ display: isOn ? 'block' : 'none' }} 
            >
                <img src={Chacter}/>
            </div>
            <div className="edit">
                <img src={Face} style={{position:"absolute", zIndex:"991", opacity:"0"}}/>
                <img src={Background} style={{position:"absolute", zIndex:"993", opacity:"0"}}/>
                <img src={Signboard} style={{position:"absolute", zIndex:"995", opacity:"0"}}/>
            </div>
            <div className="imgEdit-box">
                <div className="img-scroll">
                    <div className="img-edit"><img src={Img4}/></div>
                    <div className="img-edit"><img src={Img1}/></div>
                    <div className="img-edit"><img src={Img2}/></div>
                    <div className="img-edit"><img src={Img3}/></div>
                </div>
            </div>
        </div>

        <div className="create-box">
            <div className="ai-masking">
                <div style={{fontSize: "20px", color:"#fff", marginTop: "12px",marginLeft: "16px"}}>AI 사진 마스킹</div>
                <div className="ai-box">
                    {/* 'Ai 편집' 버튼 클릭 시 activeTab을 'Ai 편집'으로 설정 */}
                    <div 
                        className="ai-button"
                        onClick={() => handleTabClick('Ai 편집')}
                        style={activeTab === 'Ai 편집' ? {backgroundColor: '#7FFF6C', color: '#000'} : {}} // 선택된 탭 스타일 추가 (선택 사항)
                    >   
                    <div style={{color:" #4e4e4eff"}}>
                        Ai 편집
                    </div>
                        
                    </div>
                    {/* '얼굴' 버튼 클릭 시 activeTab을 '얼굴'로 설정 */}
                    <div 
                        className="ai-button"
                        onClick={() => handleTabClick('얼굴')}
                        style={activeTab === '얼굴' ? {backgroundColor: '#7FFF6C', color: '#000'} : {}}
                    >
                        얼굴
                    </div>
                    {/* '배경' 버튼 클릭 시 activeTab을 '배경'으로 설정 */}
                    <div 
                        className="ai-button"
                        onClick={() => handleTabClick('배경')}
                        style={activeTab === '배경' ? {backgroundColor: '#7FFF6C', color: '#000'} : {}}
                    >
                        배경
                    </div>
                    {/* '상표' 버튼 클릭 시 activeTab을 '상표'로 설정 */}
                    <div 
                        className="ai-button"
                        onClick={() => handleTabClick('상표')}
                        style={activeTab === '상표' ? {backgroundColor: '#7FFF6C', color: '#000'} : {}}
                    >
                        상표
                    </div>
                </div>
            </div>

            {/* 1. Ai 편집 버튼에 해당하는 내용 */}
            {activeTab === 'Ai 편집' && (
                <div className="change-box" style={{height: "196px"}}>
                    <div style={{fontSize: "16px", color:"#fff", marginTop: "12px", marginLeft: "16px"}}>직접 입력하기</div>
                    <div className="changetext-box">
                        <div className="change-icon"><img src={Change} style={{width:"8px", height:"8px"}}/></div>
                    </div>
                    <Link to='/pincreateText'><div className="next-button" style={{marginTop:"36px",marginLeft:"319px"}}>다음 <img src={Arrow2} style={{width: "12px", height: "12px", marginLeft: "3px"}}/></div></Link>
                </div>
            )}

            {/* 2. 얼굴 버튼에 해당하는 내용 */}
            {activeTab === '얼굴' && (
                <div className="change-box" style={{height: "285px"}}>
                    <div className="face-first">
                        <div style={{fontSize: "16px", color:"#fff"}}>캐릭터</div>
                            <div onClick={handleToggle} style={trackStyle}>{/* 동적 스타일 적용*/}
                                <div style={sliderStyle} />
                            </div>
                        </div>
                    {/* 모자이크 슬라이더 (얼굴) */}
                    <div className="face-second">
                        <div style={{display:"flex", flexDirection: "row", color:"#fff", alignItems: "center", justifyContent: "space-between"}}>
                            <div style={{fontSize: "16px"}}>모자이크</div> <p>{mosaicValue}</p>
                        </div>
                        <div className="slider-container" style={{ width: '361px'}}>
                            {/* 실제 슬라이더 동작을 담당하는 input[type="range"] (숨겨져 있음) */}
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={mosaicValue}
                                onChange={handleMosaicChange}
                                className="custom-range-input"
                            />
                            
                            {/* 🌟 4. 시각적인 슬라이더 트랙과 핸들 🌟 */}
                            <div className="slider-track-wrapper">
                                {/* 트랙: 하얀색 2px 선 */}
                                <div className="slider-track"></div>
                                
                                {/* 핸들: #7FFF6C, 14px 원형 */}
                                <div 
                                    className="slider-handle" 
                                    style={{ left: mosaicPercentage  }} // 값에 따라 위치를 제어
                                />
                            </div>
                        </div>
                    </div>
                    <div className="face-third">
                        <div style={{display:"flex", flexDirection: "row", color:"#fff", alignItems: "center", justifyContent: "space-between"}}>
                            <div style={{fontSize: "16px"}}>깊이감</div> <p>{depthValue}</p>
                        </div>
                        <div className="slider-container" style={{ width: '361px' }}>
                            {/* 실제 슬라이더 동작을 담당하는 input[type="range"] (숨겨져 있음) */}
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={depthValue}
                                onChange={handleDepthChange}
                                className="custom-range-input"
                            />
                            
                            {/* 🌟 4. 시각적인 슬라이더 트랙과 핸들 🌟 */}
                            <div className="slider-track-wrapper">
                                {/* 트랙: 하얀색 2px 선 */}
                                <div className="slider-track"></div>
                                
                                {/* 핸들: #7FFF6C, 14px 원형 */}
                                <div 
                                    className="slider-handle" 
                                    style={{ left: depthPercentage  }} // 값에 따라 위치를 제어
                                />
                            </div>
                        </div>
                    </div>

                    <Link to='/pincreateText'><div className="next-button" style={{marginTop:"36px",marginLeft:"319px"}}>다음 <img src={Arrow2} style={{width: "12px", height: "12px", marginLeft: "3px"}}/></div></Link>
                </div>
            )}

            {/* 3. 배경 버튼에 해당하는 내용 */}
            {activeTab === '배경' && (
                <div className="change-box" style={{height: "285px"}}>
                    <div className="bg-button">
                        <div style={{display:"flex", flexDirection: "row", color:"#fff", alignItems: "center", justifyContent: "space-between"}}>
                            <div style={{fontSize: "16px"}}>모자이크</div> <p>{mosaicValue}</p>
                        </div>
                        <div className="slider-container" style={{ width: '361px'}}>
                            {/* 실제 슬라이더 동작을 담당하는 input[type="range"] (숨겨져 있음) */}
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={mosaicValue}
                                onChange={handleMosaicChange}
                                className="custom-range-input"
                            />
                            
                            {/* 🌟 4. 시각적인 슬라이더 트랙과 핸들 🌟 */}
                            <div className="slider-track-wrapper">
                                {/* 트랙: 하얀색 2px 선 */}
                                <div className="slider-track"></div>
                                
                                {/* 핸들: #7FFF6C, 14px 원형 */}
                                <div 
                                    className="slider-handle" 
                                    style={{ left: mosaicPercentage  }} // 값에 따라 위치를 제어
                                />
                            </div>
                        </div>
                    </div>
                    <div className="bg-button">
                        <div style={{display:"flex", flexDirection: "row", color:"#fff", alignItems: "center", justifyContent: "space-between"}}>
                            <div style={{fontSize: "16px"}}>깊이감</div> <p>{depthValue}</p>
                        </div>
                        <div className="slider-container" style={{ width: '361px' }}>
                            {/* 실제 슬라이더 동작을 담당하는 input[type="range"] (숨겨져 있음) */}
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={depthValue}
                                onChange={handleDepthChange}
                                className="custom-range-input"
                            />
                            
                            {/* 🌟 4. 시각적인 슬라이더 트랙과 핸들 🌟 */}
                            <div className="slider-track-wrapper">
                                {/* 트랙: 하얀색 2px 선 */}
                                <div className="slider-track"></div>
                                
                                {/* 핸들: #7FFF6C, 14px 원형 */}
                                <div 
                                    className="slider-handle" 
                                    style={{ left: depthPercentage  }} // 값에 따라 위치를 제어
                                />
                            </div>
                        </div>
                    </div>
                    <Link to='/pincreateText'><div className="next-button" style={{marginTop:"36px",marginLeft:"319px"}}>다음 <img src={Arrow2} style={{width: "12px", height: "12px", marginLeft: "3px"}}/></div></Link>
                </div>
            )}

            {/* 4. 상표 버튼에 해당하는 내용 */}
            {activeTab === '상표' && (
                <div className="change-box" style={{height: "285px"}}>
                    <div className="brand-box"> 
                        
                        {/* 건물(간판) 버튼 */}
                        <div 
                            className="brand-button"
                            onClick={() => handleBrandToggle('건물(간판)')}
                            // selectedBrands 배열에 '건물(간판)'이 포함되어 있으면 selectedStyle 적용
                            style={selectedBrands.includes('건물(간판)') ? selectedStyle : defaultStyle} 
                        >
                            건물(간판)
                        </div>
                        
                        {/* 자동차 번호판 버튼 */}
                        <div 
                            className="brand-button"
                            onClick={() => handleBrandToggle('자동차 번호판')}
                            style={selectedBrands.includes('자동차 번호판') ? selectedStyle : defaultStyle}
                        >
                            자동차 번호판
                        </div>
                        
                        {/* 표지판 버튼 */}
                        <div 
                            className="brand-button"
                            onClick={() => handleBrandToggle('표지판')}
                            style={selectedBrands.includes('표지판') ? selectedStyle : defaultStyle}
                        >
                            표지판
                        </div>
                        
                        {/* 기타 버튼 */}
                        <div 
                            className="brand-button"
                            onClick={() => handleBrandToggle('기타')}
                            style={selectedBrands.includes('기타') ? selectedStyle : defaultStyle}
                        >
                            기타
                        </div>
                    </div>
                    {/* 모자이크 슬라이더 (상표) */}
                    <div className="bg-button">
                        <div style={{display:"flex", flexDirection: "row", color:"#fff", alignItems: "center", justifyContent: "space-between"}}>
                            <div style={{fontSize: "16px"}}>모자이크</div> <p>{mosaicValue}</p>
                        </div>
                        <div className="slider-container" style={{ width: '361px'}}>
                            {/* 실제 슬라이더 동작을 담당하는 input[type="range"] (숨겨져 있음) */}
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={mosaicValue}
                                onChange={handleMosaicChange}
                                className="custom-range-input"
                            />
                            
                            {/* 🌟 4. 시각적인 슬라이더 트랙과 핸들 🌟 */}
                            <div className="slider-track-wrapper">
                                {/* 트랙: 하얀색 2px 선 */}
                                <div className="slider-track"></div>
                                
                                {/* 핸들: #7FFF6C, 14px 원형 */}
                                <div 
                                    className="slider-handle" 
                                    style={{ left: mosaicPercentage  }} // 값에 따라 위치를 제어
                                />
                            </div>
                        </div>
                    </div>
                    <Link to='/pincreateText'><div className="next-button" style={{marginTop:"36px",marginLeft:"319px"}}>다음 <img src={Arrow2} style={{width: "12px", height: "12px", marginLeft: "3px"}}/></div></Link>
                </div>
            )}
        </div>
        </>
    )
}



export default PincreateEdit;

