import React from "react";

export default function Contact(){
    return(
        <div className="Contact" id="sec-contact">
            <h2 className="header-contact">Liên hệ</h2>
           <ul className="no--bullet">
                <li>
                    <i className= "large--icon Contact-icon ti-location-pin"></i>
                    Address:
                    <p>     A-block, Street no-4, New Delhi- 110044, India</p>
                </li>
                <li> 
                    <i className= "large--icon Contact-icon ti-headphone-alt"></i>
                    Call us at:
                    <p>     +1 800 1236879</p>
                </li>
                <li> 
                    <i  className= "large--icon Contact-icon ti-email"></i>
                    Email us at:
                    <p>     contact@example.com</p>
                </li>
            </ul> 
        </div>
    )
}