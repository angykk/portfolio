const commits = [
  {
    hash: "1e9f04c",
    date: "2023-09 — 2028-05 (expected)",
    title: "B.A.Sc. Computer Engineering, University of Waterloo",
    body: "Honours, Co-operative Program. GPA 3.8, Presidential Scholarship of Distinction. Coursework: DSA, ML 1, Applied Cryptography, Systems Programming and Concurrency, Computer Networks.",
  },
  {
    hash: "3b4a67a",
    date: "2024-01 — 2024-04",
    title: "End User Device Technician, Toronto Transit Commission (TTC)",
    body: "Remotely deployed software, drivers, and OS images to 1000+ devices using CA IT Client Manager and Network PXE boots for automated imaging, and led the technical team to a 99% deployment accuracy rate. Implemented asset tracking with AMI AssetTrack for accurate inventory and location control across multiple locations.",
  },
  {
    hash: "6b2a7f1",
    date: "2024-09 — 2024-12",
    title: "Software QC/QA Engineer, Interaptix Augmented Reality",
    body: "Increased automated test coverage by 180% using Cypress and streamlined regression testing, cutting manual testing effort by 20% and speeding up bug identification.",
  },
  {
    hash: "9c4d81a",
    date: "2025-05 — 2025-08",
    title: "Full-Stack Developer, BCS Automation",
    body: "Built a WebSocket analytics dashboard (sub-100ms latency, scaled to 10x concurrent users) and a fault-tolerant Python pipeline streaming 90k+ marine IoT readings/min at 99% uptime; trained PyTorch transformer models to forecast sensor data.",
  },
  {
    hash: "a3f9c2e",
    date: "2026-01 — 2026-04",
    title: "Software Developer, Geotab",
    body: "Built backend services in C#/.NET for a real-time trip-computation pipeline serving millions of IoT fleet devices. Resolved a critical production outage (95%+ faster API response) and improved trip detection accuracy by 25%.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-3xl px-6 py-20">
      <h2 className="font-mono text-sm text-pink">experience</h2>
      <p className="mt-2 font-mono text-xs text-faint">$ git log --oneline --reverse</p>

      <ol className="mt-6 space-y-8 border-l border-line pl-6">
        {commits.map((c, idx) => (
          <li key={idx} className="relative">
            <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full border-2 border-bg bg-pink" />
            <p className="font-mono text-xs text-faint">
              <span className="text-green">{c.hash}</span> · {c.date}
            </p>
            <h3 className="mt-1 font-mono text-base text-ink">{c.title}</h3>
            <p className="mt-2 max-w-prose leading-relaxed text-dim">
              {c.body}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
