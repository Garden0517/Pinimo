import React, { useState } from "react";
import {Link } from 'react-router-dom';

import Arrow from "./img/arrowIcon.png"

import ChangeIcon from "./img/changeIcon.png"

import Insta from "./img/insta.png"
import Face from "./img/facebook.png"
import Thread from './img/thread.png'
import Twiter from './img/twiter.png'

import Img1 from "./img/pincreate/img1.png"
import Img2 from "./img/pincreate/img7.png"
import Img3 from "./img/pincreate/img8.png"
import Img4 from "./img/pincreate/img9.png"

function PincreateFinal () {
    // 1. 미리 정의된 텍스트 상태 추가 (Step 1)
    const [predefinedTexts] = useState({
        all: '☕️ 오늘의 카페 탐방! 아메리카노 한 잔으로 충전 완료! 햇살 맛집이네요.',
        friend: '오늘은 남친이랑 성수 인스타 핫플 카페! 너무 분위기 좋고 데이트 하기 좋음! 커피 맛도 최고! 😉',
        closeFriend: '오늘은 진석이랑 성수동 데이트! 같이 돌아다니다 화나서 싸울뻔 했지만 너무 재밌었음! 다음주는 진석이랑 일본가서 맛집투어 해야징!',
    });


        const [texts, setTexts] = useState({
            all: '', // 모든 사람의 텍스트
            friend: '', // 친구의 텍스트
            closeFriend: '', // 친한친구의 텍스트
        });

        // 현재 선택된 공개 범위 상태를 추가합니다. 기본값은 'all' (모든 사람)
        const [currentScope, setCurrentScope] = useState('all'); 

        // 현재 선택된 범위의 텍스트를 업데이트하는 핸들러 함수
        const handleTextChange = (e) => {
            setTexts({
                ...texts, // 기존의 다른 범위 텍스트는 유지
                [currentScope]: e.target.value, // 현재 선택된 범위의 텍스트만 업데이트
            });
        };

        // 2. 텍스트 변경 버튼 클릭 핸들러 함수 (Step 2 & 3)
    const handleClickChangeText = () => {
        // 현재 선택된 범위(currentScope)에 해당하는 미리 정의된 텍스트를 가져와
        const newText = predefinedTexts[currentScope];
        
        // 현재 'texts' 상태에서 해당 범위의 텍스트를 업데이트합니다.
        setTexts({
            ...texts,
            [currentScope]: newText,
        });
        
        // *참고: 이 함수는 텍스트를 '덮어쓰기' 합니다. 기존 내용 뒤에 '추가'하려면 아래 코드를 사용하세요.
        /*
        setTexts(prevTexts => ({
            ...prevTexts,
            [currentScope]: prevTexts[currentScope] + '\n\n' + newText,
        }));
        */
    };

    // 1. 플랫폼별로 텍스트 목록(배열) 정의
const [predefinedPlatformTexts] = useState({
    insta: [
        '☕️ 오늘의 카페 탐방 따뜻한 햇살 아래에서 마신 아메리카노 한 잔이 정말 완벽했어요. 사진으로 다 담기지 않을 만큼 분위기 좋은 곳.',
        '오늘 성수동 데이트! 진석이랑 돌아다니다가 잠깐 티격태격했지만 결국 너무 웃겼음. 다음주는 일본 가서 맛집 투어할 생각에 벌써 설렘 가득 ✨',
        // 여기에 세 번째 텍스트를 추가할 수도 있습니다.
    ],
    facebook: [
        '오늘은 햇살이 좋아 보여 근처 카페에 들렀습니다. 아메리카노 한 잔 마시며 잠깐 여유를 느끼기 좋더군요. 햇살이 들어오는 자리 덕분에 기분 좋은 휴식 시간이었습니다. ☕️',
        '오늘은 진석이와 성수동에서 데이트를 했습니다. 여기저기 다니다가 잠깐 분위기가 싸늘해지기도 했지만, 금방 풀리고 결국 즐거운 시간이었어요. 다음 주에는 일본 여행을 가서 맛집을 함께 돌아볼 예정이라 기대가 큽니다. 😊',
    ],
    thread: [
        '오늘 카페 하나 새로 발견했음. 아메리카노로 기분 리셋했고, 햇살 들어오는 자리라 분위기 최고였다. 여기 꽤 괜찮다.',
        '성수동 데이트 완료. 진석이랑 잠깐 싸울 뻔했지만 재밌었음. 다음주는 일본 맛집 투어 간다.',
    ],
    twiter: [
        '카페 체크 완료. ☕️아메리카노로 에너지 충전. 여긴 진짜 햇살 잘 들어온다.',
        '오늘 진석이랑 성수동 데이트했는데 돌아다니다가 잠깐 싸울 뻔한 거 실화… 근데 결국 둘 다 웃고 끝남.',
    ],
});

// 2. 각 플랫폼별 현재 선택된 텍스트의 인덱스 추적 (새로운 상태)
const [platformTextIndices, setPlatformTextIndices] = useState({
    insta: 0,
    facebook: 0,
    thread: 0,
    twiter: 0,
});

// 3. platformTexts 초기값도 첫 번째 텍스트(인덱스 0)로 설정해야 합니다.
// 초기값을 계산하는 헬퍼 함수를 사용하여 설정합니다.
const initialPlatformTexts = Object.keys(predefinedPlatformTexts).reduce((acc, platform) => {
    acc[platform] = predefinedPlatformTexts[platform][0];
    return acc;
}, {});

const [platformTexts, setPlatformTexts] = useState(initialPlatformTexts);

    // 새로운 상태 추가: 현재 선택된 플랫폼. 기본값은 'insta'로 설정
    const [currentPlatform, setCurrentPlatform] = useState('insta'); 
    
    // 플랫폼 텍스트를 업데이트하는 핸들러 함수
    const handlePlatformTextChange = (e) => {
        setPlatformTexts({
            ...platformTexts, 
            [currentPlatform]: e.target.value, 
        });
    };

    // 4. 플랫폼 텍스트 변경 버튼 클릭 핸들러 함수
    const handleClickChangePlatformText = () => {
    // 1. 현재 플랫폼의 전체 텍스트 목록과 현재 인덱스를 가져옵니다.
    const currentList = predefinedPlatformTexts[currentPlatform];
    const currentIndex = platformTextIndices[currentPlatform];
    
    // 2. 다음 인덱스를 계산합니다. (배열의 길이를 초과하면 0으로 순환)
    const nextIndex = (currentIndex + 1) % currentList.length;
    
    // 3. 다음 인덱스에 해당하는 텍스트를 가져옵니다.
    const newText = currentList[nextIndex];

    // 4. 상태 업데이트: 텍스트 내용과 인덱스 모두 업데이트
    
    // 텍스트 내용 업데이트
    setPlatformTexts(prevTexts => ({
        ...prevTexts,
        [currentPlatform]: newText,
    }));
    
    // 인덱스 상태 업데이트
    setPlatformTextIndices(prevIndices => ({
        ...prevIndices,
        [currentPlatform]: nextIndex,
    }));
};

    return (
        <>
        <div style={{height: "130px", position: "fixed", backgroundColor:"#1F1F1F", zIndex:"2000"}}>
            <div className="create-top">
                <div className="title-box">
                    <div><Link to='/pincreateText'><img src={Arrow}/></Link></div>
                    <div style={{fontSize: "24px", color:"#fff", width: "42px", marginLeft: "136px"}}>제작</div>
                    <Link to='/pinmap'><div className="x-button">x</div></Link>
                </div>
            </div>
            <div className="under-box">
                <div className="under-bar"></div>
                <div className="under-bar"></div>
                <div className="under-bar1"></div>
            </div>
        </div>

        <div className="createText-box" style={{height:"auto", marginTop:"147px", position:"relative"}}>
            <div style={{fontSize:"20px", color:"#fff"}}>공개 범위에 따른 게시물이에요</div>
            <div style={{display:"flex", flexDirection:"row", width:"220px", height:"auto", justifyContent:"space-between", marginTop:"16px"}}>
                <div 
                    style={{
                        fontSize:"17px", 
                        color:"#fff", 
                        borderBottom: currentScope === 'all' ? "3px solid #fff" : "3px solid transparent", // 'all' 선택 시 border 표시
                        height:"28px",
                        cursor: "pointer" // 클릭 가능함을 표시
                    }}
                    onClick={() => setCurrentScope('all')} // 클릭 시 상태를 'all'로 변경
                >
                    모든 사람
                </div>
                <div 
                    style={{
                        fontSize:"17px", 
                        color:"#fff", 
                        borderBottom: currentScope === 'friend' ? "3px solid #fff" : "3px solid transparent", // 'friend' 선택 시 border 표시
                        height:"28px",
                        cursor: "pointer"
                    }}
                    onClick={() => setCurrentScope('friend')} // 클릭 시 상태를 'friend'로 변경
                >
                    친구
                </div>
                <div 
                    style={{
                        fontSize:"17px", 
                        color:"#fff", 
                        borderBottom: currentScope === 'closeFriend' ? "3px solid #fff" : "3px solid transparent", // 'closeFriend' 선택 시 border 표시
                        height:"28px",
                        cursor: "pointer"
                    }}
                    onClick={() => setCurrentScope('closeFriend')} // 클릭 시 상태를 'closeFriend'로 변경
                >
                    친한친구
                </div>
            </div>
            <textarea
                // 현재 선택된 범위(currentScope)에 해당하는 텍스트를 표시
                value={texts[currentScope]}
                // 텍스트 변경 시 handleTextChange 함수 호출
                onChange={handleTextChange}
                placeholder=" 오늘의 카페 탐방 아메리카노 한 잔으로 충전 완료!"
                className="textbox-glass" 
                style={{
                    // 내부 텍스트 스타일
                    fontFamily: 'pretentard',
                    fontWeight: '300',
                    lineHeight: '1.5',
                    marginTop:"16px",
                    height:"140px",
                    color:"#fff",
                }}
            />
            <div 
                className="glass-change" 
                style={{margin:"198px 0 0 329px", cursor: "pointer"}} // 커서 스타일 추가
                onClick={handleClickChangeText} // ★ 이 부분이 핵심입니다.
            >
                <img src={ChangeIcon} style={{width:"14px", height:"14px"}}/>
            </div>
            <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between", marginTop:"10px"}}>
                <div className="textbox-glass" style={{height:"24px", width: "auto", padding:"0 10px", fontSize:"12px", color:"white", fontFamily:"300"}}>#인스타맛집</div>
                <div className="textbox-glass" style={{height:"24px", width: "auto", padding:"0 10px", fontSize:"12px", color:"white", fontFamily:"300"}}>#셀카찍기좋은카페</div>
                <div className="textbox-glass" style={{height:"24px", width: "auto", padding:"0 10px", fontSize:"12px", color:"white", fontFamily:"300"}}>#방송출연맛집</div>
                <div className="textbox-glass" style={{height:"24px", width: "auto", padding:"0 10px", fontSize:"12px", color:"white", fontFamily:"300"}}>더보기</div>
            </div>
        </div>

         <div className="createText-box" style={{height:"auto"}}>
            <div style={{fontSize:"20px", color:"#fff"}}>다른 플랫폼과 연동해보세요</div>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", marginTop:"16px"}}>
                <div 
                    style={{
                        display:"flex", 
                        justifyContent:"center", 
                        width:"64px", 
                        height:"64px", 
                        borderBottom: currentPlatform === 'insta' ? "3px solid #fff" : "3px solid transparent", // 'insta' 선택 시 border 표시
                        cursor: "pointer"
                    }}
                    onClick={() => setCurrentPlatform('insta')} // 클릭 시 'insta'로 변경
                >
                    <img src={Insta} style={{width:"49px", height:"49px"}}/>
                </div>
                <div 
                    style={{
                        display:"flex", 
                        justifyContent:"center", 
                        width:"64px", 
                        height:"64px", 
                        borderBottom: currentPlatform === 'facebook' ? "3px solid #fff" : "3px solid transparent", // 'facebook' 선택 시 border 표시
                        cursor: "pointer"
                    }}
                    onClick={() => setCurrentPlatform('facebook')} // 클릭 시 'facebook'으로 변경
                >
                    <img src={Face} style={{width:"49px", height:"49px"}}/>
                </div>
                <div 
                    style={{
                        display:"flex", 
                        justifyContent:"center", 
                        width:"64px", 
                        height:"64px", 
                        borderBottom: currentPlatform === 'thread' ? "3px solid #fff" : "3px solid transparent", // 'thread' 선택 시 border 표시
                        cursor: "pointer"
                    }}
                    onClick={() => setCurrentPlatform('thread')} // 클릭 시 'thread'로 변경
                >
                    <img src={Thread} style={{width:"49px", height:"49px"}}/>
                </div>
                <div 
                    style={{
                        display:"flex", 
                        justifyContent:"center", 
                        width:"64px", 
                        height:"64px", 
                        borderBottom: currentPlatform === 'twiter' ? "3px solid #fff" : "3px solid transparent", // 'twiter' 선택 시 border 표시
                        cursor: "pointer"
                    }}
                    onClick={() => setCurrentPlatform('twiter')} // 클릭 시 'twiter'로 변경
                >
                    <img src={Twiter} style={{width:"49px", height:"49px"}}/>
                </div>
            </div>
            <div 
                className="glass-change" 
                style={{margin:"234px 0 0 329px", cursor: "pointer"}}
                onClick={handleClickChangePlatformText} // ★ 새로운 핸들러 함수 연결
            >
                <img src={ChangeIcon} style={{width:"14px", height:"14px"}}/>
            </div>
            <textarea
                // 현재 선택된 플랫폼(currentPlatform)에 해당하는 텍스트를 표시
                value={platformTexts[currentPlatform]}
                // 텍스트 변경 시 handlePlatformTextChange 함수 호출
                onChange={handlePlatformTextChange}
                // placeholder는 초기값이 보이도록 했으므로 중요하지 않으나 유지
                placeholder=" 오늘의 카페 탐방 아메리카노 한 잔으로 충전 완료! (플랫폼별 커스텀)"
                className="textbox-glass" 
                style={{
                    // 내부 텍스트 스타일
                    fontFamily: 'pretentard',
                    fontWeight: '300',
                    lineHeight: '1.5',
                    marginTop:"16px",
                    height:"140px",
                    color:"#fff",
                }}
            />
            <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between", marginTop:"10px"}}>
                <div className="textbox-glass" style={{height:"24px", width: "auto", padding:"0 10px", fontSize:"12px", color:"white", fontFamily:"300"}}>#인스타맛집</div>
                <div className="textbox-glass" style={{height:"24px", width: "auto", padding:"0 10px", fontSize:"12px", color:"white", fontFamily:"300"}}>#셀카찍기좋은카페</div>
                <div className="textbox-glass" style={{height:"24px", width: "auto", padding:"0 10px", fontSize:"12px", color:"white", fontFamily:"300"}}>#방송출연맛집</div>
                <div className="textbox-glass" style={{height:"24px", width: "auto", padding:"0 10px", fontSize:"12px", color:"white", fontFamily:"300"}}>더보기</div>
            </div>
        </div>

        <div className="createText-box" style={{height:"auto"}}>
            <div style={{fontSize:"20px", color:"#fff"}}>사진 변경 및 수정</div>
            <div className="edit-glass" style={{height:"auto", marginTop:"16px", padding:"20px 12px"}}>
                <div className="edit-in">
                    <div><img src={Img1} style={{width:"115px", height:"139px", marginRight:"12px"}}/></div>
                    <div><img src={Img2} style={{width:"115px", height:"139px", marginRight:"12px"}}/></div>
                    <div><img src={Img3} style={{width:"115px", height:"139px", marginRight:"12px"}}/></div>
                    <div><img src={Img4} style={{width:"115px", height:"139px"}}/></div>
                </div>
            </div>
        </div>
        <div  style={{zIndex:"2000", paddingTop:"17px",paddingBottom:"50px", backgroundColor:"#1F1F1F"}}>
            <Link to="/mypin"><div className="upload-button">업로드</div></Link>
        </div>
        </>
    )
}

export default PincreateFinal