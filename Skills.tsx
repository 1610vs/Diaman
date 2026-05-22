import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "Обо мне" },
  { href: "#skills", label: "Навыки" },
  { href: "#projects", label: "Проекты" },
  { href: "#experience", label: "Опыт" },
  { href: "#contact", label: "Контакты" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink-950/80 backdrop-blur-lg border-b border-white/5"
          : "bg-transparent"
      }`}
      style={{
        backgroundColor: scrolled ? "rgba(10,10,15,0.8)" : "transparent",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#home" className="font-display font-bold text-xl">
          <span className="text-gradient">AI</span>
          <span className="text-white">.dev</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-[#c8ff00] hover:bg-[#d6ff3d] text-black font-medium text-sm px-4 py-2 rounded-full transition-colors"
        >
          Связаться
          <span aria-hidden>→</span>
        </a>

        <button
          aria-label="Меню"
          onClick={() => setOpen(!open)}
          className="md:hidden w-10 h-10 grid place-items-center rounded-full bg-white/5 border border-white/10"
        >
          <span className="text-white text-xl">{open ? "✕" : "☰"}</span>
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-ink-900/95 backdrop-blur-lg border-t border-white/5" style={{ backgroundColor: "rgba(17,17,26,0.95)" }}>
          <ul className="flex flex-col p-6 gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-white/80 hover:text-white py-2"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 bg-[#c8ff00] text-black font-medium px-4 py-3 rounded-full"
            >
              Связаться →
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}
