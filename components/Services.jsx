const services = [
  {
    title: "YouTube Video Editing",
    description:
      "Clean cuts, B-roll, music, transitions, lower thirds, and smooth storytelling for long-form videos.",
  },
  {
    title: "Instagram Reels & Shorts",
    description:
      "Fast-paced edits with strong hooks, captions, transitions, and mobile-first formatting.",
  },
  {
    title: "Talking Head Videos",
    description:
      "Professional editing for coaches, educators, business owners, and content creators.",
  },
  {
    title: "Brand & Promo Videos",
    description:
      "Modern promotional videos for products, services, launches, and online campaigns.",
  },
  {
    title: "Podcast Editing",
    description:
      "Clean podcast edits with cuts, audio cleanup, captions, and short clips for social media.",
  },
  {
    title: "Motion Graphics",
    description:
      "Simple titles, lower thirds, animated text, icons, and clean visual effects.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white/[0.03] px-4 sm:px-5">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl text-center md:mb-14 md:text-left">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#F26A3D] sm:text-sm sm:tracking-[0.3em]">
            Services
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Video Editing Services
          </h2>

          <p className="mt-5 text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
            From long-form YouTube videos to short-form reels, I help create
            polished videos that are ready to publish.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-[#171411] p-6 transition hover:-translate-y-1 hover:border-[#F2C46D]/50 sm:rounded-3xl sm:p-7"
            >
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F26A3D] to-[#D58A2B] text-lg font-bold sm:h-12 sm:w-12 sm:text-xl">
                {index + 1}
              </div>

              <h3 className="text-lg font-bold sm:text-xl">{service.title}</h3>

              <p className="mt-4 text-sm leading-6 text-white/60 sm:text-base sm:leading-7">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}