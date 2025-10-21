import React, { useState } from "react"; 
import { Link } from 'react-router-dom'; 
// useMemo, useNavigate, useParams 등은 제거했습니다.

import Arrow from "./img/arrowIcon.png";
import Plus from "./img/plusIcon.png";
// 필요한 이미지 파일 import
import Img1 from "./img/influencer/influencer-post2.png";
import Img2 from "./img/excellency/excellency-post1.png";
import Img3 from "./img/secluded/secluded-post1.png";
import Img4 from "./img/alcohol/alcohol-post1.png";
import Img5 from "./img/exercise/exercise-post1.png";
import Img6 from "./img/influencer/influencer-post3.png";
import Img7 from "./img/excellency/excellency-post5.png";
import Img8 from "./img/alcohol/alcohol-post4.png";

// ----------------------------------------------------
// 1. 공통 데이터 정의
// ----------------------------------------------------
const allFriends = [
    { id: 1, name: "이세현", imageSource: Img1, status: "온라인", statusColor: "#7FFF6C" },
    { id: 2, name: "박현진", imageSource: Img2, status: "오프라인", statusColor: "#A1A1A1" },
    { id: 3, name: "이지혜", imageSource: Img3, status: "온라인", statusColor: "#7FFF6C" },
    { id: 4, name: "홍수진", imageSource: Img4, status: "온라인", statusColor: "#7FFF6C" },
    { id: 5, name: "정영찬", imageSource: Img5, status: "온라인", statusColor: "#7FFF6C" },
    { id: 6, name: "서정희", imageSource: Img6, status: "오프라인", statusColor: "#A1A1A1" },
    { id: 7, name: "황수빈", imageSource: Img7, status: "오프라인", statusColor: "#A1A1A1" },
    { id: 8, name: "구자현", imageSource: Img8, status: "온라인", statusColor: "#7FFF6C" },
];

const initialGroups = [
    { id: 'g1', name: "친한친구", members: [1, 3, 5] },
    { id: 'g2', name: "학교동기", members: [2, 4, 6, 7, 8] },
];

// ----------------------------------------------------
// AddGroupMembers.jsx 컴포넌트 (친구 선택 UI로 수정)
// ----------------------------------------------------
function AddGroupMembers() {
    // 💡 상태 관리: 현재 그룹 (친한친구)의 초기 멤버 ID를 임시로 설정
    const currentGroupId = 'g1';
    const currentGroup = initialGroups.find(g => g.id === currentGroupId);
    const initialMemberIds = currentGroup ? new Set(currentGroup.members) : new Set();
    
    // 선택된 멤버 ID 목록을 상태로 관리
    const [selectedMemberIds, setSelectedMemberIds] = useState(initialMemberIds); 

    // 멤버 선택/해제 토글 로직
    const toggleMember = (memberId) => {
        setSelectedMemberIds(prev => {
            const newSet = new Set(prev);
            if (newSet.has(memberId)) {
                newSet.delete(memberId);
            } else {
                newSet.add(memberId);
            }
            return newSet;
        });
    };

    return(
        <div className="create-group-screen" style={{color: '#fff', margin: '0 16px', backgroundColor: '#1F1F1F', height:'auto', paddingBottom:"80px"}}>
            {/* 상단 헤더 */}
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:"74px", width:"361px"}}>
                {/* 뒤로 가기 버튼 */}
                <Link to="/group" style={{display: 'flex', alignItems: 'center'}}><img src={Arrow} alt="Back"/></Link>
                
                {/* 제목 */}
                <div className="friend-title">그룹추가</div>
                
                {/* 완료 버튼 */}
                <div className="friend-topbutton">
                    <Link to="/group" style={{textDecoration: 'none'}}>
                        <div style={{width:"56px", height:"38px", display:"flex", alignItems:"center", justifyContent:"center",borderRadius:"48px", backgroundColor: '#7FFF6C', color: '#000', fontSize:"14px"}}>
                            완료
                        </div>
                    </Link>
                </div>
            </div>


            {/* 검색창 */}
            <div style={{display:"flex", flexDirection:"row", width:"361px", height:"38px", justifyContent:"space-between",marginTop:"22px", margin: '22px 16px 0 0px'}}>
                <input type="text" placeholder="친구 이름을 검색하세요" className="glass" style={{width:"288px", height:"38px",borderRadius:"8px"}} />
                <div className="glass" style={{width:"57px", height:"38px", display:"flex", alignItems:"center", justifyContent:"center",color:"#fff", fontSize:"17px",borderRadius:"8px", backgroundColor: '#2C2C2C'}}>검색</div>
            </div>

           <main style={{marginTop: '40px'}}>
                {/* 전체 친구 목록 (체크박스 표시) */}
                {allFriends.map(friend => {
                    // 각 친구의 고유 ID를 기반으로 ID 문자열 생성
                    const checkboxId = `friend-select-${friend.id}`;
                    
                    return (
                        <div key={friend.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', width:"320px" }}>
                            {/* 친구 정보 영역 */}
                            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
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
                        
                        {/* 체크박스 및 라벨 영역 (수정된 부분) */}
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            {/* 1. input에 고유 ID 추가 */}
                            <input 
                                id={checkboxId} // 고유 ID 설정
                                type="checkbox" 
                                checked={selectedMemberIds.has(friend.id)}
                                onChange={() => toggleMember(friend.id)}
                                className="hidden-radio"
                                style={{margin:"0", padding:"0"}} // 위치 스타일은 label로 이동
                            />
                            {/* 2. label의 htmlFor를 고유 ID와 연결 */}
                            <label 
                                htmlFor={checkboxId} // input의 ID와 일치시켜 연결
                                className="custom-radio-label"
                                style={{margin:"0 0 0 0px", padding:"0"}}>
                            </label>
                        </div>

                    </div>
                    )
                })}
            </main>


        </div>
    );
}

export default AddGroupMembers;