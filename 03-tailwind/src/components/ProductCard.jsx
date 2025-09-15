import React from 'react'
import Button from './Button'

export default function ProductCard({ product, onAdd, loading = false }) {
  return (
    <article tabIndex={0} aria-labelledby={`title-${product.id}`} className="bg-surface dark:bg-surface rounded-lg shadow-sm overflow-hidden hover:-translate-y-1 transition-transform">
  <div className="w-full aspect-square bg-bg overflow-hidden product-thumb">
        {loading ? (
          <div className="h-full w-full animate-pulse bg-muted" />
        ) : (
          <img src={product.image} alt={product.title} loading="lazy" className="w-full h-full object-cover block" />
        )}
      </div>
      <div className="p-3">
        <h3 id={`title-${product.id}`} className="font-semibold text-sm line-clamp-2">
          {product.title}
        </h3>
        <div className="flex items-center gap-3 text-muted text-sm mt-2">
          <div className="font-bold">R$ {product.price.toFixed(2)}</div>
          <div aria-hidden>⭐ {product.rating}</div>
          {product.tag ? <div className="px-2 py-0.5 rounded-full bg-primary text-white text-xs">{product.tag}</div> : null}
        </div>
        <div className="mt-3">
          <Button variant="solid" onClick={() => onAdd(product)} aria-label={`Adicionar ${product.title}`}>
            Adicionar
          </Button>
        </div>
      </div>
    </article>
  )
}
