import { useState, MouseEvent, DragEvent, ChangeEvent, FormEvent } from 'react';
import { Eye, X, ZoomIn, Info, Heart, ArrowRight, Plus, Upload, Image as ImageIcon, Trash2 } from 'lucide-react';
import SEO from './SEO.tsx';
import { products, blogPosts } from '../data.ts';

interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: 'Products' | 'Treatments' | 'Lifestyle' | 'Ingredients';
  description: string;
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Products' | 'Treatments' | 'Lifestyle' | 'Ingredients'>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [likedItems, setLikedItems] = useState<string[]>([]);

  // Array of beautiful beauty, apothecary, product, active botanical ingredients, and spa lifestyle photos
  const galleryItems: GalleryItem[] = [
    {
      id: 'g-0',
      url: 'https://static.vecteezy.com/system/resources/previews/029/783/763/large_2x/collection-of-makeup-products-and-brushes-glamorous-beauty-essentials-free-photo.jpg',
      title: 'Glamorous Makeup & Brushes Collection',
      category: 'Products',
      description: 'Elegant luxury cosmetics, brushes, and gorgeous lipsticks representing the signature Beauty Hub palette curated by Bhumi Gupta.'
    },
    {
      id: 'g-1',
      url: products.find(p => p.id === '1')?.image || 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800',
      title: 'Hydrating Face Serum',
      category: 'Products',
      description: 'Active hydration molecules with organic Vitamin C complexes, captured on an ambient minimal cosmetic stone plinth.'
    },
    {
      id: 'g-2',
      url: products.find(p => p.id === '2')?.image || 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=800',
      title: 'Matte Lipstick Palette',
      category: 'Products',
      description: 'Smooth, lightweight velvet pigments in romantic berry, rose pink, and delicate peach tones.'
    },
    {
      id: 'g-3',
      url: products.find(p => p.id === '3')?.image || 'https://images.unsplash.com/photo-1608248597481-496100c80836?auto=format&fit=crop&q=80&w=800',
      title: 'Herbal Infused Hair Therapy',
      category: 'Products',
      description: 'Cold-pressed biological seed extracts formulated to lock in deep strand moisture and repair natural follicles.'
    },
    {
      id: 'g-4',
      url: products.find(p => p.id === '4')?.image || 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800',
      title: 'Clean botanical Gel Foaming Cleanser',
      category: 'Products',
      description: 'Ultra-pure gel wash featuring micro-algae and calming cucumber extracts to restore balanced skin pH.'
    },
    {
      id: 'g-5',
      url: products.find(p => p.id === '5')?.image || 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=800',
      title: 'Weightless Lipid Barrier Cream',
      category: 'Products',
      description: 'Derm-advanced ceramide moisture matrices for deep somatic hydration without greasy residue.'
    },
    {
      id: 'g-6',
      url: 'https://images.unsplash.com/photo-1601049676099-e7ed07d825b0?auto=format&fit=crop&q=80&w=800',
      title: 'Mulberry Silk Dream Mask & cooling Roller',
      category: 'Lifestyle',
      description: 'Indulgent, light-blocking luxury sleep set paired with an pure grade Rose Quartz energy-channeling facial roller.'
    },
    {
      id: 'g-7',
      url: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800',
      title: 'Aesthetic Apothecary Botanical Extracts',
      category: 'Ingredients',
      description: 'Pure, organic chamomile flowers, cold dried roses, and herbal materials used for clinical clean formulas.'
    },
    {
      id: 'g-8',
      url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800',
      title: 'Volcanic Hot Stone Facial Massage',
      category: 'Treatments',
      description: 'Detoxifying thermal stones designed to stimulate lymphatic pathways and soothe tired facial muscle structures.'
    },
    {
      id: 'g-9',
      url: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&q=80&w=800',
      title: 'Organic Elixir Herb Dilutions',
      category: 'Ingredients',
      description: 'Micro-refined luxury carrier oils containing calming calendula flora suspended in organic jojoba oil bases.'
    },
    {
      id: 'g-10',
      url: 'https://images.unsplash.com/photo-1590156546746-c58a8d017a5e?auto=format&fit=crop&q=80&w=800',
      title: 'Detoxifying Premium Herbal Face Pack',
      category: 'Treatments',
      description: 'A cooling bentonite clay and pure green tea powder therapy being massaged for an intense pore detox.'
    },
    {
      id: 'g-11',
      url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
      title: 'Morning Golden Hour Self-Care',
      category: 'Lifestyle',
      description: 'Embracing organic morning radiance with lightweight chemical-free formulations that let natural skin breathe.'
    },
    {
      id: 'g-12',
      url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800',
      title: 'Glow Minimalist Makeup Collection',
      category: 'Lifestyle',
      description: 'An elegant curation of clean beauty foundations, high-shine moisturizing peptide glosses, and soft warm highlighters'
    },
    {
      id: 'g-13',
      url: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=800',
      title: 'Clinical Formulation Laboratory',
      category: 'Ingredients',
      description: 'Fresh botanicals harvested and concentrated inside sterile environments, adhering to strict clean cosmetic paradigms.'
    },
    {
      id: 'g-14',
      url: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800',
      title: 'Antioxidant Rich Honey & Oil Suspension',
      category: 'Ingredients',
      description: 'Raw wild mountain honey containing powerful natural enzyme arrays designed for deep derm-barrier repair.'
    }
  ];

  // Load custom gallery items from localStorage on mount
  const [customItems, setCustomItems] = useState<GalleryItem[]>(() => {
    try {
      const saved = localStorage.getItem('beautyhub_custom_gallery');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // State for adding dynamic images
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<'Products' | 'Treatments' | 'Lifestyle' | 'Ingredients'>('Products');
  const [newDescription, setNewDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [dragActive, setDragActive] = useState(false);
  const [fileError, setFileError] = useState('');

  // Drag handers
  const handleDrag = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // Drop handler
  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  // File selection handler
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      setFileError('Please select a valid image file (PNG, JPG, WEBP, or GIF).');
      return;
    }

    // Limit size to roughly 1.5MB for reliable localStorage storage
    if (file.size > 1.5 * 1024 * 1024) {
      setFileError('Image is too large. Please choose a optimized file under 1.5MB.');
      return;
    }

    setFileError('');
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageUrl(reader.result as string);
    };
  };

  // Action to submit the raw custom image metadata to storage
  const handleAddImageSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) {
      setFileError('Please provide a beautiful title.');
      return;
    }
    if (!imageUrl.trim()) {
      setFileError('Please select a local image file or paste an image URL to proceed.');
      return;
    }

    const newItem: GalleryItem = {
      id: `custom-${Date.now()}`,
      url: imageUrl,
      title: newTitle.trim(),
      category: newCategory,
      description: newDescription.trim() || 'A shared aesthetic look added to our clean beauty catalog.'
    };

    const nextItems = [newItem, ...customItems];
    setCustomItems(nextItems);
    try {
      localStorage.setItem('beautyhub_custom_gallery', JSON.stringify(nextItems));
    } catch (err) {
      console.warn('Storage quota filled, fallback to active state only.', err);
    }

    // Reset fields
    setNewTitle('');
    setNewCategory('Products');
    setNewDescription('');
    setImageUrl('');
    setFileError('');
    setIsFormOpen(false);
  };

  // Action to delete a custom added image
  const handleDeleteCustomItem = (id: string, e?: MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }

    const nextItems = customItems.filter(item => item.id !== id);
    setCustomItems(nextItems);
    try {
      localStorage.setItem('beautyhub_custom_gallery', JSON.stringify(nextItems));
    } catch (err) {
      console.warn('Could not update storage.', err);
    }
    if (selectedImage && selectedImage.id === id) {
      setSelectedImage(null);
    }
  };

  const combinedItems = [...customItems, ...galleryItems];

  const filteredItems = activeFilter === 'All'
    ? combinedItems
    : combinedItems.filter(item => item.category === activeFilter);

  const categories: ('All' | 'Products' | 'Treatments' | 'Lifestyle' | 'Ingredients')[] = [
    'All', 'Products', 'Treatments', 'Lifestyle', 'Ingredients'
  ];

  const handleLike = (id: string, e: MouseEvent) => {
    e.stopPropagation();
    setLikedItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-12 pb-16 font-sans">
      <SEO 
        title="Visual Imagery & Aesthetics Photo Gallery" 
        description="Browse high-resolution photographs of our certified organic makeup, chemical-free active serums, botanical ingredients, and spa wellness treatments." 
      />

      {/* 1. Header Hero Segment */}
      <section className="text-center max-w-xl mx-auto space-y-4 px-4 font-sans">
        <span className="text-[10px] uppercase tracking-[0.35em] font-bold text-[#C85C6E] block">
          Visual Inspiration
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl text-[#2C181C] font-normal tracking-tight">
          Aesthetic <span className="italic text-[#C85C6E]">Photo Gallery</span>
        </h1>
        <div className="h-px w-12 bg-[#C85C6E] mx-auto" />
        <p className="text-[#2C181C]/70 font-light text-sm leading-relaxed">
          Explore the pure elegance, scientific precision, and cold-pressed botanical flora behind our luxury self-care collection. Live brilliantly and respect your skin.
        </p>
      </section>

      {/* 2. Filter tabs */}
      <section className="flex flex-wrap items-center justify-center gap-2 px-4">
        {categories.map((cat) => (
          <button
            key={cat}
            id={`gallery-filter-${cat.toLowerCase()}`}
            onClick={() => setActiveFilter(cat)}
            className={`px-5 py-2.5 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-200 cursor-pointer ${
              activeFilter === cat
                ? 'bg-[#C85C6E] text-white border border-[#C85C6E] shadow-sm'
                : 'bg-[#FCE4E7] text-[#2C181C]/75 border border-[#C85C6E]/15 hover:bg-[#C85C6E] hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
        
        {/* Interactive Add Image action button */}
        <button
          onClick={() => {
            setFileError('');
            setIsFormOpen(true);
          }}
          className="px-5 py-2.5 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-200 cursor-pointer bg-[#C85C6E] text-white hover:bg-[#C85C6E]/90 border border-transparent shadow-xs flex items-center gap-2"
          id="gallery-trigger-add-btn"
        >
          <Plus className="h-3.5 w-3.5" />
          Add Image
        </button>
      </section>

      {/* 3. Aesthetic Image Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => {
            const isLiked = likedItems.includes(item.id);
            return (
              <div
                key={item.id}
                id={`gallery-card-${item.id}`}
                onClick={() => setSelectedImage(item)}
                className="group relative bg-[#FCE4E7] border border-[#C85C6E]/15 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg hover:border-[#C85C6E]/30 transition-all duration-300 flex flex-col cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Category tag */}
                <div className="absolute top-3 left-3 z-10 pointer-events-none">
                  <span className="bg-[#FFF5F6]/90 backdrop-blur-xs text-[#2C181C] px-2.5 py-1 rounded-md text-[9px] uppercase font-bold tracking-[0.15em] shadow-2xs border border-[#C85C6E]/10">
                    {item.category}
                  </span>
                </div>

                {/* Actions container */}
                <div className="absolute top-3 right-3 z-10 flex gap-1.5">
                  {item.id.startsWith('custom-') && (
                    <button
                      onClick={(e) => handleDeleteCustomItem(item.id, e)}
                      className="p-2 rounded-full bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-700 shadow-sm border border-red-200 transition-colors cursor-pointer"
                      title="Delete custom image"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  )}
                  <button
                    onClick={(e) => handleLike(item.id, e)}
                    className="p-2 rounded-full bg-[#FFF5F6]/80 hover:bg-white text-[#C85C6E] hover:text-rose-600 shadow-sm border border-[#C85C6E]/10 transition-colors cursor-pointer"
                    title="Love image"
                  >
                    <Heart className={`h-3.5 w-3.5 ${isLiked ? 'fill-[#C85C6E] text-[#C85C6E]' : ''}`} />
                  </button>
                </div>

                {/* Frame container */}
                <div className="aspect-square bg-[#FFF5F6] overflow-hidden relative">
                  <img
                    src={item.url}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform duration-500 group-hover:scale-104"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      if (item.category === 'Products') {
                        target.src = products[0]?.image || 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800';
                      } else if (item.category === 'Treatments') {
                        target.src = products[4]?.image || 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800';
                      } else if (item.category === 'Lifestyle') {
                        target.src = products[5]?.image || 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800';
                      } else {
                        target.src = products[3]?.image || 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800';
                      }
                    }}
                  />
                  
                  {/* Elegant overlay panel */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C181C]/60 via-[#2C181C]/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-5">
                    <span className="text-[9px] uppercase font-bold tracking-widest text-[#FCE4E7]">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-lg font-normal text-white mt-0.5 mb-1.5 flex items-center justify-between">
                      {item.title}
                      <ZoomIn className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-white/80 font-light text-[11px] leading-tight line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Lightbox Zoom Frame */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 bg-[#2C181C]/80 backdrop-blur-md transition-opacity animate-fade-in cursor-zoom-out"
        >
          <div 
            className="relative bg-[#FFF5F6] rounded-2xl overflow-hidden shadow-2xl max-w-3xl w-full border border-[#C85C6E]/20 flex flex-col cursor-default"
            onClick={(e) => e.stopPropagation()}
            id="gallery-zoom-box"
          >
            {/* Close Cross */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#FFF5F6]/80 backdrop-blur-xs text-[#2C181C] hover:bg-[#C85C6E] hover:text-white transition-all cursor-pointer shadow-sm border border-[#C85C6E]/15"
              aria-label="Close Lightbox"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Display full image */}
            <div className="w-full bg-[#FCE4E7] overflow-hidden border-b border-[#C85C6E]/10">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                className="w-full max-h-[60vh] object-contain mx-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  if (selectedImage.category === 'Products') {
                    target.src = products[0]?.image || 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800';
                  } else if (selectedImage.category === 'Treatments') {
                    target.src = products[4]?.image || 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800';
                  } else if (selectedImage.category === 'Lifestyle') {
                    target.src = products[5]?.image || 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800';
                  } else {
                    target.src = products[3]?.image || 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800';
                  }
                }}
              />
            </div>

            {/* Information panel */}
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="bg-[#C85C6E]/10 text-[#C85C6E] px-3 py-1 rounded-md text-[10px] uppercase font-bold tracking-widest border border-[#C85C6E]/15">
                  {selectedImage.category}
                </span>
                <span className="text-xs text-[#2C181C]/40 font-light">
                  Beauty Hub Editorial Stock
                </span>
              </div>

              <div className="space-y-2">
                <h2 className="font-serif text-2xl text-[#2C181C] font-normal tracking-tight">
                  {selectedImage.title}
                </h2>
                <p className="text-[#2C181C]/75 font-light text-sm leading-relaxed">
                  {selectedImage.description}
                </p>
              </div>

              {/* Informative advice */}
              <div className="bg-[#FCE4E7] p-4 rounded-xl border border-[#C85C6E]/15 flex gap-3 items-start">
                <Info className="h-5 w-5 text-[#C85C6E] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#2C181C]">
                    Sustainable formulation methodology
                  </h4>
                  <p className="text-[11px] text-[#2C181C]/70 font-light leading-normal">
                    This visual demonstrates our zero-synthetic approach. We utilize low speed crystallization, local grower partnerships, and glass storage cells to limit atmospheric footprint.
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="flex items-center justify-between pt-3 border-t border-[#C85C6E]/10 flex-wrap gap-2">
                <button
                  onClick={(e) => handleLike(selectedImage.id, e)}
                  className="flex items-center gap-2 text-xs font-semibold text-[#C85C6E] hover:text-rose-600 transition-colors cursor-pointer"
                >
                  <Heart className={`h-4 w-4 ${likedItems.includes(selectedImage.id) ? 'fill-[#C85C6E] text-[#C85C6E]' : ''}`} />
                  <span>{likedItems.includes(selectedImage.id) ? 'Saved to Favorites' : 'Love this inspiration'}</span>
                </button>
                {selectedImage.id.startsWith('custom-') && (
                  <button
                    onClick={() => handleDeleteCustomItem(selectedImage.id)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-red-600 hover:text-red-800 transition-colors cursor-pointer"
                  >
                    <Trash2 className="h-4 w-4" />
                    <span>Delete Inspiration</span>
                  </button>
                )}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="text-xs font-semibold text-[#2C181C]/60 hover:text-[#2C181C] transition-colors cursor-pointer"
                >
                  Close View
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
      {/* 5. Add Custom Image Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 bg-[#2C181C]/80 backdrop-blur-md transition-opacity animate-fade-in">
          <div 
            className="relative bg-[#FFF5F6] rounded-2xl overflow-hidden shadow-2xl max-w-lg w-full border border-[#C85C6E]/20 flex flex-col cursor-default font-sans text-left"
            onClick={(e) => e.stopPropagation()}
            id="add-image-modal"
          >
            {/* Header */}
            <div className="bg-[#FCE4E7] px-6 py-4 border-b border-[#C85C6E]/15 flex items-center justify-between">
              <div className="flex items-center gap-2 text-[#C85C6E]">
                <Plus className="h-5 w-5" />
                <h3 className="font-serif text-lg font-normal text-[#2C181C]">
                  Add Image to Website
                </h3>
              </div>
              <button
                onClick={() => setIsFormOpen(false)}
                className="p-1.5 rounded-full hover:bg-[#C85C6E]/10 text-[#2C181C]/60 hover:text-[#2C181C] transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleAddImageSubmit} className="p-6 space-y-4">
              {/* Title Input */}
              <div className="space-y-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2C181C]/85">
                  Inspiration Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. My Organic Evening Routine"
                  className="w-full bg-[#FFF5F6] text-[#2C181C] border border-[#C85C6E]/20 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#C85C6E] transition-colors"
                />
              </div>

              {/* Category Select */}
              <div className="space-y-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2C181C]/85">
                  Category
                </label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value as any)}
                  className="w-full bg-[#FFF5F6] text-[#2C181C] border border-[#C85C6E]/20 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#C85C6E] transition-colors"
                >
                  <option value="Products">Products</option>
                  <option value="Treatments">Treatments</option>
                  <option value="Lifestyle">Lifestyle</option>
                  <option value="Ingredients">Ingredients</option>
                </select>
              </div>

              {/* Description Input */}
              <div className="space-y-1">
                <label className="block text-[#2C181C]/85 text-xs font-bold uppercase tracking-wider">
                  Brief Description
                </label>
                <textarea
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  placeholder="Tell us what makes this aesthetic beautiful, the clean ingredients, or its glow benefits..."
                  rows={2}
                  className="w-full bg-[#FFF5F6] text-[#2C181C] border border-[#C85C6E]/20 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#C85C6E] transition-colors resize-none"
                />
              </div>

              {/* Flexible Image Upload & URL input */}
              <div className="space-y-2">
                <label className="block text-[#2C181C]/85 text-xs font-bold uppercase tracking-wider">
                  Target Image Source <span className="text-red-500">*</span>
                </label>

                {/* DRAG AND DROP ZONE */}
                <div
                  onDragEnter={handleDrag}
                  onDragOver={handleDrag}
                  onDragLeave={handleDrag}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-xl p-6 text-center transition-all ${
                    dragActive
                      ? 'border-[#C85C6E] bg-[#FCE4E7]'
                      : 'border-[#C85C6E]/20 hover:border-[#C85C6E]/40 bg-[#FFF5F6]'
                  }`}
                >
                  {imageUrl ? (
                    <div className="space-y-2">
                      <div className="relative mx-auto h-20 w-20 rounded-lg overflow-hidden border border-[#C85C6E]/20">
                        <img
                          src={imageUrl}
                          alt="Thumbnail preview"
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.onerror = null;
                            target.src = products[0]?.image || 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800';
                          }}
                        />
                        <button
                          type="button"
                          onClick={() => setImageUrl('')}
                          className="absolute inset-0 bg-black/40 text-white flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity text-[10px] font-bold"
                        >
                          Clear
                        </button>
                      </div>
                      <p className="text-[10px] text-[#2C181C]/65 truncate max-w-xs mx-auto">
                        ✓ Image prepared successfully
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2 flex flex-col items-center">
                      <Upload className="h-6 w-6 text-[#C85C6E]/50" />
                      <p className="text-[11px] text-[#2C181C]/75 font-light">
                        Drag and drop your beauty file here, or{' '}
                        <label className="text-[#C85C6E] font-medium cursor-pointer underline hover:text-[#C85C6E]/80">
                          browse files
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleFileChange}
                          />
                        </label>
                      </p>
                      <p className="text-[9px] text-[#2C181C]/40 font-light">
                        Supports PNG, JPG, WEBP, GIF up to 1.5MB
                      </p>
                    </div>
                  )}
                </div>

                {/* OR divider */}
                <div className="flex items-center justify-between text-[10px] text-[#2C181C]/40 uppercase tracking-widest my-1">
                  <div className="h-px bg-[#C85C6E]/15 w-full mr-3" />
                  <span>OR</span>
                  <div className="h-px bg-[#C85C6E]/15 w-full ml-3" />
                </div>

                {/* Image URL fallback */}
                <div className="space-y-1">
                  <input
                    type="url"
                    value={imageUrl.startsWith('data:') ? '' : imageUrl}
                    onChange={(e) => {
                      setImageUrl(e.target.value);
                      setFileError('');
                    }}
                    placeholder="Alternatively, paste an external Image URL"
                    className="w-full bg-[#FFF5F6] text-[#2C181C] border border-[#C85C6E]/20 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#C85C6E] transition-colors"
                  />
                </div>
              </div>

              {/* Error messages */}
              {fileError && (
                <div className="bg-red-50 text-red-700 text-[11px] p-3 rounded-lg border border-red-200">
                  ⚠️ {fileError}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-3 border-t border-[#C85C6E]/10">
                <button
                  type="submit"
                  className="flex-grow bg-[#C85C6E] hover:bg-[#C85C6E]/90 text-white font-sans text-xs uppercase tracking-widest font-bold py-3 rounded-xl transition-all shadow-sm cursor-pointer"
                >
                  Publish to Gallery
                </button>
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="px-4 py-3 border border-[#C85C6E]/20 hover:bg-[#C85C6E]/5 text-[#2C181C]/70 rounded-xl text-xs font-semibold tracking-wider transition-colors cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
