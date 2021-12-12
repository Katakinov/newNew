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
import ProfileTweetsRepliesPage from "./Pages/ProfileTweetsRepliesPage";
import ProfileMediaPage from "./Pages/ProfileMediaPage";
import ProfileLikesPage from "./Pages/ProfileLikesPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' exact element={<HomePage/>}/>
                <Route path='/home' exact element={<HomePage/>}/>
                <Route path="/profile" exact element={<ProfilePage/>}/>
                <Route path="/profile/tweets&replies" exact element={<ProfileTweetsRepliesPage/>}/>
                <Route path="/profile/media" exact element={<ProfileMediaPage/>}/>
                <Route path="/profile/likes" exact element={<ProfileLikesPage/>}/>
                <Route path="/user/:id" exact element={<UserPage/>}/>
                <Route path="/register" exact element={<RegPage/>}/>
                <Route path="/login" exact element={<AuthPage/>}/>
                <Route path="/start" exact element={<StartPage/>}/>
                <Route path="/explore" exact element={<ExplorePage/>}/>
                <Route path="/bookmarks" exact element={<RegPage/>}/>
                <Route path="/notifications" exact element={<NotificationsPageAll/>}/>
                <Route path="/notifications/all" exact element={<NotificationsPageAll/>}/>
                <Route path="/notifications/mentions" exact element={<NotificationsPageMentions/>}/>
            </Routes>
        </Router>
        //<Route path="/user/:login"></Route>
    );
}

export default App;