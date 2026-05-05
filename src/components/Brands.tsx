import React from 'react';
import { motion } from 'motion/react';
import { BRANDS } from '../constants';

const Brands = () => {
  return (
    <section id="brands" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <h3 className="text-[10px] font-black text-brand-primary uppercase tracking-[0.5em] mb-4">شركاء النجاح</h3>
          <div className="w-20 h-1 bg-brand-primary/20 rounded-full overflow-hidden">
            <motion.div 
              animate={{ x: [-80, 80] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-1/2 h-full bg-brand-primary"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {BRANDS.map((brand, idx) => (
            <motion.div 
              key={brand.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="flex flex-col items-center gap-4 grayscale brightness-200 hover:grayscale-0 hover:brightness-100 transition-all duration-500 group"
            >
              <div className="bg-white/5 p-6 rounded-2xl border border-white/5 group-hover:border-brand-primary/30 group-hover:bg-white/10 transition-all">
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="h-12 md:h-14 object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-[10px] font-black text-slate-500 group-hover:text-brand-accent tracking-tighter transition-colors">{brand.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
