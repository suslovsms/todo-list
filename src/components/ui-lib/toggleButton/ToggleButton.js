import React from 'react';
import ToggleButtonStyles from "./toggleButton.module.css";

export default function ToggleButton({ text, className, onClick }) {
    return (
      <button 
      onClick={onClick}
      className={className || ToggleButtonStyles.button}>
        {text}
      </button>
    );
}
