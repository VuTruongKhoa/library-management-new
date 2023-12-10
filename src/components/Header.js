import React from "react";
import { Link } from 'react-router-dom'
import './Header.css';

export default function Header(){
    return(
        <header className="header">
            <div className="logo-nav">
                <Link className="link-custom-style" to = "/"><h1>THƯ VIỆN</h1></Link>
            </div>
            <div className="nav-bar">
                <input className="search-input" type="text" placeholder="Tìm kiếm một cuốn sách"></input>
                <ul className="nav-options">
                   
                <Link className="link-custom-style" to = "/">
                    <li className="option">
                        Trang chủ
                    </li>
                </Link>
                <Link className="link-custom-style" to = "/infor/book-regis">
                    <li className="option"> 
                        Sách
                    </li>
                </Link>
                <Link className="link-custom-style" to = "/login">
                    <li className="option"> 
                        Đăng nhập
                    </li>
                </Link>
                </ul>
            </div>

        </header>
    )
}