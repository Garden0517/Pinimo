import React from "react";
import BgIcon from "./img/bgIcon.png";
import EditIcon from "./img/editIcon.png";
import {Link } from 'react-router-dom';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import Alcohol from './Alcohol.jsx';

import Profile from './img/influencer.png'

function Pinggle() {
    return (
        <>
            <div className="pinggle-bg">
                <div className="top-bg">
                    <div className="pinggle-profile"><Link to='/pinprofile'><img src={Profile}/></Link></div>
                    <div className="icongroup">
                        <div className="bgicon"><img src={BgIcon} /></div>
                        <div className="editicon"><img src={EditIcon} /></div>
                    </div>
                </div>
                <div className="character-box">
                    <Canvas 
                        shadows // 그림자 활성화
                        camera={{ position: [5, 5, 5], fov: 50 }} // 카메라 위치와 시야각 설정
                    >
                        {/* 모델 로딩이 완료될 때까지 fallback 컨텐츠를 보여줍니다. */}
                        <Suspense fallback={null}>
                        
                            {/* 환경 라이팅(Environment Lighting) 설정 */}
                            <Environment preset="sunset" background /> 

                            {/* 광원 추가 (필요에 따라) */}
                            <ambientLight intensity={0.5} />
                            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow />

                            {/* GLTF 모델 컴포넌트 */}
                            <Alcohol position={[0, 0, 0]} scale={1} />

                            {/* 마우스/터치로 씬을 회전, 확대/축소할 수 있게 해주는 컨트롤러 */}
                            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
                        </Suspense>
                    </Canvas>
                </div>
            </div>
        </>
    )
}
export default Pinggle;