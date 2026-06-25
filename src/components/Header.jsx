// src/components/Header.tsx
import Logo from "../assets/images/logo.svg";

const Header = () => {
  const navLinks = [
    { name: "خانه", href: "#" },
    { name: "مهارت‌ها", href: "#skills" },
    { name: "پروژه‌ها", href: "#projects" },
    { name: "تماس", href: "#contact" },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-sm border border-gray-100/80 p-4 transition-all duration-300">
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* لوگو و نام برند */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md">
            <img src={Logo} alt="Logo" className="w-8 h-8 filter brightness-0 invert" />
          </div>
          <div className="hidden sm:block">
            <h2 className="text-lg font-extrabold text-gray-900 leading-tight">
              SeniorCode.ir
            </h2>
            <p className="text-xs font-medium text-blue-600">سینیـورکــد</p>
          </div>
        </div>

        {/* منوی ناوبری */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-200 group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* ایمیل و دکمه موبایل */}
        <div className="flex items-center gap-4">
          <a
            href="mailto:mohammad.mosavi20033@gmail.com"
            className="hidden sm:block text-sm text-gray-600 hover:text-blue-600 transition-colors font-medium"
          >
            mohammad.mosavi20033@gmail.com
          </a>
          <button className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;