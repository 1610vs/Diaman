const groups = [
  {
    title: "Frontend",
    items: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind / CSS", level: 95 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    title: "Backend & Tools",
    items: [
      { name: "Node.js / Express", level: 80 },
      { name: "GraphQL / REST", level: 85 },
      { name: "PostgreSQL", level: 70 },
      { name: "Docker / CI", level: 65 },
    ],
  },
  {
    title: "Design",
    items: [
      { name: "Figma", level: 90 },
      { name: "Дизайн-системы", level: 85 },
      { name: "Прототипирование", level: 80 },
      { name: "Моушн", level: 70 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <span className="text-sm text-[#c8ff00] font-medium tracking-widest uppercase">
            02 — Навыки
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mt-4 leading-tight">
            Стек, который я люблю
          </h2>
          <p className="mt-4 text-white/60 text-lg">
            Глубоко погружаюсь в инструменты, чтобы выбирать правильные для каждой задачи.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {groups.map((g) => (
            <div
              key={g.title}
              className="bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 rounded-3xl p-8 hover:border-[#c8ff00]/30 transition-colors"
            >
              <h3 className="font-display text-xl font-semibold mb-6">{g.title}</h3>
              <ul className="space-y-5">
                {g.items.map((it) => (
                  <li key={it.name}>
                    <div className="flex items-center justify-between mb-2 text-sm">
                      <span className="text-white/80">{it.name}</span>
                      <span className="text-white/40">{it.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#7c5cff] to-[#c8ff00] transition-all duration-1000"
                        style={{ width: `${it.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
