import React from 'react';
import Logo from '../assets/react.svg';
import styles from './Navbar.module.css';
import Button from './Button';

export default function Navbar({ theme, onToggle, cartCount = 0 }) {
  return (
    <header className={styles.nav}>
      <div className={styles.inner}>
        <div className={styles.logoBox}>
          <img src={Logo} alt="" style={{ width: 40, height: 40 }} />
          <strong>Loja</strong>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Button variant="ghost" onClick={onToggle} aria-pressed={theme === 'dark'}>
            {theme === 'dark' ? '🌙' : '☀️'}
          </Button>
          <div aria-label={`Itens no carrinho: ${cartCount}`} role="status" className={styles.tag}>
            {cartCount}
          </div>
        </div>
      </div>
    </header>
  );
}
