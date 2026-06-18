import { bikes, vehicles } from '../data/garageData'
import { Link } from 'react-router-dom'

export default function ContactPage() {
  return (
    <section className="space-y-10 rounded-3xl border border-slate-300 bg-white/90 p-8 shadow-glass backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-900/70">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-600 dark:text-slate-400">
          Contact
        </p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
          Let&apos;s design your next drive.
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-400">
          Reach out to enquire about vehicles, partnerships, press, or test drive
          experiences. This page will evolve into a fully interactive contact and FAQ
          hub.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="space-y-4 rounded-2xl border border-slate-300 bg-slate-50 p-6 text-sm text-slate-700 dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-300 md:col-span-2">
          <div className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-600 dark:text-slate-400">
            Contact Form
          </div>
          <p className="text-slate-600 dark:text-slate-400">
            A fully validated contact form with categories, preferred contact method, and
            context-aware FAQs will be implemented here.
          </p>
        </div>

        <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
          <div className="rounded-2xl border border-slate-300 bg-slate-50 p-4 dark:border-slate-700/80 dark:bg-slate-900/80">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-600 dark:text-slate-400">
              Studio
            </p>
            <p className="mt-2 text-sm text-slate-900 dark:text-slate-200">
              Motocorp Design Lab
              <br />
              Palo Alto · Munich · Tokyo
            </p>
          </div>
          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4 dark:border-slate-700/80 dark:bg-slate-900/60">
            Interactive map and smart FAQ widgets will appear here.
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950/70">
          <p className="text-sm font-medium text-slate-900 dark:text-slate-100">Popular Vehicle Queries</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
            {vehicles.slice(0, 3).map((item) => (
              <li key={item.id}>Test drive enquiry: {item.name}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950/70">
          <p className="text-sm font-medium text-slate-900 dark:text-slate-100">Popular Bike Queries</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
            {bikes.slice(0, 3).map((item) => (
              <li key={item.id}>Availability enquiry: {item.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}