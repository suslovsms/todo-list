import React from 'react';
import iconSocialStyle from "./iconSocial.module.css";

export default function IconSocial({ src }) {
  return (
    <div>
        <img src={src} alt = "SocialMedia" className={iconSocialStyle.icon} /> 
    </div>
  );
}
