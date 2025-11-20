import React, {useState} from "react";
import {Link } from 'react-router-dom'; 

import Arrow from "./img/arrowIcon.png"
import Arrow2 from "./img/arrow2Icon.png"

import Img1 from "./img/pincreate/img1.png"
import Img2 from "./img/pincreate/img2.png"
import Img3 from "./img/pincreate/img3.png"
import Img4 from "./img/pincreate/img4.png"
import Img5 from "./img/pincreate/img5.png"
import Img6 from "./img/pincreate/img6.png"
import Img7 from "./img/pincreate/img7.png"
import Img8 from "./img/pincreate/img8.png"
import Img9 from "./img/pincreate/img9.png"

const imageList = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9];

function Pincreate() {

    // 1. 상태 변경: 단일 이미지 URL 대신 선택된 이미지 URL들의 배열을 저장합니다.
    const [selectedImages, setSelectedImages] = useState([]);

    // 2. 핸들러 함수 변경: 이미지를 배열에 추가하거나 제거합니다.
    const handleImageClick = (imageSrc) => {
        // 이미 선택된 이미지인지 확인합니다.
        const isSelected = selectedImages.includes(imageSrc);

        if (isSelected) {
            // 이미 선택된 경우: 배열에서 제거합니다 (선택 해제)
            setSelectedImages(selectedImages.filter(url => url !== imageSrc));
        } else {
            // 선택되지 않은 경우: 배열에 추가합니다 (선택)
            setSelectedImages([...selectedImages, imageSrc]);
        }
    };

    // 3. 현재 선택된 이미지의 개수를 계산합니다.
    const selectedCount = selectedImages.length;
    
    // 4. 미리보기 이미지: 첫 번째로 선택된 이미지를 메인으로 표시합니다.
    const previewImage = selectedImages.length > 0 ? selectedImages[0] : null;

    const renderImages = (images) => (
        <div style={{display: "flex", justifyContent: "space-between"}}>
            {images.map((imgSrc, index) => {
                const isSelected = selectedImages.includes(imgSrc);

                return (
                    // 🌟 1. 이미지를 div로 감싸고 position: relative를 적용 🌟
                    <div 
                        key={index} // key를 index로 사용하여 오류 방지 (imageList는 고정되어 있으므로 안전)
                        onClick={() => handleImageClick(imgSrc)}
                        style={{
                            position: 'relative', 
                            cursor: 'pointer',
                            width: '117px', 
                            height: '141px', // height 고정 값 추가
                            paddingTop: '0', 
                            overflow: 'hidden',
                        }}
                    >
                        {/* 2. 실제 이미지는 absolute로 채우기 */}
                        <img 
                            src={imgSrc} 
                            alt={`선택 가능한 이미지 ${index}`}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />

                        {/* 🌟 3. 선택된 경우 오버레이 div 추가 🌟 */}
                        {isSelected && (
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)', // 블랙 20% 투명도
                                zIndex: 500, // 이미지 위에 배치
                            }}></div>
                        )}
                    </div>
                );
            })}
        </div>
    );

    // 🌟 핵심 기능 1: '다음' 버튼 활성화 조건 확인 🌟
    // 필수 이미지 목록
    const requiredImages = [Img1, Img7, Img8, Img9];
    
    // 모든 필수 이미지가 selectedImages에 포함되어 있는지 확인
    const isNextButtonEnabled = requiredImages.every(requiredImg => 
        selectedImages.includes(requiredImg)
    );
    
    // 🌟 핵심 기능 2: '다음' 버튼 클릭 핸들러 (조건 미충족 시 동작 방지) 🌟
    const handleNextClick = (e) => {
        if (!isNextButtonEnabled) {
            e.preventDefault(); // 기본 Link 동작 (페이지 이동) 방지
            // 여기에 사용자에게 알림을 주는 로직 (예: alert)을 추가할 수 있지만, 요청에 따라 생략합니다.
            console.log("필수 이미지(Img1, Img7, Img8, Img9)를 모두 선택해야 합니다.");
        }
        // 조건이 충족되면 Link가 정상적으로 동작하여 페이지 이동
    };

    
    return (
        <>
            <div style={{height: "534px", position: "fixed"}}>
                <div className="create-top">
                    <div className="title-box">
                        <div><Link to='/pinmap'><img src={Arrow}/></Link></div>
                        <div style={{fontSize: "24px", color:"#fff", width: "42px", marginLeft: "136px"}}>제작</div>
                        <Link 
                            to={isNextButtonEnabled ? '/pincreateEdit' : '#'} // 활성화 시에만 경로 지정
                            onClick={handleNextClick} // 클릭 시 조건 확인
                        >
                            <div 
                                className="next-button" 
                                style={{
                                    marginLeft:"101px",
                                    // 조건에 따라 배경색을 변경하여 활성화/비활성화 시각적 피드백 제공
                                    backgroundColor: isNextButtonEnabled ? '#7FFF6C' : '#555', 
                                    cursor: isNextButtonEnabled ? 'pointer' : 'not-allowed',
                                }}
                            >
                                다음 <img src={Arrow2} style={{width: "12px", height: "12px", marginLeft: "3px"}}/>
                            </div>
                        </Link>
                    </div>
                </div>
                    <div className="under-box">
                        <div className="under-bar"></div>
                        <div className="under-bar"></div>
                        <div className="under-bar"></div>
                    </div>
                <div className="choice-img"
                    style={{
                            backgroundImage: previewImage ? `url(${previewImage})` : 'none',
                            backgroundSize: 'contain', 
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                        }}>
                    {!previewImage && <div style={{textAlign: 'center',color: '#ccc'}}>이미지를 선택해주세요.</div>}
                </div>
            </div>

            <div style={{marginTop: "548px", zIndex: "1000"}}>
                <div className="img-box">
                    <div className="img-text">
                        사진 선택
                        <div className="img-number">{selectedCount}</div>
                    </div>
                    {renderImages(imageList.slice(0, 3))}
                    <div style={{marginTop: "6px"}}>
                        {renderImages(imageList.slice(3, 6))}
                    </div>
                    <div style={{marginTop: "6px"}}>
                        {renderImages(imageList.slice(6, 9))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Pincreate;
