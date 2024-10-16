  
  import { useState } from "react"
import footerStyle from  "./footer.module.css"
  

const buttonList = [
  {
    "id": "1",
    "button":"Политика"
  },
  {
    "id": "2",
    "button":"Условия"
  },
  {
    "id": "3",
    "button":"Поддержка"
  },
  {
    "id": "4",
    "button":"Контакты"
  },
  {
    "id": "5",
    "button":"О нас"
  },
  {
    "id": "6",
    "button":"Еще 6"
  },
  {
    "id": "7",
    "button":"Еще 7"
  },
  {
    "id": "8",
    "button":"Еще 8"
  },
  {
    "id": "9",
    "button":"Еще 9"
  },
  {
    "id": "10",
    "button":"Еще 10"
  }
]

function Item ({button}){
  return(<div className={footerStyle.li}>{button}</div>)
}


export default function Footer() {
  let Items = buttonList.map((item) => <Item key={item.id} button={item.button}/>)
  let [state, setState] = useState(false)
  let [array, setArray] = useState(Items)

  

  const handleButton = () => {

    if(state) {
      setState(false)
      setArray((Items.slice(0, 4)))
    } else {
      setState(true)
      setArray(Items)
    }
    
  }

  return (
    <footer className = {footerStyle.container}>
      <div>{state}</div>
      <button onClick={handleButton}>How many buttons?</button>
      <figcaption className={footerStyle.list}>{array}</figcaption>
    </footer>
  );
}



