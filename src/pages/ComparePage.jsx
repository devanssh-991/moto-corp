import { bikes, vehicles } from '../data/garageData'

export default function ComparePage() {
  const compareSet = [vehicles[0], vehicles[1], bikes[0]]

  return (
    <section className="space-y-8 rounded-3xl border border-slate-300 bg-white/90 p-8 shadow-glass backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-900/70">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-600 dark:text-slate-400">
          Compare
        </p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
          Compare Vehicles Side by Side
        </h1>
        <p className="mt-2 max-w-xl text-sm text-slate-600 dark:text-slate-400">
          Select up to three vehicles to compare performance, range, pricing, and key
          technology features in a single, clean interface.
        </p>
      </header>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950/70">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-100 text-slate-800 dark:bg-slate-900/80 dark:text-slate-200">
            <tr>
              <th className="px-4 py-3 font-medium">Spec</th>
              {compareSet.map((item) => (
                <th key={item.id} className="px-4 py-3 font-medium">
                  {item.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-slate-700 dark:text-slate-300">
            <tr className="border-t border-slate-200 dark:border-slate-800">
              <td className="px-4 py-3 text-slate-600 dark:text-slate-400">Type</td>
              {compareSet.map((item) => (
                <td key={`${item.id}-type`} className="px-4 py-3">
                  {item.type}
                </td>
              ))}
            </tr>
            <tr className="border-t border-slate-200 dark:border-slate-800">
              <td className="px-4 py-3 text-slate-600 dark:text-slate-400">Power</td>
              {compareSet.map((item) => (
                <td key={`${item.id}-power`} className="px-4 py-3">
                  {item.power}
                </td>
              ))}
            </tr>
            <tr className="border-t border-slate-200 dark:border-slate-800">
              <td className="px-4 py-3 text-slate-600 dark:text-slate-400">Range</td>
              {compareSet.map((item) => (
                <td key={`${item.id}-range`} className="px-4 py-3">
                  {item.range}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

