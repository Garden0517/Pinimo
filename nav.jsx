import React from 'react';
import './style.css';
import { Link, useLocation } from 'react-router-dom'; // 1. useLocation 임포트
// 기본 아이콘
import PinedIcon from './img/pinedIcon.png';
import PinmapIcon from './img/pinmapIcon.png';
import Pincreate from './img/pinplusIcon.png';
import Mypin from './img/mypinIcon.png';
import Pinggle from './img/pinggleIcon.png';
// 활성화된(Active) 상태의 아이콘 (예시: 접미사에 'Active' 추가)
import PinedIconActive from './img/pinedIconActive.png'; 
import PinmapIconActive from './img/pinmapIconActive.png';
import PincreateActive from './img/pinplusIconActive.png';
import MypinActive from './img/mypinIconActive.png';
import PinggleActive from './img/pinggleIconActive.png';

// 각 경로에 대한 기본/활성화 아이콘 맵핑 객체
const iconMap = {
  '/pined': { default: PinedIcon, active: PinedIconActive },
  '/Pinmap': { default: PinmapIcon, active: PinmapIconActive },
  '/pincreate': { default: Pincreate, active: PincreateActive },
  '/mypin': { default: Mypin, active: MypinActive },
  '/pinggle': { default: Pinggle, active: PinggleActive },
};

function Nav() {
  const location = useLocation(); // 2. useLocation 훅 호출로 현재 위치 정보 가져오기
  const currentPath = location.pathname; // 현재 경로

  // 링크 항목 배열
  const navItems = [
    { path: '/pined', name: 'Pined' },
    { path: '/Pinmap', name: 'Pinmap' },
    { path: '/pincreate', name: 'Pincreate' },
    { path: '/mypin', name: 'Mypin' },
    { path: '/pinggle', name: 'Pinggle' },
  ];

  return (
    <>
      <div className='glass-screen'>
        <div className='glass-card' style={{ display: "flex", alignItems: "flex-end" }}>
          <nav>
            {navItems.map((item, index) => {
              const isActive = currentPath === item.path; // 3. 현재 경로와 항목 경로 비교
              const iconSrc = isActive ? iconMap[item.path].active : iconMap[item.path].default; // 4. 활성화 상태에 따라 이미지 소스 선택
              
              // 마지막 항목에는 paddingRight 제거
              const paddingStyle = index < navItems.length - 1 ? { paddingRight: '35px' } : {};

              return (
                <Link 
                  key={item.path} 
                  to={item.path}
                >
                  <img 
                    src={iconSrc} 
                    style={{ width: '24px', height: '24px', ...paddingStyle }}
                    alt={item.name}
                  />
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}

export default Nav;