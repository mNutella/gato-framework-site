import Image from "next/image";
import Link from "next/link";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

type Item = {
  id: number;
  title: string;
  description: string;
  href?: string;
  image: string;
};

export default function MainList({
  title,
  description,
  items,
  id,
  className,
}: {
  title: string;
  description: string;
  items: Item[];
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={twMerge("flex flex-col gap-8 md:gap-16", className)}
    >
      <div className="space-y-3">
        <h1 className="text-3xl md:text-6xl">{title}</h1>
        <p className="text-lg font-light text-neutral-300 md:max-w-xl">
          {description}
        </p>
      </div>
      <article className="relative">
        {items.map((item, index) => (
          <article
            key={"gl-" + item.id}
            className="flex flex-col gap-y-8 py-16 md:grid md:grid-cols-2 md:gap-x-16 md:py-16 z-0"
          >
            <div
              className={clsx(
                "flex flex-col space-y-3 md:justify-center order-2",
                index % 2 === 0 ? "md:order-1" : "md:order-2"
              )}
            >
              <h2 className="text-2xl md:text-3xl">{item.title}</h2>
              <p className="text-lg font-light text-neutral-300">
                {item.description}
              </p>
              {item.href && (
                <Link href={item.href} className="link">
                  Read more -&gt;
                </Link>
              )}
            </div>
            <div
              className={clsx(
                "relative w-full h-[280px] md:h-[380px] rounded-3xl overflow-hidden order-1",
                index % 2 === 0 ? "md:order-2" : "md:order-1"
              )}
            >
              <Image
                className="object-cover z-0"
                src={item.image}
                alt={item.title}
                sizes=""
                fill
              />
              <div className="absolute w-full h-full inset-0 bg-neutral-950 opacity-20 z-10" />
            </div>
          </article>
        ))}
        <div className="absolute bg-neutral-900 ml-[50%] inset-0 -translate-x-1/2 w-screen h-full rounded-[32px] md:rounded-[64px] border border-neutral-800 -z-10" />
      </article>
    </section>
  );
}
