type Item = {
  id: number;
  title: string;
  description: string;
};

type List = {
  id: number;
  title: string;
  items: Item[];
};

export default function HorizontalList({
  title,
  items,
  id,
}: {
  title: string;
  items: List[];
  id?: string;
}) {
  return (
    <section id={id} className="space-y-8 pt-16 md:space-y-16 md:pt-32">
      <h1 className="text-3xl md:text-6xl">{title}</h1>
      <div className="flex flex-col md:grid md:grid-rows-2 gap-y-8">
        {items.map((item) => (
          <div key={"gc-" + item.id} className="space-y-6">
            <h2 className="text-2xl font-light text-neutral-600 md:text-3xl">
              {item.title}
            </h2>
            <article className="flex flex-col w-full gap-6 lg:grid lg:grid-cols-4">
              {item.items.map((innerItem) => (
                <article
                  key={"article-" + innerItem.id}
                  className="bg-neutral-900 border border-neutral-800 p-6 rounded-3xl space-y-3 md:col-auto"
                >
                  <h2 className="text-lg md:text-xl">{innerItem.title}</h2>
                  <p className="text-lg font-light text-neutral-300">
                    {innerItem.description}
                  </p>
                </article>
              ))}
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
