import React from 'react';

export default function Input({ placeholder, style }) {
  return (
    <div className={style}>
       <input placeholder={placeholder}/>
    </div>
  );
}
