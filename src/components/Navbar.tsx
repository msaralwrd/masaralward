import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageCircle, Menu, X, ChevronLeft, Car } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, CONTACT_INFO } from '../constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isGermanSite = location.pathname === '/german-cars';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const trackConversion = (type: string) => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-CONVERSION_ID',
        'event_category': 'Contact',
        'event_label': type
      });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div 
          className={`flex items-center justify-between px-6 py-2 rounded-2xl transition-all duration-300 ${
            isScrolled ? 'glass shadow-xl' : 'bg-transparent'
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group cursor-pointer">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform ${isGermanSite ? 'bg-blue-600 shadow-blue-500/50' : 'bg-brand-primary shadow-brand-primary/50'}`}>
              <span className="text-xl font-black">{isGermanSite ? 'G' : 'M'}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tighter text-white">
                {isGermanSite ? 'مســــار ' : 'مســــار '}
                <span className={`${isGermanSite ? 'text-blue-400' : 'text-brand-accent'} font-light uppercase`}>
                  {isGermanSite ? 'German' : 'MASAR'}
                </span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                className="text-sm font-bold text-slate-100 hover:text-brand-accent transition-colors relative group"
              >
                {link.name}
              </a>
            ))}
            
            {/* Department Switcher */}
            <Link 
              to={isGermanSite ? '/' : '/german-cars'}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-black uppercase tracking-tighter transition-all ${
                isGermanSite 
                ? 'bg-brand-primary/20 text-brand-primary border border-brand-primary/30' 
                : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
              }`}
            >
              <Car size={14} />
              {isGermanSite ? 'العودة للقسم العام' : 'قسم السيارات الألمانية'}
            </Link>
          </div>

          {/* G-ADS Status Badge */}
          <div className="hidden lg:flex items-center gap-4 text-[10px] bg-brand-primary/10 border border-brand-primary/20 px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 bg-brand-primary rounded-full animate-pulse"></span>
            <span className="text-brand-accent font-bold uppercase tracking-widest leading-none">G-ADS Optimized</span>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a 
              href={`tel:${CONTACT_INFO.phone}`}
              onClick={() => trackConversion('Phone')}
              className="flex items-center gap-2 px-4 py-2 text-brand-primary font-bold hover:bg-brand-primary/5 rounded-xl transition-all"
            >
              <Phone size={18} />
              <span>{CONTACT_INFO.phone}</span>
            </a>
            <a 
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackConversion('WhatsApp')}
              className="bg-brand-primary text-white p-3 rounded-xl hover:bg-brand-secondary shadow-lg shadow-brand-primary/20 transition-all flex items-center gap-2"
            >
              <MessageCircle size={20} />
              <span className="text-sm font-bold">احجز موعدك</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-brand-secondary p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 p-4"
          >
            <div className="glass shadow-2xl rounded-3xl p-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.href}
                  href={link.href}
                  className="text-lg font-bold text-brand-gray py-2 border-b border-gray-100 flex items-center justify-between"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                  <ChevronLeft size={20} className="text-brand-primary" />
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-4">
                <Link 
                  to={isGermanSite ? '/' : '/german-cars'}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`p-4 rounded-2xl flex items-center justify-center gap-3 font-black text-sm uppercase tracking-tighter border ${
                    isGermanSite 
                    ? 'bg-brand-primary/10 border-brand-primary/20 text-brand-primary' 
                    : 'bg-blue-500/10 border-blue-500/20 text-blue-400'
                  }`}
                >
                  <Car size={20} />
                  {isGermanSite ? 'العودة للقسم العام' : 'السيارات الألمانية'}
                </Link>
                <a 
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="bg-gray-100 text-brand-secondary p-4 rounded-2xl flex items-center justify-center gap-3 font-bold"
                >
                  <Phone size={24} />
                  اتصل بنا
                </a>
                <a 
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                  className="bg-brand-primary text-white p-4 rounded-2xl flex items-center justify-center gap-3 font-bold"
                >
                  <MessageCircle size={24} />
                  راسلنا واتساب
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
