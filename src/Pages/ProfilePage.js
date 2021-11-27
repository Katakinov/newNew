import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Profile from "../feed/Profile"
import Widgets from "../widgets/Widgets";
import Layout from "../layot/Layout";
import "./ProfilePage.css";

function ProfilePage() {
    return (
        <div className="app">
            <Layout>
                <Profile/>
            </Layout>
        </div>
    );
}

export default ProfilePage;