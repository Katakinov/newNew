import React from "react";
import "./Feed.css"
import "./Post"
import "./TweetBox"
import Post from "./Post";
import TweetBox from "./TweetBox";
import {Button} from "@material-ui/core";
import {Update} from "@material-ui/icons";

function Feed()
{
    return (
        <div className="feed">
            <div className="feed__header">
                <Button size={"large"}>Home</Button>
            </div>
            <TweetBox/>
            <Post/>
            <Post/>
        </div>
    )
}
export default Feed;