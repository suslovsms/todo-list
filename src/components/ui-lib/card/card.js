import React from 'react';
import cardStyle from "./card.module.css";

export default function Card({ src, title, date, end_date, description, price, instructor, isFull, onClick }) {
  return (
    <div onClick={onClick} className={cardStyle.body}>
      <img src={src} alt="Banner" className={cardStyle.icon} />
      <div>
        <div className={cardStyle.title}>{title}</div>
        <div className={cardStyle.description}>{description}</div>
      </div>

      {isFull ? (
        <>
          <div className={cardStyle.date}>{date}</div>
          <div className={cardStyle.endDate}>{end_date}</div>
          <div className={cardStyle.price}>{price}</div>
          <div className={cardStyle.instructor}>{instructor}</div>
        </>
      ) : null
      }
    </div>
  );
}
