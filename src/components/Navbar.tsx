import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)

  return (
    <div className={`nav-bar${scrolled ? ' is-scrolled' : ''}`}>

      <span onClick={() => navigate('/')} className="nav-logo font-condensed">
        KB
      </span>

      <nav className="nav-links">
        {[
          { label: 'Home',      path: '/',                                     external: false },
          { label: 'Projects', path: '/projects',                            external: false },
          { label: 'About',     path: '/about',                                external: false },
          { label: 'Resume',    path: '/downloads/Kristin-Burton-Resume.pdf',  external: false },
          { label: 'Contact',   path: 'mailto:kristin@kristin-burton.com',     external: true  },
        ].map(({ label, path, external }) => {
          const active = !external && isActive(path)
          return (
            <button
              key={label}
              onClick={() => external ? (window.location.href = path) : navigate(path)}
              className={`nav-link font-sans${active ? ' is-active' : ''}`}
            >
              {label}
            </button>
          )
        })}
      </nav>

    </div>
  )
}
