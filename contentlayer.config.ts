import { ComputedFields, defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

function onlyFileName(str: string) {
  return str.slice(str.indexOf("/") + 1);
}

const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc: any) => onlyFileName(doc._raw.flattenedPath),
  },
  structuredData: {
    type: "reference",
    resolve: (doc: any) => ({
      "@context": "https://schema.org",
      "@type": "reference",
      headline: doc.title,
      datePublished: doc.publishedAt,
      dateModified: doc.publishedAt,
      description: doc.summary,
      image: doc.image
        ? `https://${process.env.VERCEL_URL}/${doc.image}`
        : `https://${process.env.VERCEL_URL}/api/og?title=${doc.title}`,
      url: `https://${process.env.VERCEL_URL}/blog/${onlyFileName(
        doc._raw.flattenedPath
      )}`,
      author: {
        "@type": "Person",
        name: "Delamain",
      },
    }),
  },
};

export const LearningMaterial = defineDocumentType(() => ({
  name: "LearningMaterial",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    publishedAt: {
      type: "string",
    },
    description: {
      type: "string",
      required: true,
    },
    image: {
      type: "string",
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "./src/content",
  documentTypes: [LearningMaterial],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "one-dark-pro",
          onVisitLine(node: any) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node: any) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node: any) {
            node.properties.className = ["word--highlighted"];
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"],
          },
        },
      ],
    ],
  },
});
