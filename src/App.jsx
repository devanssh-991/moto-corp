import { BrowserRouter } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import AppRoutes from './routes/AppRoutes'
import MainLayout from './layouts/MainLayout'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-primary selection:text-slate-950 dark:bg-slate-950 dark:text-slate-100">
        <motion.div
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <MainLayout>
            <AnimatePresence mode="wait">
              <AppRoutes />
            </AnimatePresence>
          </MainLayout>
        </motion.div>
      </div>
    </BrowserRouter>
  )
}

export default App
