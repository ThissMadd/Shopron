'use client';

import { useRef, useState } from 'react';
import CylinderSvg from './CylinderSvg';

export default function Gallery({ product }){
  const [activeImg, setActiveImg] = useState(0);
  const mainRef = useRef(null);
  const hasImgs = product.images && product.images.length;

  function goTo(i){
    setActiveImg(i);
    const el = mainRef.current;
    if(el) el.scrollTo({ left: i * el.clientWidth, behavior: 'smooth' });
  }

  function handleScroll(){
    const el = mainRef.current;
    if(!el || !el.clientWidth) return;
    const i = Math.round(el.scrollLeft / el.clientWidth);
    setActiveImg(prev => (prev === i ? prev : i));
  }

  return (
    <div id="gallery-wrap">
      <div className="gallery-main" ref={mainRef} onScroll={handleScroll}>
        {hasImgs
          ? product.images.map((src) => (
            <div className="gallery-slide" key={src}>
              <img src={src} alt={product.title} draggable={false} />
            </div>
          ))
          : <div className="gallery-slide"><CylinderSvg color={product.color} code={product.code} /></div>}
      </div>
      {hasImgs ? (
        <div className="gallery-thumbs">
          {product.images.map((src, i) => (
            <button key={src} type="button" className={i === activeImg ? 'active' : ''} onClick={() => goTo(i)}>
              <img src={src} alt="" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
