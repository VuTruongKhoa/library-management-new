import React from "react";
import Header from "../components/Header"
import ImageSlider from "../components/ImageSlider";
import WelcomeBox from "../components/Welcome";
import Intro from "../components/Intro";

export default function Home(){
    return(
        <div>
            <Header />        
            <ImageSlider/>
            <WelcomeBox />
            <Intro />
        </div>
    )
}