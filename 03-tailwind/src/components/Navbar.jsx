import React from 'react'
import Button from './Button'

export default function Navbar({theme,onToggle,cartCount=0}){
  return (
    <header className="sticky top-0 bg-white dark:bg-slate-900 shadow-sm z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-3">
        <div className="flex items-center gap-3"><div className="w-10 h-10 bg-primary rounded-lg" aria-hidden></div><strong>Loja</strong></div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" onClick={onToggle}>{theme==='dark'?'🌙':'☀️'}</Button>
          <div role="status" aria-label={`Itens no carrinho: ${cartCount}`} className="px-2 py-1 rounded-full bg-violet-600 text-white">{cartCount}</div>
        </div>
      </div>
    </header>
  )
}
