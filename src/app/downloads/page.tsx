import Link from "next/link";

import { DOWNLOADS } from "@/lib/data/downloads";

export default function page() {
  return (
    <>
      <section className="bg-neutral-900 border border-neutral-800 rounded-[32px]">
        <div className="flex flex-col gap-6 p-6 lg:grid lg:grid-cols-2 lg:p-16">
          <div className="space-y-6 flex flex-col justify-center">
            <div className="space-y-2">
              {/* <span className="text-xl font-light text-neutral-400"> */}
              {/*   AI Coordination Strategy */}
              {/* </span> */}
              <h1 className="text-3xl lg:text-6xl">Downloads</h1>
            </div>
            <p className="text-lg font-light text-neutral-300 lg:max-w-lg">
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint cillum sint consectetur cupidatat.
            </p>
          </div>
          <div className="flex flex-col space-y-6">
            {DOWNLOADS.map((item) => (
              <div
                key={"d-" + item.id}
                className="p-6 flex flex-col bg-neutral-800 rounded-3xl border border-neutral-700 space-y-6"
              >
                <div className="flex flex-col space-y-3">
                  <h2 className="text-xl font-light">{item.title}</h2>
                  <p className="lg:text-lg font-light text-neutral-300">
                    {item.description}
                  </p>
                </div>
                <div className="flex flex-col space-y-3">
                  {item.links.map((link) => (
                    <Link
                      key={"d-l-" + link.id}
                      className="link"
                      href={link.href}
                      target="_blank"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
