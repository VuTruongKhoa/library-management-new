import React from "react";
// import data from "./mock-data.json";
import AdminHeader from "../components/Admin/AdminHeader";
import ManageMember from "../components/Admin/ManageMember";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


export default function ManageMemberPage()
{
    return (
        <div className="manage-member-page">
            <AdminHeader/>
            <ManageMember/>
            <Contact/>
            <Footer/>
        </div>
        
    );
}

        