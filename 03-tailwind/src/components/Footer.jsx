import React from 'react'

export default function Footer() {
  function noop(e) {
    e.preventDefault()
  }
  return (
    <footer className="mt-8 border-t border-muted">
      <div className="max-w-6xl mx-auto p-4 flex items-center justify-between text-sm text-muted">
        <span>© {new Date().getFullYear()} Loja</span>
        <nav className="flex gap-4" aria-label="Rodapé">
          <a href="#" onClick={noop} className="hover:underline">Sobre</a>
          <a href="#" onClick={noop} className="hover:underline">Contato</a>
        </nav>
      </div>
    </footer>
  )
}
