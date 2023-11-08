import React from "react";
import './login.css';
import { Link } from 'react-router-dom'

export default function Login(){
    return(
        <div className="login-box">
            <h1 className="Header-login">Đăng nhập</h1>
            <input type="text" placeholder="Email, tên tài khoản" className="input-login"/>
            <input type="text" placeholder="Mật khẩu" className="input-login"/>
            <button type="button" class="btn btn-primary" className="btn-login">
            <Link className="link-custom-style" to = "/infor">Đăng nhập</Link>
            </button>
        </div>
    );
}