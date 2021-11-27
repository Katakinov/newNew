import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Home from '../feed/Home'
import Widgets from "../widgets/Widgets";
import "./HomePage.css"
import Layout from "../layot/Layout"

function HomePage() {
    return (
        <div className="app">
            <Layout>
                <Home/>
            </Layout>
        </div>
    );
}

export default HomePage;