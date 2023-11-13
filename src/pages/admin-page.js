import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminHeader from "../components/Admin/AdminHeader";
import ImageSlider from "../components/ImageSlider";
import WelcomeBox from "../components/Welcome";
import Intro from "../components/Intro";
import Stats from "../components/Stats";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import RecentBook from "../components/RecentBook";
import PopularBook from "../components/PopularBook";

import './admin-page.css';

export default function AdminHome(){
    return(
        <div className="admin-page" id="home-page">       
            <AdminHeader/>
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