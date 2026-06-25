// src/components/Network.tsx
import logotelegram from "../assets/images/telegramLogo.svg";
import instagram from "../assets/images/instagram.svg";
import git from "../assets/images/github.svg";

const socialLinks = [
  { name: "گیت‌هاب", username: "mohammadmosavi1382", icon: git, url: "https://github.com/mohammadmosavi1382" },
  { name: "اینستاگرام", username: "mohmad.mosavi_", icon: instagram, url: "https://instagram.com/mohmad.mosavi_" },
  { name: "تلگرام", username: "mohmd-mosaviii", icon: logotelegram, url: "https://t.me/mohmd-mosaviii" },
];

const Network = () => {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-bold text-gray-700">شبکه‌های اجتماعی:</h3>
      <div className="flex flex-wrap gap-3">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100/80 hover:bg-gray-200/80 text-sm font-medium text-gray-700 hover:text-gray-900 transition-all duration-200 hover:shadow-sm"
          >
            <img className="w-5 h-5" src={social.icon} alt={social.name} />
            {social.username}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Network;