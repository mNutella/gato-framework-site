import { useMDXComponent } from "next-contentlayer/hooks";

import components from "./CustomComponents";

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <article className="prose prose-quoteless prose-neutral w-full max-w-screen-lg pb-4 mx-auto text-base md:text-lg font-light">
      <Component components={{ ...components }} />
    </article>
  );
}
