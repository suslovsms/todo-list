import React, { useState } from 'react';
import Card from "../ui-lib/card/card";
import cards from "./cardsData";
import cardsStyle from "./cardList.module.css";

export function Cards() {
  const [openCardId, setOpenCardId] = useState(true); 

  function handleCardClick(cardId) {
    setOpenCardId(prevId => (prevId === cardId ? null : cardId));
  }

  const cardsElements = cards.map((item) => (
    <Card 
      key={item.id}
      title={item.title}
      price={`Цена: ${item.price}`}
      instructor={`Instructor: ${item.instructor}`}
      date = {`Start date: ${item.date}`}
      end_date = {`End date: ${item.end_date}`}
      description = {item.description}
      src={item.path} 
      isFull={openCardId === item.id} 
      onClick={() => handleCardClick(item.id)} 
    />
  ));

  return (
    <div className={cardsStyle.container}>
      {cardsElements}
    </div>
  );
}
