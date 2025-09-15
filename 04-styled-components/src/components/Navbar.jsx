import styled from 'styled-components'
import Button from './Button'

const Header = styled.header`
  position:sticky; top:0; background:${p=>p.theme.surface}; padding:12px 24px; box-shadow:0 1px 2px rgba(0,0,0,0.06); z-index:50;
`
const Inner = styled.div`display:flex;align-items:center;justify-content:space-between;max-width:1280px;margin:0 auto;`

export default function Navbar({theme,onToggle,cartCount=0}){
  return (
    <Header>
      <Inner>
        <div style={{display:'flex',alignItems:'center',gap:12}}><div style={{width:40,height:40,background:'#2563eb',borderRadius:8}} aria-hidden></div><strong>Loja</strong></div>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <Button variant="ghost" onClick={onToggle}>{theme==='dark'?'🌙':'☀️'}</Button>
          <div role="status" aria-label={`Itens no carrinho: ${cartCount}`} style={{background:'var(--accent)',color:'white',padding:'4px 8px',borderRadius:999}}>{cartCount}</div>
        </div>
      </Inner>
    </Header>
  )
}
