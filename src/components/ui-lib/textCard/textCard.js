import React from 'react';

export default function TextCard({ title, description}) {
    return (
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
}
