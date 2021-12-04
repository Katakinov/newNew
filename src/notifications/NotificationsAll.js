import React from "react";
import "./NotificationsAll.css"
import All from "./All"

function NotificationsAll() {
    return(
        <div className="notificationsAll">
            <div className="notificationsAll__header">
                <div>Notifications</div>
            </div>
            <div className="notificationsAll__body">
                <a className="notificationsAll1__button" href="/notificationsall">
                    All
                </a>
                <a className="notificationsAll2__button" href="/notificationsmentions">
                    Mentions
                </a>
            </div>
            <All/>
        </div>
    )
};

export default NotificationsAll;