import React from 'react'

export default function Button({variant='solid', children, className='', ...props}){
  const base = 'inline-flex items-center gap-2 px-3 py-2 rounded-lg font-semibold transition-transform'
  const varClass = variant==='solid' ? 'bg-primary text-white' : variant==='outline' ? 'border border-gray-300 bg-transparent text-gray-900' : 'bg-transparent'
  return <button className={`${base} ${varClass} ${className}`} {...props}>{children}</button>
}
