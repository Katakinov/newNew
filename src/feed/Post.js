import React from "react";
import './Post.css'
import {Avatar, Button, MenuItem} from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import RepeatIcon from '@material-ui/icons/Repeat';
import PublishIcon from '@material-ui/icons/Publish';

function Post({
    url,
    displayName,
    username="tuk",
    time,
    verified,
    text,
    image,
    avatar

}) {
    return <div className='post'>
        <div className='post__avatar'>
            <Avatar src={avatar}/>
        </div>
        <div className="post__body">
            <div className="post__header">
                <div className="post__headerText">
                    <h3>
                        {displayName}{" "}
                        <span className="post__headerSpecial">
                            {verified && <VerifiedUserIcon className="post__badge" />}
                            @{username}
                            <div className="post__headerTime">
                                {time}
                            </div>
                        </span>
                    </h3>
                </div>
                <div className="post__headerDescription">
                    <p>{text}</p>
                    <img className="contentImg" src={image}/>
                </div>
            </div>
            <div className="post__footer">
                <Button variant="text" size="small" className="comment">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <h5>123</h5>
                </Button>

                <Button variant="text" size="small" className="comment">
                    <RepeatIcon fontsize="small" />
                    <h5>124</h5>
                </Button>

                <Button variant="text" size="small" className="comment">
                    <FavoriteBorderIcon fontsize="small" />
                    <h5>125</h5>
                </Button>

                <Button variant="text" size="small" className="comment">
                    <PublishIcon fontsize="small" />
                    <h5>126</h5>
                </Button>
            </div>
        </div>
    </div>;
}

export default Post;