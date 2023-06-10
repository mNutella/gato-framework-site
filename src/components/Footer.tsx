import Link from "next/link";

type Item = {
  id: number;
  name: string;
  href: string;
};

type Group = {
  id: number;
  title: string;
  items: Item[];
};

export default function Footer({ items }: { items: Group[] }) {
  return (
    <footer className="max-w-screen-2xl mx-auto p-6">
      <div className="bg-neutral-900 flex flex-col space-y-6 border border-neutral-800 rounded-[32px] p-6 md:space-y-0 md:grid md:grid-rows-1 md:grid-cols-3">
        {items.map((item) => (
          <div
            key={"nav-" + item.id}
            className="md:flex md:justify-center md:p-8"
          >
            <div className="space-y-3">
              <h3 className="text-xl">{item.title}</h3>
              <ul>
                {item.items.map((innerItem) => (
                  <li key={"nav-item-" + innerItem.id}>
                    <Link
                      href={innerItem.href}
                      className="text-lg text-neutral-300 transition-colors hover:text-neutral-500"
                    >
                      {innerItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
}
