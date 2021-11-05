import React from "react";
import "./Profile.css"

function Profile({displayName}){
    return(
        <div className="profile">
            <div className="profile__header">
                <div>{displayName}</div>
            </div>
        </div>
    )
}

export default Profile;