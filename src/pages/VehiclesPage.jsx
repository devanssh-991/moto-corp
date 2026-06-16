import { bikes, formatPrice, vehicles } from '../data/garageData'

export default function VehiclesPage() {
  return (
    <section className="space-y-8 rounded-3xl border border-slate-300 bg-white/90 p-8 shadow-glass backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-900/70">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-600 dark:text-slate-400">
            Our Fleet
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
            Vehicles
          </h1>
          <p className="mt-2 max-w-xl text-sm text-slate-600 dark:text-slate-400">
            A curated collection of high-performance electric and hybrid vehicles will
            appear here with full filtering and comparison tools.
          </p>
        </div>
      </div>
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Cars and SUVs</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {vehicles.map((item) => (
              <article key={item.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/70">
                <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{item.name}</p>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">{item.type}</p>
                <p className="mt-2 text-xs text-slate-600 dark:text-slate-400">
                  {item.power} · {item.range}
                </p>
                <p className="mt-2 text-xs text-primary">{formatPrice(item.price)}</p>
              </article>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Performance Bikes</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {bikes.map((item) => (
              <article key={item.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/70">
                <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{item.name}</p>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">{item.type}</p>
                <p className="mt-2 text-xs text-slate-600 dark:text-slate-400">
                  {item.power} · {item.range}
                </p>
                <p className="mt-2 text-xs text-primary">{formatPrice(item.price)}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

