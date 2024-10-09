import React from 'react';
import Card from "../ui-lib/card/card";
import cards from "./cardsData";
import cardsStyle from "./cardList.module.css"

export default function Cards() {
  const cardsElements = cards.map((item) => (
      <Card 
        key={item.id}
        date= {`Дата начала: ${item.date}`}
        end_date= {`Дата окончания: ${item.end_date}`}
        title={item.title}
        description={item.description}
        price={`Цена: ${item.price}`}
        instructor= {`Instructor: ${item.instructor}`}
        src={item.path} // путь к изображению
      />
    ));

  return (
    <div className={cardsStyle.container}>
      {cardsElements}
    </div>
  );
}

