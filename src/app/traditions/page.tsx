import Image from "next/image";
import Link from "next/link";

import Community from "@/components/Community";
import Contributing from "@/components/Contributing";
import MainList from "@/components/MainList";
import NumberedList from "@/components/NumberedList";

import { GUIDING_TRADITIONS, MAIN_STEPS } from "@/lib/data/traditions";

export default function Traditions() {
  return (
    <>
      <section className="bg-neutral-900 border border-neutral-800 rounded-[32px]">
        <div className="grid gap-6 p-6 lg:grid lg:grid-cols-2 lg:p-16">
          <div className="space-y-6 flex flex-col justify-center order-2 lg:order-1">
            <div className="space-y-2">
              {/* <span className="text-xl font-light text-neutral-400"> */}
              {/*   AI Coordination Strategy */}
              {/* </span> */}
              <h1 className="text-3xl lg:text-6xl">GATO Traditions</h1>
            </div>
            <p className="text-lg font-light text-neutral-300 lg:max-w-lg">
              The traditions serve as the guiding principles, the code of
              conduct that binds us all in our shared mission.
            </p>
            <Link href="traditions/#guiding-traditions" className="btn-primary">
              Explore Traditions
            </Link>
          </div>

          <div className="flex relative order-1 lg:order-2">
            <div className="relative w-full h-[180px] md:min-h-[380px] overflow-hidden rounded-3xl">
              <Image
                className="object-cover"
                src="/images/traditions/gato_traditions.png"
                alt="World Map"
                sizes=""
                fill
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <MainList
        id="guiding-traditions"
        className="pt-16 md:pt-32"
        title="Guiding Traditions of GATO"
        description="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
        items={GUIDING_TRADITIONS}
      />

      <Community />

      <NumberedList
        className="pb-16 md:pb-32"
        title="Ways to Get Involved"
        description="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
        items={MAIN_STEPS}
      />

      <Contributing />
    </>
  );
}
