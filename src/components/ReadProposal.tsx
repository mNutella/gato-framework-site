import Link from "next/link";
import Image from "next/image";

export default function ReadProposal() {
  return (
    <section className="flex flex-col relative gap-8 py-16 items-center md:gap-6 md:py-32">
      <div>
        <Image
          className="object-contain z-0"
          src="/images/proposal.png"
          alt="Proposal"
          width={450}
          height={450}
        />
      </div>
      <h1 className="text-3xl md:text-6xl text-center">Read our proposal</h1>
      <p className="text-lg font-light text-neutral-300 md:max-w-xl text-center">
        Explore our website to learn more about the GATO Framework, get
        involved, and contribute to the future of artificial intelligence.
      </p>
      <Link href="#" className="btn-primary">
        Read Proposal
      </Link>
    </section>
  );
}
