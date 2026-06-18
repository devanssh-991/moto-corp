import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/vehicles', label: 'Vehicles' },
  { to: '/compare', label: 'Compare' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const [prevPath, setPrevPath] = useState(location.pathname)

  if (location.pathname !== prevPath) {
    setPrevPath(location.pathname)
    setOpen(false)
  }

  const [theme, setTheme] = useState(() => {
    return window.localStorage.getItem('motocorp-theme') === 'light' ? 'light' : 'dark'
  })

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  }, [theme])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
      document.documentElement.classList.remove('dark')
      window.localStorage.setItem('motocorp-theme', 'light')
    } else {
      setTheme('dark')
      document.documentElement.classList.add('dark')
      window.localStorage.setItem('motocorp-theme', 'dark')
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <motion.nav
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div
          className={`mt-3 flex items-center justify-between rounded-full border border-slate-300/80 bg-white/85 px-4 py-2 backdrop-blur-xl transition-shadow dark:border-slate-700/60 dark:bg-slate-900/60 ${
            scrolled ? 'shadow-glass' : 'shadow-soft'
          }`}
        >
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent shadow-soft">
              <span className="text-xs font-semibold text-slate-950">MC</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-900 dark:text-slate-100">
                MOTOCORP
              </span>
              <span className="text-[10px] uppercase tracking-[0.26em] text-slate-600 dark:text-slate-400">
                Electric Performance
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-8 text-sm font-medium text-slate-700 dark:text-slate-300 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `relative transition-colors hover:text-primary ${
                    isActive ? 'text-primary' : ''
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-primary"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white/70 text-slate-700 shadow-soft transition hover:border-primary/70 hover:text-primary dark:border-slate-600/70 dark:bg-slate-900/60 dark:text-slate-200"
            >
              <motion.span
                key={theme}
                initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
                transition={{ duration: 0.25 }}
              >
                {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
              </motion.span>
            </button>

            <Link
              to="/vehicles"
              className="hidden items-center gap-2 rounded-full bg-red-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-950 shadow-soft transition hover:bg-red-600 sm:flex"
            >
              Explore Fleet
            </Link>

            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white/70 text-slate-700 dark:border-slate-600/70 dark:bg-slate-900/60 dark:text-slate-200 md:hidden"
              onClick={() => setOpen((prev) => !prev)}
              aria-label="Toggle navigation"
            >
              {open ? <FiX size={18} /> : <FiMenu size={18} />}
            </button>

            <Link
              to="/contact"
              className="hidden items-center justify-center rounded-full bg-red-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-950 shadow-soft transition hover:bg-red-600 md:flex"
            >
              Test Ride
            </Link>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="mt-2 overflow-hidden rounded-3xl border border-slate-300 bg-white/90 px-3 py-3 text-sm text-slate-800 shadow-glass backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/90 dark:text-slate-200 md:hidden"
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `rounded-2xl px-3 py-2 transition-colors ${
                        isActive
                          ? 'bg-slate-200 text-primary dark:bg-slate-800/80'
                          : 'text-slate-700 hover:bg-slate-200 dark:text-slate-200 dark:hover:bg-slate-800/60'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}

                <Link
                  to="/contact"
                  className="mt-2 flex items-center justify-center rounded-2xl bg-red-500 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-950"
                >
                  Test Ride
                </Link>

                <Link
                  to="/vehicles"
                  className="mt-2 flex items-center justify-center rounded-2xl bg-red-500 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-950"
                >
                  Explore Fleet
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  )
}