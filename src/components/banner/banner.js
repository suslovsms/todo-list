import honda from "./honda.webp"
import bannerStyle from  "./banner.module.css"

export default function Banner(){
    return (
      <figure className={bannerStyle.container}>
        <img className={bannerStyle.picture}
        src = {honda}
        alt="Текст акции"/>
        <figcaption className={bannerStyle.caption}>
          Текст акции
          </figcaption>
      </figure>  
    );
}