import React, { useState, useRef } from "react"; // useRef 추가
import { Link } from 'react-router-dom'; 

// 이미지 경로 (실제 프로젝트 환경에 맞게 조정 필요)
import Arrow from "./img/arrowIcon.png"
import Plus from "./img/plusIcon.png"
import Img1 from "./img/influencer/influencer-post2.png"
import Img2 from "./img/excellency/excellency-post1.png"
import Img3 from "./img/secluded/secluded-post1.png"
import Img4 from "./img/alcohol/alcohol-post1.png"
import Img5 from "./img/exercise/exercise-post1.png"
import Img6 from "./img/influencer/influencer-post3.png"
import Img7 from "./img/excellency/excellency-post5.png"
import Img8 from "./img/alcohol/alcohol-post4.png"


// ----------------------------------------------------
// 1. 데이터 배열 정의
// ----------------------------------------------------
const friendData = [
    { name: "이세현", imageSource: Img1, status: "온라인", statusColor: "#7FFF6C" },
    { name: "박현진", imageSource: Img2, status: "오프라인", statusColor: "#A1A1A1" },
    { name: "이지혜", imageSource: Img3, status: "온라인", statusColor: "#7FFF6C" },
    { name: "홍수진", imageSource: Img4, status: "온라인", statusColor: "#7FFF6C" },
    { name: "정영찬", imageSource: Img5, status: "온라인", statusColor: "#7FFF6C" },
    { name: "서정희", imageSource: Img6, status: "오프라인", statusColor: "#A1A1A1" },
    { name: "황수빈", imageSource: Img7, status: "오프라인", statusColor: "#A1A1A1" },
    { name: "구자현", imageSource: Img8, status: "온라인", statusColor: "#7FFF6C" },
];

// ----------------------------------------------------
// 2. 슬라이드 기능이 적용된 개별 친구 항목 컴포넌트
// ----------------------------------------------------
function SwipeableFriendItem({ friend, SWIPE_WIDTH_LEFT, SWIPE_WIDTH_RIGHT }) {
    // 3가지 상태 정의
    const LEFT_STATE = 0; // 왼쪽 메뉴 보임 (translateX: 0px)
    const CENTRAL_STATE = -SWIPE_WIDTH_LEFT; // 중앙 메뉴 보임 (translateX: -58px)
    const RIGHT_STATE = -(SWIPE_WIDTH_LEFT + SWIPE_WIDTH_RIGHT); // 오른쪽 메뉴 보임 (translateX: -232px)

    const [translateX, setTranslateX] = useState(CENTRAL_STATE);
    const startX = useRef(0); // 터치 시작 X 좌표 저장
    const currentX = useRef(CENTRAL_STATE); // 현재 항목의 translateX 값 (숫자)

    // 터치 시작 시 호출
    const handleTouchStart = (e) => {
        startX.current = e.touches[0].clientX; // 시작 위치 기록
        currentX.current = translateX; // 현재 위치를 숫자로 변환하여 저장 (예: -58)
    };

    // 터치 이동 시 호출 (화면을 따라 움직임)
    const handleTouchMove = (e) => {
        const deltaX = e.touches[0].clientX - startX.current; // 이동 거리 계산
        let newX = currentX.current + deltaX; // 새 위치 계산

        // 범위를 벗어나지 않도록 제한
        if (newX > LEFT_STATE) {
            newX = LEFT_STATE; // 왼쪽 메뉴보다 더 나가지 않도록
        } else if (newX < RIGHT_STATE) {
            newX = RIGHT_STATE; // 오른쪽 메뉴보다 더 나가지 않도록
        }

        setTranslateX(newX); // 이동 중에는 transition 제거하여 부드럽게 따라오도록 설정 가능
    };

    // 터치 종료 시 호출 (위치 결정)
    const handleTouchEnd = () => {
        const finalX = translateX;
        const deltaX = finalX - currentX.current; // 총 이동 거리

        let snapX;
        
        // 1. 중앙에서 왼쪽으로 밀 때 (오른쪽 메뉴 보이기)
        if (currentX.current === CENTRAL_STATE && deltaX < -20) { // 왼쪽 스와이프 (20px 이상)
            snapX = RIGHT_STATE; // 오른쪽 메뉴 상태로 스냅
        } 
        // 2. 중앙에서 오른쪽으로 밀 때 (왼쪽 메뉴 보이기)
        else if (currentX.current === CENTRAL_STATE && deltaX > 20) { // 오른쪽 스와이프 (20px 이상)
            snapX = LEFT_STATE; // 왼쪽 메뉴 상태로 스냅
        } 
        // 3. 왼쪽 메뉴 상태에서 중앙으로 복구 (오른쪽 스와이프)
        else if (currentX.current === LEFT_STATE && deltaX < -20) {
            snapX = CENTRAL_STATE; // 중앙 상태로 복구
        }
        // 4. 오른쪽 메뉴 상태에서 중앙으로 복구 (왼쪽 스와이프)
        else if (currentX.current === RIGHT_STATE && deltaX > 20) {
            snapX = CENTRAL_STATE; // 중앙 상태로 복구
        }
        // 5. 그 외 (작게 이동했거나 움직임이 없을 때)
        else {
            snapX = currentX.current; // 현재 상태 유지
        }

        // 최종 위치로 스냅
        setTranslateX(snapX);
    };

    return (
        <div style={{ marginBottom: "20px" }}>
            {/* 슬라이드 트랙: 터치 이벤트를 여기에 추가합니다. */}
            <div 
                style={{
                    display: "flex", 
                    flexDirection: "row",
                    width: "625px", 
                    transform: `translateX(${translateX}px)`, // ⚠️ 단위를 px로 명시
                    transition: 'transform 0.3s ease-out', // 스냅 동작을 부드럽게
                }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {/* 1. 왼쪽 버튼 영역 */}
                <div 
                    className="left-box" 
                    style={{ width: `${SWIPE_WIDTH_LEFT}px`, flexShrink: 0, display:'flex', justifyContent:'center', alignItems:'center' }}
                >상단<br/>고정</div>

                {/* 2. 친구 정보 (중앙) - **화면 폭을 담당하는 핵심 요소** */}
                <div 
                    style={{
                        display: "flex", 
                        flexDirection: "row", 
                        alignItems: "center", 
                        margin: "0 16px 0 16px", 
                        width: "361px", 
                        flexShrink: 0 
                    }}
                >
                    <img src={friend.imageSource} style={{ width: "60px", height: "60px", marginRight: "20px" }}/>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                        <div className="friend-name">{friend.name}</div>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <div className="circle-big">
                                <div className="circle-small" style={{ backgroundColor: friend.statusColor }}></div>
                            </div>
                            <div className="condition" style={{ color: friend.statusColor }}>{friend.status}</div>
                        </div>
                    </div>
                </div>

                {/* 3. 오른쪽 버튼 영역 - **폭을 반드시 고정해야 합니다.** */}
                <div 
                    style={{
                        display: "flex", 
                        flexDirection: "row", 
                        position:"relative", 
                        width: `${SWIPE_WIDTH_RIGHT}px`, 
                        flexShrink: 0
                    }}
                >
                    {/* <div className="right-box" style={{backgroundColor:"#6D6D6D"}}>친구<br/>숨김</div>
                    <div className="right-box" style={{backgroundColor:"#FF830F", zIndex:"50", marginLeft:"58px"}}>친구<br/>차단</div>  */}
                    <div className="right-box" style={{backgroundColor:"#F53D20", zIndex:"100", marginLeft:"116px"}}>친구<br/>삭제</div> 
                </div>
            </div>
        </div>
    );
}


// ----------------------------------------------------
// 3. 메인 Friend 컴포넌트
// ----------------------------------------------------
function Friend() {
    // 슬라이드 버튼 너비 상수
    const SWIPE_WIDTH_RIGHT = 174; 
    const SWIPE_WIDTH_LEFT = 58;  

    return(
        <>
            {/* 상단 바 및 검색창 부분은 그대로 둡니다 */}
            <div style={{display:"flex", flexDirection:"row", width:"361px", height:"38px",alignItems:"center", marginTop:"74px"}}>
                <Link to="/pinprofile"><img src={Arrow}/></Link>
                <div className="friend-title">내 친구 목록</div>
                <div className="friend-topbutton">
                    <div className="glass" style={{width:"27px", height:"27px", display:"flex", alignItems:"center", justifyContent:"center"}}><img src={Plus} style={{width:"12px", height:"12px"}}/></div>
                </div>
            </div>

            <div style={{display:"flex", flexDirection:"row", width:"361px", height:"38px", justifyContent:"space-between",marginTop:"22px"}}>
                <div className="glass" style={{width:"292px", height:"38px",borderRadius:"8px"}}></div>
                <div className="glass" style={{width:"57px", height:"38px", display:"flex", alignItems:"center", justifyContent:"center",color:"#fff", fontSize:"17px",borderRadius:"8px"}}>검색</div>
            </div>

            {/* 친구 목록 컨테이너 (슬라이드 '창문' 역할) */}
            <div style={{
                width:"393px", 
                height:"auto", 
                marginTop:"40px", 
                overflow:"hidden" // 이 영역을 벗어나는 내용은 숨겨집니다.
            }}>
                
                {/* 친구 목록을 반복하여 생성 */}
                {friendData.map((friend) => (
                    <SwipeableFriendItem 
                        key={friend.name} 
                        friend={friend}
                        SWIPE_WIDTH_LEFT={SWIPE_WIDTH_LEFT}
                        SWIPE_WIDTH_RIGHT={SWIPE_WIDTH_RIGHT}
                    />
                ))}

            </div>

            <div style={{display:"flex", height:"80px", width:"361px", color:"#1F1F1F"}}></div>
        </>
    )
}

export default Friend