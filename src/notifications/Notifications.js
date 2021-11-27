import React from "react";
import TweetBox from "../feed/TweetBox";
import homePostItems from "../array/HomePostItems";
import Post from "../feed/Post";
import "./Notifications.css"

function Notifications() {
    return(
        <div className="notifications">
            <div className="notifications__header">
                <div>Notifications</div>
            </div>
            <Post/>
        </div>
    )
};

export default Notifications;