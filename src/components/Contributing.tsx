import Link from "next/link";
import Image from "next/image";

export default function Contributing() {
  return (
    <section className="flex flex-col bg-neutral-900 border border-neutral-800 rounded-[32px] gap-6 p-6 md:grid md:grid-cols-2">
      <div className="flex flex-col space-y-6 justify-center md:px-10 order-2 md:order-1">
        <h2 className="text-2xl md:text-3xl">
          Contribute to gatoframework.org
        </h2>
        <p className="text-lg font-light text-neutral-300 md:max-w-lg">
          This website is open source with hundreds of community contributors.
          You can propose edits to any of the content on this site, suggest
          awesome new features, or help us squash bugs.
        </p>
        <div className="flex flex-col lg:flex-row gap-6">
          <Link href="#" className="btn-primary">
            More on contributing
          </Link>
          <Link
            href="https://www.github.com"
            target="_blank"
            className="btn-primary-outlined"
          >
            Github -&gt;
          </Link>
        </div>
      </div>
      <div className="flex justify-center order-1 md:order-2">
        <Image
          className="object-contain z-0"
          src="/images/contributing.png"
          alt="Proposal"
          width={450}
          height={450}
        />
      </div>
    </section>
  );
}
