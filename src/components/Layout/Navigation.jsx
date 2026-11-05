import { useState } from 'react'
import { NavLink, Link, Outlet } from 'react-router'
import { House, Guitar, User, Menu, X } from 'lucide-react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const linkStyle = "group relative flex flex-col items-center rounded justify-center px-6 py-2 text-sm transition-all duration-300 [&.active]:bg-gray-800 [&.active]:text-white hover:bg-gray-100"
  const tooltipStyle  = "absolute left-1/2 top-full z-50 mt-3 -translate-x-1/2 rounded-xl bg-black/80 px-4 py-2 text-white opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100"
  const mobileLinkStyle = "flex items-center gap-3 bg-gray-100 rounded p-3 transition [&.active]:bg-gray-800 [&.active]:text-white hover:bg-gray-200"

  return (
    <div className="flex min-h-screen flex-col">
      <nav className="sticky top-0 z-100 flex items-center justify-between bg-white p-2 px-6 shadow-md">

        <Link to="/" onClick={() => setIsOpen(false)} className="font-semibold tracking-[0.3em] text-gray-900">MASTERWORK MUSIC</Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 transition hover:bg-gray-100 md:hidden">
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* desktop */}
        <div className="hidden items-center gap-4 md:flex">

          <NavLink to="/" end className={linkStyle}>
            <House />
            <span className={tooltipStyle}>Home</span>
          </NavLink>

          <NavLink to="/products" className={linkStyle}>
            <Guitar />
            <span className={tooltipStyle}>Products</span>
          </NavLink>

          <NavLink to="/contact" className={linkStyle}>
            <User />
            <span className={tooltipStyle}>Contact</span>
          </NavLink>

        </div>
      </nav>

      {/* mobile */}
      {isOpen && (
        <div className="sticky top-13 z-100 flex flex-col gap-2 bg-white p-4 shadow-md md:hidden">
          
          <NavLink to="/" onClick={() => setIsOpen(false)} className={mobileLinkStyle}>
            <House size={22} />
            Home
          </NavLink>

          <NavLink to="/products" onClick={() => setIsOpen(false)} className={mobileLinkStyle}>
            <Guitar size={22} />
            Explore
          </NavLink>

          <NavLink to="/contact" onClick={() => setIsOpen(false)} className={mobileLinkStyle}>
            <User size={22} />
            Contact
          </NavLink>

        </div>
      )}

      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Navbar