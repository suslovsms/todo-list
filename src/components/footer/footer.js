  
  import footerStyle from  "./footer.module.css"
  
  export default function Footer() {
    return (
      <footer className = {footerStyle.container}>

        <figcaption className={footerStyle.list}>
            <ul>
              <li>Политика</li>
              <li>Условия</li>
              <li>Поддержка</li>
              <li>Контакты</li>
            </ul>
          </figcaption>
        
      </footer>
    );
  }