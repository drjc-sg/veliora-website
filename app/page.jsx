export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-10 lg:px-16 bg-parchment text-ink">
      <section className="flex-1 flex flex-col items-center justify-center text-center max-w-4xl mx-auto py-24">
        <h1 className="fade-in font-serif font-light tracking-tight leading-[1.05] text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-ink">
          Veliora 1815 OÜ
        </h1>

        <p className="fade-in-delay-1 mt-10 sm:mt-12 max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-[56rem] text-balance text-sm sm:text-base md:text-[17px] font-light leading-[1.75] tracking-wide text-muted">
          A boutique advisory firm providing management consulting, go-to-market strategy, public policy advisory, leadership coaching, and executive education.
        </p>

        <p className="fade-in-delay-2 mt-12 sm:mt-16 text-[0.7rem] sm:text-xs uppercase tracking-[0.35em] text-muted">
          Estonia · Est. 2025
        </p>
      </section>

      <footer className="w-full pb-8 sm:pb-10">
        <p className="text-center text-[0.65rem] sm:text-xs tracking-[0.2em] uppercase text-muted/80">
          © 2025 Veliora 1815 OÜ. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
