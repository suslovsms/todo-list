import navBarStyle from  "./navBar.module.css"
import ToggleButton from "../ui-lib/toggleButton/ToggleButton";
import UserLogo from "../ui-lib/userLogo/userLogo";


  export default function NavBar() {
    return (
        <div className={navBarStyle.container}>
          <div className={navBarStyle.logo}><UserLogo text = "Maksim" image = "/images/user.jpg"/></div> 
          <div>
            <button className={navBarStyle.button}>Маршруты</button>
            <button className={navBarStyle.button}>Советы</button>
            <button className={navBarStyle.button}>Контакты</button>
          </div>
        <ToggleButton text="Начать приключения" />
        </div>
    );
  }
