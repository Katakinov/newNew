import React, {Component} from "react";
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import TwoPage from "./layot/TwoPage"
import Home from "./feed/Home"
import Profile from "./feed/Profile"
import HomePage from "./Pages/HomePage";
import ProfilePage from "./Pages/ProfilePage";
import StartPage from "./Pages/StartPage";
import RegPage from "./Pages/RegPage";
import AuthPage from "./Pages/AuthPage";

const AppRoute = ({component:Component, layout:Layout, ...rest})=>(
    <Routes><Route {...rest} render={props=>(
        <Layout><Component {...props}></Component></Layout>
    )}></Route></Routes>
)

function App() {
    return (
        <Router>
            <AppRoute path='/' element={<HomePage/>}/>
            <AppRoute path='/home' element={<HomePage/>}/>
            <AppRoute path="/profile" element={<ProfilePage/>}/>
            <AppRoute path="/register" element={<RegPage/>}/>
            <AppRoute path="/login" element={<AuthPage/>}/>
            <AppRoute path="/start" element={<StartPage/>}/>
        </Router>
    );
}

export {App, AppRoute};