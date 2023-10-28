import React from "react";

export default function Header(){
    return(
        <header className="header">
            <img src = "header.png" className="img--header"/>
            <div className="header--name">
                <p>HỆ THỐNG QUẢN LÝ THƯ VIỆN</p>
                <p>Library Management System</p>
                <p className="normal-text">Design by Syntax Terminators</p>
            </div>
            <div className="header--user">
                <div>
                    <h3><a>User 123</a></h3>
                    <a><i className="ti-bell large--icon"></i></a>
                </div>
                <div>
                    <img src = "user.png" className="User-img"/>
                    <a><h4>Đăng xuất</h4></a>
                </div>
            </div>
        </header>
    )
}