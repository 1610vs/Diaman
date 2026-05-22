@import "tailwindcss";

@theme {
  --font-sans: "Inter", system-ui, sans-serif;
  --font-display: "Space Grotesk", system-ui, sans-serif;
  --color-ink-950: #0a0a0f;
  --color-ink-900: #11111a;
  --color-ink-800: #1a1a24;
  --color-ink-700: #252532;
  --color-accent: #c8ff00;
  --color-accent-2: #7c5cff;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-sans);
  background-color: var(--color-ink-950);
  color: #e9e9ef;
  -webkit-font-smoothing: antialiased;
}

/* Скроллбар */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
::-webkit-scrollbar-track {
  background: var(--color-ink-950);
}
::-webkit-scrollbar-thumb {
  background: var(--color-ink-700);
  border-radius: 8px;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--color-accent-2);
}

/* Утилитарные классы */
.font-display {
  font-family: var(--font-display);
}

.text-gradient {
  background: linear-gradient(135deg, #c8ff00 0%, #7c5cff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.grid-bg {
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 60px 60px;
}

@keyframes float-blob {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -40px) scale(1.05); }
  66% { transform: translate(-20px, 20px) scale(0.95); }
}
.animate-blob {
  animation: float-blob 14s ease-in-out infinite;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  animation: marquee 30s linear infinite;
}

@keyframes fade-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-up {
  animation: fade-up 0.8s ease-out both;
}
