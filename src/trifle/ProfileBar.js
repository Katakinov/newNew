import React from "react";
import {Avatar, Button} from "@material-ui/core";
import "./ProfileBar.css"

function ProfileBar({url, name, tag}){
    return(

        <button className="profileBar">
            <Avatar src={url}/>
            <div className="aliases">
                <span className="profileName">
                    {name}
                </span>
                <span className="profileTag">
                    @{tag}
                </span>
            </div>
            <div className="threeEntry">...</div>
        </button >
    )
}

export default ProfileBar;