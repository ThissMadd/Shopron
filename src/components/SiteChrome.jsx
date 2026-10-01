'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import NewsletterSection from './NewsletterSection';
import AddedToCartPopup from './AddedToCartPopup';

export default function SiteChrome({ children }){
  const pathname = usePathname();
  const bare = pathname?.startsWith('/checkout');

  if(bare){
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      {children}
      <NewsletterSection />
      <Footer />
      <AddedToCartPopup />
    </>
  );
}
