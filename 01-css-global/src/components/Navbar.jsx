import React from 'react';
import '../styles/components/navbar.css';

export default function Navbar({ theme, onToggle, cartCount = 0 }) {
  // Agora o Header fornece o wrapper <header> e o container centralizado.
  // O Navbar exporta apenas os blocos left/right para serem filhos do container.
  return (
    <>
      <div className="navbar-left">
        <div className="brand-box" aria-hidden></div>
        <strong>Loja</strong>
      </div>
      <div className="navbar-right">
        <button aria-pressed={theme === 'dark'} onClick={onToggle} className="button-base ghost">
          {theme === 'dark' ? '🌙' : '☀️'}
        </button>
        <div aria-label={`Itens no carrinho: ${cartCount}`} role="status" className="tag">
          {cartCount}
        </div>
      </div>
    </>
  );
}
