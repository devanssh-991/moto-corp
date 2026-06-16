import { bikes, vehicles } from '../data/garageData'

export default function AboutPage() {
  return (
    <section className="space-y-10 rounded-3xl border border-slate-300 bg-white/90 p-8 shadow-glass backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-900/70">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-600 dark:text-slate-400">
          About
        </p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
          Engineering the Future of Motion
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-400">
          Motocorp is a conceptual luxury automaker focused on electrified performance,
          human-centric design, and intelligent software-first experiences.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
          <p>
            This prototype website is built to showcase a modern automotive digital
            experience — the kind of interface you&apos;d expect from world-class brands
            like Tesla, Lucid, Porsche, and BMW.
          </p>
          <p>
            The final version will include a rich brand story, leadership team,
            milestones, and an animated timeline illustrating Motocorp&apos;s evolution.
          </p>
        </div>
        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-sm text-slate-600 dark:border-slate-700/80 dark:bg-slate-900/60 dark:text-slate-400">
          Team profiles, achievements, and interactive timeline will appear here.
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950/70">
          <p className="text-sm font-medium text-slate-900 dark:text-slate-100">Current Vehicle Lineup</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
            {vehicles.slice(0, 4).map((item) => (
              <li key={item.id}>
                {item.name} <span className="text-slate-500 dark:text-slate-500">({item.type})</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950/70">
          <p className="text-sm font-medium text-slate-900 dark:text-slate-100">Current Bike Lineup</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
            {bikes.map((item) => (
              <li key={item.id}>
                {item.name} <span className="text-slate-500 dark:text-slate-500">({item.type})</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

