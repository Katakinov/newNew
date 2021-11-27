import React from "react";
import Layout from "../layot/Layout";
import "./NotificationsPage.css";
import Notifications from "../notifications/Notifications"

function NotificationsPage() {
    return (
        <div className="app">
            <Layout>
                <Notifications/>
            </Layout>
        </div>
    );
}

export default NotificationsPage;