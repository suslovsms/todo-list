import bannerStyle from  "./banner.module.css"
import TextCard from "../ui-lib/textCard/textCard"
import textCounts from "./textCounts"

export default function Banner(){
  const TextCards = textCounts.map((item) => (
    <TextCard 
      key = {item.id}
      title = {item.title}
      description = {item.description}
      classNameTitle={bannerStyle.title}
      classNameText={bannerStyle.text}
      />
  ))
    return (
      <div className={bannerStyle.background}>
        <div className={bannerStyle.textBlock}>
          {TextCards}
        </div>
      </div>
    )
}