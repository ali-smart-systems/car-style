"use client";

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-50 font-sans relative overflow-hidden text-right" dir="rtl">

      {/* 1. الأيقونات العائمة */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <Link href="https://wa.me/966553368215" target="_blank" className="bg-green-500 hover:bg-green-400 text-white p-4 rounded-full shadow-lg hover:scale-110 transition duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        </Link>
        <Link href="https://www.tiktok.com/@user1853168014566?_r=1&_t=ZS-95yMEdWkJAj" target="_blank" className="bg-black border border-gray-700 hover:bg-gray-800 text-white p-4 rounded-full shadow-lg hover:scale-110 transition duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
        </Link>
      </div>

      {/* 2. قسم الواجهة (Hero) - الصورة 1 */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[95vh] px-4">
        <div className="absolute inset-0 z-0">
          <img src="/images/1.webp" alt="Car Style" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/10 via-gray-900/60 to-gray-900"></div>
        </div>
        <div className="relative z-10 max-w-5xl mt-10">
          <h1 className="text-7xl md:text-[10rem] font-black mb-4 text-white drop-shadow-2xl italic tracking-tighter leading-none">CAR STYLE</h1>
          <p className="text-xl md:text-3xl mb-12 text-blue-400 font-bold tracking-[0.3em] uppercase">إبداع بلا حدود في عالم زينة السيارات</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="https://wa.me/966553368215" className="bg-blue-600 hover:bg-blue-500 text-white px-12 py-4 rounded-full font-bold text-lg shadow-xl hover:-translate-y-1 transition-all w-full sm:w-auto">حجز موعد</Link>
            <Link href="https://www.tiktok.com/@user1853168014566?_r=1&_t=ZS-95yMEdWkJAj" target="_blank" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all w-full sm:w-auto">أعمالنا</Link>
            <Link href="tel:+966553368215" className="bg-gray-100 hover:bg-white text-gray-900 px-12 py-4 rounded-full font-bold text-lg shadow-xl hover:-translate-y-1 transition-all w-full sm:w-auto">اتصل بنا</Link>
          </div>
        </div>
      </section>

      {/* 3. قسم الخدمات - الصور 2، 3، 4 */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { id: 2, title: "تلميع ساطع", desc: "نستخدم أجود المواد لتعود سيارتك بحالة الوكالة" },
            { id: 3, title: "عازل حراري", desc: "أفلام حماية أصلية لراحة تامة من حرارة الشمس" },
            { id: 4, title: "زينة وإكسسوارات", desc: "أحدث التقنيات والإضافات لرفع رفاهية سيارتك" }
          ].map((s) => (
            <div key={s.id} className="group bg-gray-800/40 backdrop-blur-sm rounded-[2rem] overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-500 shadow-2xl">
              <div className="h-64 overflow-hidden">
                <img src={`/images/${s.id}.webp`} alt={s.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
              </div>
              <div className="p-8 text-center text-white font-bold">
                <h3 className="text-2xl mb-3">{s.title}</h3>
                <p className="text-gray-400 font-normal">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. قسم الموقع وساعات العمل - الصورة 5 */}
      <footer className="relative py-24 px-4 overflow-hidden text-center z-10">
        <div className="absolute inset-0 z-0">
          <img src="/images/5.webp" alt="Our Location" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16 items-center">
            <div className="text-right md:pr-10 border-r-0 md:border-r-2 border-blue-600">
              <h4 className="text-blue-500 font-black mb-6 uppercase tracking-widest text-2xl italic">أوقات العمل</h4>
              <p className="text-gray-300 text-xl font-bold">السبت - الخميس: <span className="text-white">9:00 ص - 10:00 م</span></p>
              <p className="text-gray-300 text-xl font-bold">الجمعة: <span className="text-white">4:00 م - 10:00 م</span></p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h4 className="text-blue-500 font-black mb-6 uppercase tracking-widest text-2xl italic">موقعنا</h4>
              <Link href="https://maps.app.goo.gl/P8in8WgeqeKxc8Fu6" target="_blank" className="bg-white/10 border border-white/20 hover:bg-white/20 px-10 py-5 rounded-2xl text-white font-bold transition-all shadow-lg">
                فتح الموقع في الخرائط 📍
              </Link>
            </div>
          </div>
          {/* هنا التعديل الرسمي */}
          <div className="border-t border-gray-800 pt-8 mt-8 flex justify-between items-center text-gray-500 text-sm">
            <p>© 2026 كارستايل - جميع الحقوق محفوظة</p>
            <p>تطوير: علي صالح</p>
          </div>
        </div>
      </footer>

    </main>
  );
}
