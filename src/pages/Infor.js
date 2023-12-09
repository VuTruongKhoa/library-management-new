import React from "react";
import './Infor.css';
import { Link } from 'react-router-dom'

export default function Infor(){
    return (
        <div className="box">
            <h1 className="header-infor"> Thông tin tài khoản </h1>
            <div className="box-infor">
                <div>
                    <img src="./user-img.png" className="img-user"/>
                    <Link to= "/infor/book-extend">
                        <button className="btn btn-primary btn-extend">Gia hạn sách</button>
                    </Link>
                    <Link to ="/infor/book-regis">
                        <button className="btn btn-primary btn-regis">Đăng ký mượn sách</button>
                    </Link>
                </div>
                <div className="group-input">
                    <ul>
                        <li> <h5 className = "h5-input">ID : 73</h5></li>
                        <li>
                            <h5 className = "h5-input">Họ và tên</h5>
                            <input className="input-infor" type="text" placeholder="Nguyen van A"/>
                        </li>
                        <li>
                            <h5 className = "h5-input">Địa chỉ Email</h5>
                            <input className="input-infor" type="text" placeholder="123@gmail.com"/>
                        </li>
                        <li>
                            <h5 className = "h5-input">Địa chỉ liên hệ</h5>
                            <input className="input-infor" type="text" placeholder="KTX khu a đại học quốc gia tpchm"/>
                        </li>  
                        <li>
                            <h5 className = "h5-input">Số điện thoại</h5>
                            <input className="input-infor" type="text" placeholder="0123456789"/>
                        </li>
                        <li>
                            <h5 className = "h5-input">Sách đã mượn</h5>
                            <input className="input-infor" type="text" placeholder="50"/>
                        </li>
                        <li>
                            <h5 className = "h5-input">Sách đã trả</h5>
                            <input className="input-infor" type="text" placeholder="50"/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}