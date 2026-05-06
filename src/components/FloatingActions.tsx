import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const FloatingActions = () => {
  const trackConversion = (type: string) => {
    if (typeof window.gtag_report_conversion === 'function') {
      window.gtag_report_conversion();
    }
    if (window.gtag) {
      window.gtag('event', 'click', {
        'event_category': 'Contact',
        'event_label': type
      });
    }
  };

  return (
    <div className="fixed bottom-8 left-8 z-[100] flex flex-col gap-3">
      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        onClick={() => trackConversion('WhatsApp')}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-3 bg-emerald-600 px-5 py-3 rounded-full shadow-[0_10px_30px_rgba(5,150,105,0.3)] border border-emerald-400/30 group"
      >
        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white shrink-0">
          <MessageCircle size={24} />
        </div>
        <span className="text-white font-black text-sm tracking-tight">راسلنا واتساب</span>
      </motion.a>

      {/* Call Button */}
      <motion.a
        href={`tel:${CONTACT_INFO.phone}`}
        onClick={() => trackConversion('Phone')}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.2 }}
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-3 rounded-full shadow-2xl border border-white/10 group group-hover:bg-white/20 transition-all"
      >
        <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-slate-950 shadow-[0_0_15px_rgba(20,184,166,0.5)] shrink-0">
          <Phone size={24} />
        </div>
        <span className="text-white font-black text-sm tracking-tight lowercase">{CONTACT_INFO.phone}</span>
      </motion.a>
    </div>
  );
};

export default FloatingActions;
