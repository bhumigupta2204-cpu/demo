import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Home from './components/Home.tsx';
import Services from './components/Services.tsx';
import Blog from './components/Blog.tsx';
import About from './components/About.tsx';
import Contact from './components/Contact.tsx';
import Gallery from './components/Gallery.tsx';
import Cart from './components/Cart.tsx';

import { Product, CartItem } from './types.ts';

export default function App() {
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  // Load cart from localStorage on mount (Netlify-safe, will gracefully fallback if not supported)
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('beautyhub_cart');
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
    } catch (e) {
      console.warn('LocalStorage not supported in this frame', e);
    }
  }, []);

  // Save cart to localStorage on changes
  useEffect(() => {
    try {
      localStorage.setItem('beautyhub_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.warn('LocalStorage saving blocked in iframe', e);
    }
  }, [cartItems]);

  const handleAddToCart = (product: Product, quantity: number, shade?: string) => {
    setCartItems((prevItems) => {
      // Find if item already exists with the same id AND matching shade
      const existingIdx = prevItems.findIndex(
        (item) => item.product.id === product.id && item.selectedShade === shade
      );

      if (existingIdx > -1) {
        const updated = [...prevItems];
        updated[existingIdx].quantity += quantity;
        return updated;
      } else {
        return [...prevItems, { product, quantity, selectedShade: shade }];
      }
    });
  };

  const handleUpdateQty = (pId: string, delta: number, shade?: string) => {
    setCartItems((prevItems) => {
      return prevItems
        .map((item) => {
          if (item.product.id === pId && item.selectedShade === shade) {
            const nextQty = item.quantity + delta;
            return { ...item, quantity: nextQty };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  const handleRemoveItem = (pId: string, shade?: string) => {
    setCartItems((prevItems) => {
      return prevItems.filter(
        (item) => !(item.product.id === pId && item.selectedShade === shade)
      );
    });
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FFF5F6] flex flex-col text-[#2C181C]">
      
      {/* Premium announcement promo bar */}
      <div className="bg-[#FCE4E7] text-[#C85C6E] text-center py-2 px-4 text-[10px] font-sans tracking-[0.25em] font-medium flex items-center justify-center gap-2 border-b border-[#C85C6E]/15">
        <span className="inline-block h-1 w-1 rounded-full bg-[#C85C6E] animate-pulse" />
        <span>CELEBRATING SUMMER BEAUTY: COMPLIMENTARY COURIER FOR ALL COMBINATIONS OVER $50</span>
      </div>

      {/* Styled header navigation */}
      <Header
        cartCount={totalCartCount}
        onCartToggle={() => setCartOpen(true)}
      />

      {/* Primary viewport switch container using React Router */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-8">
        <Routes>
          <Route path="/" element={<Home setCategoryFilter={setCategoryFilter} />} />
          <Route path="/services" element={
            <Services
              onAddToCart={handleAddToCart}
              categoryFilter={categoryFilter}
              setCategoryFilter={setCategoryFilter}
            />
          } />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<Home setCategoryFilter={setCategoryFilter} />} />
        </Routes>
      </main>

      {/* Premium Footer */}
      <Footer />

      {/* Slide-out Cart Panel overlay */}
      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
