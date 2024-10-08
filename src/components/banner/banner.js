import bannerStyle from  "./banner.module.css"
import TextCard from "../ui-lib/textCard/textCard"
import textCounts from "./textCounts"

export default function Banner(){
  const TextCards = textCounts.map((item) => (
    <TextCard 
      key = {item.id}
      title = {item.title}
      discription = {item.discription}/>
  ))
    return (
      <div className={bannerStyle.background}>
        <div className={bannerStyle.text}>
          {TextCards}
        </div>
      </div>
    )
}