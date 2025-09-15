import React from 'react';
import '../styles/components/button.css';

export default function Button({ variant = 'solid', children, className = '', ...props }) {
  const base = 'button-base';
  return (
    <button className={`${base} ${variant} ${className}`} {...props}>
      {children}
    </button>
  );
}
