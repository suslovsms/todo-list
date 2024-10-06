import React from 'react';
import textCard from "./textCard.module.css";

export default function TextCard({ title, discription}) {
    return (
      <div>
        <h3>{title}</h3>
        <p>{discription}</p>
      </div>
    );
}
