import { useParams } from 'react-router-dom'
import { bikes, formatPrice, vehicles } from '../data/garageData'

export default function VehicleDetailsPage() {
  const { id } = useParams()
  const inventory = [...vehicles, ...bikes]
  const selected = inventory.find((item) => item.id === id) || inventory[0]

  return (
    <section className="space-y-8 rounded-3xl border border-slate-300 bg-white/90 p-8 shadow-glass backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-900/70">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-600 dark:text-slate-400">
          Vehicle Details
        </p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
          {selected.name}
        </h1>
        <p className="mt-2 max-w-xl text-sm text-slate-600 dark:text-slate-400">
          Placeholder detail view for {selected.type.toLowerCase()} selection `{id}`.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="col-span-2 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950/70">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-600 dark:text-slate-400">Quick Specs</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">
              Power: {selected.power}
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">
              Range: {selected.range}
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-400">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-600 dark:text-slate-400">Price</p>
          <p className="mt-2 text-lg font-semibold text-primary">{formatPrice(selected.price)}</p>
          <p className="mt-4 text-xs text-slate-500 dark:text-slate-500">More full specs and gallery coming next.</p>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950/60">
        <p className="text-sm font-medium text-slate-900 dark:text-slate-100">Related Models</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {inventory
            .filter((item) => item.id !== selected.id)
            .slice(0, 3)
            .map((item) => (
              <div key={item.id} className="rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900/70">
                <p className="text-xs font-medium text-slate-800 dark:text-slate-200">{item.name}</p>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">{item.type}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

