export default function HomeHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#171b34]">
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div
          className="absolute left-1/2 top-1/2 h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,59,141,0.78) 1.3px, transparent 1.7px)",
            backgroundSize: "10px 10px",
            maskImage:
              "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0.94) 40%, rgba(0,0,0,0.2) 68%, transparent 86%)",
            WebkitMaskImage:
              "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0.94) 40%, rgba(0,0,0,0.2) 68%, transparent 86%)",
          }}
        />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-88px)] w-full max-w-[var(--content-max)] items-center justify-center px-[var(--content-pad)] pb-20 pt-12 text-center md:pb-24 md:pt-16">
        <div className="flex max-w-4xl flex-col items-center gap-8 md:gap-10">
          <img
            src="/SSF2026.svg"
            alt="Software Share Festival 2026"
            className="h-auto w-[240px] md:w-[360px]"
          />

          <h2 className="text-4xl font-medium tracking-tight text-[#ff3b8d] md:text-6xl">
            Software share festival
          </h2>
        </div>
      </div>
    </section>
  );
}
