import React from "react";
import "./Home.css"
import "./Post"
import "./TweetBox"
import Post from "./Post";
import TweetBox from "./TweetBox";
import homePostItems from "../array/HomePostItems";

function Home({
                  profileAvatar="https://img.icons8.com/cotton/452/dog-sit--v2.png",
              }){
    return (
        <div className="feed">
            <div className="feed__header">
                <div>Home</div>
            </div>
            <TweetBox profileAvatar={profileAvatar}/>
            {homePostItems.map((item, index) => {
                return(
                    <Post
                        userName={item.userName}
                        tagName={item.tagName}
                        verified={item.verified && true}
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
    )
}

export default Home;