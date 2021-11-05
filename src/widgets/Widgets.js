import React from "react";
import './Widgets.css';
import "../trifle/SidebarOption"
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";
import SettingsIcon from '@material-ui/icons/Settings';
import {Button} from "@material-ui/core";
import SidebarOption from "../trifle/SidebarOption";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";


function Widgets() {
    return (
        <div className='widgets'>
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets__widgetContainer">
                <div className="widgets__header">
                    <h2>Trends for you</h2>
                    <SidebarOption Icon={SettingsIcon}/>
                </div>
                <TwitterTweetEmbed tweetId={"858551177860055040"} />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="cleverqazi"
                    options={{height: 400}}
                />

                <TwitterShareButton
                    url={"https://vk.com/aya40"}
                    options={{text: "#react js is awesome", via: "dsa"}}
                />
            </div>
        </div>
    )
}

export default Widgets;