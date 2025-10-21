import React, { useMemo } from "react"; // 💡 useState 대신 useMemo import
import { Link } from 'react-router-dom'; 

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
// Group.jsx 컴포넌트
// ----------------------------------------------------
function Group() {
    // 💡 수정된 부분: useState를 useMemo로 변경하여 setGroups를 제거.
    // groups 데이터는 이제 읽기 전용이며, ESLint/Hooks 오류가 발생하지 않습니다.
    const groups = useMemo(() => initialGroups, []);

    // 그룹에 속한 친구 목록을 가져오는 헬퍼 함수
    const getGroupFriends = (group) => allFriends.filter(f => group.members.includes(f.id));

    return(
        <>
            {/* 상단 바 */}
            <div style={{display:"flex", flexDirection:"row", width:"361px", height:"38px",alignItems:"center", marginTop:"74px"}}>
                <Link to="/pinprofile"><img src={Arrow}/></Link>
                <div className="friend-title">그룹관리</div>
                <div className="friend-topbutton" style={{marginLeft: 'auto'}}>
                    {/* 그룹생성 화면으로 이동하는 '생성하기' 버튼 */}
                    <Link to="/CreateGroup" style={{textDecoration: 'none'}}>
                        <div className="glass" style={{width:"84px", height:"38px", display:"flex", alignItems:"center", justifyContent:"center",borderRadius:"8px", backgroundColor: '#2C2C2C', color:"#fff", fontSize:"15px"}}>
                            생성하기
                        </div>
                    </Link>
                </div>
            </div>

            {/* 검색창 */}
            <div style={{display:"flex", flexDirection:"row", width:"361px", height:"38px", justifyContent:"space-between",marginTop:"22px", margin: '22px 16px 0 16px'}}>
                <input type="text" placeholder="친구 이름을 검색하세요" className="glass" style={{width:"288px", height:"38px",borderRadius:"8px"}} />
                <div className="glass" style={{width:"57px", height:"38px", display:"flex", alignItems:"center", justifyContent:"center",color:"#fff", fontSize:"17px",borderRadius:"8px", backgroundColor: '#2C2C2C'}}>검색</div>
            </div>

            {/* 그룹 및 친구 목록 컨테이너 */}
            <div style={{
                width:"393px", 
                height:"auto", 
                marginTop:"40px", 
            }}>
                
                {/* 그룹 목록을 반복하여 생성 */}
                {groups.map((group) => (
                    <div key={group.id} style={{ marginBottom: '30px' }}>
                        
                        {/* 그룹 헤더: '친한친구 3' 또는 '학교동기 5' */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0 16px 15px 16px', height:"20px" }}>
                            <h3 style={{ color: '#fff', fontSize: '14px', fontWeight: '300', margin: 0}}>
                                {group.name} {group.members.length}
                            </h3>
                            {/* Link to="/add-members/:groupId"로 이동 */}
                            <Link to={'/AddGroupMembers'} style={{textDecoration: 'none', color: '#A1A1A1'}}>
                                <button style={{ background: 'none', border: 'none', color: '#A1A1A1', fontSize: '24px', cursor: 'pointer' }}>+</button>
                            </Link>
                        </div>

                        {/* 그룹 멤버 목록 */}
                        {getGroupFriends(group).map((friend) => (
                            <div 
                                style={{
                                    display: "flex", 
                                    flexDirection: "row", 
                                    alignItems: "center", 
                                    margin: "0 16px  16px", 
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
                        ))}
                    </div>
                ))}
            </div>

            <div style={{display:"flex", height:"80px", width:"361px", color:"#1F1F1F"}}></div>
        </>
    )
}

export default Group;