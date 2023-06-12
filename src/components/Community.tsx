import Link from "next/link";

export default function Community() {
  return (
    <section className="flex flex-col relative gap-8 py-16 md:grid md:grid-cols-2 md:items-center md:gap-16 md:py-32">
      <div className="flex flex-col space-y-6 md:col-auto">
        <h1 className="text-3xl md:text-6xl md:leading-[5rem]">
          Join the global GATO Community
        </h1>
        <p className="text-lg text-light text-neutral-300">
          Discuss, build with, and meet thousands of GATOs from all around the
          world.
        </p>
        <Link href="#" className="btn-primary">
          Join Discord -&gt;
        </Link>
      </div>
      <div className="space-y-3 relative md:col-auto">
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl flex flex-col sm:flex-row sm:items-center sm:justify-between p-8 z-0">
          <span className="text-xl md:text-2xl">Showcases</span>
          <Link href="#" className="link">
            Explore -&gt;
          </Link>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl flex flex-col sm:flex-row sm:items-center sm:justify-between p-8 z-0">
          <span className="text-xl md:text-2xl">Working Groups</span>
          <Link href="#" className="link">
            Explore -&gt;
          </Link>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl flex flex-col sm:flex-row sm:items-center sm:justify-between p-8 z-0">
          <span className="text-xl md:text-2xl">Community</span>
          <Link href="#" className="link">
            Explore -&gt;
          </Link>
        </div>
        <div className="absolute w-full h-full inset-0 bg-gradient-radial -z-10 opacity-80" />
      </div>
    </section>
  );
}
