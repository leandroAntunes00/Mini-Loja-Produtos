import React from 'react'

export default function Button({ variant = 'solid', children, className = '', ...props }) {
  const base = 'inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-transform active:scale-95 shadow-sm'
  const variants = {
    solid: 'bg-primary hover:bg-primary/90 text-white',
    outline: 'border border-muted bg-transparent text-text hover:bg-surface',
    ghost: 'bg-transparent text-text hover:bg-surface',
  }
  const varClass = variants[variant] ?? variants.solid
  return (
    <button className={`${base} ${varClass} ${className}`} {...props}>
      {children}
    </button>
  )
}
