import React from "react";
import './Stats.css';

import {FiBook}  from "@react-icons/all-files/fi/FiBook"
import {FiUsers} from "@react-icons/all-files/fi/FiUsers"
import {FiArchive} from "@react-icons/all-files/fi/FiArchive"
import {FiBookOpen} from "@react-icons/all-files/fi/FiBookOpen"



export default function Stats(){
    return(
        <div className='stats'>
            <div className='stats-block'>
                <FiBook className='stats-icon' style={{ fontSize:80 }}/>
                <p className='stats-title'>Tổng số sách</p>
                <p className='stats-count'>3254</p>
            </div>
            <div className='stats-block'>
                <FiUsers className='stats-icon' style={{ fontSize:80 }}/>
                <p className='stats-title'>Tổng người dùng</p>
                <p className='stats-count'>3254</p>
            </div>
            <div className='stats-block'>
                <FiArchive className='stats-icon' style={{ fontSize:80 }}/>
                <p className='stats-title'>Sách đang có</p>
                <p className='stats-count'>3254</p>
            </div>
            <div className='stats-block'>
                <FiBookOpen className='stats-icon' style={{ fontSize:80 }}/>
                <p className='stats-title'>Sách đang mượn</p>
                <p className='stats-count'>3254</p>
            </div>
        </div>
    )
}