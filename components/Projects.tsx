"use client";

import { useState } from "react";

type Media = { type: "image" | "video"; src: string; alt?: string };

type Project = {
  name: string;
  ext: string;
  modified: string;
  size: string;
  summary: string;
  description: string;
  tags: string[];
  link: string;
  media?: Media[];
};

const EXT_COLOR: Record<string, string> = {
  ts: "text-pink",
  py: "text-green",
  go: "text-pink",
  rs: "text-green",
  js: "text-green",
  cs: "text-pink",
  dart: "text-pink",
  java: "text-green",
};

const projects: Project[] = [
  {
    name: "home-surveillance-app",
    ext: "py",
    modified: "2026-09",
    size: "307 KB",
    summary: "Turns spare phones into WebRTC live-streaming security cameras",
    description:
      "A cross-platform home surveillance app built in Flutter over WebRTC, turning spare phones into live-streaming security cameras. Includes a motion-triggered recording pipeline using OpenCV, with clips uploaded to a REST API backed by SQLite and served with range-request support for playback.",
    tags: ["Python", "Flutter", "Dart", "WebRTC", "WebSockets"],
    link: "https://github.com/angykk/surveillance-app",
  },
  { name: "webRTC-media-streamer",
    ext: "py",
    modified: "2025-09",
    size: "129 KB",
    summary: "Streams phone video to laptop through WebRTC",
    description:
      "A cross-platform video streaming pipeline built in Flutter over WebRTC, connecting phone video to laptop through WebRTC.",
    tags: ["Python", "Flutter", "Dart", "WebRTC", "WebSockets"],
    link: "https://github.com/angykk/WebRTC-Capture",
  },
  {
    name: "housing-proximity-mapper",
    ext: "js",
    modified: "2025-01",
    size: "55 KB",
    summary: "Maps commute times to points of interest around potential housing",
    description:
      "A housing proximity mapper built with Next.js and React. Uses the Google Maps Places, Nearby Search, and Directions Matrix APIs to find points of interest — grocery stores, parks, schools — around potential housing, giving accurate commute times and letting users compare housing options side by side.",
    tags: ["Javascript", "React", "Next.js", "Tailwind CSS", "Google Maps API"],
    link: "https://github.com/angykk/housingWebsite",
  },
  {
    name: "duck-sidescroller",
    ext: "cs",
    modified: "2025-02",
    size: "28.2 MB",
    summary: "2D side-scroller with a duck sprite dodging obstacles",
    description:
      "A 2D side-scroller built in Unity with C#. Features a duck sprite navigating obstacles and a score counter, an infinitely scrolling parallax background, and a dynamic tilemap system that spawns obstacles at random.",
    tags: ["Unity", "C#"],
    link: "https://github.com/angykk/DuckSideScroller",
    media: [{ type: "video", src: "images/Duck.mp4" }],
  },
  {
    name: "password-manager",
    ext: "dart",
    modified: "2025-01",
    size: "312 KB",
    summary: "iOS and web password manager backed by Firestore",
    description:
      "An iOS and web password manager built with Flutter. Stores passwords securely through Firestore and uses Firebase Authentication to secure user data.",
    tags: ["Flutter", "Dart", "Firebase", "Firestore"],
    link: "https://github.com/angykk/Password-Manager",
  },
  {
    name: "sudoku-solver",
    ext: "java",
    modified: "2025-01",
    size: "15.1 MB",
    summary: "Solves easy-to-hard sudoku puzzles in under 0.5 seconds",
    description:
      "A sudoku solver written in Java. Uses four advanced logic cycles plus a backtracking guessing algorithm to solve easy-to-hard difficulty puzzles, storing the board in 2D arrays and backtracking guesses in a stack.",
    tags: ["Java"],
    link: "https://github.com/angykk/SudokuSolver",
  },
];

export default function Projects() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="projects" className="mx-auto max-w-3xl px-6 py-20">
      <h2 className="font-mono text-sm text-pink">projects</h2>
      <p className="mt-2 font-mono text-xs text-faint">$ ls -la ~/projects</p>

      <div className="mt-6 overflow-hidden rounded-lg border border-line">
        {projects.map((p, idx) => {
          const isOpen = open === idx;
          return (
            <div
              key={p.name}
              className={idx !== 0 ? "border-t border-line" : ""}
            >
              <button
                onClick={() => setOpen(isOpen ? null : idx)}
                aria-expanded={isOpen}
                className="flex w-full items-center gap-4 bg-panel px-5 py-4 text-left font-mono text-sm hover:bg-panel2 transition-colors"
              >
                <span className="hidden shrink-0 text-faint sm:inline">
                  -rw-r--r--
                </span>
                <span className="shrink-0 text-faint">{p.size}</span>
                <span className="shrink-0 text-faint">{p.modified}</span>
                <span className="truncate">
                  <span className="text-ink">{p.name}</span>
                  <span className={EXT_COLOR[p.ext] ?? "text-dim"}>
                    .{p.ext}
                  </span>
                </span>
                <span className="ml-auto shrink-0 text-faint">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && (
                <div className="border-t border-line bg-bg px-5 py-5">
                  <p className="text-dim">{p.summary}</p>
                  <p className="mt-3 max-w-prose leading-relaxed text-dim">
                    {p.description}
                  </p>

                  {p.media && p.media.length > 0 && (
                    <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {p.media.map((m, i) =>
                        m.type === "image" ? (
                          <img
                            key={i}
                            src={m.src}
                            alt={m.alt ?? p.name}
                            className="h-48 w-full rounded border border-line object-cover"
                          />
                        ) : (
                          <video
                            key={i}
                            className="h-48 w-full rounded border border-line object-cover"
                            autoPlay
                            muted
                            loop
                            playsInline
                          >
                            <source src={m.src} type="video/mp4" />
                          </video>
                        )
                      )}
                    </div>
                  )}

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-line px-2 py-1 font-mono text-xs text-dim"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block font-mono text-sm text-pink hover:underline"
                  >
                    view source
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
