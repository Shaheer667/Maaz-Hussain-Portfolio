const reasons = [
  {
    title: "Clean & Modern Editing",
    description:
      "Videos are edited with a polished, smooth, and professional look without unnecessary effects.",
  },
  {
    title: "Strong Attention to Detail",
    description:
      "Every cut, transition, caption, and visual element is carefully placed to match the client’s style.",
  },
  {
    title: "Social Media Friendly",
    description:
      "I understand how to edit for YouTube, Reels, Shorts, TikTok, and online audiences.",
  },
  {
    title: "Reliable Communication",
    description:
      "The process stays simple, professional, and easy from start to final delivery.",
  },
];

export default function WhyChoose() {
  return (
    <section className="section-padding px-4 sm:px-5">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center md:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#F2C46D] sm:text-sm sm:tracking-[0.3em]">
            Why Work With Me
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Why Clients Like Working With Me
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:rounded-3xl sm:p-8"
            >
              <h3 className="text-xl font-bold sm:text-2xl">{reason.title}</h3>

              <p className="mt-4 text-sm leading-6 text-white/60 sm:text-base sm:leading-7">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}