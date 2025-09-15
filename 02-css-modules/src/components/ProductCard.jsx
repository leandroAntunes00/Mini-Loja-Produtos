import React from 'react';
import styles from './ProductCard.module.css';
import Button from './Button';

export default function ProductCard({ product, onAdd, loading = false }) {
  return (
    <article className={styles.card} tabIndex={0} aria-labelledby={`title-${product.id}`}>
      <div className={styles.imageWrap}>
        {loading ? (
          <div className={`skeleton ${styles['skeleton-fill']}`} />
        ) : (
          <img src={product.image} alt={product.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        )}
      </div>
      <div className={styles.content}>
        <h3 id={`title-${product.id}`} className={styles.title}>
          {product.title}
        </h3>
        <div className={styles.meta}>
          <div style={{ fontWeight: 700 }}>R$ {product.price.toFixed(2)}</div>
          <div aria-hidden>★ {product.rating}</div>
          {product.tag ? <div className={styles.tag}>{product.tag}</div> : null}
        </div>
        <div className={styles['card-actions']}>
          <Button variant="solid" onClick={() => onAdd(product)} aria-label={`Adicionar ${product.title}`}>
            Adicionar
          </Button>
        </div>
      </div>
    </article>
  );
}

