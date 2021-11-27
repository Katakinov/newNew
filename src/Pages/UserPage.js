import React from "react";
import User from "../feed/User";
import Layout from "../layot/Layout";
import "./ProfilePage.css";

function ProfilePage() {
    return (
        <div className="app">
            <Layout>
                <User/>
            </Layout>
        </div>
    );
}

export default ProfilePage;