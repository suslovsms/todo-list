  import cafeRacerLogo from "./cafeRacerLogo.png"
  import headerStyle from  "./header.module.css"
  
  export default function Header() {
    return (
      <footer className = {headerStyle.container}>
        
        <figcaption className={headerStyle.caption}>
          <img src = {cafeRacerLogo} 
          className = {headerStyle.picture} 
          alt="Cafe Racer logo"/>
            CafeRacer shop
        </figcaption>
        
      </footer>
    );
  }
