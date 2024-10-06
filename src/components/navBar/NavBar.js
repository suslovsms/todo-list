import navBarStyle from  "./navBar.module.css"
import ToggleButton from "../ui-lib/toggleButton/ToggleButton";
import UserLogo from "../ui-lib/userLogo/userLogo";


  export default function NavBar() {
    return (
      <header >
        <div className={navBarStyle.container} >
          
          <UserLogo text = "Maksim" image = "/images/user.jpg"/>

          <button className={navBarStyle.button}>
          Маршруты
          </button>

          <button className={navBarStyle.button}>
          Советы
          </button>

          <button className={navBarStyle.button}>
          Контакты
        </button>
        <ToggleButton text="Начать приключения" />
        </div>

      </header>
    );
  }
