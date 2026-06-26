import { useState, MouseEvent } from 'react';
import { Star, Eye, ShoppingCart, Check, X, BadgeInfo, ArrowRight } from 'lucide-react';
import { Product } from '../types.ts';
import { products } from '../data.ts';
import SEO from './SEO.tsx';

interface ServicesProps {
  onAddToCart: (product: Product, quantity: number, shade?: string) => void;
  categoryFilter: string;
  setCategoryFilter: (category: string) => void;
}

export default function Services({ onAddToCart, categoryFilter, setCategoryFilter }: ServicesProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedShade, setSelectedShade] = useState('Red Velvet');
  const [quantity, setQuantity] = useState(1);
  const [addedMessage, setAddedMessage] = useState(false);

  const categories = ['All', 'Skincare', 'Makeup', 'Hair Care', 'Body Care', 'Beauty Accessories'];

  const filteredProducts = categoryFilter === 'All'
    ? products
    : products.filter(p => p.category === categoryFilter);

  const lipstickShades = [
    { name: 'Red Velvet', color: 'bg-rose-800' },
    { name: 'Rose Dust', color: 'bg-pink-700' },
    { name: 'Nude Peach', color: 'bg-orange-400' }
  ];

  const handleOpenQuickView = (product: Product) => {
    setSelectedProduct(product);
    setQuantity(1);
    setSelectedShade('Red Velvet');
    setAddedMessage(false);
  };

  const handleCloseQuickView = () => {
    setSelectedProduct(null);
  };

  const handleQuickAdd = (product: Product, e: MouseEvent) => {
    e.stopPropagation();
    const shade = product.category === 'Makeup' ? 'Red Velvet' : undefined;
    onAddToCart(product, 1, shade);
    
    // flash success state
    setAddedMessage(true);
    setTimeout(() => setAddedMessage(false), 2000);
  };

  const handleModalAdd = () => {
    if (!selectedProduct) return;
    const shade = selectedProduct.category === 'Makeup' ? selectedShade : undefined;
    onAddToCart(selectedProduct, quantity, shade);
    setAddedMessage(true);
    setTimeout(() => {
      setAddedMessage(false);
      setSelectedProduct(null);
    }, 1500);
  };

  return (
    <div className="space-y-12 pb-16 font-sans">
      <SEO 
        title="Our Premium Beauty Services & Treatments" 
        description="Experience luxury self-care with our expert beauty treatments, clinical strength botanicals, and personalized organic care solutions." 
      />
      
      {/* 1. Header Banner */}
      <section className="text-center max-w-xl mx-auto space-y-4 px-4 font-sans">
        <span className="text-[10px] uppercase tracking-[0.35em] font-bold text-[#C85C6E] block">
          Apothecary &amp; Wellness Offerings
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl text-[#2C181C] font-normal tracking-tight">
          Our Premium <span className="italic text-[#C85C6E]">Beauty Services &amp; Treatments</span>
        </h1>
        <div className="h-px w-12 bg-[#C85C6E] mx-auto" />
        <p className="text-[#2C181C]/70 font-light text-sm leading-relaxed">
          Unlock your skin’s biological potential. Our derm-advanced treatments, biological active serums, and rejuvenating wellness services restore luminous vitality on a cellular scale.
        </p>
      </section>

      {/* 2. Category Filter Bar */}
      <section className="flex flex-wrap items-center justify-center gap-2 px-4">
        {categories.map((cat) => (
          <button
            key={cat}
            id={`filter-pill-${cat.toLowerCase().replace(' ', '-')}`}
            onClick={() => setCategoryFilter(cat)}
            className={`px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-200 cursor-pointer ${
              categoryFilter === cat
                ? 'bg-[#C85C6E] text-white border border-[#C85C6E] shadow-xs'
                : 'bg-[#FCE4E7] text-[#2C181C]/70 border border-[#C85C6E]/15 hover:bg-[#C85C6E] hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* 3. Product/Service Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className="group bg-[#FCE4E7] border border-[#C85C6E]/15 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg hover:border-[#C85C6E]/30 transition-all duration-300 flex flex-col h-full cursor-pointer relative"
              onClick={() => handleOpenQuickView(p)}
              id={`service-card-${p.id}`}
            >
              {/* Service Badges */}
              <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5 pointer-events-none">
                <span className="bg-[#FFF5F6] text-[#2C181C] px-3 py-1 rounded-md text-[9px] uppercase font-bold tracking-[0.15em] shadow-xs border border-[#C85C6E]/15">
                  {p.category}
                </span>
                {p.rating >= 4.8 && (
                  <span className="bg-[#C85C6E] text-white px-3 py-1 rounded-md text-[9px] uppercase font-bold tracking-[0.15em] shadow-xs self-start">
                    Recommended
                  </span>
                )}
              </div>

              {/* Service Image Frame */}
              <div className="aspect-square bg-[#FFF5F6] overflow-hidden relative group-hover:opacity-95 transition-opacity">
                <img
                  src={p.image}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = p.fallbackImage;
                  }}
                  alt={p.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform duration-500 group-hover:scale-104"
                />
                
                {/* Overlay hover action */}
                <div className="absolute inset-0 bg-[#FFF5F6]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <div
                    onClick={(e) => { e.stopPropagation(); handleOpenQuickView(p); }}
                    className="p-3 bg-[#FFF5F6] rounded-full text-[#C85C6E] shadow-md hover:bg-[#C85C6E] hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 cursor-pointer"
                    title="Quick review"
                  >
                    <Eye className="h-4 w-4" />
                  </div>
                  <div
                    onClick={(e) => handleQuickAdd(p, e)}
                    className="p-3 bg-[#FFF5F6] rounded-full text-[#C85C6E] shadow-md hover:bg-[#C85C6E] hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 cursor-pointer"
                    title="Instant Add"
                  >
                    <ShoppingCart className="h-4 w-4" />
                  </div>
                </div>
              </div>

              {/* Service details */}
              <div className="p-6 flex flex-col flex-grow space-y-4">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-3 w-3 ${i < Math.floor(p.rating) ? 'text-[#C85C6E] fill-[#C85C6E]' : 'text-[#2C181C]/10'}`} />
                    ))}
                    <span className="text-[10px] text-[#2C181C]/50 font-light ml-1">({p.reviewsCount} verified reviews)</span>
                  </div>
                  
                  <h3 className="font-serif text-xl font-normal text-[#2C181C] leading-tight group-hover:text-[#C85C6E] transition-colors">
                    {p.name}
                  </h3>
                </div>

                <p className="text-[#2C181C]/70 font-light text-xs leading-relaxed line-clamp-2">
                  {p.description}
                </p>

                {/* Specific bullets required */}
                <div className="bg-[#FFF5F6] rounded-xl p-3 border border-[#C85C6E]/15">
                  <ul className="space-y-1">
                    {p.details.map((detail, dIdx) => (
                      <li key={dIdx} className="text-[11px] text-[#2C181C]/70 font-light flex items-start gap-1.5 leading-tight">
                        <Check className="h-3 w-3 text-[#C85C6E] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Lipstick custom mini-selector */}
                {p.category === 'Makeup' && (
                  <div className="flex items-center gap-2 pt-1" onClick={(e) => e.stopPropagation()}>
                    <span className="text-[10px] uppercase font-bold text-[#C85C6E] tracking-wider">Shades:</span>
                    <div className="flex gap-1.5">
                      {lipstickShades.map((shade) => (
                        <span
                          key={shade.name}
                          className={`h-4 w-4 rounded-full ${shade.color} inline-block border cursor-pointer ${
                            selectedShade === shade.name ? 'border-[#C85C6E] ring-1 ring-[#C85C6E]/40 scale-110' : 'border-[#C85C6E]/15 hover:scale-105'
                          }`}
                          title={shade.name}
                          onClick={() => setSelectedShade(shade.name)}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Footer details */}
                <div className="pt-3 mt-auto flex items-center justify-between border-t border-[#C85C6E]/15">
                  <span className="font-serif text-lg font-bold text-[#2C181C]">
                    ${p.price.toFixed(2)}
                  </span>
                  
                  <button
                    onClick={(e) => handleQuickAdd(p, e)}
                    className="text-[10px] uppercase tracking-widest border-b border-[#C85C6E] w-fit pb-1 hover:text-[#C85C6E] hover:border-[#C85C6E] transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <span>Instant book / Buy</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Quick View Drawer / Modal overlay */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 bg-[#2C181C]/70 backdrop-blur-xs transition-opacity animate-fade-in">
          <div 
            className="relative bg-[#FFF5F6] rounded-2xl overflow-hidden shadow-2xl max-w-4xl w-full border border-[#C85C6E]/20 flex flex-col md:flex-row max-h-[92vh] md:max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
            id="service-quickview-container"
          >
            {/* Close Button */}
            <button
              onClick={handleCloseQuickView}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#FFF5F6]/80 backdrop-blur-xs text-[#2C181C] hover:bg-[#C85C6E] hover:text-white transition-all cursor-pointer shadow-sm border border-[#C85C6E]/15"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Left Image Column */}
            <div className="w-full md:w-1/2 bg-[#FCE4E7] relative shrink-0 border-r border-[#C85C6E]/15">
              <img
                src={selectedProduct.image}
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = selectedProduct.fallbackImage;
                }}
                alt={selectedProduct.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover min-h-[300px] md:min-h-full"
              />
            </div>

            {/* Right Information Column */}
            <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-between overflow-y-auto bg-[#FFF5F6]">
              <div className="space-y-6">
                
                {/* Category & Rating */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#C85C6E]">
                      {selectedProduct.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="h-3.5 w-3.5 text-[#C85C6E] fill-[#C85C6E]" />
                      <span className="text-xs font-semibold text-[#2C181C]">{selectedProduct.rating}</span>
                      <span className="text-xs text-[#2C181C]/40 font-light">({selectedProduct.reviewsCount} reviews)</span>
                    </div>
                  </div>
                  
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#2C181C] font-normal tracking-tight leading-snug">
                    {selectedProduct.name}
                  </h2>
                  <p className="font-serif text-xl font-bold text-[#C85C6E] mt-1">
                    ${selectedProduct.price.toFixed(2)}
                  </p>
                </div>

                {/* Description */}
                <p className="text-[#2C181C]/70 font-light text-xs leading-relaxed">
                  {selectedProduct.description}
                </p>

                {/* Core Benefits */}
                <div className="bg-[#FCE4E7] rounded-xl p-4 border border-[#C85C6E]/15 shadow-xs">
                  <h4 className="font-sans text-[11px] font-bold uppercase tracking-widest text-[#2C181C] mb-2.5 flex items-center gap-1.5">
                    <BadgeInfo className="h-3.5 w-3.5 text-[#C85C6E]" />
                    Service Treatment Properties
                  </h4>
                  <ul className="space-y-2 text-[#2C181C]/80">
                    {selectedProduct.details.map((detail, index) => (
                      <li key={index} className="text-xs font-light flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-[#C85C6E] shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Custom Options (Shades etc) */}
                {selectedProduct.category === 'Makeup' && (
                  <div className="space-y-2.5">
                    <span className="text-xs uppercase font-semibold text-[#2C181C]/60 tracking-wider block">
                      Select Shade Option: <span className="text-[#2C181C] font-bold ml-1">{selectedShade}</span>
                    </span>
                    <div className="flex flex-wrap gap-2">
                       {lipstickShades.map((shade) => (
                        <button
                          key={shade.name}
                          onClick={() => setSelectedShade(shade.name)}
                          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs border transition-all cursor-pointer ${
                            selectedShade === shade.name
                              ? 'border-[#C85C6E] bg-[#C85C6E] text-white font-medium shadow-xs'
                              : 'border-[#C85C6E]/15 bg-[#FFF5F6] hover:border-[#C85C6E]/40 text-[#2C181C]/65'
                          }`}
                        >
                          <span className={`h-3 w-3 rounded-full ${shade.color} block shrink-0 border border-[#C85C6E]/15`} />
                          <span>{shade.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

              </div>

              {/* Purchase Actions */}
              <div className="mt-8 pt-6 border-t border-[#C85C6E]/15 space-y-4">
                <div className="flex items-center gap-4">
                  {/* Quantity selector */}
                  <div className="flex items-center border border-[#C85C6E]/15 rounded-xl overflow-hidden bg-[#FFF5F6] shadow-xs">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3.5 py-2.5 text-[#2C181C]/50 hover:bg-[#FCE4E7] hover:text-[#2C181C] transition-colors cursor-pointer text-sm font-semibold"
                    >
                      -
                    </button>
                    <span className="px-3 py-2.5 font-semibold text-[#2C181C] text-xs w-10 text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3.5 py-2.5 text-[#2C181C]/50 hover:bg-[#FCE4E7] hover:text-[#2C181C] transition-colors cursor-pointer text-sm font-semibold"
                    >
                      +
                    </button>
                  </div>

                  {/* Add to Cart button */}
                  <button
                    onClick={handleModalAdd}
                    className="flex-1 bg-[#C85C6E] hover:bg-[#C85C6E]/90 text-white border border-[#C85C6E] font-medium py-3 rounded-xl text-xs uppercase tracking-widest shadow-md transition-all active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    <span>Book Service Treatment</span>
                  </button>
                </div>

                {addedMessage && (
                  <p className="text-emerald-700 text-xs text-center font-semibold animate-pulse py-1">
                    ✓ Success! Service package added to shopping cart bag.
                  </p>
                )}

                <p className="text-[10px] text-center text-[#2C181C]/40 font-light">
                  Complimentary diagnostic counseling for appointments above $50. No-hassle adjustments.
                </p>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Floating Success Notification (Quick adds) */}
      {addedMessage && !selectedProduct && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#FFF5F6] text-[#2C181C] px-5 py-3 rounded-xl shadow-xl border border-[#C85C6E]/20 flex items-center gap-3 animate-slide-up">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white">
            <Check className="h-3.5 w-3.5" />
          </div>
          <span className="text-xs font-semibold tracking-[0.1em] font-sans uppercase">
            Service added to shopping cart!
          </span>
        </div>
      )}

    </div>
  );
}
