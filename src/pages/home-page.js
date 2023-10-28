import React from "react";
import Footer from "../components/Footer"
import Contact from "../components/Contact"
import Header from "../components/Header"

export default function Home(){
    return(
        <div>
            <h1>this is Home page</h1>
            <Header />
            <Contact/>
            <Footer/>
        </div>
    )
}