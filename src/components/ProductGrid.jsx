import ProductCard from './ProductCard';

export default function ProductGrid({ products, className, showAddToCart = true }){
  return (
    <div className={`grid-products ${className || ''}`}>
      {products.length
        ? products.map(p => <ProductCard key={p.slug} product={p} showAddToCart={showAddToCart} />)
        : <p style={{ color: 'var(--muted)', gridColumn: '1/-1', textAlign: 'center', padding: '40px 0' }}>No products match this filter yet.</p>}
    </div>
  );
}
