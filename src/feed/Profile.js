import React from "react";
import "./Profile.css"
import Post from "./Post"
import { Avatar, Button } from '@material-ui/core'
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

function Profile({displayName="displayName", tweets="0",avatar, backProfileImage, status="status", verified="true", tagName="tagName", following=0, followers=0}){
    return(
        <div className="profile">
            <div className="profile__header">
                <KeyboardBackspaceIcon fontSize="small"/>
                <div className="profile__headerDandT">
                    <span className="dispNameHeader">
                        {displayName}
                    </span>
                    <span className="tweetsHeader">
                        {tweets} Tweets
                    </span>
                </div>
            </div>
            <div className="profileBody">
                <div className="upSide">
                    <img className="backProfileImage" src={"https://psv4.userapi.com/c532036/u256323700/docs/d40/a6474ad76ff3/DSC_0192.jpg?extra=lpzjrcyOE6B360zBgUnvYgMf3YN6rbFfqg0Bl8WC0D5tl03TiAtc3YeVRXYkDf2Hzxvvz-T2KJHlJHQrlZcmuiHsGuiXyDYZ18rrVgwl1SQqt_31caWTVMrmvGiazj-T9W3g9PGXAe81TD4nHZMOTmQ"} />
                </div>

                <div className="downSide">
                    <div className="avatarAndEdit">
                        <a className="avatar">
                            <img  src={"https://psv4.userapi.com/c536436/u256323700/docs/d17/02dd0931f940/DSC_0056.jpg?extra=c5V1sS_cYSfDLMpDj7dMvORpxsVvcLorS-lZ7XJkSgnSB_F9j9JOgNgACSOfMAjc8DPY9L88CchDzK-s8a-ZZWC6ZRZGBNnCKYt2LaVAPiZFU1x9NEYVQRK1FNsIfOPBhC2Ewe-_mMxKoNobFc8DA8BA"} className="avatarProfile"></img>
                        </a>
                        <a className="editButton" href="#">Edit profile</a>
                    </div>
                    <div className="displayName">{displayName}</div>
                    <div className="tagName">
                        {tagName}
                        {verified && <VerifiedUserIcon className="post__badge" />}
                    </div>
                    <div className="profileStatus">
                        {status}
                    </div>
                    <div className="profileCountFollow">
                        <span className="following">{following} Following</span>
                        <span>{followers} Followers</span>
                    </div>
                </div>
            </div>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}

export default Profile;