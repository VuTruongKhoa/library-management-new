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
        
        // <header className="header">
        //     <img src = "header.png" className="img--header"/>
        //     <div className="header--name">
        //         <p>HỆ THỐNG QUẢN LÝ THƯ VIỆN</p>
        //         <p>Library Management System</p>
        //         <p className="normal-text">Design by Syntax Terminators</p>
        //     </div>
        //     <div className="header--user">
        //         <div>
        //             <h3><a>User 123</a></h3>
        //             <a><i className="ti-bell large--icon"></i></a>
        //         </div>
        //         <div>
        //             <img src = "user.png" className="User-img"/>
        //             <a><h4>Đăng xuất</h4></a>
        //         </div>
        //     </div>
        // </header>
    )
}