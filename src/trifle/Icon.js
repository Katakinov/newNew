import React from "react";
import './Icon.css';



function PetsIconClick({ active, Icon }) {
    return(
        <div className={"petsIconMini ${active && 'sidebarOption--active'}"}>
            <Icon />
        </div>
    );
}

export default PetsIconClick;