import React from "react";

export default function NavHome(){
    return (
        <nav className="nav nav-pills flex-column flex-sm-row">
            <a  className="border my-link flex-sm-fill text-sm-center nav-link " href="#sec-contact">Trang chủ</a>
            <a  className="border my-link flex-sm-fill text-sm-center nav-link " href="#sec-Intro">Giới thiệu</a>
            <a  className="border my-link flex-sm-fill text-sm-center nav-link " href="#sec-contact">Sách hot</a>
            <a  className="border my-link flex-sm-fill text-sm-center nav-link " href="#sec-contact">Tin tức</a>
            <a  className="border my-link flex-sm-fill text-sm-center nav-link " href="#sec-contact">Liên hệ</a>
        </nav>
    )
}

