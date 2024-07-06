  import cafeRacerLogo from "./cafeRacerLogo.png"
  import headerStyle from  "./header.module.css"
  
  export default function Header() {
    return (
      <header className = {headerStyle.container}>
        <figcaption className={headerStyle.caption}>
          <img src = {cafeRacerLogo} 
          className = {headerStyle.picture} 
          alt="Cafe Racer logo"/>
            shop
        </figcaption>

        <button className={headerStyle.button}>
          Buy
        </button>

        <button className={headerStyle.button}>
          Sell
        </button>

        <button className={headerStyle.button}>
          About us
        </button>

        <button className={headerStyle.button}>
          Contacts us
        </button>
      </header>
    );
  }
