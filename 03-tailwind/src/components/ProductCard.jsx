import React from 'react'
import Button from './Button'

export default function ProductCard({product,onAdd,loading=false}){
  return (
    <article tabIndex={0} aria-labelledby={`title-${product.id}`} className="bg-white dark:bg-slate-800 rounded-lg shadow-sm overflow-hidden hover:translate-y-[-6px] transition-transform">
      <div className="w-full aspect-[1/1] bg-gray-100">{loading ? <div className="animate-pulse h-full w-full bg-gray-200" /> : <img src={product.image} alt={product.title} loading="lazy" className="w-full h-full object-cover" />}</div>
      <div className="p-3">
        <h3 id={`title-${product.id}`} className="font-semibold text-sm line-clamp-2">{product.title}</h3>
        <div className="flex items-center gap-3 text-gray-500 text-sm mt-2">
          <div className="font-bold">R$ {product.price.toFixed(2)}</div>
          <div aria-hidden>★ {product.rating}</div>
          {product.tag ? <div className="px-2 py-0.5 rounded-full bg-violet-600 text-white text-xs">{product.tag}</div> : null}
        </div>
        <div className="mt-3"><Button variant="solid" onClick={()=>onAdd(product)}>Adicionar</Button></div>
      </div>
    </article>
  )
}
