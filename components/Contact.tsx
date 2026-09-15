"use client";

import { useState } from "react";

const EMAIL = "ay6huang@uwaterloo.ca";

const links = [
  { label: "github", href: "https://github.com/angykk" },
  { label: "linkedin", href: "https://www.linkedin.com/in/ayiranh/" },
  // { label: "resume.pdf", href: "resume.pdf" },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable — link still works below
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-20">
      <h2 className="font-mono text-sm text-pink">contact</h2>
      <p className="mt-2 max-w-prose leading-relaxed text-dim">
        The fastest way to reach me is email.
      </p>

      <div className="mt-6 overflow-hidden rounded-lg border border-line">
        <button
          onClick={copyEmail}
          className="flex w-full items-center justify-between bg-panel px-5 py-4 text-left font-mono text-sm hover:bg-panel2 transition-colors"
        >
          <span className="text-ink">{EMAIL}</span>
          <span className="text-faint">{copied ? "copied" : "copy"}</span>
        </button>

        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between border-t border-line bg-panel px-5 py-4 font-mono text-sm hover:bg-panel2 transition-colors"
          >
            <span className="text-ink">{l.label}</span>
            <span className="text-faint">open</span>
          </a>
        ))}
      </div>
    </section>
  );
}
