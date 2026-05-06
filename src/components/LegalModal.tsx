import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms';
}

export default function LegalModal({ isOpen, onClose, type }: LegalModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const content = {
    privacy: {
      title: 'سياسة الخصوصية',
      sections: [
        {
          heading: 'جمع المعلومات',
          text: 'نقوم بجمع معلومات التواصل (مثل الاسم ورقم الهاتف) التي تقدمها لنا طواعية عند طلب الخدمة أو الاستفسار عبر واتساب.'
        },
        {
          heading: 'ملفات تعريف الارتباط (Cookies)',
          text: 'نستخدم أدوات تتبع من جوجل (Google Tag Manager) لتحليل حركة الزوار وتحسين تجربة المستخدم وأداء الإعلانات.'
        },
        {
          heading: 'استخدام البيانات',
          text: 'تستخدم البيانات فقط للتواصل معكم بخصوص خدمات المركز وتطوير جودة الصيانة المقدمة، ولا يتم مشاركتها مع أي أطراف ثالثة لأغراض تسويقية خارج إطار المركز.'
        }
      ]
    },
    terms: {
      title: 'الشروط والأحكام',
      sections: [
        {
          heading: 'طبيعة الخدمة',
          text: 'مركز مسار هو مركز صيانة مستقل متخصص في السيارات الصينية والعالمية. نحن لسنا وكلاء معتمدين لأي من الشركات المصنعة المذكورة (مثل شانجان، جيلي، هافال)، ولكننا نقدم خدمات صيانة بمواصفات عالية الجودة.'
        },
        {
          heading: 'الضمان',
          text: 'نقدم ضماناً على الأعمال الميكانيكية والسمكرة حسب طبيعة كل إصلاح، ويتم توضيح مدة الضمان في فاتورة الخدمة.'
        },
        {
          heading: 'العلامات التجارية',
          text: 'جميع شعارات الشركات المصنعة تستخدم فقط لتوضيح تخصص المركز وهي ملك لأصحابها.'
        }
      ]
    }
  };

  const activeContent = content[type];

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-6"
          dir="rtl"
        >
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-slate-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
          >
            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-slate-800/50">
              <h2 className="text-xl font-bold text-white">{activeContent.title}</h2>
              <button 
                onClick={onClose}
                className="text-slate-400 hover:text-white transition-colors p-2"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 md:p-8 overflow-y-auto space-y-8 scrollbar-thin scrollbar-thumb-white/10">
              {activeContent.sections.map((section, idx) => (
                <div key={idx} className="space-y-3">
                  <h3 className="text-brand-primary font-bold text-lg">{section.heading}</h3>
                  <p className="text-slate-300 leading-relaxed">{section.text}</p>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-white/5 bg-slate-800/50 flex justify-end">
              <button 
                onClick={onClose}
                className="px-6 py-2 bg-brand-primary text-slate-950 font-bold rounded-lg hover:bg-brand-accent transition-colors"
              >
                فهمت ذلك
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
