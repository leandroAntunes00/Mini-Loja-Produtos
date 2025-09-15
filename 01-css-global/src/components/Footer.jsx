import React from 'react';
import '../styles/components/footer.css';

export default function Footer() {
  function noop(e) {
    e.preventDefault();
  }
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span>© {new Date().getFullYear()} Loja</span>
        <nav className="footer-nav" aria-label="Rodapé">
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
