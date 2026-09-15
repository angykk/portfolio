import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Tora Log — Angela",
  description: "A commit history of my cat Tora.",
};

type CatPhoto = {
  hash: string;
  date: string;
  caption: string;
  src: string;
};

const catPhotos: CatPhoto[] = [
  {
    hash: "c47f00d",
    date: "2021",
    caption: "inital commit",
    src: "../tora/tora1.jpeg",
  },
  {
    hash: "e91b3a4",
    date: "2022",
    caption: "still got the baby face",
    src: "../tora/tora2.jpeg",
  },
  {
    hash: "5d2f8c1",
    date: "2022",
    caption: "first time travel - she wasn't happy",
    src: "../tora/tora5.jpeg",
  },
  {
    hash: "b8a047e",
    date: "2022",
    caption: "halloween ready",
    src: "../tora/tora6.jpeg",
  },
  {
    hash: "2f61d9b",
    date: "2023",
    caption: "changing the bedsheets is not allowed",
    src: "../tora/tora7.jpeg",
  },
  {
    hash: "7c3e5a0",
    date: "2024",
    caption: "rage baiting the cat",
    src: "../tora/tora8.jpeg",
  },
  {
    hash: "d40f2b6",
    date: "2025",
    caption: "cat in the box what will she do",
    src: "../tora/tora9.jpeg",
  },
  {
    hash: "91ae7c3",
    date: "2025",
    caption: "biggest eyes in the crib",
    src: "../tora/tora10.jpeg",
  },
  {
    hash: "4b6f0d8",
    date: "2026",
    caption: "looking hella comfy",
    src: "../tora/tora11.jpeg",
  },
];

export default function CatsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/"
        className="font-mono fixed top-10 left-10 z-50 text-sm text-dim transition-colors hover:text-ink"
      >
        ← cd ..
      </Link>

      <Image
        src="../images/cat.gif"
        alt="Animated cat"
        width={200}
        height={200}
        unoptimized={true}
        className="sm: hidden pointer-events-none fixed bottom-1 right-4 z-50"
      />

      <h1 className="mt-8 font-mono text-sm text-pink">tora the cat</h1>
      <p className="mt-2 font-mono text-xs text-faint">
        $ git log --oneline --follow -- cat <br></br>
        # i absolutely adore my cat Tora and obviously had to share some photos here
      </p>

      <ol className="mt-6 space-y-8 border-l border-line pl-6">
        {catPhotos.map((c) => (
          <li key={c.hash} className="relative">
            <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full border-2 border-bg bg-pink" />
            <p className="font-mono text-xs text-faint">
              <span className="text-green">{c.hash}</span> · {c.date}
            </p>
            <div className="mt-3 max-w-sm overflow-hidden rounded-lg border border-line bg-panel">
              <img src={c.src} alt={c.caption} className="w-full object-cover" />
            </div>
            <p className="mt-2 max-w-prose leading-relaxed text-dim">
              {c.caption}
            </p>
          </li>
        ))}
      </ol>

      <p className="mt-10 font-mono text-xs text-faint">
        # more commits pending.
      </p>
    </main>
  );
}
