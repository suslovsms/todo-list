  
  import footerStyle from  "./footer.module.css"
  
  export default function Footer() {
    return (
      <footer className = {footerStyle.container}>

        <figcaption className={footerStyle.list}>
            <ul>
              <li>Разместить рекламу</li>
              <li>Для Бизнеса</li>
              <li>Помощь</li>
              <li>О проекте</li>
              <li>Стань частью команды</li>
            </ul>
          </figcaption>
        
      </footer>
    );
  }