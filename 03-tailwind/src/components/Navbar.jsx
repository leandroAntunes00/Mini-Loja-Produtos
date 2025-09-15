import React from 'react'
import Button from './Button'
import Logo from '../assets/react.svg'

export default function Navbar({theme,onToggle,cartCount=0}){
  return (
    <header className="sticky top-0 bg-surface dark:bg-surface z-50 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-3">
        <div className="flex items-center gap-3">
          <img src={Logo} alt="Logo" className="w-10 h-10 rounded-md" />
          <strong className="text-lg">Loja</strong>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" onClick={onToggle}>{theme==='dark'?'🌙':'☀️'}</Button>
          <div role="status" aria-label={`Itens no carrinho: ${cartCount}`} className="px-2 py-1 rounded-full bg-primary text-white">{cartCount}</div>
        </div>
      </div>
    </header>
  )
}
