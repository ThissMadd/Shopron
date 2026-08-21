'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from './Icon';
import SearchOverlay from './SearchOverlay';
import { useCart } from '@/context/CartContext';

const NAV_LINKS = [
  { key: 'home', label: 'Home', href: '/' },
  { key: 'products', label: 'All Products', href: '/products' },
  { key: 'contact', label: 'Contact Us', href: '/contact' },
  { key: 'faq', label: 'FAQ', href: '/faq' },
  { key: 'track', label: 'Track Your Order', href: '/track-order' }
];

function activeKeyFor(pathname){
  if(pathname === '/') return 'home';
  if(pathname.startsWith('/products')) return 'products';
  if(pathname.startsWith('/contact')) return 'contact';
  if(pathname.startsWith('/faq')) return 'faq';
  if(pathname.startsWith('/track-order')) return 'track';
  return '';
}

export default function Header(){
  const pathname = usePathname();
  const active = activeKeyFor(pathname);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const { cartCount } = useCart();

  useEffect(() => {
    lastY.current = window.scrollY;
    let ticking = false;

    function update(){
      const y = window.scrollY;
      if(y <= 10) setHidden(false);
      else if(y > lastY.current) setHidden(true);
      else if(y < lastY.current) setHidden(false);
      lastY.current = y;
      ticking = false;
    }

    function onScroll(){
      if(!ticking){
        requestAnimationFrame(update);
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="announce">
        <strong>Free Shipping</strong> on all U.S. orders &nbsp;•&nbsp; EPA-compliant, factory-sealed refrigerants &nbsp;•&nbsp; 30-day returns
      </div>
      <header className={`site-header ${hidden ? 'is-hidden' : ''}`}>
        <div className="header-inner">
          <button className="icon-btn mobile-menu-btn" aria-label="Menu" onClick={() => setMobileOpen(o => !o)}>
            <Icon name={mobileOpen ? 'close' : 'menu'} />
          </button>
          <Link href="/" className="logo">SH<span className="dot">◉</span>PRON</Link>
          <nav className="main-nav">
            {NAV_LINKS.map(l => (
              <Link key={l.key} href={l.href} className={l.key === active ? 'active' : ''}>{l.label}</Link>
            ))}
          </nav>
          <div className="header-actions">
            <button className="icon-btn" aria-label="Search" onClick={() => setSearchOpen(true)}>
              <Icon name="search" />
            </button>
            <Link className="icon-btn" href="/cart" aria-label="Cart">
              <Icon name="cart" />
              <span className="cart-count">{cartCount}</span>
            </Link>
          </div>
        </div>
        <nav className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
          {NAV_LINKS.map(l => (
            <Link key={l.key} href={l.href} className={l.key === active ? 'active' : ''} onClick={() => setMobileOpen(false)}>{l.label}</Link>
          ))}
        </nav>
      </header>
      {searchOpen ? <SearchOverlay onClose={() => setSearchOpen(false)} /> : null}
    </>
  );
}
