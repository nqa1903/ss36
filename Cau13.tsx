import React, { useState } from 'react'
import './Cau13.css';

export default function Cau13() {
    const [activeTab, setActiveTab] = useState('Trang chủ');

    const handleTabClick = (tabName:any) => {
        setActiveTab(tabName);
    };
  return (
    <div>
        Câu 13
      <ul className="navbar">
                <li 
                    className={`nav-item ${activeTab === 'Trang chủ' ? 'active' : ''}`} 
                    onClick={() => handleTabClick('Trang chủ')}
                >
                    Trang chủ
                </li>
                <li 
                    className={`nav-item ${activeTab === 'Sản phẩm' ? 'active' : ''}`} 
                    onClick={() => handleTabClick('Sản phẩm')}
                >
                    Sản phẩm
                </li>
                <li 
                    className={`nav-item ${activeTab === 'Giới thiệu' ? 'active' : ''}`} 
                    onClick={() => handleTabClick('Giới thiệu')}
                >
                    Giới thiệu
                </li>
                <li 
                    className={`nav-item ${activeTab === 'Liên hệ' ? 'active' : ''}`} 
                    onClick={() => handleTabClick('Liên hệ')}
                >
                    Liên hệ
                </li>
            </ul>
    </div>
  )
}
