import React from "react";
import './Post.css'
import {Avatar, Button, MenuItem} from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import RepeatIcon from '@material-ui/icons/Repeat';
import PublishIcon from '@material-ui/icons/Publish';

function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar

}) {
    return <div className='post'>
        <div className='post__avatar'>
            <Avatar src="https://sun9-45.userapi.com/impg/YB_2xXgEdrSNrY_CIRlIRuRQDdtZ6b-cxnkFKg/1VJ5ExNAqVQ.jpg?size=1080x568&quality=95&sign=452a98a77f57bb3b8cb52a5fd71feac7&type=album"/>
        </div>
        <div className="post__body">
            <div className="post__header">
                <div className="post__headerText">
                    <h3>
                        Katakinov{" "}
                        <span className="post__headerSpecial">
                            {verified && <VerifiedUserIcon className="post__badge" />}
                            @koala_aya
                            <div className="post__headerTime">
                                time
                            </div>
                        </span>
                    </h3>
                </div>
                <div className="post__headerDescription">
                    <p>Доброе утро во Владивостоке, редкий кадр с лисами. Сегодня осень порадовала нас тёплым солнышком и безветренной погодой.</p>
                    <img className="contentImg" src='https://sun9-79.userapi.com/impg/8ddJy_rDtFdWdlkDP2EzWErLa7Bk2Gs91SFaLg/mZMnLXdNnX4.jpg?size=710x1080&quality=95&sign=5867beb66b3a468e0f7f0451c5506de2&type=album'/>
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