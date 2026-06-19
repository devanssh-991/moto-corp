import { bikes, formatPrice, vehicles } from '../data/garageData'

export default function HomePage() {
  return (
    <section className="space-y-12">
      <div className="rounded-3xl border border-slate-300 bg-white/90 p-10 text-center shadow-glass backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-900/70">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-600 dark:text-slate-400">
          Motocorp Prototype
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl lg:text-5xl">
          Luxury electric performance coming soon.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 dark:text-slate-400 sm:text-base">
          We&apos;re assembling a premium front-end experience for a next-generation
          automotive brand. Explore the navigation while we finish wiring up the full
          product.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-slate-300 bg-white/90 p-6 shadow-glass dark:border-slate-800/70 dark:bg-slate-900/70">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">Featured Vehicles</h2>
          <div className="mt-4 space-y-3">
            {[...vehicles.slice(0, 3), 
              { id: 'v11', name: 'Shvansh 789', type: 'Bike', power: '1000hp', range: '1000kms', price: 320000 },
              { id: 'v12', name: 'John Doe 789', type: 'Car', power: '102hp', range: '1000kms', price: 31311 }
            ].map((item) => (
              <div key={item.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/70">
                <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{item.name}</p>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                  {item.type} · {item.power} · {item.range}
                </p>
                <p className="mt-1 text-xs text-primary">{formatPrice(item.price)}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-3xl border border-slate-300 bg-white/90 p-6 shadow-glass dark:border-slate-800/70 dark:bg-slate-900/70">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">Featured Bikes</h2>
          <div className="mt-4 space-y-3">
            {[
              ...bikes.slice(0, 2),
              { id: 'b9', name: 'Shvansh 789', type: 'Bike', power: '1000hp', range: '1000kms', price: 320000 },
              ...bikes.slice(2, 3),
            ].map((item) => (
              <div key={item.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950/70">
                <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{item.name}</p>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                  {item.type} · {item.power} · {item.range}
                </p>
                <p className="mt-1 text-xs text-primary">{formatPrice(item.price)}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}