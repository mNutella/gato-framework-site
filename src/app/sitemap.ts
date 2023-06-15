import { allLearningMaterials } from "contentlayer/generated";

export default async function sitemap() {
  const materials = allLearningMaterials.map((material) => ({
    url: `https://${process.env.VERCEL_URL}/learn/${material.slug}`,
    lastModified: material.publishedAt,
  }));

  const routes = [
    "",
    "traditions",
    "getting-started",
    "learn",
    "downloads",
    "showcases",
  ].map((route) => ({
    url: `https://${process.env.VERCEL_URL}/${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...materials];
}
