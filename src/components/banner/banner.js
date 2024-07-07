import honda from "./honda.webp"
import bannerStyle from  "./banner.module.css"
import {capitalize} from "./hooks.js"

export default function Banner({text, children}){
  const banneText = capitalize(text);
    return (
      <figure className={bannerStyle.container}>
        {children}
        <img className={bannerStyle.picture}
        src = {honda}
        alt={banneText}/>
        <figcaption className={bannerStyle.caption}>
          {capitalize(text)}
          </figcaption>
      </figure>  
    );
}