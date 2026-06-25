// src/components/SectionTwo.tsx
const skills = [
  { name: "HTML", level: 90, color: "bg-blue-500" },
  { name: "CSS", level: 85, color: "bg-purple-500" },
  { name: "Tailwind", level: 70, color: "bg-orange-500" },
  { name: "Responsive Design", level: 70, color: "bg-purple-600" },
  { name: "API / Fetch", level: 75, color: "bg-fuchsia-500" },
  { name: "Git", level: 60, color: "bg-gray-500" },
  { name: "Clean Code", level: 65, color: "bg-red-500" },
  { name: "React Hooks", level: 70, color: "bg-orange-400" },
  { name: "GitHub", level: 60, color: "bg-blue-800" },
];

const SectionTwo = () => {
  return (
    <section id="skills" className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-sm border border-gray-100/80 p-6 md:p-8 transition-all duration-300">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">مهارت‌های من</h2>
        <p className="text-gray-500 text-sm mt-1">تکنولوژی‌ها و ابزارهایی که در آن‌ها تخصص دارم</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-white/50 rounded-xl p-4 border border-gray-100/80 hover:border-gray-200 hover:shadow-md transition-all duration-300 group"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-gray-800">{skill.name}</h3>
              <span className="text-sm font-medium text-gray-500">{skill.level}%</span>
            </div>
            <div className="w-full h-2 bg-gray-200/80 rounded-full overflow-hidden">
              <div
                className={`h-full ${skill.color} rounded-full transition-all duration-1000 group-hover:scale-x-100`}
                style={{ width: `${skill.level}%` }}
              />
            </div>
            <p className="text-xs text-gray-400 mt-1.5">
              {skill.level >= 80 ? "پیشرفته" : skill.level >= 60 ? "متوسط" : "مبتدی"}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionTwo;