import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Ship, Package, Truck, Globe, Clock, Shield, Users, Award, CheckCircle, Star, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Blog from './components/Blog';
import './App.css';

// استيراد الصور
import heroImage from './assets/custom_image_1.png'
import customsIcon from './assets/custom_icon_1.png'
import shippingIcon from './assets/custom_icon_2.png'
import importExportIcon from './assets/custom_icon_3.png'
import companyLogo from './assets/company_logo.jpg'
import serviceBgCustoms from './assets/service_bg_customs.png'
import serviceBgShipping from './assets/service_bg_shipping.png'
import serviceBgImportExport from './assets/service_bg_import_export.png'
import visionIcon from './assets/vision_icon.png'
import valuesIcon from './assets/values_icon.png'
import goalsIcon from './assets/goals_icon.png'

function App() {
  const [activeService, setActiveService] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  // بيانات الفروع
  const branches = [
    'نيوم ( ضبا )',
    'الدرة',
    'البطحاء',
    'السلوي',
    'جسر الملك فهد',

  ]

  // بيانات الخدمات المحسنة
  const services = [

    {
      icon: customsIcon,
      title: 'التخليص الجمركي',
      description: 'نقدم خدمات تخليص جمركي احترافية وسريعة لجميع أنواع البضائع، مع فريق مخلص جمركي متخصص يضمن الامتثال الكامل للقوانين واللوائح الجمركية في السعودية ومصر والإمارات. نحن نوفر حلول جمركية متكاملة لضمان سلاسة استيراد وتصدير بضائعك، من خلال خبرتنا الواسعة في التعامل مع كافة الإجراءات الجمركية. نقدم استشارات متخصصة حول اسعار التخليص الجمركي، كيفية التخليص الجمركي للبضائع، وخطوات التخليص الجمركي في السعودية. نحن نعتبر افضل مكتب تخليص جمركي في الرياض، جدة، والدمام، ونعمل تحت اسم سليمان الحويطي للتخليص الجمركي، مكتب سليمان الحويطي، لتقديم أفضل الخدمات.',
      features: ["تخليص جمركي سريع", "مخلص جمركي متخصص", "استشارات جمركية", "حلول جمركية متكاملة", "دعم 24/7", "أسعار تنافسية"],
      color: 'from-cyan-400 to-blue-500',
      background: serviceBgCustoms
    },
    {
      icon: shippingIcon,
      title: 'الشحن البحري',
      description: 'نقدم حلول شحن بحري وجوي وبري متكاملة، مع تتبع مباشر وأسعار تنافسية لجميع الوجهات العالمية. نضمن نقل بضائعك بأمان وفعالية، ونوفر خدمات لوجستية شاملة لعمليات الشحن الدولي والترانزيت الدولي. نغطي تكلفة التخليص الجمركي للحاويات وشركات التخليص الجمركي المعتمدة في الموانئ، ونقدم حلول شحن مخصصة لتلبية احتياجات عملك، سواء كانت شحنات كبيرة أو صغيرة، مع الالتزام بالمواعيد النهائية.',
      features: ["شحن بحري", "شحن جوي", "شحن بري", "شحن دولي", "نقل بضائع", "تتبع مباشر", "لوجستيات"],
      color: 'from-blue-400 to-indigo-500',
      background: serviceBgShipping
    },
    {
      icon: importExportIcon,
      title: 'الاستيراد والتصدير',
      description: 'إدارة شاملة لعمليات الاستيراد والتصدير، مع استشارات متخصصة وحلول مخصصة لضمان سلاسة التجارة الدولية. نقدم دعمًا قانونيًا ولوجستيًا لجميع متطلبات الاستيراد والتصدير، بما في ذلك اجراءات التخليص الجمركي للاستيراد والتصدير والتخليص الجمركي للشحنات الجوية والبحرية. نحن نعمل كدليل مخلصين جمركيين معتمدين ونتعامل مع الجمارك السعودية، الجمارك المصرية، والهيئة العامة للجمارك، ونقدم معلومات حول رسوم الجمارك. نعمل كمخلص معتمد في تخليص جمركي جدة، مخلص جمركي الرياض، ومخلص جمركي ضبا، لضمان تجربة استيراد وتصدير خالية من المتاعب.',
      features: ["استيراد", "تصدير", "استيراد وتصدير بضائع", "استشارات استيراد وتصدير", "حلول استيراد وتصدير", "دعم قانوني"],
      color: 'from-indigo-400 to-purple-500',
      background: serviceBgImportExport
    }
  ]

  const whyUs = [
    {
      icon: Globe,
      title: 'خبرة عالمية',
      description: 'نمتلك سنوات طويلة من الخبرة المتراكمة في التعامل مع مختلف الشحنات واللوائح الجمركية الدولية والمحلية، مما يضمن لك خدمة احترافية وموثوقة.'
    },
    {
      icon: Clock,
      title: 'سرعة ودقة',
      description: 'نضمن إنجاز معاملاتك الجمركية واللوجستية بأقصى سرعة ودقة، مع الالتزام بالمواعيد النهائية، لتوفير وقتك وجهدك الثمين.'
    },
    {
      icon: Shield,
      title: 'أمان وموثوقية',
      description: 'نلتزم بأعلى معايير الأمان والموثوقية في جميع عملياتنا.'
    },
    {
      icon: Users,
      title: 'فريق متخصص',
      description: 'فريق من الخبراء والمتخصصين على أتم الاستعداد لخدمتك.'
    },
    {
      icon: Award,
      title: 'حلول مبتكرة',
      description: 'نقدم حلولاً مبتكرة ومخصصة لتلبية احتياجات عملك المتغيرة.'
    },
    {
      icon: CheckCircle,
      title: 'دعم متواصل',
      description: 'دعم فني واستشاري متواصل لضمان سير أعمالك بسلاسة.'
    },
    {
      icon: visionIcon,
      title: 'رؤيتنا في مؤسسة سليمان الحويطي',
      description: 'نؤمن أن التخليص الجمركي ليس مجرد إجراء روتيني، بل هو حلقة محورية في سلسلة التجارة الدولية، ولهذا نسعى لأن نكون أكثر من مجرد مكتب تخليص، بل شريكًا استراتيجيًا يساعد عملاءنا على النمو والتوسع بثقة داخل السوق المحلي والدولي.'
    },
    {
      icon: visionIcon,
      title: 'رؤيتنا الاستراتيجية',
      description: 'أن نكون الخيار الأول للشركات والأفراد الباحثين عن خدمات تخليص جمركي موثوقة وسريعة في المملكة. وأن نصبح العلامة التجارية الرائدة في مجال التخليص الجمركي والترانزيت، ليس فقط على مستوى السعودية، بل على مستوى المنطقة ككل. وأن نساهم في تسهيل حركة التجارة بين المملكة وبقية دول العالم عبر خدمات متكاملة تواكب التطورات العالمية في هذا القطاع.'
    },
    {
      icon: valuesIcon,
      title: 'قيمنا: المصداقية والشفافية',
      description: 'نوفر لعملائنا معلومات دقيقة عن الرسوم والتكاليف بدون أي مفاجآت.'
    },
    {
      icon: valuesIcon,
      title: 'قيمنا: الكفاءة والسرعة',
      description: 'نسعى دائمًا لتقليل زمن التخليص من خلال خبرتنا ومعرفتنا العميقة بإجراءات الجمارك.'
    },
    {
      icon: goalsIcon,
      title: 'أهدافنا: بناء الشراكات والتوسع',
      description: 'بناء شبكة قوية من الشراكات مع شركات الشحن والنقل العالمية لتوفير حلول متكاملة لعملائنا. وتوسيع خدماتنا لتشمل الاستشارات الجمركية ومتابعة التغييرات في القوانين واللوائح.'
    },
    {
      icon: goalsIcon,
      title: 'أهدافنا: الاستثمار في التكنولوجيا ودعم رؤية 2030',
      description: 'الاستثمار في التكنولوجيا الرقمية لتوفير خدمة تتسم بالسرعة والشفافية، مثل أنظمة التتبع الإلكتروني وإدارة المستندات أونلاين. وأن نكون ركيزة أساسية في دعم المستوردين والمصدرين السعوديين، بما يتماشى مع رؤية المملكة 2030 في تعزيز الاقتصاد وتنمية التجارة.'
    }
  ]

  // إحصائيات محسنة
  const stats = [
    { icon: Clock, title: 'سرعة في التنفيذ', value: '24/7', description: 'خدمة متواصلة' },
    { icon: Shield, title: 'أمان وموثوقية', value: '100%', description: 'ضمان الجودة' },    { icon: Users, title: 'فريق متخصص', value: '6', description: 'خبير محترف' },    { icon: Award, title: 'سنوات الخبرة', value: '15+', description: 'عام من التميز' }
  ]

  useEffect(() => {
    // تبديل الخدمات تلقائياً
    const serviceTimer = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length)
    }, 4000)

    return () => {
      clearInterval(serviceTimer)
    }
  }, [])

  // تأثير الكشف عند التمرير
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.scroll-reveal')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  // معالج النموذج
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = `مرحباً، أنا ${formData.name}%0A%0Aالبريد الإلكتروني: ${formData.email}%0Aرقم الهاتف: ${formData.phone}%0A%0Aالرسالة: ${formData.message}`
    const whatsappUrl = `https://wa.me/966551046758?text=${message}`
    window.open(whatsappUrl, '_blank')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* الهيدر */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md shadow-2xl py-5 border-b border-cyan-400/20">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-4 space-x-reverse">
            <img src={companyLogo} alt="مؤسسة سليمان الحويطي" className="h-12 w-auto rounded-full border-2 border-cyan-400/30 shadow-lg" />
            <div className="flex flex-col">
              <span className="text-base font-bold bg-gradient-to-r from-cyan-400 to-amber-400 bg-clip-text text-transparent leading-tight">
                مؤسسة سليمان الحويطي للتخليص الجمركي والترانزيت
              </span>
            </div>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-4 space-x-reverse">
              <li><a href="#home" onClick={(e) => {e.preventDefault(); document.getElementById('home').scrollIntoView({ behavior: 'smooth' });}} className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-semibold text-lg relative group">
                الرئيسية
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-amber-400 group-hover:w-full transition-all duration-300"></span>
              </a></li>
              <li><a href="#services" onClick={(e) => {e.preventDefault(); document.getElementById('services').scrollIntoView({ behavior: 'smooth' });}} className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-semibold text-lg relative group">
                خدماتنا
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-amber-400 group-hover:w-full transition-all duration-300"></span>
              </a></li>
              <li><a href="#branches" onClick={(e) => {e.preventDefault(); document.getElementById("branches").scrollIntoView({ behavior: "smooth" });}} className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-semibold text-lg relative group">
                فروعنا
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-amber-400 group-hover:w-full transition-all duration-300"></span>
              </a></li>
              <li><a href="#advantages" onClick={(e) => {e.preventDefault(); document.getElementById("advantages").scrollIntoView({ behavior: "smooth" });}} className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-semibold text-lg relative group">
                لماذا نحن؟
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-amber-400 group-hover:w-full transition-all duration-300"></span>
              </a></li>
              <li><a href="#contact" onClick={(e) => {e.preventDefault(); document.getElementById("contact").scrollIntoView({ behavior: "smooth" });}} className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-semibold text-lg relative group">
                تواصل معنا
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-amber-400 group-hover:w-full transition-all duration-300"></span>
              </a></li>
              <li className="mx-4"></li>
              <li><a href="#blog" onClick={(e) => {e.preventDefault(); document.getElementById("blog").scrollIntoView({ behavior: "smooth" });}} className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-semibold text-lg relative group">
                المدونة
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-amber-400 group-hover:w-full transition-all duration-300"></span>
              </a></li>
            </ul>
          </nav>
          
          {/* قائمة الهاتف المحمول */}
          <div className="md:hidden">
            <button className="text-cyan-400 hover:text-amber-400 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* الجسيمات المتحركة */}
      <div className="particles">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="particle"></div>
        ))}
      </div>

      {/* القسم الرئيسي المحسن */}
      <section id="home" className="min-h-screen hero-bg flex items-center justify-center relative scroll-mt-[70px]">
        <div className="geometric-pattern"></div>
        
        <div className="container mx-auto px-6 text-center z-10">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400/20 to-amber-400/20 border border-cyan-400/30 mb-6">
              <Star className="w-5 h-5 text-amber-400 mr-2" />
              <span className="text-cyan-400 font-semibold">الرائد في مجال التخليص الجمركي والترانزيت</span>
            </div>
          </motion.div>

          {/* اللوجو */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, delay: 0.2 }} >
            <img 
              src={companyLogo} 
              alt="مؤسسة سليمان الحويطي" 
              className="w-24 h-24 mx-auto rounded-full border-4 border-cyan-400/30 shadow-2xl shadow-cyan-400/20"
            />
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }} >
            <span className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-amber-400 bg-clip-text text-transparent">
              مؤسسة سليمان الحويطي للتخليص الجمركي والترانزيت
            </span>
          </motion.h1>
          
          <motion.p
            className="text-sm md:text-base mb-8 text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            خدمات احترافية متطورة للتخليص الجمركي، الشحن الدولي، والاستيراد والتصدير.
            <br />
            <span className="text-cyan-400 font-semibold">نحول التعقيدات الجمركية واللوجستية إلى حلول بسيطة وفعالة.</span>
          </motion.p>
          
          <motion.div
            className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <Button className="glow-button text-lg px-8 py-4 group" onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>
              ابدأ الآن
              <ArrowRight className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="text-lg px-8 py-4 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              onClick={() => document.getElementById("services").scrollIntoView({ behavior: "smooth" })}>
              تعرف على خدماتنا
            </Button>
          </motion.div>

          {/* مؤشرات الجودة */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 text-sm text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              <span>معتمد رسمياً</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              <span>ISO</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
              <span>أمان مضمون</span>
            </div>
          </motion.div>
        </div>
        
        {/* الصورة الرئيسية */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 opacity-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.2, y: 0 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <img src={heroImage} alt="ميناء مستقبلي" className="w-full h-64 object-cover" />
        </motion.div>
      </section>
      {/* تم تصحيح الخطأ في السطر 347 - محاولة أخيرة جداً */}
      <section id="about" className="py-20 scroll-mt-[70px] scroll-reveal">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-amber-400 bg-clip-text text-transparent">من نحن؟</h2>
          <div className="max-w-4xl mx-auto text-gray-300 leading-relaxed text-lg">
            <p className="mb-6">
              مؤسسة سليمان الحويطي للتخليص الجمركي والترانزيت هي شركة رائدة في تقديم حلول لوجستية متكاملة، تأسست على يد فريق من الخبراء المتخصصين في مجال التخليص الجمركي والشحن الدولي. نلتزم بتقديم خدمات عالية الجودة تتسم بالسرعة والدقة والموثوقية، لضمان سلاسة عمليات الاستيراد والتصدير لعملائنا في جميع أنحاء المملكة والمنطقة.
            </p>
            <p className="mb-6">
              نؤمن بأن التخليص الجمركي ليس مجرد إجراء روتيني، بل هو حلقة محورية في سلسلة التجارة الدولية، ولهذا نسعى لأن نكون أكثر من مجرد مكتب تخليص، بل شريكًا استراتيجيًا يساعد عملاءنا على النمو والتوسع بثقة داخل السوق المحلي والدولي. رؤيتنا هي أن نكون الخيار الأول للشركات والأفراد الباحثين عن خدمات تخليص جمركي موثوقة وسريعة.
            </p>
            <p>
              نقدم حلولاً مخصصة تلبي احتياجات كل عميل، مدعومة بأحدث التقنيات وفريق عمل ملتزم بتقديم أفضل مستويات الدعم والمشورة. هدفنا هو تبسيط الإجراءات الجمركية المعقدة وتحويلها إلى تجربة سلسة وفعالة، مما يوفر لعملائنا الوقت والجهد ويضمن وصول بضائعهم بأمان وفي الوقت المحدد.
            </p>
          </div>
        </div>
      </section>

      {/* قسم الخدمات المحسن */}
      <section id="services" className="py-20 scroll-mt-[70px] scroll-reveal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 scroll-reveal">
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-cyan-400 font-semibold">خدماتنا المتميزة</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-amber-400 bg-clip-text text-transparent">
              حلول شاملة للتخليص الجمركي
            </h2>
            <p className="text-base text-gray-300 max-w-3xl mx-auto">
              نقدم مجموعة متكاملة من الخدمات المتخصصة في التخليص الجمركي والشحن الدولي
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card text-center scroll-reveal group"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                custom={index}
              >
                <div className="relative mb-6">
                  <img 
                    src={service.icon} 
                    alt={service.title}
                    className="service-icon mx-auto"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {service.features.map((feature, idx) => (
                    <span key={idx} className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-sm border border-cyan-400/20">
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* الإحصائيات */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center scroll-reveal"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-white font-semibold mb-1">{stat.title}</div>
                <div className="text-gray-400 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* قسم الفروع */}
      <section id="branches" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative scroll-mt-[70px]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 scroll-reveal">
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/20 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-amber-400 font-semibold">فروعنا في المملكة</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-cyan-400 bg-clip-text text-transparent">
              نخدمكم في جميع المنافذ الرئيسية
            </h2>
            <p className="text-base text-gray-300 max-w-3xl mx-auto">
              نتواجد في أهم المنافذ الحدودية والجمركية لتقديم خدماتنا المتميزة
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {branches.map((branch, index) => (
              <motion.div
                key={index}
                className="bg-slate-700/50 rounded-lg p-6 border border-amber-400/20 scroll-reveal group hover:border-amber-400/50 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                custom={index}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-amber-400 to-cyan-400 rounded-full flex items-center justify-center group-hover:shadow-2xl group-hover:shadow-amber-400/50 transition-all duration-300">
                    <MapPin className="w-8 h-8 text-slate-900" />
                  </div>
                  <motion.div
                    className="absolute -inset-2 rounded-full border-2 border-amber-400/30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-amber-400 transition-colors text-center">
                  {branch}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* قسم المزايا المحسن */}
      <section id="advantages" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative scroll-mt-[70px]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 scroll-reveal">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-amber-400 bg-clip-text text-transparent">
                لماذا تختار مؤسسة سليمان الحويطي؟
              </h2>
              <p className="text-base text-gray-300">
                نحن نقدم أكثر من مجرد خدمات، نحن نقدم شراكة مبنية على الثقة والتميز.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {whyUs.map((advantage, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center p-6 bg-slate-700/50 rounded-lg shadow-lg border border-cyan-400/20 scroll-reveal"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {typeof advantage.icon === 'string' ? (
                    <img 
                      src={advantage.icon} 
                      alt={advantage.title}
                      className="w-16 h-16 text-cyan-400 mb-4"
                    />
                  ) : (
                    <advantage.icon className="w-16 h-16 text-cyan-400 mb-4" />
                  )}
                  <h3 className="text-xl font-bold text-white mb-3">{advantage.title}</h3>
                  <p className="text-sm text-gray-300">{advantage.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* قسم التواصل المحسن */}
      <section id="contact" className="py-20 bg-gradient-to-t from-slate-900 to-slate-800 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 scroll-reveal">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-amber-400 bg-clip-text text-transparent">
                تواصل معنا
              </h2>
              <p className="text-base text-gray-300">
                نحن هنا لمساعدتك في جميع احتياجاتك للتخليص الجمركي والشحن
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* معلومات التواصل المحسنة */}
              <div className="scroll-reveal">
                <h3 className="text-2xl font-bold mb-8 text-cyan-400">معلومات التواصل</h3>
                <div className="space-y-6">
                  {[
                    { icon: MapPin, title: 'المملكة العربية السعودية -تبوك-ضبا', info: 'المقر الرئيسي', color: 'bg-cyan-400' },
                    { icon: Phone, title: 'Sulaiman Al-Huwaiti', info: '+966559586786', color: 'bg-red-400', link: 'tel:+966559586786' },
                    { icon: Phone, title: 'Ibrahim Gomaa', info: '+966509457627', color: 'bg-green-400', link: 'tel:+966509457627' },
                    { icon: Phone, title: 'Ahmed Ali', info: '+966551046758', color: 'bg-blue-400', link: 'tel:+966551046758' },
                    { icon: Phone, title: 'Alaa Gad', info: '+966553992052', color: 'bg-purple-400', link: 'tel:+966553992052' },
                    { icon: Mail, title: 'البريد الإلكتروني', info: 'alebawani.k.s.a@hotmail.com', color: 'bg-amber-400', link: 'mailto:alebawani.k.s.a@hotmail.com' }
                  ].map((contact, index) => (
                    <a href={contact.link} key={index} className="flex items-center space-x-4 space-x-reverse p-4 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-all duration-300">
                      <div className={`w-14 h-14 ${contact.color} rounded-full flex items-center justify-center`}>
                        <contact.icon className="w-7 h-7 text-slate-900" />
                      </div>
                      <div>
                        <p className="font-semibold text-white text-lg">{contact.title}</p>
                        <p className="text-sm text-gray-300">{contact.info}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              
              {/* نموذج التواصل المحسن */}
              <div className="scroll-reveal">
                <h3 className="text-2xl font-bold mb-8 text-cyan-400">أرسل رسالة</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="الاسم الكامل" 
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400 transition-colors"
                      required
                    />
                    <Input 
                      name="email"
                      type="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="البريد الإلكتروني" 
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400 transition-colors"
                      required
                    />
                  </div>
                  <Input 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="رقم الهاتف" 
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400 transition-colors"
                    required
                  />
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="رسالتك" 
                    rows={5}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400 transition-colors resize-none"
                    required
                  />
                  <Button 
                    type="submit"
                    className="glow-button w-full group"
                  >
                    إرسال عبر الواتساب
                    <ArrowRight className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Blog />
      {/* الفوتر المحسن */}
      <footer className="bg-slate-900 py-16 border-t border-slate-700">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-amber-400 bg-clip-text text-transparent">
                مؤسسة سليمان الحويطي
              </h3>
              <p className="text-lg font-semibold text-gray-300 mb-4">
                للتخليص الجمركي والترانزيت
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                نحن شركة رائدة في مجال التخليص الجمركي والشحن الدولي، نقدم خدمات متميزة وحلول مبتكرة لعملائنا في جميع أنحاء المملكة.
              </p>

            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6 text-cyan-400">خدماتنا</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">التخليص الجمركي</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">الشحن البحري</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">الاستيراد والتصدير</li>
                <li className="hover:text-cyan-400 transition-colors cursor-pointer">الاستشارات الجمركية</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6 text-cyan-400">فروعنا</h4>
              <ul className="space-y-3 text-gray-400">
                {branches.map((branch, index) => (
                  <li key={index} className="hover:text-cyan-400 transition-colors cursor-pointer text-sm">
                    {branch}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 مؤسسة سليمان الحويطي للتخليص الجمركي والترانزيت. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

