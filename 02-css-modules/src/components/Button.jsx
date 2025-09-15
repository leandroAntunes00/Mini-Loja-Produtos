import React from 'react'
import styles from './Button.module.css'


export default function Button({ variant = 'solid', children, className = '' , ...props }) {
  const classes = [styles['button-base'], styles[variant], className].filter(Boolean).join(' ')
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}