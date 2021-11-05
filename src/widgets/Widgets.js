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
import WidgetsActual from "./WidgetsActual"

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
                <WidgetsActual nameActual={"Trending in Russia"} textActual={"#нюдсочетверг"} countTweet={"1,7821"}/>
                <WidgetsActual nameActual={"Entertaiment * Trending"} textActual={"Shang-Chi"} countTweet={"423,531"}/>
                <WidgetsActual nameActual={"Trending in Russia"} textActual={"Putin God"} countTweet={"666"}/>
                <WidgetsActual nameActual={"Entertaiment * Trending"} textActual={"For reasons of conscience"} countTweet={"5,231,567"}/>
                <WidgetsActual nameActual={"Trending in USA"} textActual={"Covid-21"} countTweet={"1,782,112"}/>
            </div>
        </div>
    );
}

export default Widgets;