import CylinderSvg from './CylinderSvg';

export default function ProductMedia({ product, className }){
  if(product.images && product.images.length){
    return <img src={product.images[0]} alt={product.title} loading="lazy" className={className} />;
  }
  return <CylinderSvg color={product.color} code={product.code} />;
}
