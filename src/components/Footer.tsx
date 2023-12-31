import Link from "next/link";

import { NavGroup, NavItem } from "@/lib/types";

function byOrder(itemA: NavItem, itemB: NavItem) {
  return itemA.order - itemB.order;
}

export default function Footer({ items }: { items: NavGroup[] }) {
  return (
    <footer className="max-w-screen-2xl mx-auto px-6 pb-6 pt-16 md:pt-16">
      <div className="bg-neutral-900 flex flex-col space-y-6 border border-neutral-800 rounded-[32px] p-6 md:space-y-0 md:grid md:grid-rows-1 md:grid-cols-3">
        {items.map((item) => (
          <div
            key={"footer-" + item.id}
            className="md:flex md:justify-center md:p-8"
          >
            <div className="space-y-3">
              <h3 className="text-xl">{item.title}</h3>
              <ul>
                {item.items.sort(byOrder).map((innerItem) => (
                  <li key={"footer-item-" + innerItem.id}>
                    <Link
                      href={innerItem.href}
                      className="text-lg font-light text-neutral-300 transition-colors hover:text-neutral-500"
                      {...innerItem.linkProps}
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
