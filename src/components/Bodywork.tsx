import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronRight, ChevronLeft, ChevronDown } from 'lucide-react';
import { BODYWORK_SAMPLES } from '../constants';

const Bodywork = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="bodywork" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-primary font-black tracking-[0.4em] uppercase text-xs mb-4 block"
          >
            الجودة في المظهر
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
            السمكرة والدهان الحديث
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            نستخدم أحدث تقنيات سحب الصدمات البارد وأفران الدهان الحرارية لضمان عودة سيارتك لحالتها الأصلية بألوان مطابقة تماماً لمواصفات المصنع.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BODYWORK_SAMPLES.map((sample, idx) => (
            <motion.div 
              key={sample.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-white/5 rounded-[40px] overflow-hidden border border-white/10"
            >
              <div className="flex flex-col sm:flex-row">
                {/* Before */}
                <div className="relative flex-1 group/item">
                  <img 
                    src={sample.before} 
                    alt="Before Repair" 
                    className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 right-6 bg-red-500/90 backdrop-blur-md text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">قبل</div>
                  <button 
                    onClick={() => setSelectedImage(sample.before)}
                    className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover/item:opacity-100 transition-opacity flex items-center justify-center text-white"
                  >
                    <Maximize2 size={32} />
                  </button>
                </div>
                
                {/* Arrow in middle */}
                <div className="bg-brand-primary flex items-center justify-center p-4 sm:flex-col gap-2 z-10 shadow-2xl">
                    <ChevronRight size={20} className="text-slate-950 hidden sm:block font-black" />
                    <ChevronDown size={20} className="text-slate-950 sm:hidden font-black" />
                </div>

                {/* After */}
                <div className="relative flex-1 group/item">
                  <img 
                    src={sample.after} 
                    alt="After Repair" 
                    className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 bg-brand-primary/90 backdrop-blur-md text-slate-950 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">بعد</div>
                  <button 
                    onClick={() => setSelectedImage(sample.after)}
                    className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover/item:opacity-100 transition-opacity flex items-center justify-center text-white"
                  >
                    <Maximize2 size={32} />
                  </button>
                </div>
              </div>

              <div className="p-8 bg-slate-900/50 backdrop-blur-md border-t border-white/5 flex items-center justify-between">
                <h3 className="text-xl font-black text-white uppercase tracking-tight">{sample.title}</h3>
                <span className="text-brand-accent font-black text-[10px] uppercase tracking-widest flex items-center gap-1">
                  شاهد تفاصيل العمل <ChevronLeft size={16} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage} 
              className="max-w-full max-h-full rounded-2xl shadow-well shadow-white/5 object-contain"
              referrerPolicy="no-referrer"
            />
            <button 
              className="absolute top-8 right-8 text-white bg-white/20 p-3 rounded-full hover:bg-white/40 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Bodywork;
