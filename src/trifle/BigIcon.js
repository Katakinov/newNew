import React from "react";
import './BigIcon.css';



function BigIcon({ active, Icon }) {
    return(
        <div className={"petsIconBig"}>
            <Icon />
        </div>
    );
}

export default BigIcon;