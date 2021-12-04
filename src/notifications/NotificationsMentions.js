import React from "react";
import "./NotificationsMentions.css"

function NotificationsMentions() {
    return(
        <div className="notificationsMentions">
            <div className="notificationsMentions__header">
                <div>Notifications</div>
            </div>
            <div className="notificationsMentions__body">
                <a className="notificationsMentions1__button" href="/notificationsall">
                    All
                </a>
                <a className="notificationsMentions2__button" href="/notificationsmentions">
                    Mentions
                </a>
            </div>
            <div className="body_all1">
                <div className="for__span">
                    <span className="span__text1">
                        Nothing to see here — yet
                    </span>
                    <span className="span__text2">
                        When someone mentions you, you’ll find it here.
                    </span>
                </div>
            </div>
        </div>
    )
};

export default NotificationsMentions;