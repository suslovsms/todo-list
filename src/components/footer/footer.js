  
  import footerStyle from  "./footer.module.css"
  
  export default function Footer() {
    return (
      <footer className = {footerStyle.container}>

        <figcaption className={footerStyle.caption}>
            Подвал сайта
          </figcaption>
        
      </footer>
    );
  }
