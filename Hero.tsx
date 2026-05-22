const jobs = [
  {
    role: "Senior Frontend Developer",
    company: "TANGENS",
    period: "2023 — настоящее время",
    desc: "Развиваю интерфейсы внутренней BI-платформы. Внедрил дизайн-систему, ускорил основной дашборд на 40%.",
  },
  {
    role: "Frontend Developer",
    company: "MONO",
    period: "2021 — 2023",
    desc: "Работал над веб-кабинетом инвестиций: новые финансовые продукты, A/B-эксперименты, перевод модулей на TypeScript.",
  },
  {
    role: "UI Developer",
    company: "Студия «Точка-НАЛИВАЙКА»",
    period: "2019 — 2021",
    desc: "Делал лендинги и небольшие SaaS-проекты для клиентов из e-commerce и образования. Принимал участие в дизайне.",
  },
  {
    role: "Freelance",
    company: "Различные клиентки",
    period: "2018 — 2019",
    desc: "Первый коммерческий опыт: верстка по макетам, WordPress-темы, простые SPA на Vue.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <span className="text-sm text-[#c8ff00] font-medium tracking-widest uppercase">
              04 — Опыт
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mt-4 leading-tight">
              Путь в продукте
            </h2>
            <p className="mt-4 text-white/60">
              От верстальщици до сеньор-разработчика. Учусь у каждой команды, в которой работаю.
            </p>
          </div>

          <div className="lg:col-span-8">
            <ol className="relative border-l border-white/10 space-y-10 pl-8">
              {jobs.map((j, i) => (
                <li key={j.role} className="relative">
                  <span className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-ink-950 border-2 border-[#c8ff00] grid place-items-center" style={{ backgroundColor: "#0a0a0f" }}>
                    {i === 0 && <span className="w-1.5 h-1.5 rounded-full bg-[#c8ff00] animate-pulse" />}
                  </span>
                  <div className="text-xs text-white/40 uppercase tracking-widest">
                    {j.period}
                  </div>
                  <h3 className="font-display text-xl font-semibold mt-1">
                    {j.role} <span className="text-[#c8ff00]">@ {j.company}</span>
                  </h3>
                  <p className="text-white/60 mt-2 leading-relaxed">{j.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
