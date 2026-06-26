import { HeartHandshake, Lightbulb, Sparkles, ShieldCheck, Milestone } from 'lucide-react';
import SEO from './SEO.tsx';
import { cleanserImg } from '../data.ts';

export default function About() {
  const coreValues = [
    {
      title: 'Premium Quality',
      desc: 'We select ingredients based on non-toxicity, rich bioavailability, and dermatologist efficacy records. We test formulas extensively so that dry, oily, or hyper-sensitive skin reacts beautifully.',
      icon: Sparkles
    },
    {
      title: 'Pioneering Innovation',
      desc: 'Our labs frequently evaluate revolutionary botanicals, bio-actives, and lightweight protective sun shields to deliver high performance without sacrificing organic skin integrity.',
      icon: Lightbulb
    },
    {
      title: 'Customer Satisfaction',
      desc: 'We strive to build skinconfidence with customizable regimens. If a treatment does not align with your face biology, our direct lines handle refunds instantly with zero friction.',
      icon: HeartHandshake
    },
    {
      title: 'Uncompromised Authenticity',
      desc: 'Zero greenwashing, 100% transparency. We document absolute ingredient compositions and clinical values openly on every label so you understand exactly what feeds your skin cell renewal.',
      icon: ShieldCheck
    }
  ];

  return (
    <div className="space-y-20 pb-16 font-sans">
      <SEO 
        title="About Our Clean Beauty Brand" 
        description="Learn about the organic and clinical science, clean-beauty values, and empowering boutique philosophy that defines Beauty Hub." 
      />
      
      {/* Banner introduction card */}
      <section className="relative overflow-hidden bg-[#FCE4E7] rounded-2xl mx-4 sm:mx-6 lg:mx-8 py-20 px-6 sm:px-12 text-center flex flex-col items-center border border-[#C85C6E]/20 animate-fade-in">
        <div className="absolute inset-0 bg-[radial-gradient(#C85C6E_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
        <div className="relative z-10 max-w-2xl space-y-4">
          <span className="text-[#C85C6E] font-sans text-xs tracking-[0.3em] font-bold uppercase block">
            The Story Behind Beauty Hub
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-normal text-[#2C181C] tracking-tight">
            Cultivating Pure <span className="italic text-[#C85C6E]">Radiance</span>
          </h1>
          <div className="w-12 h-px bg-[#C85C6E] mx-auto my-3" />
          <p className="text-[#2C181C]/85 font-light text-sm sm:text-base leading-relaxed">
            Beauty Hub was founded with the mission of providing high-quality beauty products for everyone. We believe that beauty should be simple, affordable, and accessible.
          </p>
        </div>
      </section>

      {/* Main Philosophy Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-serif text-2xl sm:text-4xl font-normal text-[#2C181C] tracking-tight">
              Simple. Effective. <span className="italic text-[#C85C6E]">Accessible.</span>
            </h2>
            <p className="text-[#2C181C]/70 font-light text-sm leading-relaxed">
              Our team carefully selects products that are safe, effective, and suitable for different skin types and beauty needs. Instead of over-complicating daily health routines with dozens of redundant layers, we advocate for clean, focused formulations that reinforce natural lipid barriers.
            </p>
            <p className="text-[#2C181C]/70 font-light text-sm leading-relaxed">
              By working closely with trusted cultivators and eliminating distributor markups, we deliver ultra-high-end formulas at an accessible cost structure. No compromises, no hidden synthetics – just pure self-care that builds everyday confidence.
            </p>
            
            {/* Mission Vision highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="p-5 rounded-xl bg-[#FCE4E7] border border-[#C85C6E]/20 space-y-3 shadow-xs">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFF5F6] text-[#2C181C] border border-[#C85C6E]/15">
                  <Sparkles className="h-4 w-4 text-[#C85C6E]" />
                </div>
                <h4 className="font-sans text-[11px] font-bold uppercase text-[#2C181C] tracking-widest">
                  Our Mission
                </h4>
                <p className="text-[#2C181C]/70 font-light text-xs leading-relaxed">
                  To empower people with premium beauty solutions that enhance confidence and self-care.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#FCE4E7] border border-[#C85C6E]/20 space-y-3 shadow-xs">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFF5F6] text-[#2C181C] border border-[#C85C6E]/15">
                  <Milestone className="h-4 w-4 text-[#C85C6E]" />
                </div>
                <h4 className="font-sans text-[11px] font-bold uppercase text-[#2C181C] tracking-widest">
                  Our Vision
                </h4>
                <p className="text-[#2C181C]/70 font-light text-xs leading-relaxed">
                  To become a trusted online beauty destination for customers worldwide.
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-96 lg:h-120 rounded-2xl overflow-hidden shadow-xs border border-[#C85C6E]/15 animate-fade-in col-span-1">
            <img
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format,compress&fit=crop&q=80&w=600&fm=webp"
              alt="Luxury cosmetic ingredients"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transform hover:scale-103 transition-transform duration-500"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = cleanserImg;
              }}
            />
            <div className="absolute bottom-6 left-6 right-6 bg-[#FFF5F6]/95 backdrop-blur-md p-6 rounded-xl border border-[#C85C6E]/25 max-w-sm">
              <p className="font-serif text-[#2C181C] text-sm italic font-light leading-relaxed">
                "Skincare is a personal dialogue with your skin cells. It should be respectful, natural, and nourishing."
              </p>
              <p className="font-sans text-[9px] uppercase font-bold tracking-[0.2em] text-[#C85C6E] mt-3">
                — BEAUTY HUB EDITORIAL TEAM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core values block */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[#C85C6E] font-sans text-xs uppercase tracking-[0.25em] font-bold">
            Our Guideline
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#2C181C] tracking-tight mt-1">
            Our Core Values
          </h2>
          <div className="h-px w-12 bg-[#C85C6E] mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div 
                key={idx} 
                className="p-6 bg-[#FCE4E7] border border-[#C85C6E]/20 rounded-xl hover:border-[#C85C6E]/40 transition-all duration-300 space-y-4 shadow-2xs"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FFF5F6] text-[#2C181C] border border-[#C85C6E]/15">
                  <Icon className="h-5 w-5 text-[#C85C6E]" />
                </div>
                <h3 className="font-sans text-xs font-bold tracking-widest text-[#2C181C] uppercase">
                  {val.title}
                </h3>
                <p className="text-[#2C181C]/70 font-light text-xs leading-relaxed">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
