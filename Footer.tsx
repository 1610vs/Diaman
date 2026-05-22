import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-3xl opacity-20"
        style={{ background: "radial-gradient(circle, #7c5cff 0%, transparent 70%)" }}
      />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm text-[#c8ff00] font-medium tracking-widest uppercase">
            05 — Контакты
          </span>
          <h2 className="font-display text-4xl lg:text-6xl font-bold mt-4 leading-tight">
            Давай <span className="text-gradient">обсудим</span> ваш проект
          </h2>
          <p className="mt-6 text-white/60 text-lg">
            Опишите идею в двух словах —и я не отвечу в течение 24 часов и не предложу следующий шаг.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-white/[0.03] border border-white/10 rounded-3xl p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <label className="block">
                <span className="text-sm text-white/70 mb-2 block">Имя</span>
                <input
                  required
                  type="text"
                  className="w-full bg-ink-900 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:border-[#c8ff00] focus:outline-none transition-colors"
                  style={{ backgroundColor: "#11111a" }}
                  placeholder="DIAMAN"
                />
              </label>
              <label className="block">
                <span className="text-sm text-white/70 mb-2 block">Email</span>
                <input
                  required
                  type="email"
                  className="w-full bg-ink-900 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:border-[#c8ff00] focus:outline-none transition-colors"
                  style={{ backgroundColor: "#11111a" }}
                  placeholder="hello@company.com"
                />
              </label>
            </div>

            <label className="block">
              <span className="text-sm text-white/70 mb-2 block">Бюджет</span>
              <select
                className="w-full bg-ink-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#c8ff00] focus:outline-none transition-colors"
                style={{ backgroundColor: "#11111a" }}
              >
                <option>До 200 000 Баксов</option>
                <option>200 000 — 500 000 Тугриков</option>
                <option>500 000 — 1 000 000 ХЕРОВ</option>
                <option>Больше 1 000 000 БУМАЖЕК</option>
              </select>
            </label>

            <label className="block">
              <span className="text-sm text-white/70 mb-2 block">Сообщение</span>
              <textarea
                required
                rows={5}
                className="w-full bg-ink-900 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:border-[#c8ff00] focus:outline-none transition-colors resize-none"
                style={{ backgroundColor: "#11111a" }}
                placeholder="Расскажите о проекте, сроках, ссылки на референсы…"
              />
            </label>

            <button
              type="submit"
              className="w-full bg-[#c8ff00] hover:bg-[#d6ff3d] text-black font-semibold py-4 rounded-xl transition-colors"
            >
              {sent ? "✓ Сообщение отправлено" : "Отправить сообщение →"}
            </button>
          </form>

          <aside className="lg:col-span-2 space-y-4">
            {[
              { label: "Email", value: "hello@DIAMAN.dev", href: "mailto:hello@DIAMAN.dev", icon: "✉" },
              { label: "Telegram", value: "@DIAMAN", href: "#", icon: "✈" },
              { label: "GitHub", value: "github.com/DIAMAN", href: "#", icon: "⌥" },
              { label: "LinkedIn", value: "in/Diaman", href: "#", icon: "in" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="flex items-center gap-4 bg-white/[0.03] border border-white/10 rounded-2xl p-5 hover:border-[#c8ff00]/40 hover:bg-white/[0.05] transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7c5cff] to-[#c8ff00] grid place-items-center text-black font-bold">
                  {c.icon}
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-white/50 uppercase tracking-widest">{c.label}</div>
                  <div className="text-white truncate group-hover:text-[#c8ff00] transition-colors">
                    {c.value}
                  </div>
                </div>
              </a>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}
