import React from "react";
import './login.css';
import { Link } from 'react-router-dom'
import { useState } from "react";


export default function Login(){

    return(      
        <div className="login-box">
            <h1 className="Header-login">Đăng nhập</h1>
            <input 
                type="text"  
                placeholder="Email, tên tài khoản" 
                className="input-login"/>
            <input 
              type="password" 
              placeholder="Mật khẩu" 
              className="input-login"/>
            <button 
              type="button" 
              class="btn btn-primary" 
              className="btn-login">
            <Link className="link-custom-style" to = "/infor">Đăng nhập</Link>
            </button>
            <button
              className="btn">
                <Link className="link-custom-style" to = "/inforadmin">admin</Link>
            </button>
        </div>
    );
}