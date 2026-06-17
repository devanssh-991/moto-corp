import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar>
        <button className="ml-4 rounded-lg bg-blue-500 py-2 px-4 text-white">Test Ride</button>
      </Navbar>
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  )
}