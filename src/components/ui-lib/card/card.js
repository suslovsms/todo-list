import React from 'react';
import cardStyle from "./card.module.css";

export default function Card({ src, title, date, end_date, description, price, instructor }) {

  return (
    <div className={cardStyle.body}>
      <img src={src} alt="Banner" className={cardStyle.icon} />
      <div className={cardStyle.title}>{title}</div>
      <div className={cardStyle.date}>{date}</div>
      <div className={cardStyle.endDate}>{end_date}</div>
      <div className={cardStyle.description}>{description}</div>
      <div className={cardStyle.price}>{price}</div>
      <div className={cardStyle.instructor}>{instructor}</div>
    </div>
  );
}