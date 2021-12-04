import React from "react";
import "./Notifications.css"

function Notifications() {
    return(
        <div className="notifications">
            <div className="notifications__header">
                <div>Notifications</div>
            </div>
            <div className="notifications__body">
                <a className="notifications__button" href="/notificationsall">
                    All
                </a>
                <a className="notifications__button" href="/notificationsmentions">
                    Mentions
                </a>
            </div>
        </div>
    )
};

export default Notifications;