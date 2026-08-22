import { Poppins } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import AddedToCartPopup from "@/components/AddedToCartPopup";
import MetaPixel from "@/components/MetaPixel";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Shopron — Certified Refrigerants, Fast & EPA-Compliant",
  description: "Shopron supplies certified R-410A, R-134a, R-404A, R-32, R-22 and other refrigerants in bulk cylinders — free U.S. shipping, EPA-compliant, 30-day returns.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <MetaPixel />
        <CartProvider>
          <Header />
          {children}
          <NewsletterSection />
          <Footer />
          <AddedToCartPopup />
        </CartProvider>
      </body>
    </html>
  );
}
