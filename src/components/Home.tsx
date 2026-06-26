import { ArrowRight, CheckCircle, Sparkles, Smile, Feather, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { heroImg, blogPosts, products, serumImg, lipstickImg, hairoilImg, cleanserImg, lotionImg } from '../data.ts';
import SEO from './SEO.tsx';

interface HomeProps {
  setCategoryFilter: (category: string) => void;
}

export default function Home({ setCategoryFilter }: HomeProps) {
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    setCategoryFilter(category);
    navigate('/services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categories = [
    {
      name: 'Skincare',
      descr: 'Derm-tested active serums & cleansers',
      bgImg: cleanserImg,
      count: '3 Products'
    },
    {
      name: 'Makeup',
      descr: 'Rich shades & long-lasting finishes',
      bgImg: lipstickImg,
      count: '1 Product'
    },
    {
      name: 'Hair Care',
      descr: 'Herbal oils & deep nourishing serums',
      bgImg: hairoilImg,
      count: '1 Product'
    },
    {
      name: 'Body Care',
      descr: '24-hour lightweight hydration matrices',
      bgImg: lotionImg,
      count: '1 Product'
    },
    {
      name: 'Beauty Accessories',
      descr: 'Natural stone face rollers & silk masks',
      bgImg: 'https://images.unsplash.com/photo-1601049676099-e7ed07d825b0?auto=format&fit=crop&q=80&w=400',
      count: '1 Product'
    }
  ];

  const highlights = [
    {
      title: 'Premium Beauty Products',
      body: 'Formulated with high-potency ingredients, certified safe botanicals, and vitamins.',
      icon: Sparkles
    },
    {
      title: 'Affordable Prices',
      body: 'Luxury self-care shouldn’t be a gatekept luxury. We offer high quality at direct-to-consumer value.',
      icon: Feather
    },
    {
      title: 'Trusted Brands',
      body: 'All batch formulas are dermatologist recommended and verified for zero harsh filler additives.',
      icon: ShieldCheck
    },
    {
      title: 'Fast Delivery',
      body: 'Committed, express delivery systems ensuring fresh, climate-packed bottles arrive safely.',
      icon: CheckCircle
    },
    {
      title: 'Guaranteed Satisfaction',
      body: 'No questions asked 30-day money back guarantee if your skin is not fully in love.',
      icon: Smile
    }
  ];

  const recentPost = blogPosts[0]; // first blog post

  return (
    <div className="space-y-24 pb-16 font-sans">
      <SEO 
        title="Beauty Products for Glowing Skin | Natural Skin Care Products | Beauty Hub" 
        description="Shop premium beauty products and natural skin care products for healthy and glowing skin." 
      />
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-[#FCE4E7] rounded-[2rem] mx-4 sm:mx-6 lg:mx-8 border border-[#C85C6E]/15">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFF5F6]/90 via-[#FFF5F6]/55 to-[#FFF5F6]/10 z-10" />
        
        {/* Background custom generated image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={heroImg}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format,compress&fit=crop&q=80&w=1200&fm=webp';
            }}
            alt="Beauty Hub Premium Banner"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center transform scale-102 hover:scale-100 transition-transform duration-7000 opacity-95"
          />
        </div>

        <div className="relative z-20 max-w-3xl px-6 py-24 sm:py-32 sm:px-12 lg:px-20 text-[#2C181C] flex flex-col items-start gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C85C6E]/10 backdrop-blur-md border border-[#C85C6E]/20 rounded-full text-[10px] font-medium tracking-[0.25em] uppercase text-[#C85C6E]">
            <Sparkles className="h-3 w-3 animate-spin text-[#C85C6E]" />
            Empowering Your Natural Radiance
          </div>
          
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-[1.1] text-[#2C181C] max-w-2xl">
            Premium Beauty Products for Naturally Glowing Skin
          </h1>
          
          <p className="text-[#2C181C]/85 text-sm sm:text-base max-w-xl leading-relaxed font-light">
            Empower your skin confidence with our curated, dermatologist-recommended, natural skin care products for healthy and glowing skin.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-2">
            <button
              onClick={() => handleCategoryClick('All')}
              className="bg-[#C85C6E] hover:bg-[#C85C6E]/90 text-white font-semibold px-8 py-3.5 rounded-full text-xs font-sans tracking-[0.2em] uppercase transition-all shadow-md active:scale-98 flex items-center gap-2 cursor-pointer border border-transparent"
            >
              Shop Collection
              <ArrowRight className="h-4 w-4 text-white" />
            </button>
            <button
              onClick={() => { navigate('/about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="bg-[#FFF5F6]/80 hover:bg-[#FFF5F6] text-[#2C181C] border border-[#C85C6E]/20 backdrop-blur-xs px-8 py-3.5 rounded-full text-xs font-sans tracking-[0.2em] uppercase transition-all cursor-pointer shadow-xs"
            >
              Our Philosophy
            </button>
          </div>
        </div>
      </section>

      {/* 2. VALUE PROPOSITIONS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#C85C6E] font-bold mb-2">Our Creed</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2C181C] tracking-tight">
            Natural Skin Care Products for Healthy and Glowing Skin
          </h2>
          <div className="h-px w-12 bg-[#C85C6E] mx-auto mt-4" />
          <p className="text-[#2C181C]/70 font-light text-sm mt-3 leading-relaxed">
            Crafting a sustainable path to radiance with non-toxic formulas, honest value, and instant delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {highlights.map((item, i) => {
            const IconComp = item.icon;
            return (
              <div 
                key={i} 
                className="group flex flex-col items-center text-center p-6 bg-[#FCE4E7] rounded-2xl border border-[#C85C6E]/15 hover:bg-[#FFF0F2] hover:border-[#C85C6E]/30 transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF5F6] text-[#C85C6E] border border-[#C85C6E]/15 mb-5 group-hover:bg-[#C85C6E] group-hover:text-white transition-colors duration-300">
                  <IconComp className="h-4 w-4" />
                </div>
                <h3 className="font-sans text-[11px] font-bold text-[#2C181C] uppercase tracking-widest mb-2.5">
                  {item.title}
                </h3>
                <p className="text-[#2C181C]/70 font-light text-xs leading-relaxed max-w-xs">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. FEATURED CATEGORIES */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 border-b border-[#C85C6E]/15 pb-6">
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#C85C6E] font-bold mb-2">The Collections</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2C181C] tracking-tight">
              Featured <span className="italic">Categories</span>
            </h2>
          </div>
          <p className="text-[#2C181C]/70 font-light text-sm mt-4 sm:mt-0 max-w-sm sm:text-right leading-relaxed">
            Handpicked premium items arranged by specific treatment routines. Click to view catalog.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => handleCategoryClick(cat.name)}
              className="group relative h-80 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer text-left w-full border border-[#C85C6E]/15"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C181C]/95 via-[#2C181C]/35 to-transparent z-10 group-hover:via-[#2C181C]/20 transition-all duration-300" />
              <img
                src={cat.bgImg}
                alt={cat.name}
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = heroImg;
                }}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-5 z-20">
                <span className="text-[9px] font-sans font-bold text-[#C85C6E] tracking-[0.3em] uppercase mb-1">
                  {cat.count}
                </span>
                <h3 className="font-serif text-xl font-normal text-white mb-2 leading-none">
                  {cat.name}
                </h3>
                <p className="text-[#FFF5F6]/90 font-sans text-[11px] font-light leading-snug line-clamp-2 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {cat.descr}
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-[10px] text-white uppercase tracking-widest font-semibold group-hover:text-[#C85C6E] transition-colors">
                  <span>Explore</span>
                  <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* 3.5. COMPLETE APOTHECARY PRODUCTS & IMAGES GRID DISPLAY */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.45em] text-[#C85C6E] font-bold block mb-2">Our Signature Collection</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2C181C] tracking-tight">
            Complete <span className="italic font-light">Apothecary Products</span>
          </h2>
          <div className="h-px w-12 bg-[#C85C6E] mx-auto mt-4" />
          <p className="text-[#2C181C]/70 font-light text-sm mt-3 leading-relaxed">
            Featuring 100% real product imagery. Every product is formulated with clean, active biological complexes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <div
              key={p.id}
              onClick={() => {
                navigate('/services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group bg-[#FCE4E7] border border-[#C85C6E]/15 rounded-2xl overflow-hidden shadow-2xs hover:shadow-lg hover:border-[#C85C6E]/35 transition-all duration-300 flex flex-col h-full cursor-pointer relative"
              id={`home-product-${p.id}`}
            >
              {/* Image Container with Hover Effect */}
              <div className="aspect-square bg-[#FFF5F6] overflow-hidden relative">
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
                
                {/* Category Badge overlay */}
                <span className="absolute top-4 left-4 bg-[#FFF5F6] text-[#2C181C] px-3 py-1 rounded-md text-[9px] uppercase font-bold tracking-[0.15em] border border-[#C85C6E]/15">
                  {p.category}
                </span>

                {/* Aesthetic Hover Overlay */}
                <div className="absolute inset-0 bg-[#2C181C]/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-[#FFF5F6] text-[#2C181C]/90 px-4 py-2 rounded-full font-sans text-[10px] font-bold uppercase tracking-widest shadow-xs">
                    Quick Shop
                  </div>
                </div>
              </div>

              {/* Product Content Details */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-normal text-[#2C181C] group-hover:text-[#C85C6E] transition-colors line-clamp-1">
                    {p.name}
                  </h3>
                  <p className="text-[#2C181C]/75 font-light text-xs leading-relaxed line-clamp-2">
                    {p.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#C85C6E]/10 mt-6">
                  <span className="text-sm font-bold text-[#2C181C]">
                    ${p.price.toFixed(2)}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#C85C6E] flex items-center gap-1">
                    View Product
                    <ArrowRight className="h-3 w-3 transform group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. KEY BANNER PROMO */}
      <section className="bg-[#FCE4E7] rounded-[2rem] mx-4 sm:mx-6 lg:mx-8 py-16 px-6 sm:px-12 lg:px-20 border border-[#C85C6E]/15 flex flex-col lg:flex-row items-center gap-12 animate-fade-in">
        <div className="w-full lg:w-1/2 space-y-6">
          <span className="text-[10px] uppercase tracking-[0.35em] font-bold text-[#C85C6E]">
            Aesthetic Ingredients
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#2C181C] leading-tight font-serif">
            Pure Botanicals, <br />
            <span className="italic">Proven Bio-science.</span>
          </h2>
          <p className="text-[#2C181C]/75 text-sm font-light leading-relaxed">
            We believe you shouldn't have to choose between clinical strength and organic purity. Our serums are saturated with antioxidant Vitamin C, hydrating squalane, and nourishing herbal oils that trigger skin recovery naturally without triggering hormone disrupting parameters.
          </p>
          <ul className="space-y-3 text-sm font-light text-[#2C181C]/80">
            <li className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C85C6E]" />
              100% Vegan &amp; Cruelty Free certification
            </li>
            <li className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C85C6E]" />
              No synthetic fragrances or parabens
            </li>
            <li className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C85C6E]" />
              Environmentally sustainable conscious packaging
            </li>
          </ul>
          <div className="pt-2">
            <button
              onClick={() => handleCategoryClick('All')}
              className="bg-[#C85C6E] hover:bg-[#C85C6E]/90 border border-[#C85C6E] text-white px-7 py-3 rounded-full text-xs font-sans tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer flex items-center gap-2"
            >
              Discover Cleansers &amp; Oils
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
          <div className="rounded-2xl overflow-hidden h-64 border border-[#C85C6E]/20 shadow-xs">
            <img 
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format,compress&fit=crop&q=80&w=400&fm=webp" 
              alt="Applying serum"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover hover:scale-103 transition-transform duration-300"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = serumImg;
              }}
            />
          </div>
          <div className="rounded-2xl overflow-hidden h-64 mt-6 border border-[#C85C6E]/20 shadow-xs">
            <img 
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format,compress&fit=crop&q=80&w=600&fm=webp" 
              alt="Glamorous cosmetics and brushes"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover hover:scale-103 transition-transform duration-300"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = lipstickImg;
              }}
            />
          </div>
        </div>
      </section>

      {/* NEW: GRAPHIC DESIGN SIGNATURE SPOTLIGHT SECTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFF5F6] border border-[#C85C6E]/20 rounded-[2rem] overflow-hidden shadow-sm flex flex-col md:flex-row items-stretch">
          
          <div className="w-full md:w-5/12 relative min-h-[300px]">
            <img 
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format,compress&fit=crop&q=80&w=800&fm=webp" 
              alt="#BeautyHub Curation by Lead Graphic Designer"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover object-center transform hover:scale-[1.02] transition-transform duration-500"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = lipstickImg;
              }}
            />
            {/* Elegant glassmorphic attribute */}
            <div className="absolute bottom-4 left-4 right-4 bg-[#FFF5F6]/90 backdrop-blur-xs p-3.5 rounded-lg border border-[#C85C6E]/15 shadow-xs flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold text-[#C85C6E] uppercase tracking-wider">Lead curation</p>
                <h4 className="text-xs font-semibold text-[#2C181C]">Glamorous Beauty Essentials</h4>
              </div>
              <span className="text-[9px] bg-[#C85C6E] text-white px-2 py-0.5 rounded-sm uppercase tracking-widest font-bold">Aesthetic</span>
            </div>
          </div>

          <div className="w-full md:w-7/12 p-8 sm:p-12 flex flex-col justify-center space-y-6">
            <span className="text-[10px] uppercase tracking-[0.35em] font-bold text-[#C85C6E] block">
              Lead Graphic Designer Showcase
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2C181C] leading-snug">
              Designed for Elegance. <br />
              <span className="italic text-[#C85C6E]">Curated for Pure Glamour.</span>
            </h2>
            <p className="text-[#2C181C]/75 text-sm font-light leading-relaxed">
              Our Senior Graphic Designer, Bhumi Gupta, curated this beautiful cosmetic brush and glamorous product palette representation specifically to highlight the absolute harmony, color balancing, and aesthetic form of modern Beauty Hub branding.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <div className="flex -space-x-2">
                <div className="h-8 w-8 rounded-full bg-[#C85C6E]/20 border border-[#C85C6E]/40 flex items-center justify-center text-[10px] font-bold text-[#C85C6E]">
                  BG
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-[#2C181C]">Bhumi Gupta</p>
                <p className="text-[10px] text-[#2C181C]/60">Lead Graphic Designer, Beauty Hub</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4.5. CURATED TREATMENT SOLUTIONS (SEO OPTIMIZED SEGMENT) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.45em] text-[#C85C6E] font-bold block mb-2">Targeted Beauty Blueprints</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2C181C] tracking-tight">
            Curated Formulations by <span className="italic">Skin Priority</span>
          </h2>
          <div className="h-px w-12 bg-[#C85C6E] mx-auto mt-4" />
          <p className="text-[#2C181C]/70 font-light text-sm mt-3 leading-relaxed">
            From clarifying active complexes to mineral-rich ancient therapeutic muds, design your absolute standard with zero compromises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Solution 1: Best skin care products for women */}
          <div className="bg-[#FFF5F6] border border-[#C85C6E]/20 rounded-2xl overflow-hidden p-6 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="h-48 rounded-xl overflow-hidden relative">
                <img 
                  src={serumImg} 
                  alt="Best skin care products for women" 
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format,compress&fit=crop&q=80&w=800&fm=webp';
                  }}
                />
                <span className="absolute top-3 left-3 bg-[#FFF5F6] text-[#C85C6E] px-2 py-0.5 rounded text-[8px] uppercase font-bold tracking-wider">
                  Featured Blueprint
                </span>
              </div>
              <h3 className="font-serif text-2xl font-light text-[#2C181C] tracking-tight hover:text-[#C85C6E]">
                Best skin care products for women
              </h3>
              <p className="text-xs text-[#2C181C]/75 font-light leading-relaxed">
                Empower your regimen with our globally award-winning hydrator series, active Vitamin C serums, and clinical botanicals. Curated daily skincare matrices specifically chosen to preserve derm elasticity, illuminate texture, and restore natural lipids.
              </p>
            </div>
            <div className="pt-6">
              <button 
                onClick={() => handleCategoryClick('Skincare')}
                className="w-full py-2.5 bg-[#C85C6E] hover:bg-[#C85C6E]/90 text-white rounded-lg text-[10px] uppercase tracking-widest font-bold transition-all cursor-pointer animate-pulse"
              >
                Explore Women's Skincare
              </button>
            </div>
          </div>

          {/* Solution 2: Face pack for glowing skin */}
          <div className="bg-[#FFF5F6] border border-[#C85C6E]/20 rounded-2xl overflow-hidden p-6 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="h-48 rounded-xl overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format,compress&fit=crop&q=80&w=800&fm=webp" 
                  alt="Face pack for glowing skin" 
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = lipstickImg;
                  }}
                />
                <span className="absolute top-3 left-3 bg-[#FFF5F6] text-[#C85C6E] px-2 py-0.5 rounded text-[8px] uppercase font-bold tracking-wider">
                  Glow Booster
                </span>
              </div>
              <h3 className="font-serif text-2xl font-light text-[#2C181C] tracking-tight hover:text-[#C85C6E]">
                Face pack for glowing skin
              </h3>
              <p className="text-xs text-[#2C181C]/75 font-light leading-relaxed">
                Experience clinical spa results at home with our Detoxifying Premium Herbal Face Pack. Saturated with bentonite healing clay, pure powdered green tea extract, and wild active botanicals to refine pores, purge toxicity, and unlock an immediate glowing glaze.
              </p>
            </div>
            <div className="pt-6">
              <button 
                onClick={() => handleCategoryClick('All')}
                className="w-full py-2.5 bg-[#C85C6E]/10 hover:bg-[#C85C6E]/25 text-[#C85C6E] rounded-lg text-[10px] uppercase tracking-widest font-bold transition-all cursor-pointer"
              >
                Explore Active Masks
              </button>
            </div>
          </div>

          {/* Solution 3: Oily skin care products */}
          <div className="bg-[#FFF5F6] border border-[#C85C6E]/20 rounded-2xl overflow-hidden p-6 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="h-48 rounded-xl overflow-hidden relative">
                <img 
                  src={cleanserImg} 
                  alt="Oily skin care products" 
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format,compress&fit=crop&q=80&w=800&fm=webp';
                  }}
                />
                <span className="absolute top-3 left-3 bg-[#FFF5F6] text-[#C85C6E] px-2 py-0.5 rounded text-[8px] uppercase font-bold tracking-wider">
                  Sebum Regulator
                </span>
              </div>
              <h3 className="font-serif text-2xl font-light text-[#2C181C] tracking-tight hover:text-[#C85C6E]">
                Oily skin care products
              </h3>
              <p className="text-xs text-[#2C181C]/75 font-light leading-relaxed">
                Rebalance, refine, and normalize overactive skin. Specially engineered natural oil-controllers such as our Gentle Face Cleanser clean deeply to sweep excess sebum while locking in essential hydration to avoid standard dry rebound triggers.
              </p>
            </div>
            <div className="pt-6">
              <button 
                onClick={() => handleCategoryClick('Skincare')}
                className="w-full py-2.5 bg-[#C85C6E] hover:bg-[#C85C6E]/90 text-white rounded-lg text-[10px] uppercase tracking-widest font-bold transition-all cursor-pointer"
              >
                Explore Oil-Balancing Range
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 5. LATEST JOURNAL HIGHLIGHT */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border border-[#C85C6E]/15 rounded-[2rem] p-8 sm:p-12 bg-[#FCE4E7] shadow-xs animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 rounded-2xl overflow-hidden h-72 lg:h-96 border border-[#C85C6E]/15">
              <img
                src={recentPost.image}
                alt={recentPost.title}
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = heroImg;
                }}
              />
            </div>
            
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-4 text-xs font-semibold text-[#2C181C]/60">
                <span className="px-2.5 py-0.5 bg-[#FFF5F6] text-[#C85C6E] border border-[#C85C6E]/20 rounded-md font-bold uppercase tracking-[0.15em] text-[10px]">
                  {recentPost.category}
                </span>
                <span>•</span>
                <span>{recentPost.date}</span>
                <span>•</span>
                <span>{recentPost.readTime}</span>
              </div>
              
              <h3 className="font-serif text-3xl text-[#2C181C] font-normal tracking-tight">
                {recentPost.title}
              </h3>
              
              <p className="text-[#2C181C]/70 font-light text-sm leading-relaxed">
                {recentPost.excerpt} Clean products deserve regular appreciation. Our community emphasizes hydration matrices, SPF blockades, and chemical free cleansers.
              </p>
              
              <div className="flex items-center gap-2 border-l-2 border-[#C85C6E] pl-3">
                <span className="text-xs text-[#2C181C]/60">Written by</span>
                <span className="text-xs font-bold text-[#2C181C]">{recentPost.author}</span>
              </div>
              
              <button
                onClick={() => { navigate('/blog'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.25em] font-bold text-[#C85C6E] hover:text-[#C85C6E]/80 transition-colors cursor-pointer pt-2 group"
              >
                Read Fully
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
