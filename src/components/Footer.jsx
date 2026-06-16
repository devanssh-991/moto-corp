import { FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-300 pb-8 pt-6 text-xs text-slate-600 dark:border-slate-800/60 dark:text-slate-400 sm:text-[13px]">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="font-medium tracking-[0.2em] text-slate-700 dark:text-slate-500">
            MOTOCORP AUTOMOTIVE
          </p>
          <p className="max-w-md text-slate-600 dark:text-slate-400">
            Next-generation electric performance, crafted with precision engineering and
            a relentless focus on human experience.
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 sm:items-end">
          <div className="flex gap-3 text-slate-700 dark:text-slate-300">
            {[FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn].map((Icon, idx) => (
              <button
                key={idx}
                type="button"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition hover:border-primary/80 hover:text-primary dark:border-slate-700/80 dark:bg-slate-900/70 dark:text-slate-300"
              >
                <Icon size={14} />
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.16em] text-slate-600 dark:text-slate-500">
            <Link to="/privacy" className="hover:text-slate-900 dark:hover:text-slate-200">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-slate-900 dark:hover:text-slate-200">
              Terms
            </Link>
            <span>© {new Date().getFullYear()} Motocorp Automotive</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

