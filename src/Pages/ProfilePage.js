import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Profile from "../feed/Profile"
import Widgets from "../widgets/Widgets";
import "./ProfilePage.css";

function ProfilePage() {
    return (
        <div className="app">
            <Sidebar/>
            <Profile/>
            <Widgets/>
        </div>
    );
}

export default ProfilePage;