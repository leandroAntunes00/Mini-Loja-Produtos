import React from 'react'

export default function Navbar({theme, onToggle, cartCount=0}){
  return (
    <header style={{position:'sticky',top:0,background:'var(--surface)',padding:'12px 24px',boxShadow:'var(--shadow-sm)',zIndex:50}}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',maxWidth:1280,margin:'0 auto'}}>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <div style={{width:40,height:40,background:'var(--primary)',borderRadius:8}} aria-hidden></div>
          <strong>Loja</strong>
        </div>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <button aria-pressed={theme==='dark'} onClick={onToggle} className="button-base ghost">{theme==='dark'?'🌙':'☀️'}</button>
          <div aria-label={`Itens no carrinho: ${cartCount}`} role="status" className="tag">{cartCount}</div>
        </div>
      </div>
    </header>
  )
}
