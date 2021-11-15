import React, {Component} from "react";
import './App.css';
import {BrowserRouter as Router, Routes, Switch, Route} from "react-router-dom";
import TwoPage from "./layot/TwoPage"
import Home from "./feed/Home"
import Profile from "./feed/Profile"
import StartPage from "./Pages/StartPage";
import RegPage from "./Pages/RegPage";
import AuthPage from "./Pages/AuthPage";
import ProfilePage from "./Pages/ProfilePage";

const AppRoute = ({component:Component,layout:Layout, ...rest})=>(
    <Routes>
        <Route {...rest} render={props=>(
            <Layout><Component {...props}></Component></Layout>)}>
        </Route>
    </Routes>
)

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/profile" component={ProfilePage}></Route>
            </Routes>
        </Router>
        /*<Router>
            <switch>
                <AppRoute path='/user' exact layout={TwoPage} component={Profile}/>
                <AppRoute path="/home" layout={TwoPage} component={Home}/>
                <Routes>
                    <Route path="/registration" component={RegPage}></Route>
                    <Route path="/authorization" component={RegPage}></Route>
                    <Route path="/start" component={RegPage}></Route>
                </Routes>
            </switch>
        </Router>*/
        /*
        <Router>
            <AppRoute path='/' layout={TwoPage} component={Home}></AppRoute>
        </Router>
        //<StartPage/>
        //<RegPage/>
        //<AuthPage/>
        //<ProfilePage/>
        //<HomePage/>
        */
    );
}

export default App;