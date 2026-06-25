// src/components/Biogerafi.tsx
import Network from "./Network";
import face from "../assets/images/faceme.jpg";

const Biogerafi = () => {
  return (
    <section className="group bg-white/80 pl-20 rounded-3xl shadow-sm hover:shadow-xl border border-gray-100/80 overflow-hidden transition-all duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
        <div className="lg:col-span-3 p-6 md:p-8 lg:p-10 space-y-5">
          <div className="space-y-1">
            <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              سلام، من <span className="bg-gradient-to-l from-blue-600 to-indigo-600 bg-clip-text text-transparent">سید محمد موسوی</span> هستم
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-gray-600">
              توسعه‌دهنده فرانت‌اند
            </h2>
          </div>
          <div className="prose prose-sm md:prose-base max-w-none text-gray-600 leading-relaxed space-y-4">
            <p className="text-justify">
              حدود یک ساله که وارد دنیای وب شدم و روی یادگیری و توسعه‌ی فرانت‌اند تمرکز دارم.
              در حال حاضر با <span className="font-semibold text-blue-600">React</span> کار می‌کنم و در مسیر یادگیری معماری‌های اصولی فرانت‌اند مثل
              <span className="font-medium text-gray-800 mx-1">Component-Based Architecture</span>
              و
              <span className="font-medium text-gray-800 mx-1">Clean Architecture for Front-end</span>
              هستم تا پروژه‌هایی استاندارد، مقیاس‌پذیر و قابل نگهداری بسازم.
            </p>
            <p className="text-justify">
              در این مسیر بر روی مجموعه‌ای از پروژه‌ها و تمرین‌های آموزشی کار کرده‌ام؛ از توسعه کامپوننت‌های کاربردی
              و طراحی رابط‌های واکنش‌گرا با React، تا پیاده‌سازی فرم‌ها، مدیریت وضعیت و برقراری ارتباط با APIها.
              همواره تلاش کرده‌ام علاوه بر نگارش کد استاندارد، بر بهبود تجربه کاربری، ساختاردهی اصولی پروژه
              و افزایش کارایی تمرکز داشته باشم.
            </p>
          </div>

          {/* بخش شبکه‌های اجتماعی */}
          <div className="pt-5 border-t border-gray-200/60">
            <Network />
          </div>
        </div>

        {/* ===== بخش تصویر پروفایل ===== */}
        <div className="lg:col-span-2 h-64 lg:h-auto relative overflow-hidden">
          {/* افکت گرادینت روی تصویر (اختیاری) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10 lg:bg-gradient-to-l lg:from-black/5 lg:to-transparent" />
          
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src={face}
            alt="سید محمد موسوی - توسعه‌دهنده فرانت‌اند"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Biogerafi;