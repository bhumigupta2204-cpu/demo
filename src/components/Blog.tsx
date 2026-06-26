import { useState } from 'react';
import { Calendar, Clock, User, ArrowRight, X, Sparkles } from 'lucide-react';
import { BlogPost } from '../types.ts';
import { blogPosts, heroImg } from '../data.ts';
import SEO from './SEO.tsx';

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const handleOpenReader = (post: BlogPost) => {
    setSelectedPost(post);
  };

  const handleCloseReader = () => {
    setSelectedPost(null);
  };

  return (
    <div className="space-y-12 pb-16 font-sans">
      <SEO 
        title="The Beauty Chronicles Blog & Skincare Guides" 
        description="Stay inspired with our expert-led skincare guides, botanical chemical comparisons, makeup trends, and clean-beauty self-care tips." 
      />
      
      {/* 1. Header description */}
      <section className="text-center max-w-xl mx-auto space-y-4 px-4">
        <span className="text-[10px] uppercase tracking-[0.35em] font-bold text-[#C85C6E] block">
          Beauty, Science &amp; Self-Care Tips
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl text-[#2C181C] font-normal tracking-tight">
          The Beauty Hub <span className="italic">Chronicles</span>
        </h1>
        <div className="h-px w-12 bg-[#C85C6E] mx-auto" />
        <p className="text-[#2C181C]/70 font-light text-sm leading-relaxed">
          Stay updated with natural methods, skincare tips, vitamin-infused routines, and the latest beauty trends of 2026.
        </p>
      </section>

      {/* 2. Blog Posts Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-[#FCE4E7] border border-[#C85C6E]/15 rounded-2xl overflow-hidden shadow-xs hover:border-[#C85C6E]/30 hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row h-full cursor-pointer"
              onClick={() => handleOpenReader(post)}
              id={`blog-card-${post.id}`}
            >
              {/* Cover image */}
              <div className="w-full md:w-2/5 h-56 md:h-auto relative overflow-hidden shrink-0 bg-[#FCE4E7]">
                <img
                  src={post.image}
                  alt={post.title}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transform duration-500 group-hover:scale-103"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = heroImg;
                  }}
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-[#FFF5F6] text-[#2C181C] px-3 py-1 rounded-md text-[9px] uppercase font-bold tracking-[0.15em] shadow-xs border border-[#C85C6E]/15">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <div className="p-6 md:p-8 flex flex-col justify-between flex-grow space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.15em] text-[#C85C6E] font-bold font-sans">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-normal text-[#2C181C] leading-snug group-hover:text-[#C85C6E] transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-[#2C181C]/70 font-light text-xs leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-3 flex items-center justify-between border-t border-[#C85C6E]/15 mt-auto">
                  <div className="flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FFF5F6] text-[#2C181C] border border-[#C85C6E]/15 font-serif text-[10px] font-bold">
                      {post.author.charAt(0)}
                    </div>
                    <span className="text-[11px] text-[#2C181C]/70 font-medium font-sans">By {post.author}</span>
                  </div>

                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#C85C6E] group-hover:text-[#C85C6E]/80 transition-colors flex items-center gap-1 group/btn border-b border-[#C85C6E] pb-0.5">
                    <span>Read</span>
                    <ArrowRight className="h-3 w-3 transform group-hover/btn:translate-x-1 duration-200" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. Detailed Blog Article Reader Overlay */}
      {selectedPost && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 bg-[#2C181C]/70 backdrop-blur-xs transition-opacity animate-fade-in"
          onClick={handleCloseReader}
        >
          <div
            className="bg-[#FFF5F6] rounded-2xl overflow-hidden shadow-2xl max-w-3xl w-full border border-[#C85C6E]/20 flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
            id="blog-reader-modal"
          >
            {/* Header image frame */}
            <div className="h-64 sm:h-80 relative bg-[#FCE4E7] shrink-0 border-b border-[#C85C6E]/15">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
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
              <div className="absolute inset-0 bg-gradient-to-t from-[#FFF5F6]/95 to-transparent" />
              
              <button
                onClick={handleCloseReader}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-[#FFF5F6]/80 text-[#2C181C] hover:bg-[#C85C6E] hover:text-white hover:border-[#C85C6E]/10 cursor-pointer shadow-sm border border-white/10"
                aria-label="Close Reader"
              >
                <X className="h-4.5 w-4.5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6 text-[#2C181C] space-y-2">
                <span className="bg-[#C85C6E] border border-[#C85C6E]/20 text-white px-3 py-1 rounded-md text-[9px] uppercase font-bold tracking-[0.15em]">
                  {selectedPost.category}
                </span>
                <h2 className="font-serif text-xl sm:text-3xl font-normal tracking-tight max-w-2xl text-[#2C181C]">
                  {selectedPost.title}
                </h2>
              </div>
            </div>

            {/* Scrollable content body */}
            <div className="p-6 sm:p-10 overflow-y-auto space-y-6 bg-[#FFF5F6]">
              
              <div className="flex flex-wrap items-center gap-6 pb-4 border-b border-[#C85C6E]/15 text-xs text-[#2C181C]/60 font-light font-sans">
                <span className="flex items-center gap-1.5 font-bold text-[#2C181C]/80">
                  <User className="h-4 w-4 text-[#C85C6E]" />
                  Written by {selectedPost.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4 text-[#C85C6E]" />
                  {selectedPost.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-[#C85C6E]" />
                  {selectedPost.readTime}
                </span>
              </div>

              {/* Formatted Text Content */}
              <div className="prose prose-stone max-w-none text-[#2C181C]/85 font-light text-sm sm:text-base leading-relaxed space-y-5 font-sans">
                {selectedPost.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('###')) {
                    return (
                      <h4 key={index} className="font-serif text-lg text-[#2C181C] font-semibold pt-2">
                        {paragraph.replace('###', '').trim()}
                      </h4>
                    );
                  }
                  if (paragraph.startsWith('1.') || paragraph.startsWith('-')) {
                    const listItems = paragraph.split('\n');
                    return (
                      <ul key={index} className="list-disc pl-5 space-y-2.5 my-3 text-sm">
                        {listItems.map((item, itemIdx) => (
                          <li key={itemIdx} className="pl-1">
                            {item.replace(/^\d+\.\s*/, '').replace(/^-\s*/, '').replace(/\*\*(.*?)\*\*/g, '$1')}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={index} className="whitespace-pre-line">
                      {paragraph.replace(/\*\*(.*?)\*\*/g, '$1')}
                    </p>
                  );
                })}
              </div>

              {/* Cozy conclusion banner */}
              <div className="bg-[#FCE4E7] rounded-xl p-5 border border-[#C85C6E]/15 mt-8 flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF5F6] text-[#2C181C] border border-[#C85C6E]/15 shrink-0">
                  <Sparkles className="h-5 w-5 text-[#C85C6E]" />
                </div>
                <div>
                  <h4 className="font-sans text-[11px] font-bold uppercase text-[#2C181C] tracking-wider">
                    Love organic cosmetics?
                  </h4>
                  <p className="text-[#2C181C]/70 font-light text-xs mt-0.5 leading-snug">
                    Visit our apothecary shelf and discover clean active recipes to refresh your self-care ritual!
                  </p>
                </div>
              </div>

            </div>

            {/* Drawer bottom lock */}
            <div className="p-4 bg-[#FCE4E7] border-t border-[#C85C6E]/15 text-right shrink-0">
              <button
                onClick={handleCloseReader}
                className="bg-[#C85C6E] hover:bg-[#C85C6E]/90 text-white border border-[#C85C6E] font-medium px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider cursor-pointer"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
