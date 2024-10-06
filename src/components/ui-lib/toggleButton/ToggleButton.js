import React from 'react';
import ToggleButtonStyles from "./toggleButton.module.css";

export default function ToggleButton({ text }) {
    return (
      <button className={ToggleButtonStyles.button}>
        {text}
      </button>
    );
}
