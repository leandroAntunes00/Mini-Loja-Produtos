import React from 'react'
import styles from './Navbar.module.css'

export default function Navbar({theme,onToggle,cartCount=0}){
  return (
    <header className={styles.nav}>
      <div className={styles.inner}>
        <div className={styles.logoBox}><div style={{width:40,height:40,background:'var(--primary)',borderRadius:8}} aria-hidden></div><strong>Loja</strong></div>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <button aria-pressed={theme==='dark'} onClick={onToggle} className={"btn ghost"}>{theme==='dark'?'🌙':'☀️'}</button>
          <div aria-label={`Itens no carrinho: ${cartCount}`} role="status" className={styles.tag}>{cartCount}</div>
        </div>
      </div>
    </header>
  )
}
