import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Home from './feed/Home'
import Widgets from "./widgets/Widgets";
import Profile from "./feed/Profile"
import './App.css';

function App() {
    return (
        <div className="app">
            <Sidebar />
            <Home/>
            <Widgets />
        </div>
    );
}

export default App;