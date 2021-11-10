import React from "react";
import './Sidebar.css'
import SidebarOption from "../trifle/SidebarOption";
import ProfileBar from "../trifle/ProfileBar.js"
import PetsIcon from '@material-ui/icons/Pets';
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from "@material-ui/core";
import PetsIconClick from "../trifle/Icon";

function Sidebar() {
    return(
        <div className="sidebar">
            <PetsIconClick active Icon={PetsIcon} className="sidebar__twitterIcon"/>

            <SidebarOption active Icon={HomeOutlinedIcon} text="Home" />
            <SidebarOption Icon={SearchIcon} text="Explore" />
            <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
            <SidebarOption Icon={MailOutlineIcon} text="Messages" />
            <SidebarOption Icon={BookmarkBorderIcon} text="BookMarks" />
            <SidebarOption Icon={ListAltIcon} text="Lists" />
            <SidebarOption Icon={PermIdentityIcon} text="Profile" />
            <SidebarOption Icon={MoreHorizIcon} text="More" />

            {/* Button -> Tweet */}
            <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
            <ProfileBar name={"Oleg"} tag={"Katakinov"} url={"https://sun9-45.userapi.com/impg/YB_2xXgEdrSNrY_CIRlIRuRQDdtZ6b-cxnkFKg/1VJ5ExNAqVQ.jpg?size=1080x568&quality=95&sign=452a98a77f57bb3b8cb52a5fd71feac7&type=album"}></ProfileBar>
        </div>
    );
}

export default Sidebar;