import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminHeader from "../components/Admin/AdminHeader";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import AddBookForm from "../components/Admin/AddBook";


import './add-book-page.css';


export default function AddBookPage(){
    return(
        <div className="admin-page" id="home-page">       
            <AdminHeader/>
            <AddBookForm/>
            <Contact />
            <Footer/>
        </div>
    )
}