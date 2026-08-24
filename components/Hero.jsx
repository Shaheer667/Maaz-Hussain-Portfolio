export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-10 sm:px-5 md:pt-14 lg:pt-16">
      <div className="absolute left-[-120px] top-[-120px] h-72 w-72 rounded-full bg-[#D58A2B]/20 blur-3xl" />
      <div className="absolute bottom-[-120px] right-[-120px] h-72 w-72 rounded-full bg-[#F26A3D]/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 py-6 md:grid-cols-2 md:py-10">
        <div className="text-center md:text-left"><br />
          <p className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 sm:text-sm">
            Freelance Video Editor
          </p>

          <h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:mx-0 md:text-6xl lg:text-7xl">
            Video Editing That Makes Your Content{" "}
            <span className="gradient-text">Stand Out</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8 md:mx-0">
            Hi, I’m Maaz Hussain — a freelance video editor helping creators,
            brands, and businesses turn raw footage into clean, engaging, and
            professional videos.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            <a
              href="#work"
              className="rounded-full bg-[#F26A3D] px-7 py-3 text-center font-semibold text-white transition hover:scale-105 hover:bg-[#FF7A4D]"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/15 px-7 py-3 text-center font-semibold text-white transition hover:bg-[#F7F2E9] hover:text-[#0B0A09]"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <h3 className="text-xl font-bold text-[#F2C46D]">YouTube</h3>
              <p className="text-sm text-white/60">Long-form</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <h3 className="text-xl font-bold text-[#F2C46D]">Reels</h3>
              <p className="text-sm text-white/60">Short-form</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <h3 className="text-2xl font-bold">100%</h3>
              <p className="text-sm text-white/60">Remote</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md md:max-w-none">
          <div className="glow-card rounded-[1.5rem] border border-white/10 bg-white/5 p-3 sm:rounded-[2rem] sm:p-4">
            <img
              src="/maaz.PNG"
              alt="Maaz Hussain video editor portfolio visual"
              className="h-[420px] w-full rounded-[1.2rem] object-cover object-center sm:h-[520px] sm:rounded-[1.5rem] md:h-[560px]"
            />
          </div>

          <div className="absolute -left-2 top-8 rounded-2xl border border-white/10 bg-[#1B1713] px-4 py-2 shadow-xl sm:-left-6 sm:top-10 sm:px-5 sm:py-3">
            <p className="text-xs font-semibold sm:text-sm">YouTube Videos</p>
          </div>

          <div className="absolute -right-2 bottom-16 rounded-2xl border border-white/10 bg-[#1B1713] px-4 py-2 shadow-xl sm:-right-5 sm:bottom-20 sm:px-5 sm:py-3">
            <p className="text-xs font-semibold sm:text-sm">Reels & Shorts</p>
          </div>
        </div>
      </div>
    </section>
  );
}
