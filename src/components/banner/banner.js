import bannerStyle from  "./banner.module.css"
import {capitalize} from "./hooks.js"

export default function Banner(){
    return (
      <figure className={bannerStyle.container}>
        <figcaption className={bannerStyle.caption}>
          {/* {capitalize(text)} */}
        </figcaption>
      </figure>  
    );
}