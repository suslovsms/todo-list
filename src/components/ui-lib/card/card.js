import React from 'react';
import cardlStyle from "./card.module.css";

export default function Card({cardsData}) {
  return (
    <div className={cardlStyle.body}>

      <div>{cardsData}</div>
      
    </div>
  );
}
