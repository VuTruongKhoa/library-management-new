import React from "react";
import Header from "../components/Header"
import ImageSlider from "../components/ImageSlider";
import WelcomeBox from "../components/Welcome";
import Intro from "../components/Intro";
import Stats from "../components/Stats";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import RecentBook from "../components/RecentBook";
import PopularBook from "../components/PopularBook";

import './home.css';

export default function Home(){
    return(
        <div className="home">
            <Header />        
            <ImageSlider/>
            <WelcomeBox />
            <Intro />
            <Stats />
            <RecentBook />
            <PopularBook />
            <Contact />
            <Footer/>
        </div>
    )
}