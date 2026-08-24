import Link from "next/link";
import { videoCategories } from "@/data/videos";

export default function FeaturedWork() {
  return (
    <section id="work" className="section-padding px-4 sm:px-5">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl text-center md:mb-14 md:text-left">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#F2C46D]">
            Portfolio
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Explore My Video Editing Work
          </h2>

          <p className="mt-5 text-base leading-7 text-white/65 sm:text-lg">
            Browse my work by category and explore different types of video
            editing projects.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {videoCategories.map((category) => (
            <Link
              href={`/work/${category.slug}`}
              key={category.slug}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-2 hover:border-[#F26A3D]/50 sm:rounded-3xl"
            >
              <p className="mb-3 text-sm font-semibold text-[#F26A3D]">
                Portfolio Category
              </p>

              <h3 className="text-xl font-bold">{category.title}</h3>

              <p className="mt-3 text-sm leading-6 text-white/60">
                {category.description}
              </p>

              <p className="mt-5 text-sm font-semibold text-[#F2C46D]">
                View Projects →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}