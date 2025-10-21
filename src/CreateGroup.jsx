// CreateGroup.jsx

import React, { useState, useMemo } from 'react';
import {  Link } from 'react-router-dom';

import Arrow from "./img/arrowIcon.png";
import Plus from "./img/plusIcon.png"
// 이미지 경로 (Group.jsx와 동일한 데이터 구조 사용)
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

const initialGroupsData = [
    // 기존 그룹 (isRecommended: false)
    { id: 'g1', name: "학교 동기", members: [1, 3], image: Img3, isRecommended: false },
    { id: 'g2', name: "친한친구", members: [2, 4], image: Img2, isRecommended: false },
    // 추천 그룹 (isRecommended: true)
    { id: 'r1', name: "러닝크루", members: [1, 5], image: Img6, isRecommended: true },
    { id: 'r2', name: "고등학교 친구", members: [2, 6, 8], image: Img4, isRecommended: true },
    { id: 'r3', name: "독서모임", members: [3], image: Img5, isRecommended: true },
    { id: 'r4', name: "회사", members: [4, 7], image: Img8, isRecommended: true },
];

// ----------------------------------------------------
// CreateGroup.jsx 컴포넌트
// ----------------------------------------------------
function CreateGroup(props) { 
    const { onCreateNewGroup } = props;
    const handleCreateNewGroup = onCreateNewGroup || ((name) => console.log(`New group created: ${name}`));
    
    // 그룹 데이터 상태 관리
    const [groups, setGroups] = useState(initialGroupsData); 
    const [groupName, setGroupName] = useState('');


    // useMemo를 사용하여 현재 상태에 따라 목록 분리
    const existingGroups = useMemo(() => groups.filter(g => !g.isRecommended), [groups]);
    const recommendedGroups = useMemo(() => groups.filter(g => g.isRecommended), [groups]);


    const createNewGroupLocally = (name, sourceGroup) => {
        // 유효성 검사 (입력된 이름이 이미 존재하는지 확인)
        if (existingGroups.some(g => g.name === name)) {
            alert(`이미 "${name}" 그룹이 존재합니다.`);
            return;
        }

        // 새 그룹 ID 생성 (충돌 방지)
        const newId = 'cg' + (existingGroups.length + recommendedGroups.length + 1) + Date.now(); 

        const newGroup = {
            id: newId, 
            name: name, 
            // sourceGroup이 있으면 멤버를 복사하고, 없으면 빈 배열 [] 사용
            members: sourceGroup ? [...sourceGroup.members] : [], 
            image: sourceGroup ? sourceGroup.image : Img1, 
            isRecommended: false // 새로 생성된 그룹은 기존 그룹으로 분류
        };
        
        setGroups(prevGroups => {
            // 1. 추천 목록에서 해당 항목이 있다면 제거
            const updatedGroups = sourceGroup ? prevGroups.filter(g => g.id !== sourceGroup.id) : prevGroups;
            
            // 2. 새 그룹을 기존 목록의 맨 앞에 추가
            return [newGroup, ...updatedGroups];
        });

        // 3. 입력 필드 초기화
        setGroupName('');
        handleCreateNewGroup(name); // 외부 함수 호출
    };

    const handleCreate = () => {
        if (groupName.trim() === '') {
            alert('그룹명을 입력하세요.');
            return;
        }
        // 그룹 생성 로직만 실행 (페이지 이동 없음)
        createNewGroupLocally(groupName); 
    };

    const handleCreateRecommended = (sourceGroup) => {
         // 그룹 생성 로직만 실행 (페이지 이동 없음)
         createNewGroupLocally(sourceGroup.name, sourceGroup);
    }

    const handleMoveToRecommended = (groupToMove) => {
        setGroups(prevGroups => {
            const updatedGroup = { ...groupToMove, isRecommended: true };
            const remainingGroups = prevGroups.filter(g => g.id !== groupToMove.id);
            return [updatedGroup, ...remainingGroups];
        });
    };

    // 그룹 이름 옆에 썸네일 이미지를 결정하는 헬퍼 함수
    const getGroupThumbnail = (group) => {
        if (group.image) return group.image;
        const firstMember = allFriends.find(f => group.members.includes(f.id));
        return firstMember ? firstMember.imageSource : Img1;
    }
    
    // 💡 최종 그룹 목록을 외부(Group.jsx)로 전달하고 페이지 이동하는 함수
    const handleFinalCreationAndNavigate = () => {
         const finalGroups = groups.filter(g => !g.isRecommended); // 최종 기존 그룹만 추출

         // 💡 이 코드는 실제로 Group.jsx의 상태를 업데이트하는 함수라고 가정
         if(onCreateNewGroup) { 
             onCreateNewGroup(finalGroups); 
         }
         
         // Link 컴포넌트가 페이지 이동을 담당하므로, navigate('/group-management') 대신 Link를 사용합니다.
    }


    return (
        <div className="create-group-screen" style={{color: '#fff', margin: '0 16px', backgroundColor: '#1F1F1F', height:'auto', paddingBottom:"80px"}}>
            
            {/* 상단 헤더 */}
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:"74px"}}>
                {/* 뒤로 가기 버튼 */}
                <Link to="/group" style={{display: 'flex', alignItems: 'center'}}><img src={Arrow} alt="Back"/></Link>
                
                {/* 제목 */}
                <div className="friend-title">그룹생성</div>
                
                {/* 완료 버튼 */}
                <div className="friend-topbutton">
                    {/* Link의 onClick에 상태 전달 로직을 연결 */}
                    <Link to="/group" style={{textDecoration: 'none'}} onClick={handleFinalCreationAndNavigate}>
                        <div style={{width:"56px", height:"38px", display:"flex", alignItems:"center", justifyContent:"center",borderRadius:"48px", backgroundColor: '#7FFF6C', color: '#000', fontSize:"14px"}}>
                            완료
                        </div>
                    </Link>
                </div>
            </div>

            <main>
                {/* 그룹명 입력 필드 및 생성 버튼 */}
                <div style={{display:"flex", flexDirection:"row", width:"361px", height:"38px", justifyContent:"space-between",marginTop:"22px", margin: '22px 0 0 0'}}>
                    <input
                        type="text"
                        placeholder="그룹명을 입력하세요"
                        value={groupName}
                        onChange={(e) => setGroupName(e.target.value)}
                        className="glass" style={{width:"288px", height:"38px",borderRadius:"8px", color:"#fff"}}
                    />
                    {/* onClick 이벤트는 div에 있습니다. */}
                    <div onClick={handleCreate} className="glass" style={{width:"57px", height:"38px", display:"flex", alignItems:"center", justifyContent:"center",color:"#fff", fontSize:"17px",borderRadius:"8px", backgroundColor: '#2C2C2C'}}>생성</div>
                </div>

                <p style={{color: '#A1A1A1', fontSize: '14px', marginTop: '5px'}}>그룹을 생성하여 친구 목록을 쉽게 관리해보세요</p>
                
                {/* 기존 그룹 목록 (예시) */}
                <div className="existing-groups-section" style={{borderBottom:"1px #fff solid", paddingBottom:"6px", width:"361px"}}>
                    <h2 style={{fontSize: '14px', fontWeight: '300', marginTop: '40px', marginBottom: '15px'}}>기존 그룹 {existingGroups.length}</h2>
                    
                    {existingGroups.map(group => (
                        <div 
                            key={group.id} 
                            // 클릭 시 추천 그룹으로 이동
                            onClick={() => handleMoveToRecommended(group)}
                            style={{ 
                                display: 'flex', 
                                justifyContent: 'space-between', 
                                alignItems: 'center', 
                                marginBottom: '25px', 
                                width:"361px",
                                cursor: 'pointer' 
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={getGroupThumbnail(group)} style={{ width: "60px", height: "60px", marginRight: "20px", borderRadius: '50%' }} alt="Group thumbnail"/>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                    <span style={{fontSize: '20px', fontWeight: '300'}}>{group.name}</span>
                                    <span style={{color: '#A1A1A1', fontSize: '14px'}}>{group.members.length}명</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 추천 그룹 목록 */}
                <div className="recommended-groups-section">
                    <h2 style={{fontSize: '14px', fontWeight: '300', marginTop: '40px', marginBottom: '15px'}}>추천 그룹</h2>
                    
                    {recommendedGroups.map(group => (
                        <div key={group.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px', width:"361px" }}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={getGroupThumbnail(group)} style={{ width: "60px", height: "60px", marginRight: "20px", borderRadius: '50%' }} alt="Group thumbnail"/>
                                <span style={{fontSize: '20px', fontWeight: '300'}}>{group.name}</span>
                            </div>
                            
                            {/* '+' 버튼을 누르면 해당 이름으로 그룹 생성 */}
                            <button onClick={() => handleCreateRecommended(group)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                                <div className="glass" style={{width:"27px", height:"27px", display:"flex", alignItems:"center", justifyContent:"center", borderRadius: '50%' }}>
                                    <img src={Plus} alt="Add" style={{width:"12px", height:"12px"}}/>
                                </div>
                            </button>
                        </div>
                    ))}
                </div>
                
            </main>
            
            <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, height: '80px', backgroundColor: '#1F1F1F' }}>
                {/* 하단 바 콘텐츠 (생략) */}
            </div>
        </div>



    );
}

export default CreateGroup;