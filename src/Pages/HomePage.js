import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Home from '../feed/Home'
import Widgets from "../widgets/Widgets";
import "./HomePage.css"

function HomePage() {
    return (
        <div className="app">
            <Sidebar/>
            <Home/>
            <Widgets />
        </div>
    );
}

export default HomePage;