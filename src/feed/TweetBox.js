import React, {useState} from "react";
import './TweetBox.css'
import { Avatar, Button } from '@material-ui/core'

function TweetBox() {
    //const [tweetMessage, setTweetMessage] = useState("");
    //const [tweetImage, setTweetImage] = useState("");
    //const sendTweet = e => {
        //e.preventDefault();
    //}

    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox_input'>
                    <Avatar src="https://sun9-45.userapi.com/impg/YB_2xXgEdrSNrY_CIRlIRuRQDdtZ6b-cxnkFKg/1VJ5ExNAqVQ.jpg?size=1080x568&quality=95&sign=452a98a77f57bb3b8cb52a5fd71feac7&type=album"/>
                    <input
                        //onChange={e => setTweetMessage(e.target.value)}
                        value=""
                        placeholder="What's happening?"
                        type="text"/>
                </div>
                <input
                    value=""
                    //onChange={e => setTweetMessage(e.target.value)}
                    className='tweetBox_imageInput'
                    placeholder="Optional: Enter image URL"
                    type="text"/>

                <Button /*onClick={sendTweet}*/ type="submit" className="tweetBox_tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;
                /* https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png */
