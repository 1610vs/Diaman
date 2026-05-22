const items = [
  "React", "TypeScript", "Next.js", "Tailwind", "Node.js",
  "GraphQL", "Figma", "Framer Motion", "PostgreSQL", "Vite",
];

export default function Marquee() {
  return (
    <section className="border-y border-white/5 bg-ink-900/50 py-6 overflow-hidden" style={{ backgroundColor: "rgba(17,17,26,0.5)" }}>
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-12 px-6">
            <span className="font-display text-2xl md:text-3xl font-semibold text-white/40 hover:text-white transition-colors">
              {item}
            </span>
            <span className="text-[#c8ff00]">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}
