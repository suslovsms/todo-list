import React from 'react';

export function Checkbox({ onClick, style }) {
  return (
    <input type="checkbox" onClick={onClick} className={style}/>
  );
}
