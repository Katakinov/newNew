import React, {useEffect, useState} from "react";
import './Feed.css'
import TweetBox from "./TweetBox";
import Post from "./Post";
//jopa gorit
//import db from './firebaseTwi';

function Feed() {
    //const [posts, setPosts] = useState([]);

    //jopa gorit
    /*useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, []);*/

    return (
        <div className='feed'>
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            <TweetBox />

            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>

            {//posts.map(post=> (
                // <Post
                // displayName={post.displayName}
                //username={post.username}
                //verified={post.verified}
                //text={post.text}
                //avatar={post.avatar}
                //image={post.image}
                // />
                // ))}
            }
        </div>
    );
}

export default Feed;