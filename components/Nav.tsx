"use client";

import Link from "next/link";

const links = [
  { href: "#about", label: "about" },
  { href: "#projects", label: "projects" },
  { href: "#skills", label: "skills" },
  { href: "#experience", label: "experience" },
  { href: "#contact", label: "contact" },
  { href: "/cats", label: "cat" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4 font-mono text-sm">
        <a href="#top" className="text-ink hover:text-pink transition-colors">
          <span className="text-pink">&gt;</span> angela
        </a>
        <ul className="flex gap-5">
          {links.map((link) => {
            const isRoute = link.href.startsWith("/");
            const linkClassName =
              "text-dim hover:text-ink transition-colors";
            return (
              <li key={link.href}>
                {isRoute ? (
                  <Link href={link.href} className={linkClassName}>
                    <span className="text-faint">$</span> {link.label}
                  </Link>
                ) : (
                  <a href={link.href} className={linkClassName}>
                    <span className="text-faint">$</span> {link.label}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
