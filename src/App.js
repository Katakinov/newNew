import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import Home from './feed/Home'
import Widgets from "./widgets/Widgets";
import Profile from "./feed/Profile"
import ProfilePage from "./pages/ProfilePage"
import HomePage from "./pages/HomePage"
import StartPage from "./pages/StartPage";

function App() {
    return (
        <Sidebar/>
        //{/*<BrowserRouter>
         //       <Route path="/home" component={HomePage}/>
             //   <Route path="/profile" component={ProfilePage}/>
            //</BrowserRouter>*/}
    );
}

export default App;