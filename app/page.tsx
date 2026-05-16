"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const whatsappLink =
    "https://api.whatsapp.com/send?phone=966553368215";

  const tiktokLink =
    "https://www.tiktok.com/@user1853168014566?_r=1&_t=ZS-95yMEdWkJAj";

  const phoneLink = "tel:+966553368215";

  const googleMapsLink =
    "https://maps.app.goo.gl/mWdPnqfxNkcpfa2t6";

  // 🔗 رابط إضافة التقييم المباشر
  const googleReviewLink = 
    "https://g.page/r/Cd_j_pTnHdnuEBI/review";

  // 🔗 رابط حراج النظيف
  const harajLink =
    "https://haraj.com.sa/users/طلاء_السيارات_الرياض_الغرابي/rate";

  // اكتشاف المتصفح الداخلي
  const [isInAppBrowser, setIsInAppBrowser] = useState(false);

  useEffect(() => {
    const ua =
      navigator.userAgent ||
      navigator.vendor ||
      (window as any).opera;

    const isApp =
      /(TikTok|Bytedance|Instagram|FBAN|FBAV|Snapchat|Twitter)/i.test(
        ua
      );

    if (isApp) {
      setIsInAppBrowser(true);
    }
  }, []);

  return (
    <main
      className="min-h-screen bg-gray-900 text-gray-50 font-sans relative overflow-hidden text-right"
      dir="rtl"
    >
      {/* 🛑 الشريط الذكي */}
      {isInAppBrowser && (
        <div className="bg-red-600/95 backdrop-blur-md text-white text-center py-3 px-4 text-sm md:text-base font-bold sticky top-0 z-[100] shadow-2xl border-b-2 border-red-400 flex flex-col items-center justify-center animate-pulse">
          <span className="text-lg">⚠️ تنبيه هام لعملائنا</span>

          <span className="font-normal text-xs md:text-sm mt-1">
            لتعمل أزرار (الواتساب والاتصال)، يرجى الضغط على{" "}
            <strong className="bg-white/20 px-1 rounded">
              الثلاث نقاط ⠇
            </strong>{" "}
            بالأعلى واختيار{" "}
            <strong className="bg-white/20 px-1 rounded">
              فتح في المتصفح
            </strong>
          </span>
        </div>
      )}

      {/* الأزرار العائمة */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        {/* الخرائط */}
        <a
          href={googleMapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-500 hover:bg-red-400 text-white p-4 rounded-full shadow-lg hover:scale-110 transition duration-300 flex items-center justify-center"
          title="موقعنا على الخريطة"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        </a>

        {/* الاتصال */}
        <a
          href={phoneLink}
          className="bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition duration-300 flex items-center justify-center"
          title="اتصل بنا"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </a>

        {/* واتساب */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-400 text-white p-4 rounded-full shadow-lg hover:scale-110 transition duration-300 flex items-center justify-center"
          title="واتساب"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </a>

        {/* زر حراج العائم النصي المعتمد */}
        <a
          href={harajLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0066CC] hover:bg-[#0052a3] text-white w-14 h-14 rounded-full shadow-lg hover:scale-110 transition duration-300 flex items-center justify-center border border-white/10 font-black text-sm"
          title="حراج"
        >
          حراج
        </a>

        {/* تيك توك */}
        <a
          href={tiktokLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black border border-gray-700 hover:bg-gray-800 text-white p-4 rounded-full shadow-lg hover:scale-110 transition duration-300 flex items-center justify-center"
          title="تيك توك"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
          </svg>
        </a>
      </div>

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[95vh] px-4">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/1.webp"
            alt="كارستايل لرش وزينة السيارات في الرياض"
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-black/65"></div>
        </div>

        <div className="relative z-10 max-w-5xl mt-10">
          <h1 className="text-7xl md:text-[10rem] font-black mb-4 text-transparent bg-clip-text bg-gradient-to-t from-blue-500 to-white drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] italic tracking-tighter leading-none text-center uppercase">
            CAR STYLE
          </h1>

          <p className="text-xl md:text-3xl mb-12 text-gray-200 font-bold tracking-[0.3em] uppercase text-center bg-black/30 py-2 px-6 rounded-full inline-block backdrop-blur-sm">
            إبداع بلا حدود في عالم رش وزينة السيارات
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 text-white px-12 py-4 rounded-full font-bold text-lg shadow-xl hover:-translate-y-1 transition-all w-full sm:w-auto text-center"
            >
              حجز موعد
            </a>

            <a
              href={tiktokLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all w-full sm:w-auto text-center"
            >
              أعمالنا
            </a>

            <a
              href={phoneLink}
              className="bg-gray-100 hover:bg-white text-gray-900 px-12 py-4 rounded-full font-bold text-lg shadow-xl hover:-translate-y-1 transition-all w-full sm:w-auto text-center"
            >
              اتصل بنا
            </a>
          </div>
        </div>
      </section>

      {/* الخدمات */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold mb-16 text-center text-white italic">
          أعمالنا وخدماتنا
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { id: 2, title: "تلميع ساطع", desc: "نستخدم أجود المواد لتعود سيارتك بحالة الوكالة" },
            { id: 3, title: "عازل حراري", desc: "أفلام حماية أصلية لراحة تامة من حرارة الشمس" },
            { id: 4, title: "رش بوية بالفرن", desc: "رش كامل أو جزئي بأجود أنواع الدهانات العالمية" },
            { id: 5, title: "نانو سيراميك", desc: "حماية فائقة للمعان يدوم طويلاً" },
            { id: 6, title: "رش جنوط", desc: "ألوان جذابة ومقاومة للخدوش وعوامل الطريق" },
            { id: 7, title: "تنجيد مقاعد", desc: "تفصيل وتنجيد بأجود أنواع الجلود الفاخرة" },
            { id: 8, title: "سمكرة وتعديل صدمات", desc: "إصلاح الصدمات والبودي بأحدث التقنيات الاحترافية" },
            { id: 9, title: "إضاءات محيطية (ليد)", desc: "تركيب إضاءات زينة داخلية متناسقة وجذابة" },
            { id: 10, title: "تلميع داخلي عميق", desc: "تنظيف وتعقيم كامل لمقصورة السيارة والمقاعد" },
            { id: 11, title: "تلميع خارجي وإزالة خدوش", desc: "إزالة الدوائر والخدوش السطحية وإعادة اللمعان المذهل" },
            { id: 12, title: "حماية الواجهة (PPF)", desc: "أفلام حماية شفافة لحماية مقدمة السيارة من السافي" },
            { id: 13, title: "تجليد وتغيير لون", desc: "تغيير لون السيارة بالكامل بأفلام مطفية ولامعة مميزة" },
            { id: 14, title: "تلميع وتجديد شمعات", desc: "إعادة إضاءة المصابيح الباهتة وإزالة الاصفرار كالجديدة" },
            { id: 15, title: "تلبيس أرضيات", desc: "حماية الأرضيات بجلد دايموند الفاخر المقاوم للسوائل" },
            { id: 16, title: "معالجة بهتان البوية", desc: "إعادة إحياء دهان السيارة القديم وتجديد رونقه" },
            { id: 17, title: "تعديل بدون دهان (PDR)", desc: "شفط وتعديل الطقات البسيطة بدون الحاجة للرش" },
            { id: 18, title: "رش مطفي مؤقت", desc: "تغيير مظهر السيارة برش قابل للإزالة لحماية الطلاء الأصلي" },
            { id: 19, title: "تظليل زجاج عازل", desc: "نسب عزل حراري عالية ومطابقة لأنظمة المرور" },
            { id: 20, title: "عناية وباقات متكاملة", desc: "باقات غسيل وتلميع وحماية متكاملة بأسعار تنافسية" },
          ].map((s) => (
            <div
              key={s.id}
              className="group bg-gray-800/40 backdrop-blur-sm rounded-[2rem] overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-500 shadow-2xl"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={`/images/${s.id}.webp`}
                  alt={`${s.title} في الرياض - كارستايل`}
                  className="w-full h-full object-cover opacity-100 brightness-110 contrast-105 group-hover:scale-110 transition-all duration-700"
                />
              </div>

              <div className="p-8 text-center text-white font-bold">
                <h3 className="text-2xl mb-3">{s.title}</h3>
                <p className="text-gray-400 font-normal">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* معرض الفيديوهات المحصن */}
      <section className="py-24 bg-black/40 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center md:text-right text-blue-500 italic">
            إبداعاتنا بالفيديو
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((v) => (
              <div
                key={v}
                className="relative h-[500px] bg-gray-800 rounded-3xl overflow-hidden border border-gray-700 group"
              >
                <video
                  className="w-full h-full object-cover opacity-100 brightness-110 contrast-105 transition-opacity"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={`/videos/v${v}.mp4`} type="video/mp4" />
                  <source src={`/videos/v${v}.webm`} type="video/webm" />
                  متصفحك لا يدعم تشغيل الفيديو.
                </video>

                <div className="absolute bottom-6 right-6 text-right z-10">
                  <p className="text-white font-bold text-lg shadow-black drop-shadow-md">
                    لمسة إبداع {v}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* تقييمات العملاء */}
      <section className="py-24 px-4 bg-gray-950 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            تقييمات عملائنا ⭐
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "دهانات ديكورات ترميم", text: "شغل ممتاز" },
              { name: "علي أبو ماجد", text: "ماشاءالله" },
            ].map((review, i) => (
              <div
                key={i}
                className="bg-gray-800/70 border border-gray-700 rounded-3xl p-8 shadow-2xl hover:border-blue-500 transition-all"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white font-bold text-xl">{review.name}</h3>
                  <span className="text-green-400 text-sm">تقييم موثق من خرائط قوقل</span>
                </div>

                <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-300 text-lg leading-8">{review.text}</p>
              </div>
            ))}
          </div>

          {/* 🔘 أزرار التفاعل المحدثة */}
          <div className="text-center mt-14 flex flex-wrap justify-center items-center gap-6">
            <a
              href={googleReviewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:-translate-y-1 transition-all w-full sm:w-auto text-center"
            >
              اضغط هنا لتقييمنا على قوقل ⭐
            </a>

            <a
              href={googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all w-full sm:w-auto text-center"
            >
              مشاهدة جميع التقييمات
            </a>
          </div>
        </div>
      </section>

      {/* الفوتر */}
      <footer className="relative py-24 px-4 overflow-hidden text-center z-10 border-t border-gray-800">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/5.webp"
            alt="موقع كارستايل في الرياض"
            className="w-full h-full object-cover opacity-40 brightness-110"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16 items-center">
            <div className="text-right md:pr-10 border-r-0 md:border-r-2 border-blue-600">
              <h4 className="text-blue-500 font-black mb-6 uppercase tracking-widest text-2xl italic">
                أوقات العمل
              </h4>

              <p className="text-gray-300 text-xl font-bold">
                السبت - الخميس: <span className="text-white"> 9:00 ص - 11:00 م</span>
              </p>

              <p className="text-gray-300 text-xl font-bold">
                الجمعة: <span className="text-white"> 2:00 م - 11:00 م</span>
              </p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <h4 className="text-blue-500 font-black mb-6 uppercase tracking-widest text-2xl italic">
                موقعنا
              </h4>

              <a
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 border border-white/20 hover:bg-white/20 px-10 py-5 rounded-2xl text-white font-bold transition-all shadow-lg"
              >
                فتح الموقع في الخرائط 📍
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-8 flex justify-between items-center text-gray-500 text-sm">
            <p>© 2026 كارستايل - جميع الحقوق محفوظة</p>
            <p>تطوير: علي صالح</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
