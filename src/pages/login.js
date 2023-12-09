import React from "react";
import './login.css';
import { Link } from 'react-router-dom'
import { useState } from "react";

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleLogin = () => {
        // if (loginSuccessful) {
        // // Lưu thông tin đăng nhập vào state hoặc context (nếu cần)
        // // Điều hướng tới trang người dùng hoặc admin
        // history.push(isAdmin ? '/admin' : '/user');
        // } else {
        // // Xử lý khi đăng nhập thất bại
        // }
};
    return(      
        <div className="login-box">
            <h1 className="Header-login">Đăng nhập</h1>
            <input type="text" value={email} onChange={handleEmailChange} placeholder="Email, tên tài khoản" className="input-login"/>
            <input type="password" value={password} onChange={handlePasswordChange} placeholder="Mật khẩu" className="input-login"/>
            <button type="button" class="btn btn-primary" className="btn-login">
            <Link onClick={handleLogin} className="link-custom-style" to = "/infor">Đăng nhập</Link>
            
            </button>
        </div>
    );
}