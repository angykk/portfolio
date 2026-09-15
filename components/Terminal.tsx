"use client";

import { useEffect, useRef, useState } from "react";

type Line = { type: "boot" | "input" | "output"; text: string };

const BOOT_LINES = [
  "booting portfolio.sh...",
  "loading profile: angela",
  "role: software developer — computer engineering @ university of waterloo",
  "status: abroad and daydreaming about ideas to make my life easier",
  "",
  'type "help" to see available commands',
];

const HELP_TEXT = [
  "available commands:",
  "  whoami       -short bio",
  "  projects     -jump to featured work",
  "  skills       -jump to the stack",
  "  experience   -jump to work history",
  "  contact      -ways to reach me",
  "  clear        -clear the screen",
];

function scrollIntoView(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Terminal() {
  const [booted, setBooted] = useState(false);
  const [bootedLines, setBootedLines] = useState<string[]>([]);
  const [history, setHistory] = useState<Line[]>([]);
  const [value, setValue] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      setBootedLines(BOOT_LINES);
      setBooted(true);
      return;
    }

    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setBootedLines(BOOT_LINES.slice(0, i));
      if (i >= BOOT_LINES.length) {
        clearInterval(interval);
        setBooted(true);
      }
    }, 260);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [bootedLines, history]);

  function runCommand(raw: string) {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    const entry: Line[] = [{ type: "input", text: cmd }];

    switch (cmd) {
      case "help":
        entry.push(...HELP_TEXT.map((t) => ({ type: "output" as const, text: t })));
        break;
      case "whoami":
        entry.push({
          type: "output",
          text: "angela huang — computer engineering student @ uwaterloo, currently abroad in taiwans. i like turning random ideas into reality through code, and making my own life a little easier.",
        });
        break;
      case "projects":
        entry.push({ type: "output", text: "opening projects..." });
        scrollIntoView("projects");
        break;
      case "skills":
        entry.push({ type: "output", text: "opening skills..." });
        scrollIntoView("skills");
        break;
      case "experience":
        entry.push({ type: "output", text: "opening experience..." });
        scrollIntoView("experience");
        break;
      case "contact":
        entry.push({ type: "output", text: "opening contact..." });
        scrollIntoView("contact");
        break;
      case "clear":
        setHistory([]);
        return;
      case "sudo":
        entry.push({ type: "output", text: "nice try." });
        break;
      default:
        entry.push({
          type: "output",
          text: `command not found: ${cmd} — type "help" for a list`,
        });
    }

    setHistory((h) => [...h, ...entry]);
  }

  return (
    <div
      id="top"
      className="mx-auto w-full max-w-3xl px-6 pt-16 pb-8 sm:pt-24"
    >
      <div className="overflow-hidden rounded-lg border border-line bg-panel shadow-2xl shadow-black/40">
        <div className="flex items-center gap-2 border-b border-line bg-panel2 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#4d5568]" />
          <span className="h-3 w-3 rounded-full bg-[#4d5568]" />
          <span className="h-3 w-3 rounded-full bg-[#4d5568]" />
          <span className="ml-2 font-mono text-xs text-faint">
            visitor@angela:~
          </span>
        </div>

        <div
          ref={scrollRef}
          onClick={() => inputRef.current?.focus()}
          className="scroll-thin h-[340px] cursor-text overflow-y-auto px-5 py-4 font-mono text-sm leading-relaxed sm:text-[15px]"
        >
          {bootedLines.map((line, idx) => (
            <p key={idx} className={line ? "text-dim" : "h-4"}>
              {idx === 0 ? <span className="text-pink">$ </span> : null}
              {line}
            </p>
          ))}

          {history.map((line, idx) =>
            line.type === "input" ? (
              <p key={idx} className="text-ink">
                <span className="text-pink">$ </span>
                {line.text}
              </p>
            ) : (
              <p key={idx} className="text-dim">
                {line.text}
              </p>
            )
          )}

          {booted && (
            <div className="flex items-center text-ink">
              <span className="text-pink">$&nbsp;</span>
              <input
                ref={inputRef}
                autoFocus
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    runCommand(value);
                    setValue("");
                  }
                }}
                spellCheck={false}
                autoComplete="off"
                className="flex-1 bg-transparent outline-none placeholder:text-faint"
                placeholder="type a command..."
                aria-label="Terminal command input"
              />
            </div>
          )}
        </div>
      </div>

      <p className="mt-4 font-mono text-xs text-faint">
        not a real shell
      </p>
    </div>
  );
}
