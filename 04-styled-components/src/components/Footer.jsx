import React from 'react'
import styled from 'styled-components'

const SiteFooter = styled.footer`
  background: ${p=>p.theme.surface};
  padding: 16px 24px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.06);
`
const Inner = styled.div`max-width:1280px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:12px`
const Nav = styled.nav`display:flex;gap:12px`
const NavLink = styled.a`color:${p=>p.theme.muted};text-decoration:none;font-size:14px;&:hover{color:${p=>p.theme.primary}}`

export default function Footer(){
  function noop(e){ e.preventDefault() }
  return (
    <SiteFooter>
      <Inner>
        <span>© {new Date().getFullYear()} Loja</span>
        <Nav aria-label="Rodapé">
          <NavLink href="#" onClick={noop}>Sobre</NavLink>
          <NavLink href="#" onClick={noop}>Contato</NavLink>
        </Nav>
      </Inner>
    </SiteFooter>
  )
}
