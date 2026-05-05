import { 
  Wrench, 
  Settings, 
  Battery, 
  Wind, 
  Zap, 
  Droplets, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Users 
} from 'lucide-react';

export const CONTACT_INFO = {
  phone: '0508833046',
  whatsapp: '966508833046',
  address: 'الرياض، صناعية أم الحمام، ورشة رقم 24',
  email: 'info@masar-sa.com',
};

export const NAV_LINKS = [
  { name: 'الماركات', href: '#brands' },
  { name: 'الخدمات', href: '#services' },
  { name: 'لماذا نحن؟', href: '#why-us' },
  { name: 'السمكرة', href: '#bodywork' },
  { name: 'اتصل بنا', href: '#contact' },
];

export const BRANDS = [
  { name: 'شانجان', logo: 'https://1000logos.net/wp-content/uploads/2023/03/Changan-Symbol-768x432.png' },
  { name: 'جيلي', logo: 'https://1000logos.net/wp-content/uploads/2020/04/Geely-Logo-2014-768x483.png' },
  { name: 'هافال', logo: 'https://www.carlogos.org/logo/Haval-logo.png' },
  { name: 'إم جي', logo: 'https://www.carlogos.org/logo/MG-logo.png' },
  { name: 'بايك', logo: 'https://www.carlogos.org/logo/BAIC-Motor-logo.png' },
  { name: 'جيتور', logo: 'https://1000logos.net/wp-content/uploads/2023/12/Jetour-Logo-768x432.jpg' },
];

export const SERVICES = [
  {
    id: 'engines',
    title: 'المحركات والجيربوكس',
    description: 'تخصص كامل في صيانة وتوضيب جميع أنواع المحركات وناقل الحركة الأوتوماتيكي والمانيوال. استخدام قطع غيار أصلية وضمان شامل على العمل لضمان أداء مثالي لسيارتك.',
    icon: Settings,
    color: 'bg-blue-500',
    image: 'https://i.postimg.cc/P5QPbZKh/Chat-GPT-Image-5-mayw-2026-08-24-35-m.png',
  },
  {
    id: 'electrical',
    title: 'الكهرباء والبرمجة',
    description: 'فحص شامل لجميع الدوائر الكهربائية وبرمجة العقول (ECU) وتحديث أنظمة السيارة. تشخيص دقيق للأعطال باستخدام أحدث أجهزة الفحص المتوافقة مع السيارات الصينية والحديثة.',
    icon: Zap,
    color: 'bg-yellow-500',
    image: 'https://i.postimg.cc/NjcKrb6C/Chat-GPT-Image-5-mayw-2026-08-26-11-m.png',
  },
  {
    id: 'ac',
    title: 'التكييف والتبريد',
    description: 'صيانة احترافية لنظام التبريد، تنظيف دورات الهواء، شحن فريون عالي الجودة، وفحص شامل للكمبروسر والرديتر لضمان برودة مثالية في أقسى ظروف الصيف.',
    icon: Wind,
    color: 'bg-cyan-500',
    image: 'https://i.postimg.cc/0yszJZYW/Chat-GPT-Image-5-mayw-2026-08-27-23-m.png',
  },
  {
    id: 'suspension',
    title: 'العفشة والمساعدات',
    description: 'فحص وصيانة كاملة لنظام التعليق، المساعدات، والمقصات. ضبط زوايا العجلات وصيانة نظام الفرامل لضمان أقصى درجات الراحة والثبات على الطريق.',
    icon: Wrench,
    color: 'bg-teal-500',
    image: 'https://i.postimg.cc/7Zk5TX3B/Chat-GPT-Image-5-mayw-2026-08-28-29-m.png',
  },
  {
    id: 'fluids',
    title: 'تغيير الزيوت والسوائل',
    description: 'تغيير زيوت المحرك والجيربوكس بمواصفات المصنع العالمية. تشحيم وتغيير سوائل التبريد والفرامل لضمان طول عمر مكونات الميكانيكا ومنع التآكل.',
    icon: Droplets,
    color: 'bg-red-500',
  },
  {
    id: 'battery',
    title: 'البطاريات والأنظمة',
    description: 'فحص كفاءة البطارية ودينامو الشحن. تبديل ببطاريات معتمدة ذات جودة عالية وتوفير ضمان حقيقي لضمان تشغيل سيارتك في كل الأوقات.',
    icon: Battery,
    color: 'bg-green-500',
    image: 'https://i.postimg.cc/7Zk5TX3V/Chat-GPT-Image-5-mayw-2026-08-29-38-m.png',
  },
];

export const FEATURES = [
  {
    title: 'خبرة متخصصة',
    description: 'فريق عمل مدرب خصيصاً على صيانة السيارات الصينية بمختلف ماركاتها.',
    icon: ShieldCheck,
  },
  {
    title: 'سرعة الإنجاز',
    description: 'نلتزم بمواعيد التسليم مع الحفاظ على أعلى معايير الجودة في العمل.',
    icon: Clock,
  },
  {
    title: 'قطع غيار أصلية',
    description: 'نوفر قطع الغيار الأصلية من الوكلاء المعتمدين لضمان ديمومة سيارتك.',
    icon: CheckCircle2,
  },
  {
    title: 'فريق احترافي',
    description: 'فنيون بخبرات سنوات طويلة في ميكانيكا وكهرباء السيارات العالمية.',
    icon: Users,
  },
];

export const BODYWORK_SAMPLES = [
  {
    id: 1,
    before: 'https://i.postimg.cc/RC3Fq2HR/Chat-GPT-Image-5-mayw-2026-08-50-13-m.png',
    after: 'https://i.postimg.cc/59H0jDCq/Chat-GPT-Image-5-mayw-2026-08-50-21-m.png',
    title: 'إصلاح صدمة جانبية',
  },
  {
    id: 2,
    before: 'https://i.postimg.cc/WpD3txk8/Chat-GPT-Image-5-mayw-2026-08-54-18-m.png',
    after: 'https://i.postimg.cc/1Rgt4bqr/Chat-GPT-Image-5-mayw-2026-08-53-29-m.png',
    title: 'رش وتجميل كامل',
  },
];
