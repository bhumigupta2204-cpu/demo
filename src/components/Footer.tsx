import { Sparkles, MapPin, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FCE4E7] text-[#2C181C]/80 border-t border-[#C85C6E]/15 font-sans">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-8">
          
          {/* Brand Col */}
          <div className="md:col-span-1 space-y-6">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C85C6E] text-white">
                <Sparkles className="h-5 w-5" />
              </div>
              <span className="font-serif text-lg font-bold tracking-widest text-[#2C181C]">
                BEAUTY HUB
              </span>
            </div>
            <p className="text-sm text-[#2C181C]/70 leading-relaxed font-light">
              Premium cosmetics, dermatologically tested skincare formulas, and clean luxury wellness accessories tailored for gorgeous, glowing skin.
            </p>
            <div className="flex items-center gap-4 text-[#2C181C]/60 font-light">
              <a href="#" className="hover:text-[#C85C6E] transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[#C85C6E] transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[#C85C6E] transition-colors" aria-label="Youtube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links Col */}
          <div>
            <h3 className="text-[#2C181C] font-sans text-xs tracking-widest font-semibold uppercase mb-6">
              Shop Navigation
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link to="/" onClick={handleScrollToTop} className="hover:text-[#C85C6E] transition-colors text-[#2C181C]/70 text-left block">
                  Homepage
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={handleScrollToTop} className="hover:text-[#C85C6E] transition-colors text-[#2C181C]/70 text-left block">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" onClick={handleScrollToTop} className="hover:text-[#C85C6E] transition-colors text-[#2C181C]/70 text-left block">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/blog" onClick={handleScrollToTop} className="hover:text-[#C85C6E] transition-colors text-[#2C181C]/70 text-left block">
                  Skincare Blog
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={handleScrollToTop} className="hover:text-[#C85C6E] transition-colors text-[#2C181C]/70 text-left block">
                  About the Brand
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={handleScrollToTop} className="hover:text-[#C85C6E] transition-colors text-[#2C181C]/70 text-left block">
                  Contact &amp; Hours
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact recap Col */}
          <div>
            <h3 className="text-[#2C181C] font-sans text-xs tracking-widest font-semibold uppercase mb-6">
              The Boutique
            </h3>
            <ul className="space-y-3.5 text-sm text-[#2C181C]/70 font-light">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#C85C6E]/60 shrink-0 mt-0.5" />
                <span>125 Fashion Street,<br />New Delhi, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#C85C6E]/60 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#C85C6E]/60 shrink-0" />
                <a href="mailto:support@beautyhub.com" className="hover:text-[#C85C6E] transition-colors">
                  support@beautyhub.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Col */}
          <div>
            <h3 className="text-[#2C181C] font-sans text-xs tracking-widest font-semibold uppercase mb-6">
              Keep in Touch
            </h3>
            <p className="text-sm text-[#2C181C]/70 mb-4 leading-relaxed font-light">
              Subscribe to unlock private sales, new arrivals, and skincare guides.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex border border-[#C85C6E]/30 rounded-xl overflow-hidden shadow-xs focus-within:border-[#C85C6E]/60">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-[#FFF5F6] text-[#2C181C] px-4 py-2.5 text-sm focus:outline-none placeholder-[#2C181C]/40"
                />
                <button
                  type="submit"
                  className="bg-[#C85C6E] hover:bg-[#C85C6E]/90 text-white px-4 font-sans text-xs font-semibold tracking-wider uppercase transition-colors shrink-0 cursor-pointer"
                >
                   Join
                </button>
              </div>
              {subscribed ? (
                <p className="text-emerald-700 text-xs font-medium animate-pulse">
                  ✓ Successfully subscribed! Check your inbox.
                </p>
              ) : (
                <p className="text-[11px] text-[#2C181C]/40 font-light">
                  By joining, you consent to our privacy terms.
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="mt-16 pt-8 border-t border-[#C85C6E]/15 text-center flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#2C181C]/50 font-light font-sans">
          <p>© 2026 Beauty Hub. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#C85C6E] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#C85C6E] transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-[#C85C6E] transition-colors">Shipping &amp; Returns</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
