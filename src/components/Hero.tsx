import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { MessageCircle, Settings, ChevronDown, Car } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.postimg.cc/ZqY0wRDW/Chat-GPT-Image-5-mayw-2026-08-22-34-m.png" 
          alt="Luxury Car Workshop" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-t from-brand-dark via-brand-dark/80 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-64 bg-linear-to-t from-brand-dark to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="inline-flex items-center gap-2 bg-brand-primary/20 backdrop-blur-sm border border-brand-primary/30 text-brand-accent px-3 py-1 rounded uppercase tracking-[0.2em]">
                <Settings size={14} className="animate-spin-slow" />
                <span className="text-[10px] font-black">مركز صيانة معتمد</span>
              </div>
              
              <Link 
                to="/german-cars"
                className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 text-blue-400 px-3 py-1 rounded uppercase tracking-[0.1em] hover:bg-blue-500/40 transition-colors"
                dir="rtl"
              >
                <Car size={14} />
                <span className="text-[10px] font-black">قسم السيارات الألمانية</span>
              </Link>
            </div>
            
            <h1 className="text-4xl md:text-8xl font-black text-white mb-6 leading-[1.05] tracking-tighter" dir="rtl">
              الاحترافية في صيانة <br />
              <span className="text-transparent bg-clip-text bg-linear-to-l from-brand-accent to-emerald-200">السيارات الصينية</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl font-medium" dir="rtl">
              حلول تقنية متطورة لضمان أداء سيارتك. نستخدم أحدث أجهزة الفحص العالمية لسيارات شانجان، جيلي، هافال، وجميع الماركات العالمية.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-16" dir="rtl">
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  if (typeof window.gtag_report_conversion === 'function') {
                    window.gtag_report_conversion();
                  }
                }}
                className="bg-brand-primary text-slate-950 px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(20,184,166,0.3)] text-base md:text-lg hover:bg-brand-accent transition-all"
              >
                <MessageCircle size={24} />
                تواصل واتساب الآن
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#services"
                className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black flex items-center justify-center gap-3 text-base md:text-lg hover:bg-white/10 transition-all"
              >
                استعرض خدماتنا
              </motion.a>
            </div>

            {/* Brand Grid Quick View */}
            <div className="max-w-md">
              <p className="text-[10px] text-slate-500 uppercase font-black tracking-[0.3em] mb-5 border-b border-white/5 pb-2">الماركات المتخصصة</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {['CHANGAN', 'GEELY', 'HAVAL', 'MG'].map(brand => (
                  <div key={brand} className="h-10 bg-white/5 rounded-lg flex items-center justify-center font-black text-[10px] border border-white/5 tracking-tighter">
                    {brand}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/10">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">+5000</div>
              <div className="text-gray-400 text-sm">عميل سعيد</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">15+</div>
              <div className="text-gray-400 text-sm">عام من الخبرة</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">100%</div>
              <div className="text-gray-400 text-sm">ضمان الجودة</div>
            </div>
          </div>
        </div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 hidden md:block"
      >
        <ChevronDown size={40} />
      </motion.div>
    </section>
  );
};

export default Hero;
