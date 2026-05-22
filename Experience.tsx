export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <span className="text-sm text-[#c8ff00] font-medium tracking-widest uppercase">
              01 — Обо мне
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mt-4 leading-tight">
              Дизайн с инженерным <span className="text-gradient">мышлением</span>
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-6 text-lg text-white/70 leading-relaxed">
            <p>
              Я занимаюсь веб-разработкой с 2019 года. Начинал как
              верстальщик, вырос до полноценного фронтенд-инженера и
              продуктового дизайнера. Мне интересно всё, что находится на
              стыке кода и пользовательского опыта.
            </p>
            <p>
              Работаю с продуктовыми командами: разбираюсь в задаче,
              предлагаю решение, проектирую интерфейс в Figma и довожу его
              до прод-кода. Особенно люблю проекты, где важны скорость,
              доступность и микро-взаимодействия.
            </p>
            <p>
              Помимо коммерческих проектов веду пару опенсорс-библиотек,
              иногда пишу статьи о фронтенде и провожу митапы для junior-разработчиков.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-8">
              {[
                { icon: "⚡", title: "Производительность", desc: "Lighthouse 95+ на боевых проектах" },
                { icon: "🎨", title: "Дизайн-системы", desc: "Строю масштабируемые UI-киты" },
                { icon: "♿", title: "Доступность", desc: "WCAG 2.1 AA по умолчанию" },
                { icon: "🚀", title: "DX", desc: "Удобный код для команды" },
              ].map((c) => (
                <div key={c.title} className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 hover:bg-white/[0.05] transition-colors">
                  <div className="text-2xl mb-2">{c.icon}</div>
                  <div className="font-semibold text-white">{c.title}</div>
                  <div className="text-sm text-white/60 mt-1">{c.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
