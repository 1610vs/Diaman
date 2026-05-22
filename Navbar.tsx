export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
    >
      {/* Фоновая сетка */}
      <div className="absolute inset-0 grid-bg opacity-60" />
      {/* Цветные кляксы */}
      <div
        className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full blur-3xl opacity-30 animate-blob"
        style={{ background: "radial-gradient(circle, #7c5cff 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-[520px] h-[520px] rounded-full blur-3xl opacity-25 animate-blob"
        style={{ background: "radial-gradient(circle, #c8ff00 0%, transparent 70%)", animationDelay: "4s" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center w-full">
        <div className="lg:col-span-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#c8ff00] animate-pulse" />
            <span className="text-xs text-white/70">Открыт к новым проектам</span>
          </div>

          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
            Привет, я <span className="text-gradient">Алексей</span>.
            <br />
            Создаю интерфейсы,
            <br />
            которые{" "}
            <span className="relative inline-block">
              <span className="relative z-10">работают</span>
              <span className="absolute left-0 right-0 bottom-1 h-3 bg-[#c8ff00]/30 -z-0" />
            </span>
            .
          </h1>

          <p className="mt-8 text-lg text-white/60 max-w-xl leading-relaxed">
            Frontend-разработчик и UI-дизайнер с 6+ годами опыта. Помогаю
            стартапам и продуктовым командам превращать идеи в быстрые,
            красивые и удобные веб-приложения.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-[#c8ff00] hover:bg-[#d6ff3d] text-black font-medium px-6 py-3 rounded-full transition-colors"
            >
              Смотреть работы →
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 hover:bg-white/5 px-6 py-3 rounded-full transition-colors"
            >
              Написать мне
            </a>
          </div>

          <div className="mt-14 flex items-center gap-8 text-sm">
            <div>
              <div className="font-display text-3xl font-bold text-white">60+</div>
              <div className="text-white/50">проектов</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <div className="font-display text-3xl font-bold text-white">6</div>
              <div className="text-white/50">лет опыта</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <div className="font-display text-3xl font-bold text-white">25+</div>
              <div className="text-white/50">клиентов</div>
            </div>
          </div>
        </div>

        {/* Карточка-визитка */}
        <div className="lg:col-span-5 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-br from-[#7c5cff] to-[#c8ff00] rounded-3xl blur-2xl opacity-30" />
            <div className="relative bg-gradient-to-br from-white/10 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#7c5cff]/40 to-[#c8ff00]/30 grid place-items-center mb-6 overflow-hidden relative">
                <div className="absolute inset-0 grid-bg opacity-50" />
                <span className="relative font-display text-8xl font-bold text-white/90">
                  AI
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/50">Локация</span>
                  <span className="text-white">Москва, RU</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/50">Стек</span>
                  <span className="text-white">React · TS · Node</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/50">Доступность</span>
                  <span className="text-[#c8ff00]">● Свободен</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/50">Формат</span>
                  <span className="text-white">Удалённо · Контракт</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
