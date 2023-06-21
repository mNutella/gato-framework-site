import Link from "next/link";

import Contributing from "@/components/Contributing";
import ReadProposal from "@/components/ReadProposal";
import NumberedList from "@/components/NumberedList";
import { PERSONS, GET_INVOLVED } from "@/lib/data/getting-started";

export const metadata = {
  title: "Getting Started With GATO",
  description:
    "Welcome to GATO, a global, decentralized movement to advance the principles of axiomatic alignment in AI. There's no requirement for a tech background - we welcome communicators, teachers, educators, academics, politicians, lawyers, artists, and all who believe in our mission.",
};

export default function GettingStarted() {
  return (
    <>
      <section className="bg-neutral-900 border border-neutral-800 rounded-[32px]">
        <div className="grid gap-6 p-6 order-1 lg:grid-cols-2 lg:p-16 lg:order-2">
          <div className="space-y-6 flex flex-col justify-center">
            <div className="space-y-2">
              {/* <span className="text-xl font-light text-neutral-400"> */}
              {/*   AI Coordination Strategy */}
              {/* </span> */}
              <h1 className="text-3xl lg:text-6xl">Getting Started</h1>
            </div>
            <p className="text-lg font-light text-neutral-300 lg:max-w-lg">
              Welcome to GATO, a global, decentralized movement to advance the
              principles of axiomatic alignment in AI.
            </p>
            <Link href="getting-started/#get-involved" className="btn-primary">
              Get Involved
            </Link>
          </div>
          <div className="flex flex-col space-y-6 order-1 lg:order-2">
            <div className="p-6 bg-neutral-800 rounded-3xl border border-neutral-700 ">
              <p className="text-lg font-light text-neutral-300">
                We understand that the GATO Framework is a huge, as is the
                problem of AI alignment. Be patient and give yourself time to
                wrap your mind around this.{" "}
                <strong className="font-bold">
                  There&apos;s no requirement for a tech background.
                </strong>
              </p>
            </div>
            <ul className="flex flex-col sm:grid sm:grid-cols-3 gap-3 justify-items-center items-center">
              {PERSONS.map((item, index) => (
                <li
                  key={"person-" + index}
                  className="text-lg font-light text-neutral-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <NumberedList
        className="pt-16 md:pt-32"
        title="Ways to Get Involved"
        description="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
        items={GET_INVOLVED}
      />

      <ReadProposal />

      <Contributing />
    </>
  );
}
