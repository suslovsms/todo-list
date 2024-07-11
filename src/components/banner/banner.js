import bannerStyle from  "./banner.module.css"
import {capitalize} from "./hooks.js"

export default function Banner({text, children}){
    return (
      <figure className={bannerStyle.container}>
        {children}
        <figcaption className={bannerStyle.caption}>
          {capitalize(text)}
          </figcaption>
      </figure>  
    );
}