import React, {Component} from "react";
import "./Profile.css"
import Post from "./Post"
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import profileItems from "../array/ProfileItems"
import profilePostItems from "../array/ProfilePostItems"
import ItemsWid from "../array/WidjetsItems";
import WidgetsActual from "../widgets/WidgetsActual";

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
            tapBarStatus1: "Profile",
        }
        this.tweetsRepliesTapBarClick =this.tweetsRepliesTapBarClick.bind(this)
        this.tweetsTapBarClick =this.tweetsTapBarClick.bind(this)
        this.mediaTapBarClick =this.mediaTapBarClick.bind(this)
        this.likesTapBarClick =this.likesTapBarClick.bind(this)

    }

    tweetsTapBarClick() {
        this.setState({tapBarStatus1: "Profile"});
    }
    tweetsRepliesTapBarClick() {
        this.setState({tapBarStatus1: "Tweets&Replies"});
    }
    mediaTapBarClick() {
        this.setState({tapBarStatus1: "Media"});
    }
    likesTapBarClick() {
        this.setState({tapBarStatus1: "Likes"});
    }

    render() {
        let post;
        if (this.state.tapBarStatus1 == "Profile")
                {
                    post = profilePostItems.map((item, index) => {
                        if (item.userName == "Katakinov"){
                            return(
                                <Post
                                    userName={item.userName}
                                    avatar={item.avatar}
                                    verified={item.verified && true}
                                    tagName={item.tagName}
                                    postTime={item.postTime}
                                    postText={item.postText}
                                    postImage={item.postImage}
                                    likeNumber={item.likeNumber}
                                    commentNumber={item.commentNumber}
                                    shareNumber={item.shareNumber}
                                    retweetNumber={item.retweetNumber}
                                    likedCl={item.likedCl}
                                    key={index}
                                />
                                )
                            }
                        }
                    )
                }
                else if (this.state.tapBarStatus1 == "Tweets&Replies")
                {
                    post = profilePostItems.map((item, index) => {
                        return(
                            <Post
                                userName={item.userName}
                                avatar={item.avatar}
                                verified={item.verified && true}
                                tagName={item.tagName}
                                postTime={item.postTime}
                                postText={item.postText}
                                postImage={item.postImage}
                                likeNumber={item.likeNumber}
                                commentNumber={item.commentNumber}
                                shareNumber={item.shareNumber}
                                retweetNumber={item.retweetNumber}
                                likedCl={item.likedCl}
                                key={index}
                            />
                            )
                        }
                    )
                }
                else if (this.state.tapBarStatus1 == "Likes")
                {
                    post = profilePostItems.map((item, index) => {
                        if (item.liked){
                            return(
                                <Post
                                    userName={item.userName}
                                    avatar={item.avatar}
                                    verified={item.verified && true}
                                    tagName={item.tagName}
                                    postTime={item.postTime}
                                    postText={item.postText}
                                    postImage={item.postImage}
                                    likeNumber={item.likeNumber}
                                    commentNumber={item.commentNumber}
                                    shareNumber={item.shareNumber}
                                    retweetNumber={item.retweetNumber}
                                    likedCl={item.likedCl}
                                    key={index}
                                />
                                )
                            }
                        }
                    )
                }
                else if (this.state.tapBarStatus1 == "Media")
                {
                    post = profilePostItems.map((item, index) => {
                        if (item.postImage){
                            return(
                                <Post
                                    userName={item.userName}
                                    avatar={item.avatar}
                                    verified={item.verified && true}
                                    tagName={item.tagName}
                                    postTime={item.postTime}
                                    postText={item.postText}
                                    postImage={item.postImage}
                                    likeNumber={item.likeNumber}
                                    commentNumber={item.commentNumber}
                                    shareNumber={item.shareNumber}
                                    retweetNumber={item.retweetNumber}
                                    likedCl={item.likedCl}
                                    key={index}
                                />
                                )
                            }
                        }
                    )
                }
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
                <div className="profile__butBar">
                    <button onClick={this.tweetsTapBarClick} className="profile_tapBarButton">Tweets</button>
                    <button onClick={this.tweetsRepliesTapBarClick} className="profile_tapBarButton">Tweets & Replies</button>
                    <button onClick={this.mediaTapBarClick} className="profile_tapBarButton">Media</button>
                    <button onClick={this.likesTapBarClick} className="profile_tapBarButton">Likes</button>
                </div>
                
                {post}
        
                <div className="exploreWid">
                    <h2>Who to follow</h2>
                    {ItemsWid.map((item, index) => {
                        return(
                            <WidgetsActual nameActual={item.nameActual}
                                           textActual={item.textActual}
                                           countTweet={item.countTweet}
                                           key={index}
                            />
                        )
                    })}
                    <a className="moreInfo" href="#">Show more</a>
                </div>
            </div>
        );
    }
}

export default Profile;