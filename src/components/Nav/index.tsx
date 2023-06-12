"use client";

import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { useMediaQuery } from "react-responsive";

import { NavGroup } from "@/lib/types";
import NavItem from "./NavItem";
import MobileMenu from "./MobileMenu";

export default function Nav({ items }: { items: NavGroup[] }) {
  const [isScrolled, setScroll] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });

  useEffect(() => {
    addEventListener("scroll", handleScrollChange);

    return () => removeEventListener("scroll", handleScrollChange);
  }, []);

  const handleScrollChange = () => {
    const scrollY = window.scrollY;

    setScroll(scrollY > 0);
  };

  return (
    <nav
      className={clsx(
        "pb-3 max-w-screen-2xl mx-auto z-50 px-6",
        isTabletOrMobile && isMobileMenuOpen ? "fixed inset-0" : "sticky top-0"
      )}
    >
      <div
        className={clsx(
          "w-full py-2 px-6 transition-all duration-500 border rounded-b-[32px] flex items-center justify-between lg:justify-start",
          (!isTabletOrMobile && isScrolled) ||
            (isTabletOrMobile && !isMobileMenuOpen)
            ? "bg-neutral-900 border-neutral-800"
            : "border-transparent"
        )}
      >
        <div>
          <span className="block text-xl">GATO</span>
          <span className="block -mt-2 ml-5">Framework</span>
        </div>

        {!isTabletOrMobile && (
          <div className="flex w-full justify-center md:-ml-[104px]">
            <div
              className={clsx(
                "flex py-1 px-1 space-x-3 rounded-full border transition-colors duration-200",
                isScrolled
                  ? "border-transparent"
                  : "bg-neutral-900 border-neutral-800"
              )}
            >
              {items.map((item) => (
                <NavItem
                  key={"nav-" + item.id}
                  title={item.title}
                  items={item.items}
                />
              ))}
            </div>
          </div>
        )}

        {isTabletOrMobile && (
          <MobileMenu
            items={items}
            open={isMobileMenuOpen}
            onBurgerClick={() => setMobileMenuOpen((prev) => !prev)}
          />
        )}
      </div>
    </nav>
  );
}
