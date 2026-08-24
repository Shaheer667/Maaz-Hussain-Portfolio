const steps = [
  {
    number: "01",
    title: "Review the Footage",
    description:
      "I go through the raw clips, notes, and references to understand the goal of the video.",
  },
  {
    number: "02",
    title: "Build the Story",
    description:
      "I arrange the best moments, remove unnecessary parts, and create a clean flow.",
  },
  {
    number: "03",
    title: "Add Visual Polish",
    description:
      "I add B-roll, music, text, transitions, lower thirds, and graphics where needed.",
  },
  {
    number: "04",
    title: "Final Delivery",
    description:
      "I export the final video in the required format for YouTube, Instagram, or other platforms.",
  },
];

export default function Process() {
  return (
    <section className="section-padding bg-white/[0.03] px-4 sm:px-5">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl text-center md:mb-14 md:text-left">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#F26A3D] sm:text-sm sm:tracking-[0.3em]">
            Process
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            My Editing Process
          </h2>

          <p className="mt-5 text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
            A simple workflow that keeps every project clear, smooth, and easy
            for clients.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-white/10 bg-[#171411] p-6 sm:rounded-3xl sm:p-7"
            >
              <span className="gradient-text text-3xl font-extrabold sm:text-4xl">
                {step.number}
              </span>

              <h3 className="mt-5 text-lg font-bold sm:mt-6 sm:text-xl">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-white/60 sm:text-base sm:leading-7">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}