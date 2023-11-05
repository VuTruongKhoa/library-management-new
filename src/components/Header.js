import React from "react";
import './Header.css';

export default function Header(){
    return(
        <header className="header">
            <div className="logo-nav">
                <h1>THƯ VIỆN</h1>
            </div>
            <div className="nav-bar">
                <input className="search-input" type="text" placeholder="Tìm kiếm một cuốn sách"></input>
                <ul className="nav-options">
                    <li className="option"> Trang chủ </li>
                    <li className="option"> Sách </li>
                    <li className="option"> Đăng nhập </li>
                </ul>
            </div>

        </header>
    )
}