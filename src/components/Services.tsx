import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn } from 'lucide-react';
import { SERVICES } from '../constants';

const Services = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Quick Links Navigation Inside Section */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {SERVICES.map((service) => (
            <a 
              key={service.id}
              href={`#service-${service.id}`}
              className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black text-slate-400 hover:bg-brand-primary/20 hover:text-brand-accent hover:border-brand-primary/30 transition-all shadow-sm flex items-center gap-2 uppercase tracking-widest"
            >
              <service.icon size={16} />
              {service.title}
            </a>
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-primary font-black tracking-[0.4em] uppercase text-xs mb-4 block"
          >
            بصمة الإتقان
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
            حلول الصيانة الشاملة
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            نحن نوفر حلولاً هندسية دقيقة لكل عطل، مع التزام تام باستخدام القطع الأصلية والتقنيات التي توصي بها الشركات المصنعة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => (
            <motion.div 
              key={service.id}
              id={`service-${service.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white/5 p-10 rounded-[32px] hover:bg-white/10 transition-all duration-500 border border-white/10 relative overflow-hidden"
            >
              <div className="relative z-10 flex flex-col h-full">
                {service.image && (
                  <div 
                    className="mb-8 rounded-2xl overflow-hidden border border-white/10 aspect-video relative cursor-zoom-in group/img"
                    onClick={() => setSelectedImage(service.image || null)}
                  >
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                      <ZoomIn className="text-white" size={32} />
                    </div>
                  </div>
                )}

                <div className="w-14 h-14 bg-brand-primary/20 rounded-2xl flex items-center justify-center text-brand-primary mb-8 group-hover:bg-brand-primary group-hover:text-slate-950 transition-all duration-500">
                  <service.icon size={28} />
                </div>
                
                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-brand-accent transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed flex-1">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 pointer-events-auto"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-brand-dark/95 backdrop-blur-xl"
              onClick={() => setSelectedImage(null)}
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl z-10"
            >
              <img 
                src={selectedImage} 
                alt="Selected Service" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 left-6 p-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl backdrop-blur-md transition-all border border-white/10"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
