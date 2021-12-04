import React from "react";
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProfilePage from "./Pages/ProfilePage";
import StartPage from "./Pages/StartPage";
import RegPage from "./Pages/RegPage";
import AuthPage from "./Pages/AuthPage";
import UserPage from "./Pages/UserPage";
import NotificationsPageAll from "./Pages/NotificationsPageAll";
import NotificationsPageMentions from "./Pages/NotificationsPageMentions";
import ExplorePage from "./Pages/ExplorePage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' exact element={<HomePage/>}/>
                <Route path='/home' exact element={<HomePage/>}/>
                <Route path="/profile" exact element={<ProfilePage/>}/>
                <Route path="/user/:id" exact element={<UserPage/>}/>
                <Route path="/register" exact element={<RegPage/>}/>
                <Route path="/login" exact element={<AuthPage/>}/>
                <Route path="/start" exact element={<StartPage/>}/>
                <Route path="/explore" exact element={<ExplorePage/>}/>
                <Route path="/bookmarks" exact element={<RegPage/>}/>
                <Route path="/notifications" exact element={<NotificationsPageAll/>}/>
                <Route path="/notificationsall" exact element={<NotificationsPageAll/>}/>
                <Route path="/notificationsmentions" exact element={<NotificationsPageMentions/>}/>
            </Routes>
        </Router>
        //<Route path="/user/:login"></Route>
    );
}

export default App;