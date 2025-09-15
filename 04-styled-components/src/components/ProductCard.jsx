import styled from 'styled-components'
import Button from './Button'

const Card = styled.article`
  background:${p=>p.theme.surface}; border-radius:${p=>p.theme.radius}; box-shadow:0 1px 2px rgba(0,0,0,0.06); overflow:hidden; transition:transform 200ms, box-shadow 200ms;
  &:hover{transform:translateY(-6px); box-shadow:0 6px 18px rgba(0,0,0,0.08)}
`
const ImageWrap = styled.div`width:100%; aspect-ratio:1/1; background:linear-gradient(90deg,#eee,#f6f6f6)`
const Content = styled.div`padding:12px`
const Title = styled.h3`font-weight:700; margin:0 0 8px; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden`

export default function ProductCard({product,onAdd,loading=false}){
  return (
    <Card tabIndex={0} aria-labelledby={`title-${product.id}`}>
      <ImageWrap>{loading ? <div style={{height:'100%',width:'100%'}} className="skeleton"/> : <img src={product.image} alt={product.title} loading="lazy" style={{width:'100%',height:'100%',objectFit:'cover'}} />}</ImageWrap>
      <Content>
        <Title id={`title-${product.id}`}>{product.title}</Title>
        <div style={{display:'flex',gap:8,alignItems:'center',color:'var(--muted)'}}>
          <div style={{fontWeight:700}}>R$ {product.price.toFixed(2)}</div>
          <div aria-hidden>★ {product.rating}</div>
          {product.tag ? <div style={{background:'#7c3aed',color:'white',padding:'4px 8px',borderRadius:999,fontSize:12}}>{product.tag}</div> : null}
        </div>
        <div style={{marginTop:12}}><Button variant="solid" onClick={()=>onAdd(product)}>Adicionar</Button></div>
      </Content>
    </Card>
  )
}
