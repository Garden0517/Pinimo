import React from 'react';
import { useGLTF } from '@react-three/drei';

function Alcohol (props) {
  // GLTF 파일의 경로를 지정합니다. 
  // 경로는 보통 public 폴더를 기준으로 합니다.
    // const GLTF_URL = "/character/Influencer.glb";
    const TEST_GLTF_URL = "https://threejs.org/examples/models/gltf/RobotExpressive/RobotExpressive.glb"; 
    const { scene } = useGLTF(TEST_GLTF_URL);

  // 로드된 씬(scene)을 primitive 컴포넌트에 전달하여 렌더링합니다.
  // primitive 컴포넌트는 raw Three.js 객체를 렌더링하는 데 사용됩니다.
  return <primitive object={scene} {...props} />;
}

// 모델이 처음 로드될 때 캐싱되도록 미리 로드하는 것이 좋습니다.
// useGLTF.preload('/path/to/your/model.gltf'); 

export default Alcohol
