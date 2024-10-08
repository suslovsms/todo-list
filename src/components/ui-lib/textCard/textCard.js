import React from 'react';

export default function TextCard({ title, description, classNameTitle, classNameText}) {
    return (
      <div>
        <div className={classNameTitle}>{title}</div>
        <div className={classNameText}>{description}</div>
      </div>
    );
}
