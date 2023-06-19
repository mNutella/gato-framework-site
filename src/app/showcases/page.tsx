import Image from "next/image";
import Link from "next/link";

import Community from "@/components/Community";
import { SHOWCASES } from "@/lib/data/showcases";
import Contributing from "@/components/Contributing";

export default function Showcases() {
  return (
    <>
      <section className="bg-neutral-900 border border-neutral-800 rounded-[32px]">
        <div className="grid gap-6 p-6 lg:grid-cols-2 lg:p-16">
          <div className="space-y-6 flex flex-col justify-center order-2 lg:order-1">
            <div className="space-y-2">
              {/* <span className="text-xl font-light text-neutral-400"> */}
              {/*   AI Coordination Strategy */}
              {/* </span> */}
              <h1 className="text-3xl lg:text-6xl">Community Showcases</h1>
            </div>
            <p className="text-lg font-light text-neutral-300 lg:max-w-lg">
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint cillum sint consectetur cupidatat.
            </p>
            <Link href="showcases/#showcases" className="btn-primary">
              Explore Showcases
            </Link>
          </div>

          <div className="flex relative order-1 lg:order-2">
            <div className="relative w-full h-[180px] md:min-h-[380px] overflow-hidden rounded-3xl">
              <Image
                className="object-cover"
                src="/images/showcases/community_showcases.png"
                alt="World Map"
                sizes=""
                fill
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="showcases"
        className="flex flex-col gap-8 pt-16 md:gap-16 md:pt-32"
      >
        <div className="space-y-3">
          <h1 className="text-3xl md:text-6xl">Showcases</h1>
          <p className="text-lg font-light text-neutral-300 md:max-w-xl">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </p>
        </div>
        <article className="relative flex flex-col gap-3 lg:grid lg:grid-cols-2 lg:gap-6">
          {SHOWCASES.map((item) => (
            <article
              key={"sc-" + item.id}
              className="flex flex-col bg-neutral-900 border border-neutral-800 rounded-3xl space-y-6 p-6 "
            >
              <div className="flex flex-col items-center space-y-3">
                <Image
                  className="rounded-xl"
                  src={
                    item.image ?? "/images/showcases/showcase_default_image.png"
                  }
                  alt={item.title + " showcase image"}
                  width={112}
                  height={112}
                  priority
                />
                <h2 className="text-xl">{item.title}</h2>
              </div>
              <p className="text-lg font-light text-neutral-300">
                {item.description}
              </p>
            </article>
          ))}
        </article>
      </section>

      <Community />

      <Contributing />
    </>
  );
}
