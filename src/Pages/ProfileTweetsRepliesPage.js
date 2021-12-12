import React from "react";
import Layout from "../layot/Layout";
import "./ProfilePage.css";
import ProfileTweetsReplies from "../feed/ProfileTweetsReplies";

function ProfilePage() {
    return (
        <div className="app">
            <Layout>
                <ProfileTweetsReplies/>
            </Layout>
        </div>
    );
}

export default ProfilePage;