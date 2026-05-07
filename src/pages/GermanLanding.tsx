import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Settings, ChevronDown, CheckCircle2, ShieldCheck, Zap, Gauge, Wind, Wrench, Droplets, Battery } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingActions from '../components/FloatingActions';
import { CONTACT_INFO } from '../constants';

const GERMAN_BRANDS = [
  { name: 'MERCEDES-BENZ', image: 'https://1000logos.net/wp-content/uploads/2018/04/Mercedes-Logo-1989-720x432.jpg' },
  { name: 'BMW', image: 'https://1000logos.net/wp-content/uploads/2018/02/BMW-Logo-1997-500x281.png' },
  { name: 'AUDI', image: 'https://1000logos.net/wp-content/uploads/2018/05/Audi-Logo-2009-720x442.jpg' },
  { name: 'PORSCHE', image: 'https://1000logos.net/wp-content/uploads/2018/02/Porsche-Logo-2014-768x432.png' },
  { name: 'VOLKSWAGEN', image: 'https://1000logos.net/wp-content/uploads/2019/12/Volkswagen-Logo-2012-720x449.jpg' }
];

const GERMAN_SERVICES = [
  {
    title: 'المحركات والجيربوكس',
    desc: 'صيانة وتوضيب محركات BMW, Mercedes, Porsche باستخدام قطع أصلية ومعايير المصنع الألماني العالية.',
    icon: <Settings className="text-red-500" size={32} />,
    image: 'https://i.postimg.cc/P5QPbZKh/Chat-GPT-Image-5-mayw-2026-08-24-35-m.png'
  },
  {
    title: 'الكهرباء والبرمجة',
    desc: 'برمجة متقدمة لسيارات VAG و BMW و Mercedes وتشخيص دقيق باستخدام أحدث الأنظمة الأصلية.',
    icon: <Zap className="text-amber-500" size={32} />,
    image: 'https://i.postimg.cc/NjcKrb6C/Chat-GPT-Image-5-mayw-2026-08-26-11-m.png'
  },
  {
    title: 'التكييف والتبريد',
    desc: 'صيانة أنظمة التكييف المتقدمة للسيارات الألمانية وضمان ضغط الفريون المثالي وكفاءة الكمبروسر.',
    icon: <Wind className="text-red-500" size={32} />,
    image: 'https://i.postimg.cc/0yszJZYW/Chat-GPT-Image-5-mayw-2026-08-27-23-m.png'
  },
  {
    title: 'العفشة والمساعدات',
    desc: 'صيانة المساعدات الهيدروليكية وأنظمة التعليق الذكية لسيارات الرفاهية الألمانية لضمان ثبات تام.',
    icon: <Wrench className="text-amber-500" size={32} />,
    image: 'https://i.postimg.cc/7Zk5TX3B/Chat-GPT-Image-5-mayw-2026-08-28-29-m.png'
  },
  {
    title: 'تغيير الزيوت والسوائل',
    desc: 'تغيير زيوت وفلاتر بمواصفات الشركات الألمانية (LL-01, MB 229.5) لضمان عمر أطول للمحرك.',
    icon: <Droplets className="text-red-500" size={32} />,
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'البطاريات والأنظمة',
    desc: 'تغيير وبرمجة بطاريات AGM الأصلية لضمان عمل أنظمة الاستهلاك الذكي في السيارات الألمانية.',
    icon: <Battery className="text-amber-500" size={32} />,
    image: 'https://i.postimg.cc/7Zk5TX3V/Chat-GPT-Image-5-mayw-2026-08-29-38-m.png'
  }
];

export default function GermanLanding() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen font-sans relative overflow-hidden bg-slate-950 text-white selection:bg-red-500/30">
      {/* Background Atmosphere - German Flag inspired glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(220,38,38,0.15),transparent_50%)] pointer-events-none z-0"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>

      <Navbar />

      <main className="relative z-10">
        {/* German Hero */}
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2070" 
              alt="German Engine Tuning" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="container mx-auto px-4 relative z-10 text-center md:text-right">
            <div className="max-w-4xl mx-auto md:mr-0">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 text-red-100 px-4 py-1.5 rounded-full uppercase tracking-widest mb-8">
                  <ShieldCheck size={16} />
                  <span className="text-[11px] font-bold">قسم هندسة السيارات الألمانية</span>
                </div>
                
                <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-[1.1] tracking-tighter" dir="rtl">
                  هندسة الدقة <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-l from-red-600 via-amber-500 to-yellow-400">للسيارات الألمانية</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed max-w-2xl font-medium" dir="rtl">
                  مركز متخصص ومزود بأحدث أجهزة التشخيص الأصلية لسيارات BMW و Mercedes و Audi. نحن ندرك تماماً تعقيد التكنولوجيا الألمانية ونتعامل معها باحترافية مطلقة.
                </p>

                <div className="flex flex-col sm:flex-row gap-5 mb-16" dir="rtl">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                    className="bg-red-600 text-white px-10 py-5 rounded-2xl font-black flex items-center justify-center gap-3 shadow-[0_10px_40px_rgba(220,38,38,0.3)] text-lg hover:bg-red-500 transition-all"
                  >
                    <MessageCircle size={24} />
                    احجز موعد صيانة الآن
                  </motion.a>
                  
                  <motion.a
                    href="#german-services"
                    className="bg-white/10 border border-white/10 text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 text-lg hover:bg-white/20 transition-all"
                  >
                    اكتشف تخصصاتنا
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60"
          >
            <ChevronDown size={40} />
          </motion.div>
        </section>

        {/* German Brands */}
        <section className="py-20 bg-slate-900 border-y border-white/5">
          <div className="container mx-auto px-4">
            <p className="text-center text-slate-500 font-bold uppercase tracking-[0.4em] mb-12 text-xs">نحن خبراء في</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
                {GERMAN_BRANDS.map(brand => (
                  <div key={brand.name} className="h-12 md:h-16 flex items-center justify-center transition-all duration-500 scale-100 hover:scale-110">
                    <img 
                      src={brand.image} 
                      alt={brand.name} 
                      className="h-full w-auto object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* German Services */}
        <section id="german-services" className="py-32 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black mb-6" dir="rtl">مركز متخصص في الصيانة الألمانية</h2>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto" dir="rtl">نقدم حلولاً صيانة شاملة للسيارات الأوروبية باستخدام أحدث التقنيات وقطع الغيار المعتمدة.</p>
              <div className="h-1.5 w-24 bg-red-600 mx-auto rounded-full mt-8"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" dir="rtl">
              {GERMAN_SERVICES.map((s, i) => (
                <div key={i} className="group bg-slate-900 border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-red-500/50 transition-all duration-500 shadow-2xl">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={s.image} 
                      alt={s.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-6 right-6">
                       <div className="p-3 bg-red-600 rounded-2xl text-white shadow-lg">
                         {s.icon}
                       </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-black mb-4 group-hover:text-amber-500 transition-colors">{s.title}</h3>
                    <p className="text-slate-300 leading-relaxed font-medium text-lg">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison/Why German Section */}
        <section className="py-32 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div dir="rtl">
                <span className="text-amber-500 font-bold uppercase tracking-widest mb-4 block">لماذا تختار قسم الألماني في مسار؟</span>
                <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight">دقة متناهية في التشخيص وإصلاح الأعقد للأعطال</h2>
                
                <div className="space-y-6">
                  {[
                    'مهندسون مدربون على أنظمة الشركات الألمانية الكبرى.',
                    'توفر أجهزة ISTA (لـ BMW) و XENTRY (لـ Mercedes) الأصلية.',
                    'فحص كمبيوتر شامل لجميع الأنظمة الإلكترونية والذكية.',
                    'ضمان حقيقي يصل إلى سنة على الإصلاحات الرئيسية.'
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="p-2 bg-red-600 rounded-lg text-white">
                        <CheckCircle2 size={20} />
                      </div>
                      <span className="text-lg text-slate-300 font-bold group-hover:text-white transition-colors">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                 <img 
                  src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1000" 
                  className="relative rounded-3xl border border-white/10 shadow-2xl transition-all duration-700" 
                  alt="German Performance Car"
                  referrerPolicy="no-referrer"
                 />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
