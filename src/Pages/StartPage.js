import React from "react";
import "./StartPage.css"
import {Button} from "@material-ui/core";

function StartPage(){
    return(
        <div className="pageBody">
            <span className="welcomeTitle">
                Welcome to TWICLONE my friend!
                <Button /*onClick={sendTweet}*/ href={"/home"} type="submit" className="startButton">Начать</Button>
            </span>
        </div>
    )
}

export default StartPage;