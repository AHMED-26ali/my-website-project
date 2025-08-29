import React from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  const articleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative scroll-mt-[70px]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-cyan-400 font-semibold">مدونتنا</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-amber-400 bg-clip-text text-transparent">
            كل ما تحتاج معرفته عن التخليص الجمركي
          </h2>
          <p className="text-base text-gray-300 max-w-3xl mx-auto">
            مقالات متخصصة وإرشادات قيمة لمساعدتك في فهم عالم الجمارك والشحن.
          </p>
        </div>

        <div className="space-y-12">
          <motion.div
            className="bg-slate-700/50 p-8 rounded-lg shadow-xl border border-slate-600 hover:border-cyan-400 transition-all duration-300"
            variants={articleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">ما هو التخليص الجمركي ؟</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              التخليص الجمركي هو العملية التي يتم من خلالها الإفراج عن البضائع المستوردة أو المصدرة بعد استيفاء جميع الشروط القانونية وسداد الرسوم الجمركية والضرائب المستحقة. الهدف منه هو ضمان دخول وخروج البضائع بشكل نظامي يتوافق مع القوانين.
            </p>
          </motion.div>

          <motion.div
            className="bg-slate-700/50 p-8 rounded-lg shadow-xl border border-slate-600 hover:border-cyan-400 transition-all duration-300"
            variants={articleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">خطوات التخليص الجمركي:</h3>
            <ul className="list-disc list-inside text-gray-300 mb-4 leading-relaxed">
              <li>تقديم المستندات الرسمية مثل الفاتورة التجارية وبوليصة الشحن.</li>
              <li>تسجيل البيانات لدى مصلحة الجمارك.</li>
              <li>سداد الرسوم الجمركية والضرائب.</li>
              <li>فحص البضائع والتأكد من مطابقتها للمواصفات.</li>
              <li>الإفراج عن الشحنة وتسليمها للعميل.</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-slate-700/50 p-8 rounded-lg shadow-xl border border-slate-600 hover:border-cyan-400 transition-all duration-300"
            variants={articleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">دور المخلص الجمركي:</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              المخلص الجمركي هو الوسيط بين المستورد/المصدر ومصلحة الجمارك، ويقوم بإنهاء كافة الإجراءات بسرعة وكفاءة، مما يوفر وقت العميل ويجنبه الأخطاء.
            </p>
          </motion.div>

          <motion.div
            className="bg-slate-700/50 p-8 rounded-lg shadow-xl border border-slate-600 hover:border-cyan-400 transition-all duration-300"
            variants={articleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">تكلفة التخليص الجمركي:</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              تختلف تكلفة التخليص الجمركي حسب عدة عوامل، أهمها:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 leading-relaxed">
              <li>نوع البضاعة (مواد غذائية، إلكترونيات، سيارات…).</li>
              <li>قيمة الشحنة.</li>
              <li>نوع الشحن (جوي – بحري – بري).</li>
              <li>الميناء المستخدم في الدخول أو الخروج.</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-slate-700/50 p-8 rounded-lg shadow-xl border border-slate-600 hover:border-cyan-400 transition-all duration-300"
            variants={articleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">نصائح لتقليل التكاليف:</h3>
            <ul className="list-disc list-inside text-gray-300 mb-4 leading-relaxed">
              <li>تجهيز المستندات بشكل صحيح لتجنب الغرامات.</li>
              <li>التعاون مع مكتب تخليص جمركي موثوق لتسريع الإجراءات.</li>
              <li>متابعة تحديثات الجمارك بخصوص الرسوم.</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-slate-700/50 p-8 rounded-lg shadow-xl border border-slate-600 hover:border-cyan-400 transition-all duration-300"
            variants={articleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">أهمية المستندات الصحيحة:</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              أي نقص أو خطأ في المستندات قد يؤدي إلى تأخير التخليص وزيادة التكاليف. لذلك، الاستعانة بمخلص جمركي يساعد على ضمان تجهيز كل الأوراق بشكل صحيح.
            </p>
          </motion.div>

          <motion.div
            className="bg-slate-700/50 p-8 rounded-lg shadow-xl border border-slate-600 hover:border-cyan-400 transition-all duration-300"
            variants={articleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">ما الفرق بين التخليص الجمركي الجوي والبحري؟</h3>
            <h4 className="text-xl font-bold mb-2 text-cyan-400">التخليص الجمركي الجوي:</h4>
            <ul className="list-disc list-inside text-gray-300 mb-4 leading-relaxed">
              <li>أسرع بكثير من البحري.</li>
              <li>مناسب للشحنات الخفيفة والعاجلة.</li>
              <li>تكلفته عادةً أعلى بسبب رسوم النقل والشحن الجوي.</li>
            </ul>

            <h4 className="text-xl font-bold mb-2 text-cyan-400">التخليص الجمركي البحري:</h4>
            <ul className="list-disc list-inside text-gray-300 mb-4 leading-relaxed">
              <li>مناسب للشحنات الكبيرة والحاويات.</li>
              <li>تكلفته أقل مقارنة بالشحن الجوي.</li>
              <li>يستغرق وقتًا أطول (عدة أيام إلى أسابيع).</li>
            </ul>

            <h4 className="text-xl font-bold mb-2 text-cyan-400">الاختيار بينهما:</h4>
            <p className="text-gray-300 mb-4 leading-relaxed">
              يعتمد على حجم البضاعة، قيمة الشحنة، ودرجة الاستعجال في الاستلام.
            </p>
          </motion.div>

          <motion.div
            className="bg-slate-700/50 p-8 rounded-lg shadow-xl border border-slate-600 hover:border-cyan-400 transition-all duration-300"
            variants={articleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">كيف تختار أفضل مكتب تخليص جمركي موثوق؟</h3>
            <h4 className="text-xl font-bold mb-2 text-cyan-400">معايير اختيار مكتب التخليص الجمركي:</h4>
            <ul className="list-disc list-inside text-gray-300 mb-4 leading-relaxed">
              <li>الاعتماد الرسمي من هيئة الجمارك.</li>
              <li>الخبرة العملية في أنواع متعددة من البضائع.</li>
              <li>السرعة في إنجاز المعاملات وتجنب التأخير.</li>
              <li>خدمة العملاء والمتابعة المستمرة للشحنة.</li>
            </ul>

            <h4 className="text-xl font-bold mb-2 text-cyan-400">نصائح:</h4>
            <ul className="list-disc list-inside text-gray-300 mb-4 leading-relaxed">
              <li>تأكد من وجود مكتب فعلي وسجل تجاري.</li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-slate-700/50 p-8 rounded-lg shadow-xl border border-slate-600 hover:border-cyan-400 transition-all duration-300"
            variants={articleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">كم تستغرق عملية التخليص الجمركي عادة؟</h3>
            <h4 className="text-xl font-bold mb-2 text-cyan-400">مدة التخليص الجمركي:</h4>
            <p className="text-gray-300 mb-4 leading-relaxed">
              مدة التخليص الجمركي تختلف حسب نوع البضائع، المستندات، والميناء. لكن بشكل عام:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 leading-relaxed">
              <li>التخليص الجمركي للشحنات الجوية: من يوم إلى 3 أيام.</li>
              <li>التخليص الجمركي للشحنات البحرية: من 3 إلى 7 أيام.</li>
              <li>الشحنات المعقدة أو ذات المستندات الناقصة: قد تستغرق أسابيع.</li>
            </ul>

            <h4 className="text-xl font-bold mb-2 text-cyan-400">العوامل المؤثرة في سرعة التخليص:</h4>
            <ul className="list-disc list-inside text-gray-300 mb-4 leading-relaxed">
              <li>اكتمال المستندات المطلوبة.</li>
              <li>نوع البضاعة (بعض السلع تحتاج موافقات إضافية).</li>
              <li>الضغط على الموانئ والمطارات.</li>
              <li>سرعة الاستجابة من المستورد أو المصدر.</li>
            </ul>

            <h4 className="text-xl font-bold mb-2 text-cyan-400">كيف يسرّع المخلص الجمركي العملية؟</h4>
            <ul className="list-disc list-inside text-gray-300 mb-4 leading-relaxed">
              <li>تجهيز كل الأوراق بشكل صحيح.</li>
              <li>التواصل المباشر مع موظفي الجمارك.</li>
              <li>متابعة الشحنة أولاً بأول حتى الإفراج عنها.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
