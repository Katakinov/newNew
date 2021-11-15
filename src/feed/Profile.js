import React, {Component} from "react";
import "./Profile.css"
import Post from "./Post"
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import profileItems from "../array/ProfileItems"
import profilePostItems from "../array/ProfilePostItems"

//function Profile({
class Profile extends Component{
    constructor(props) {
        super(props);
        this.state = {
            profileAvatar: profileItems.profileAvatar || "https://img.favpng.com/16/2/3/koala-bear-clip-art-png-favpng-e9SK7y5GVZm012JrLSbkRVZ71.jpg",
            profileUserName: profileItems.profileUserName || "defaultUserName",
            tweetsNumber: profileItems.tweetsNumber || 0,
            backProfileImage: profileItems.backProfileImage || 'https://steamuserimages-a.akamaihd.net/ugc/1013814773810546845/83B0439703299AE4ECA5CA1A4A65490D50234ADD/',
            profileTagName: profileItems.profileTagName || "defaultTagName",
            profileVerified: profileItems.profileVerified || false,
            status: profileItems.status || "defaultStatus",
            following: profileItems.following || 0,
            followers: profileItems.followers || 0,
        };
    }
    render() {
        return (
            <div className="profile">
                <div className="profile__header">
                    <KeyboardBackspaceIcon fontSize="small"/>
                    <div className="profile__headerDandT">
                        <span className="dispNameHeader">{this.state.profileUserName}</span>
                        <span className="tweetsHeader">{this.state.tweetsNumber} Tweets</span>
                    </div>
                </div>
                <div className="profileBody">
                    <div className="upSide">
                        <img className="backProfileImage" src={this.state.backProfileImage}/>
                    </div>
                    <div className="downSide">
                        <div className="avatarAndEdit">
                            <a className="avatar">
                                <img src={this.state.profileAvatar} className="avatarProfile"></img>
                            </a>
                            <a className="editButton" href="#">Edit profile</a>
                        </div>
                        <div className="displayName">{this.state.profileUserName}</div>
                        <div className="tagName">
                            {this.state.profileTagName}
                            {this.state.profileVerified && <VerifiedUserIcon className="post__badge"/>}
                        </div>
                        <div className="profileStatus">
                            {this.state.status}
                        </div>
                        <div className="profileCountFollow">
                            <span className="following">{this.state.following} Following</span>
                            <span>{this.state.followers} Followers</span>
                        </div>
                    </div>
                </div>
                {profilePostItems.map((item, index) => {
                    return(
                        <Post
                            userName={item.userName}
                            tagName={item.tagName}
                            verified={item.verified && false}
                            postTime={item.postTime}
                            postText={item.postText}
                            postImage={item.postImage}
                            avatar={item.avatar}
                            commentNumber={item.commentNumber}
                            retweetNumber={item.retweetNumber}
                            likeNumber={item.likeNumber}
                            shareNumber={item.shareNumber}
                            key={index}
                        />
                    )
                })}
            </div>
        );
    }
}

export default Profile;