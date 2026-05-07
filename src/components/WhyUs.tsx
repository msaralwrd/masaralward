import React from 'react';
import { motion } from 'motion/react';
import { Settings } from 'lucide-react';
import { FEATURES } from '../constants';

const WhyUs = () => {
  return (
    <section id="why-us" className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-20 items-center">
          <div className="flex-1">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand-primary font-black tracking-[0.4em] uppercase text-xs mb-4 block"
            >
              المعيار الذهبي
            </motion.span>
            <h2 className="text-3xl md:text-6xl font-black text-white mb-10 tracking-tighter leading-tight">
              أمان سيارتك <br /> <span className="text-brand-accent">يبدأ من هنا</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 md:gap-y-12">
              {FEATURES.map((feature, idx) => (
                <motion.div 
                  key={feature.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col gap-4 md:gap-5 p-5 md:p-6 rounded-3xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 group"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-primary/10 text-brand-primary rounded-2xl flex items-center justify-center group-hover:bg-brand-primary group-hover:text-slate-950 transition-all duration-500 shadow-well">
                    <feature.icon size={24} className="md:w-[28px] md:h-[28px]" />
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-black text-white mb-2 md:mb-3 group-hover:text-brand-accent transition-colors">{feature.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex-1 relative w-full max-w-2xl mx-auto lg:max-w-none">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="relative z-10"
            >
              <div className="relative rounded-[32px] md:rounded-[48px] overflow-hidden group shadow-[0_0_50px_rgba(20,184,166,0.15)] border-4 md:border-8 border-slate-900">
                <img 
                  src="https://i.postimg.cc/0N5rVQH6/Chat-GPT-Image-5-mayw-2026-08-20-54-m.png" 
                  alt="Technician at work" 
                  className="w-full transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating Stats Card - Hidden on mobile */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-10 -right-10 glass p-8 rounded-3xl border border-white/20 hidden xl:block shadow-2xl"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center text-slate-950 shadow-[0_0_20px_rgba(20,184,166,0.5)]">
                    <Settings size={32} className="animate-spin-slow" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white tracking-widest">صيانة فورية</div>
                    <div className="text-[10px] text-brand-accent font-black uppercase tracking-widest mt-1">تجهيز فائق السرعة</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
