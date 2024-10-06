import bannerStyle from  "./banner.module.css"
import TextCard from "../ui-lib/textCard/textCard"

export default function Banner(){
    return (
      <div className={bannerStyle.container}>
        "banner"
        <TextCard title = "100+" discription= "уникальных маршрутов"/>
        <TextCard title = "50" discription= "советов по выживанию"/>
        <TextCard title = "2000+" discription= "счастливых туристов"/>
      </div>
      
    );
}