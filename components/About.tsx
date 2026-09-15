const facts = [
  ["role", "software developer"],
  ["school", "university of waterloo, class of 2028"],
  ["focus", "backend services, real-time systems, full-stack apps"],
  ["stack", "c#/.net, c++/c, react, python, flutter"],
  ["aspiring", "product management or games industry"],
  ["reachable", "yes, contact me!"],
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-20">
      <div className="grid gap-10 sm:grid-cols-[1.1fr_1fr]">
        <div>
          <h2 className="font-mono text-sm text-pink">about</h2>
          <p className="mt-4 max-w-prose text-lg leading-relaxed text-ink">
            My name is Angela. I&apos;m a third year Computer Engineering student at the University of Waterloo,
            currently on a study abroad. I like turning random ideas into reality through code,
            from backend services powering real-time systems at scale to
            side projects that make my own life a little easier.
          </p>
        </div>

        <div className="h-fit rounded-lg border border-line bg-panel px-5 py-5 font-mono text-sm">
          <p className="text-faint"># hostnamectl</p>
          <dl className="mt-3 space-y-2">
            {facts.map(([key, value]) => (
              <div key={key} className="flex gap-3">
                <dt className="w-24 shrink-0 text-green">{key}</dt>
                <dd className="text-dim">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
