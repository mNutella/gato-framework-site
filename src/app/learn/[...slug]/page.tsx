import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allLearningMaterials } from "contentlayer/generated";

import { Mdx } from "@/components/Mdx";

type MetadataParams = {
  params: { slug: string[] };
};

export async function generateStaticParams() {
  return allLearningMaterials.map((material) => ({
    slug: material.slug.split("/"),
  }));
}

export async function generateMetadata({
  params,
}: MetadataParams): Promise<Metadata | undefined> {
  const currentSlug = params.slug.join("/");
  const material = allLearningMaterials.find(
    (material) => material.slug === currentSlug
  );

  if (!material) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    description,
    image,
    slug,
  } = material;
  const ogImage = image
    ? `https://${process.env.VERCEL_URL}/${image}`
    : `https://${process.env.VERCEL_URL}/api/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://${process.env.VERCEL_URL}/learn/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
  };
}

export default function LearnPage({ params }: any) {
  const currentSlug = params.slug.join("/");
  const material = allLearningMaterials.find(
    (material) => material.slug === currentSlug
  );

  if (!material) {
    notFound();
  }

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(material.structuredData)}
      </script>

      <section className="bg-neutral-900 border border-neutral-800 rounded-[32px] h-full lg:min-h-[350px]">
        <div className="flex flex-col gap-6 p-6 lg:p-16">
          <div className="space-y-6 flex flex-col justify-center">
            <div className="space-y-2">
              {material.publishedAt && (
                <span className="text-xl font-light text-neutral-400">
                  <time dateTime={material.publishedAt}>
                    {material.publishedAt}
                  </time>
                </span>
              )}
              <h1 className="text-3xl lg:text-6xl">{material.title}</h1>
            </div>
            <p className="text-lg font-light text-neutral-300">
              {material.description}
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-8 mt-16 md:mt-16">
        <div className="relative flex flex-col gap-y-8 py-16 md:gap-x-16 md:py-16 z-0 text-neutral-300">
          <Mdx code={material.body.code} />
          <div className="absolute bg-neutral-900 ml-[50%] inset-0 -translate-x-1/2 w-screen h-full rounded-[32px] md:rounded-[64px] border border-neutral-800 -z-10" />
        </div>
      </section>
    </>
  );
}
