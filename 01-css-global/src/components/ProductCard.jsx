import React from 'react'
import Button from './Button'

export default function ProductCard({product, onAdd, loading=false}){
  return (
    <article className="card" tabIndex={0} aria-labelledby={`title-${product.id}`}>
      <div className="image-wrap">
        {loading ? <div className="skeleton" style={{width:'100%',height:'100%'}}/> : <img src={product.image} alt={product.title} loading="lazy" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />}
      </div>
      <div className="content">
        <h3 id={`title-${product.id}`} className="title">{product.title}</h3>
        <div className="meta">
          <div style={{fontWeight:700}}>R$ {product.price.toFixed(2)}</div>
          <div aria-hidden>★ {product.rating}</div>
          {product.tag ? <div className="tag">{product.tag}</div> : null}
        </div>
        <div style={{marginTop:12}}>
          <Button variant="solid" onClick={() => onAdd(product)} aria-label={`Adicionar ${product.title}`}>Adicionar</Button>
        </div>
      </div>
    </article>
  )
}
