import React from 'react';
import { Mail, MapPin, Phone, MessageCircle, Instagram, Facebook, Twitter } from 'lucide-react';
import { CONTACT_INFO, NAV_LINKS } from '../constants';

const Footer = () => {
  return (
    <footer id="contact" className="bg-brand-dark border-t border-white/5 text-white pt-20 pb-10 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center text-slate-950 font-black text-xl">M</div>
              <span className="text-2xl font-black tracking-tighter">مســـار <span className="text-brand-accent font-light italic">MASAR</span></span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed font-medium">
              شريكك الموثوق في صيانة السيارات بالرياض. نجمع بين الخبرة الطويلة والتقنيات الحديثة لضمان أفضل أداء لسيارتك.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white/5 hover:bg-brand-primary hover:text-slate-950 transition-all rounded-xl flex items-center justify-center border border-white/5">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary mb-8">روابط سريعة</h4>
            <ul className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-slate-400 hover:text-brand-accent transition-colors flex items-center gap-2 group text-sm font-bold">
                    <span className="w-0 h-0.5 bg-brand-accent transition-all group-hover:w-3"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary mb-8">تواصل معنا</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                <div className="mt-1 text-brand-accent"><MapPin size={18} /></div>
                <div>
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">موقعنا</div>
                  <div className="text-sm text-slate-200 mt-1">{CONTACT_INFO.address}</div>
                </div>
              </li>
              <li className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                <div className="mt-1 text-brand-accent"><Phone size={18} /></div>
                <div>
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">رقم الهاتف</div>
                  <div className="text-sm text-slate-200 mt-1">{CONTACT_INFO.phone}</div>
                </div>
              </li>
              <li className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                <div className="mt-1 text-brand-accent"><Mail size={18} /></div>
                <div>
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">البريد الإلكتروني</div>
                  <div className="text-sm text-slate-200 mt-1">{CONTACT_INFO.email}</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary mb-8">ساعات العمل</h4>
            <ul className="flex flex-col gap-4 mb-8">
              <li className="flex justify-between text-sm bg-white/5 p-3 rounded-xl border border-white/5">
                <span className="text-slate-400">السبت - الخميس</span>
                <span className="font-black text-white">8:00 ص - 10:00 م</span>
              </li>
              <li className="flex justify-between text-sm bg-white/5 p-3 rounded-xl border border-white/5 group">
                <span className="text-slate-400">الجمعة</span>
                <span className="font-black text-red-400 animate-pulse">مغلق</span>
              </li>
            </ul>
            <div className="bg-brand-primary/10 p-5 rounded-2xl border border-brand-primary/20 shadow-well">
              <div className="text-[10px] text-brand-accent mb-2 uppercase font-black tracking-widest">لحالات الطوارئ</div>
              <a href={`tel:${CONTACT_INFO.phone}`} className="text-white font-black text-2xl flex items-center gap-3">
                <div className="p-2 bg-brand-primary rounded-lg text-slate-950">
                  <Phone size={18} />
                </div>
                {CONTACT_INFO.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-2 text-center md:text-right">
            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">
              © {new Date().getFullYear()} شركة مسار لصيانة السيارات. جميع الحقوق محفوظة.
            </p>
            <p className="text-slate-600 text-[9px] max-w-xl leading-relaxed">
              تنويه: مركز مسار هو مركز صيانة مستقل متخصص. جميع الشعارات والماركات التجارية المذكورة (مثل شانجان، جيلي، هافال، وغيرها) هي ملك لأصحابها وتستخدم هنا فقط لتوضيح تخصص المركز في صيانة هذه الفئات.
            </p>
          </div>
          <div className="flex gap-6 text-slate-500 text-[10px] font-bold uppercase tracking-widest shrink-0">
            <a href="#" className="hover:text-brand-accent transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-white transition-colors">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
