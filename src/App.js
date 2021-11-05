import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Feed from './feed/Feed'
import Widgets from "./widgets/Widgets";
import Profile from "./feed/Profile"
import './App.css';

function App() {
    return (
        <div className="app">
            <Sidebar />
            <Profile displayName={"Katakinov"}/>
            <Widgets />
        </div>
    );
}

export default App;
