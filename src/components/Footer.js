import React from "react";


export default function Footer(){
    return(
        <footer>
            <div className="footer">
                <a className="footer-icon"><i className="large--icon ti-linkedin"></i></a>
                <a className="footer-icon" href="https://github.com/VuTruongKhoa/library-management-new"><i className="large--icon ti-github"></i></a>
                <a className="footer-icon"><i className="large--icon ti-twitter"></i></a>
                <a className="footer-icon"><i className="large--icon ti-youtube"></i></a>
                <p className="copyright">@ copyright 2023 Syntaxterminator <img src="penguin.webp" className="penguin"/></p>
            </div>
        </footer>
    )
}