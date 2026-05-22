export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-white/40">
        <div>
          © {new Date().getFullYear()} Алексей Иванов. Сделано с ♥ на React & Tailwind.
        </div>
        <div className="flex gap-6">
          <a href="#home" className="hover:text-white transition-colors">Наверх ↑</a>
          <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
        </div>
      </div>
    </footer>
  );
}
