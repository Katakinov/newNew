import React, {Component} from "react";
import Sidebar from "../sidebar/Sidebar";
import Widgets from "../widgets/Widgets";
import "./TwoPage.css";
import Home from "../feed/Home"
import Profile from "../feed/Profile"
import App from "../App"


/*class TwoPage extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="app">
                <React.Fragment>
                    <Sidebar/>
                        {this.props.children}
                    <Widgets/>
                </React.Fragment>
            </div>
        )
    }
}

export default TwoPage;*/

class TwoPage extends Component{
    render() {
        return(
            <div className="app">
                <Sidebar/>
                <Home/>
                <Widgets/>
            </div>
        );
    }
}

export default TwoPage;