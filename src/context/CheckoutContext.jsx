'use client';

import { createContext, useCallback, useContext, useMemo, useState } from 'react';

const CheckoutContext = createContext(null);

export function CheckoutProvider({ children }){
  const [checkoutCart, setCheckoutCart] = useState(null);

  const openCheckout = useCallback((cart) => setCheckoutCart(cart), []);
  const closeCheckout = useCallback(() => setCheckoutCart(null), []);

  const value = useMemo(() => ({ checkoutCart, openCheckout, closeCheckout }), [checkoutCart, openCheckout, closeCheckout]);

  return <CheckoutContext.Provider value={value}>{children}</CheckoutContext.Provider>;
}

export function useCheckout(){
  const ctx = useContext(CheckoutContext);
  if(!ctx) throw new Error('useCheckout must be used within a CheckoutProvider');
  return ctx;
}
