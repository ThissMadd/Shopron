import Link from 'next/link';
import { PRODUCTS, findProduct, hasCategory } from '@/data/products';
import Gallery from '@/components/Gallery';
import ProductPurchasePanel from '@/components/ProductPurchasePanel';
import ProductInfoTabs from '@/components/ProductInfoTabs';
import ProductFaqSection from '@/components/ProductFaqSection';
import ProductReviewsSection from '@/components/ProductReviewsSection';
import ProductGrid from '@/components/ProductGrid';

export async function generateStaticParams(){
  return PRODUCTS.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }){
  const { slug } = await params;
  const product = findProduct(slug) || PRODUCTS[0];
  return { title: `${product.title} — Shopron` };
}

export default async function ProductDetailPage({ params }){
  const { slug } = await params;
  const product = findProduct(slug) || PRODUCTS[0];

  const primaryCat = Array.isArray(product.category) ? product.category[0] : product.category;
  const sameCategory = PRODUCTS.filter(p => hasCategory(p, primaryCat) && p.slug !== product.slug);
  const others = PRODUCTS.filter(p => !hasCategory(p, primaryCat) && p.slug !== product.slug);
  const relatedList = [...sameCategory, ...others].slice(0, 4);

  return (
    <>
      <div className="wrap">
        <div className="breadcrumb">
          <Link href="/">Home</Link><span>/</span>
          <Link href="/products">All Products</Link><span>/</span>
          <span style={{ color: 'var(--text)', fontWeight: 600 }}>{product.title}</span>
        </div>
      </div>

      <div className="wrap">
        <div className="product-detail">
          <Gallery product={product} />
          <ProductPurchasePanel product={product} />
        </div>
      </div>

      <div className="wrap">
        <ProductInfoTabs product={product} />
      </div>

      <div className="wrap">
        <ProductFaqSection product={product} />
      </div>

      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head"><div><span className="eyebrow eyebrow-normal">You may also need</span><h2>Related products</h2></div></div>
          <ProductGrid products={relatedList} showAddToCart={false} />
        </div>
      </section>

      <div className="wrap" style={{ paddingBottom: 28 }}>
        <ProductReviewsSection product={product} />
      </div>

    </>
  );
}
