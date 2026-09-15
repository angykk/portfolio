const dependencies = [
  [".net", "^8.0.0"],
  ["react", "^18.0.0"],
  ["next.js", "^14.0.0"],
  ["react-native", "^0.74.0"],
  ["flutter", "^3.0.0"],
  ["tailwindcss", "^3.0.0"],
  ["cypress", "^13.0.0"],
];

const devDependencies = [
  ["c++/c", "^20"],
  ["c#", "^12.0.0"],
  ["java", "^17.0.0"],
  ["typescript", "^5.0.0"],
  ["javascript", "es2023"],
  ["python", "^3.12.0"],
  ["dart", "^3.0.0"],
  ["azure", "latest"],
  ["firebase", "latest"],
  ["docker", "latest"],
  ["unity", "latest"],
];

function Row({ pair }: { pair: string[] }) {
  const [name, version] = pair;
  return (
    <div className="flex justify-between border-t border-line/60 py-2 first:border-t-0">
      <span className="text-ink">&quot;{name}&quot;</span>
      <span className="text-green">&quot;{version}&quot;</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-3xl px-6 py-20">
      <h2 className="font-mono text-sm text-pink">skills</h2>
      <div className="mt-6 rounded-lg border border-line bg-panel px-6 py-6 font-mono text-sm">
        <p className="text-dim">{"{"}</p>
        <div className="pl-4">
          <p className="text-dim">&quot;dependencies&quot;: {"{"}</p>
          <div className="pl-4">
            {dependencies.map((d) => (
              <Row key={d[0]} pair={d} />
            ))}
          </div>
          <p className="text-dim">{"},"}</p>

          <p className="mt-2 text-dim">&quot;devDependencies&quot;: {"{"}</p>
          <div className="pl-4">
            {devDependencies.map((d) => (
              <Row key={d[0]} pair={d} />
            ))}
          </div>
          <p className="text-dim">{"}"}</p>
        </div>
        <p className="text-dim">{"}"}</p>
      </div>
    </section>
  );
}
