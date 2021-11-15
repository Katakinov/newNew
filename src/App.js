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

//function App() {
//    return (
        /*<Router>
            <Routes>
                <Route path="/profile" component={ProfilePage}></Route>
            </Routes>
        </Router>*/
        /*<Router>
            <AppRoute path='/user' exact layout={TwoPage} component={Profile}/>
            <AppRoute path="/home" layout={TwoPage} component={Home}/>
        </Router>*/
        /*<Router>
            <AppRoute path="/" component={HomePage}/>
        </Router>*/
function App() {
    return (
        <Router>
            <AppRoute path='/' Component="Home" element={<TwoPage/>}/>
            <AppRoute path='/home' Component="Home" element={<TwoPage/>}/>
            <AppRoute path="/profile" Component="<Profile/>" element={<TwoPage/>}/>
            <AppRoute path="/registration" element={<RegPage/>}/>
            <AppRoute path="/authorization" element={<AuthPage/>}/>
            <AppRoute path="/start" element={<StartPage/>}/>
        </Router>
    );
}

export default App;