import React from "react";

import {Link } from 'react-router-dom';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';

import Alcohol from './Alcohol.jsx';
import Profile from './img/profile.png'

import BgIcon from "./img/bgIcon.png";
import EditIcon from "./img/editIcon.png";

import Img from "./img/pinggle/1.png";

// import { HouseModel } from './Influencer.jsx';

function Pinggle() {
    return (
        <>
            <div className="pinggle-bg">
                <div className="top-bg">
                    <Link to='/pinprofile'><div className="pinggle-profile"><img src={Profile}/></div></Link>
                    <div className="icongroup">
                        <Link to='/pinggleBg'><div className="bgicon"><img src={BgIcon} /></div></Link>
                        <div className="editicon"><img src={EditIcon} /></div>
                    </div>
                </div>
                <div className="character-box">
                    <img src={Img}/>
                    {/* <Canvas camera={{ position: [20, 5, -8] }}>
        
                    <OrbitControls />
                    <ambientLight intensity={1} />
                        
                    {/* 👈 2. 가져온 컴포넌트를 일반 태그처럼 사용합니다. */}
                    {/* props를 통해 위치, 회전, 크기 등을 전달할 수 있습니다.
                    <HouseModel 
                        position={[0, 0, 0]} 
                        rotation-y={-Math.PI / 2} 
                        scale={10} // 크기가 작으면 이렇게 scale을 조정할 수 있습니다.
                    />
                        
                    </Canvas> */}
                </div>
            </div>
        </>
    )
}
export default Pinggle;