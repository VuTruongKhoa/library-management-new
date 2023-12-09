import React from "react";
import { Link } from 'react-router-dom'
import './Header.css';

export default function Header(){
    return(
        <header className="header">
            <div className="logo-nav">
                <h1><Link className="link-custom-style" to = "/">THƯ VIỆN</Link></h1>
            </div>
            <div className="nav-bar">
                <input className="search-input" type="text" placeholder="Tìm kiếm một cuốn sách"></input>
                <ul className="nav-options">
                    <li className="option">
                        <Link className="link-custom-style" to = "/">Trang chủ</Link>
                     </li>
                    <li className="option"> Sách </li>
                    <li className="option"> 
                        <Link className="link-custom-style" to = "/login">Đăng nhập</Link>
                    </li>
                </ul>
            </div>

        </header>
    )
}