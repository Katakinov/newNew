import React from "react";
import Layout from "../layot/Layout";
import "./ProfilePage.css";
import ProfileMedia from "../feed/ProfileMedia";

function ProfilePage() {
    return (
        <div className="app">
            <Layout>
                <ProfileMedia/>
            </Layout>
        </div>
    );
}

export default ProfilePage;