import React from 'react'

export default function Button({variant='solid', children, className='', ...props}){
  const base = 'button-base'
  return (
    <button className={`${base} ${variant} ${className}`} {...props}>
      {children}
    </button>
  )
}
