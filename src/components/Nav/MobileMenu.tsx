import Link from "next/link";
import { clsx } from "clsx";

import { NavGroup } from "@/lib/types";

export default function MobileMenu({
  items,
  open,
  onBurgerClick,
  onItemClick,
}: {
  items: NavGroup[];
  open: boolean;
  onBurgerClick: () => void;
  onItemClick: () => void;
}) {
  return (
    <div>
      <div
        className={clsx(
          "w-6 z-50",
          open ? "relative" : "flex flex-col space-y-1"
        )}
        onClick={onBurgerClick}
      >
        {!open && <div className="bg-neutral-200 h-0.5" />}
        <div
          className={clsx(
            "bg-neutral-200 h-0.5",
            open && "absolute inset-0 rotate-45"
          )}
        />
        <div
          className={clsx(
            "bg-neutral-200 h-0.5",
            open && "absolute inset-0 -rotate-45"
          )}
        />
      </div>

      {open && (
        <div className="flex flex-col fixed bg-neutral-900 inset-0 items-center pt-16 -z-10">
          <div className="space-y-3 py-3">
            {items.map((item) => (
              <div key={"nav-" + item.id}>
                <h3 className="text-xl">{item.title}</h3>
                <ul>
                  {item.items.map((innerItem) => (
                    <li key={"nav-item-" + innerItem.id}>
                      <Link
                        href={innerItem.href}
                        className="text-lg font-light text-neutral-300 transition-colors hover:text-neutral-500"
                        onClick={onItemClick}
                        {...innerItem.linkProps}
                      >
                        {innerItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
