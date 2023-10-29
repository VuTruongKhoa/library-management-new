import React from "react";
import Footer from "../components/Footer"
import Contact from "../components/Contact"
import Header from "../components/Header"
import NavHome from "../components/Nav-home"
import Intro from "../components/Intro"
import HotBook from "../components/HotBook";

export default function Home(){
    return(
        <div className="home-page">
            <Header />
            <NavHome />
            <img className = "home-img" src="nen-trang-chu.jpg"/>
            <Intro />
            <HotBook />
            <Contact/>
            <Footer/>
        </div>
    )
}