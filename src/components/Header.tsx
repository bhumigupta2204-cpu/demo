import { ShoppingBag, Sparkles, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

interface HeaderProps {
  cartCount: number;
  onCartToggle: () => void;
}

export default function Header({ cartCount, onCartToggle }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/blog', label: 'Beauty Blog' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#C85C6E]/15 bg-[#FFF5F6]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo Link */}
        <Link
          to="/"
          onClick={() => setMobileMenuOpen(false)}
          className="flex items-center gap-3 group cursor-pointer text-left"
          id="logo-button"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C85C6E] text-white transition-transform duration-300 group-hover:scale-105">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-2xl sm:text-3xl italic tracking-tight text-[#2C181C] block leading-none">
                Beauty Hub
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] font-semibold text-[#C85C6E] hidden sm:inline">
                Est. 2024
              </span>
            </div>
            <span className="font-sans text-[9px] tracking-[0.2em] text-[#C85C6E] uppercase block mt-1">
              Premium Skincare &amp; Cosmetics
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              id={`nav-link-${item.label.toLowerCase().replace(' ', '-')}`}
              to={item.path}
              className={({ isActive }) => `relative py-2 font-sans text-xs tracking-[0.2em] uppercase transition-colors duration-200 cursor-pointer ${
                isActive
                  ? 'text-[#C85C6E] font-semibold'
                  : 'text-[#2C181C]/70 hover:text-[#2C181C]'
              }`}
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <div className="absolute inset-x-2 bottom-0 h-0.5 bg-[#C85C6E] rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Action icons */}
        <div className="flex items-center gap-4">
          {/* Cart Icon */}
          <button
            onClick={onCartToggle}
            className="relative p-2.5 rounded-full border border-[#C85C6E]/25 bg-[#FCE4E7] hover:bg-[#FFF5F6] text-[#2C181C] transition-all cursor-pointer shadow-xs active:scale-95"
            aria-label="Shopping Cart"
            id="cart-trigger-button"
          >
            <ShoppingBag className="h-4 w-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#C85C6E] text-[9px] font-bold text-white leading-none">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full border border-[#C85C6E]/25 bg-[#FCE4E7] hover:bg-[#FFF5F6] text-[#2C181C] cursor-pointer shadow-xs"
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#C85C6E]/10 bg-[#FFF5F6] px-4 py-4 space-y-1 animate-fade-in">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              id={`nav-link-mobile-${item.label.toLowerCase().replace(' ', '-')}`}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) => `block w-full py-2.5 px-4 rounded-lg text-left font-sans text-xs font-medium uppercase tracking-[0.15em] transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#C85C6E] text-white font-semibold'
                  : 'text-[#2C181C]/70 hover:bg-[#FCE4E7]'
              }`}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
