import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  function noop(e) {
    e.preventDefault();
  }
  return (
    <footer className={styles['site-footer']}>
      <div className={styles['footer-inner']}>
        <span>© {new Date().getFullYear()} Loja</span>
        <nav className={styles['footer-nav']} aria-label="Rodapé">
          <a href="#" onClick={noop}>
            Sobre
          </a>
          <a href="#" onClick={noop}>
            Contato
          </a>
        </nav>
      </div>
    </footer>
  );
}
