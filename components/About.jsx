export default function About() {
  return (
    <section id="about" className="section-padding px-4 sm:px-5">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-14">
        <div className="relative mx-auto w-full max-w-md md:max-w-none">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#F26A3D]/25 to-[#F2C46D]/15 blur-2xl" />

          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 p-3 sm:rounded-[2rem] sm:p-4">
            <img
              src="/maaz-about.png"
              alt="About Maaz Hussain"
              className="h-[420px] w-full rounded-[1.2rem] object-cover object-center sm:h-[520px] sm:rounded-[1.5rem]"
            />
          </div>
        </div>

        <div className="text-center md:text-left">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#F2C46D] sm:text-sm sm:tracking-[0.3em]">
            About
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            About Maaz
          </h2>

          <div className="mt-6 space-y-5 text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
            <p>
              I’m Maaz Hussain, a freelance video editor focused on turning raw
              footage into polished, professional, and engaging videos.
            </p>

            <p>
              My editing style is clean, modern, and built around strong pacing,
              smooth flow, clear storytelling, and visuals that keep viewers
              watching.
            </p>

            <p>
              Whether it’s a long-form YouTube video, short-form Reel, podcast
              clip, motion graphics piece, or brand promo, I shape each edit to
              match the content and the client’s goals.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            {[
              "YouTube Editing",
              "Reels & Shorts",
              "Motion Graphics",
              "Remote Freelancer",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
