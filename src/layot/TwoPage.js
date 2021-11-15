import React, {Component} from "react";
import Sidebar from "../sidebar/Sidebar";
import Widgets from "../widgets/Widgets";

class TwoPage extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <React.Fragment>
                <Sidebar/>
                    {this.props.children}
                <Widgets/>
            </React.Fragment>
        )
    }
}

export default TwoPage;