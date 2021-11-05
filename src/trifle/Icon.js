import React from "react";
import './Icon.css';



function PetsIconClick({ active, Icon }) {
    return(
        <div className={"petsIcon ${active && 'sidebarOption--active'}"}>
            <Icon />
        </div>
    );
}

export default PetsIconClick;