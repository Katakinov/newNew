import React from "react";
import Layout from "../layot/Layout";
import "./ProfilePage.css";
import ProfileLikes from "../feed/ProfileLikes";

function ProfilePage() {
    return (
        <div className="app">
            <Layout>
                <ProfileLikes/>
            </Layout>
        </div>
    );
}

export default ProfilePage;