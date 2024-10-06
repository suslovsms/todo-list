import React from 'react';
import inputStyle from "./input.module.css";

export default function Input({ placeholder }) {
  return (
    <div>
       <input placeholder={placeholder}/>
    </div>
  );
}
