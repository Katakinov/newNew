import React, {Component} from "react";
import Sidebar from "../sidebar/Sidebar";
import Widgets from "../widgets/Widgets";
import "./TwoPage.css";
import Home from "../feed/Home"
import Profile from "../feed/Profile"
import profileItems from "../array/ProfileItems";
import {App, AppRoute} from "../App";

class TwoPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            element: App.layout,
        }
    }
    render(){
        return(
            <React.Fragment>
                <div className="app">
                    <Sidebar/>
                    <AppRoute/>
                    <Widgets/>
                </div>
            </React.Fragment>
        );
    }
}


export default TwoPage;