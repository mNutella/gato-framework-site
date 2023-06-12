import Image from "next/image";
import Link from "next/link";

import Contributing from "@/components/Contributing";
import ReadProposal from "@/components/ReadProposal";
import MainList from "@/components/MainList";
import Community from "@/components/Community";
import HorizontalList from "@/components/HorizontalList";
import { NEWS, GLOBAL_COOPERATION, GATO_LAYERS } from "@/lib/data/home";

export default function Home() {
  return (
    <>
      <section className="bg-neutral-900 border border-neutral-800 rounded-[32px]">
        <div className="flex flex-col md:flex-row p-3 md:p-16 space-y-6 space-y-reverse md:space-y-0 md:space-x-6">
          <div className="space-y-6 flex flex-col justify-center md:w-1/2 order-2 md:order-1">
            <div className="space-y-2">
              <span className="text-xl font-light text-neutral-400">
                AI Coordination Strategy
              </span>
              <h1 className="text-3xl md:text-6xl">Welcome to GATO</h1>
            </div>
            <p className="text-lg font-light text-neutral-300 md:max-w-lg">
              Global Alignment Taxonomy Omnibus is the comprehensive,
              multi-layered framework designed to facilitate global cooperation
              in addressing AI alignment and control challenges.
            </p>
            <Link href="#" className="btn-primary">
              Explore Framework
            </Link>
          </div>
          <div className="flex md:w-1/2 relative order-1 md:order-2">
            <div className="relative w-full h-[180px] md:h-full">
              <Image
                className="object-contain"
                src="/images/home/main_section.png"
                alt="World Map"
                sizes=""
                fill
                priority
              />
            </div>
          </div>
        </div>

        <div className="bg-neutral-800 h-[2px]" />

        {/* Latest News */}
        <div className="space-y-6 p-3 md:p-6">
          <h2 className="text-2xl lg:text-3xl font-light">Latest News</h2>
          <div className="flex flex-col gap-6 lg:grid lg:grid-cols-4">
            {NEWS.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="flex space-x-3 p-6 bg-neutral-800 border border-neutral-700 rounded-3xl lg:col-auto transition-colors hover:bg-neutral-700"
              >
                <Image
                  className="object-cover rounded-lg"
                  src="/images/home/gato_layers_section_decentralized_network.png"
                  alt="World Map"
                  width={56}
                  height={56}
                />
                <div>
                  <p className="font-light text-xs">
                    {item.company} - <time>{item.date}</time>
                  </p>
                  <p className="font-light">{item.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <HorizontalList
        title="Global Cooperation on AI Safety"
        items={GLOBAL_COOPERATION}
      />

      <Community />

      <MainList
        title="GATO Layers Overview"
        description="GATO is divided into seven layers to compartmentalize our efforts.
            Each layer is progressively broader in scope."
        items={GATO_LAYERS}
      />

      <ReadProposal />

      <Contributing />
    </>
  );
}
