import { Routes, Route, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import HomePage from '../pages/HomePage'
import VehiclesPage from '../pages/VehiclesPage'
import VehicleDetailsPage from '../pages/VehicleDetailsPage'
import ComparePage from '../pages/ComparePage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

export default function AppRoutes() {
  const location = useLocation()

  return (
    <Routes location={location} key={location.pathname}>
      <Route
        path="/"
        element={
          <motion.main
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="pb-16 pt-28 sm:pt-32"
          >
            <HomePage />
          </motion.main>
        }
      />
      <Route
        path="/vehicles"
        element={
          <motion.main
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="pb-16 pt-28 sm:pt-32"
          >
            <VehiclesPage />
          </motion.main>
        }
      />
      <Route
        path="/vehicles/:id"
        element={
          <motion.main
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="pb-16 pt-28 sm:pt-32"
          >
            <VehicleDetailsPage />
          </motion.main>
        }
      />
      <Route
        path="/compare"
        element={
          <motion.main
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="pb-16 pt-28 sm:pt-32"
          >
            <ComparePage />
          </motion.main>
        }
      />
      <Route
        path="/about"
        element={
          <motion.main
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="pb-16 pt-28 sm:pt-32"
          >
            <AboutPage />
          </motion.main>
        }
      />
      <Route
        path="/contact"
        element=
        {
          <motion.main
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="pb-16 pt-28 sm:pt-32"
          >
            <ContactPage />
          </motion.main>
        }
      />
    </Routes>
  )
}

