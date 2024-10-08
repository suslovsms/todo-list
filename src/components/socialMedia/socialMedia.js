import IconSocial from "../ui-lib/iconSocial/iconSocial"
import socialPicturesData from "./socialPicturesData"
import socialMedia from "./socialMedia.module.css"

export default function SocialMedia(){
  const Logo = socialPicturesData.map((item)=>(<IconSocial key = {item.id} src = {item.src}/>))
    return (
      <div className={socialMedia.container}>
        {Logo}
      </div>
    );
}