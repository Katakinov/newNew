import React from "react";
import './Post.css'
import {Avatar} from "@material-ui/core";
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
                        </span>
                    </h3>
                </div>
                <div className="post__headerDescription">
                    <p>Hello, welcome to my twiclone!</p>
                </div>
            </div>
            <img src="https://vk.com/im?peers=219112112_371180109_255407264_280002642_483318882_c13_c23_184354707_c12_432507270&sel=c21&z=photo204563441_457254595%2Fmail647097" alt=""/>
            <div className="post__footer">
                <span className="comment">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <h5>123</h5>
                </span>

                <span className="comment">
                    <RepeatIcon fontsize="small" />
                    <h5>124</h5>
                </span>

                <span className="comment">
                    <FavoriteBorderIcon fontsize="small" />
                    <h5>125</h5>
                </span>

                <span className="comment">
                    <PublishIcon fontsize="small" />
                    <h5>126</h5>
                </span>
            </div>
        </div>
    </div>;
}

export default Post;