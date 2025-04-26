"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const NAV_ITEMS = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "SERVICES", href: "/services" },
  { label: "CONTACT", href: "/contact" },
  { label: "BLOG", href: "/blog" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 border-b border-gray-200"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <div className="flex items-center justify-between px-6 md:px-20 py-5">
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold tracking-widest">
          MULTIVERGE
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wider">
          {NAV_ITEMS.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={label}
                href={href}
                className={`relative transition-all duration-300 ${
                  isActive
                    ? "text-transparent bg-gradient-to-r from-[#7f00ff] to-[#3b82f6] bg-clip-text"
                    : "text-[var(--foreground)] hover:text-purple-500"
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] w-4 bg-gradient-to-r from-[#7f00ff] to-[#3b82f6] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right side: Theme toggle + Mobile menu */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            className="md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav
          className="md:hidden flex flex-col items-center gap-6 py-6 text-sm font-medium tracking-wider"
          style={{
            backgroundColor: "var(--background)",
            color: "var(--foreground)",
          }}
        >
         {NAV_ITEMS.map(({ label, href }) => (
  <Link
    key={label}
    href={href}
    onClick={() => {
      setTimeout(() => {
        setMenuOpen(false);
      }, 100); // 👈 Add small delay here
    }}
    className={`${
      pathname === href
        ? "text-purple-500 underline underline-offset-4"
        : "hover:text-purple-500"
    }`}
  >
    {label}
  </Link>
))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
