import { useRef, useState } from "react";
import Link from "next/link";
import { clsx } from "clsx";

import { NavItem } from "@/lib/types";

export default function NavItem({
  title,
  items,
}: {
  title: string;
  items: NavItem[];
}) {
  const [isOpen, setOpen] = useState(false);
  const timeOutRef = useRef<ReturnType<typeof setTimeout>>();

  const handleEnter = () => {
    clearTimeout(timeOutRef.current);

    setOpen(true);
  };

  const handleLeave = () => {
    timeOutRef.current = setTimeout(() => {
      setOpen(false);
    }, 30);
  };

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
      onBlur={handleLeave}
    >
      <button
        className={clsx(
          "py-3 px-6 font-light text-lg transition-colors rounded-full hover:bg-neutral-700 hover:cursor-pointer",
          isOpen && "bg-neutral-700"
        )}
      >
        {title}
      </button>
      {isOpen && (
        <div className="absolute right-0 z-50 mt-4 left-1/2 -translate-x-1/2 transform w-full px-6 max-w-screen-lg">
          <div className="flex space-x-6 bg-neutral-800 border p-6 border-neutral-700 overflow-hidden rounded-lg">
            <Link
              key={items[0].name}
              href={items[0].href}
              className="flex flex-col space-y-3 rounded-xl p-6 transition-colors bg-neutral-900 w-full max-w-[30%] hover:bg-neutral-700 focus:bg-neutral-700"
            >
              <span className="text-xl font-light">{items[0].name}</span>
              <span className="text-sm font-light text-neutral-500">
                {items[0].description}
              </span>
            </Link>
            <div className="grid gap-y-3 gap-x-6 lg:grid-cols-2">
              {items.slice(1).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex flex-col space-y-3 rounded-xl p-6 transition-colors hover:bg-neutral-700 focus:bg-neutral-700"
                >
                  <span className="text-xl font-light">{item.name}</span>
                  <span className="text-sm font-light text-neutral-500">
                    {item.description}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
