'use client';

import { createContext, useContext, useCallback, useState, useSyncExternalStore } from 'react';

const CartContext = createContext(null);
const STORAGE_KEY = 'shopron_cart';

const EMPTY_CART = [];

function parseCart(raw){
  try { return JSON.parse(raw || '[]'); }
  catch(e){ return EMPTY_CART; }
}

// Module-level external store: cachedCart is the single source of truth for
// useSyncExternalStore snapshots, kept as a stable reference between writes
// so React doesn't think the store changed on every render.
let cachedCart = typeof window !== 'undefined' ? parseCart(window.localStorage.getItem(STORAGE_KEY)) : EMPTY_CART;
const listeners = new Set();

function notify(){
  listeners.forEach(l => l());
}

function writeCart(next){
  cachedCart = next;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  notify();
}

function subscribe(listener){
  listeners.add(listener);
  function onStorage(e){
    if(e.key === STORAGE_KEY){
      cachedCart = parseCart(e.newValue);
      listener();
    }
  }
  window.addEventListener('storage', onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener('storage', onStorage);
  };
}

function getSnapshot(){
  return cachedCart;
}

function getServerSnapshot(){
  return EMPTY_CART;
}

export function CartProvider({ children }){
  const cart = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [lastAdded, setLastAdded] = useState(null);

  const addToCart = useCallback((slug, qty = 1, lineTotal) => {
    const existing = cachedCart.find(i => i.slug === slug);
    let next;
    if(existing){
      next = cachedCart.map(i => i.slug === slug ? { slug, qty: i.qty + qty } : i);
    } else {
      const item = { slug, qty };
      if(lineTotal != null) item.lineTotal = lineTotal;
      next = [...cachedCart, item];
    }
    writeCart(next);
    setLastAdded({ slug, qty, ts: Date.now() });
  }, []);

  const clearLastAdded = useCallback(() => setLastAdded(null), []);

  const removeFromCart = useCallback((slug) => {
    writeCart(cachedCart.filter(i => i.slug !== slug));
  }, []);

  const setQty = useCallback((slug, qty) => {
    writeCart(cachedCart.map(i => i.slug === slug ? { slug, qty: Math.max(1, qty) } : i));
  }, []);

  const clearCart = useCallback(() => {
    writeCart([]);
  }, []);

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, setQty, clearCart, cartCount, lastAdded, clearLastAdded }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(){
  const ctx = useContext(CartContext);
  if(!ctx) throw new Error('useCart must be used within a CartProvider');
  return ctx;
}
