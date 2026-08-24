import Link from "next/link";
import { videos, videoCategories } from "@/data/videos";

export default async function WorkCategoryPage({ params }) {
  const { slug } = await params;

  const category = videoCategories.find((item) => item.slug === slug);
  const filteredVideos = videos.filter((video) => video.slug === slug);

  if (!category) {
    return (
      <main className="min-h-screen px-4 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold">Category Not Found</h1>
          <Link href="/#work" className="mt-6 inline-block text-[#F2C46D]">
            Back to Portfolio
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-4 py-24 text-white sm:px-5">
      <div className="mx-auto max-w-7xl">
        <Link href="/#work" className="mb-8 inline-block text-sm text-[#F2C46D]">
          ← Back to Portfolio
        </Link>

        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          {category.title}
        </h1>

        <p className="mt-5 text-base leading-7 text-white/65 sm:text-lg">
          {category.description}
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredVideos.map((video, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:rounded-3xl"
            >
              <div className="aspect-video w-full overflow-hidden bg-black">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="p-5 sm:p-6">
                <p className="mb-3 text-sm font-semibold text-[#F26A3D]">
                  {video.category}
                </p>

                <h3 className="text-lg font-bold sm:text-xl">{video.title}</h3>

                <p className="mt-3 text-sm leading-6 text-white/60">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}