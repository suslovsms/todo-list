import React from 'react';

export function Input({ placeholder, style }) {
  return (
    <div className={style}>
      <input placeholder={placeholder}/>
    </div>
  );
}

export function SearchInput({ placeholder, className, value, onChange }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={className}
      value={value} 
      onChange={onChange} 
    />
  );
}
