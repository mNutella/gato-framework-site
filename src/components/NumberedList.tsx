import Link from "next/link";

type Item = {
  id: number;
  title: string;
  description: string;
  hrefText: string;
  href: string;
};

export default function NumberedList({
  title,
  items,
}: {
  title: string;
  items: Item[];
}) {
  return (
    <section
      id="get-involved"
      className="space-y-8 pt-16 md:space-y-16 md:pt-32"
    >
      <h1 className="text-3xl md:text-6xl">{title}</h1>
      <article className="flex flex-col gap-6 md:grid md:grid-cols-2">
        {items.map((item, index) => (
          <article
            key={"gi-" + item.id}
            className="flex flex-col p-6 space-y-3 bg-neutral-900 border border-neutral-800 rounded-3xl"
          >
            <div className="flex gap-3 items-center flex-col md:flex-row">
              <div className="rounded-full w-14 h-14 p-2 flex flex-shrink-0 justify-center items-center bg-neutral-800 border border-neutral-700">
                <span className="text-3xl text-neutral-500">{index + 1}</span>
              </div>
              <h2 className="text-xl">{item.title}</h2>
            </div>
            <p className="text-lg font-light text-neutral-300">
              {item.description}
            </p>
            {item.hrefText && (
              <Link href={item.href} className="link">
                {item.hrefText}
              </Link>
            )}
          </article>
        ))}
      </article>
    </section>
  );
}
