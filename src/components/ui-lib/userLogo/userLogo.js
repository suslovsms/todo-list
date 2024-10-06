import React from 'react';
import userLogoStyle from "./userLogo.module.css"

export default function UserLogo({ text, image }) {
    return (
        <div className={userLogoStyle.logo}>
            <img src={image} alt="User logo" className={userLogoStyle.icon} />
            <span className={userLogoStyle.userName}>{text}</span>
            
        </div>
        
    );
}
