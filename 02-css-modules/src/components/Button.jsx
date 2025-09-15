import React from 'react'
import styles from './Button.module.css'

export default function Button({variant='solid', children, className='', ...props}){
  return (
    <button className={[styles.btn, styles[variant], className].filter(Boolean).join(' ')} {...props}>
      {children}
    </button>
  )
}
