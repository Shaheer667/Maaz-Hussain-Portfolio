export default function Contact() {
  return (
    <section id="contact" className="section-padding px-4 sm:px-5">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-[#F26A3D]/20 via-[#D58A2B]/15 to-[#F2C46D]/15 p-6 text-center sm:rounded-[2rem] sm:p-8 md:p-16">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#F2C46D] sm:text-sm sm:tracking-[0.3em]">
          Contact
        </p>

        <h2 className="text-3xl font-bold sm:text-4xl md:text-6xl">
          Ready to Create Your Next Video?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
          Let’s turn your raw footage into a clean, engaging, and professional
          video that is ready to publish.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="mailto:your@email.com"
            className="rounded-full bg-[#F7F2E9] px-8 py-3 text-center font-semibold text-[#0B0A09] transition hover:bg-[#F26A3D] hover:text-white"
          >
            Email Me
          </a>

          <a
            href="#work"
            className="rounded-full border border-white/15 px-8 py-3 text-center font-semibold text-white transition hover:bg-[#F7F2E9] hover:text-[#0B0A09]"
          >
            View Work
          </a>
        </div>
      </div>
    </section>
  );
}
