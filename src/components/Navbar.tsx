import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home',     path: '/',                                    external: false },
  { label: 'Projects', path: '/projects',                            external: false },
  { label: 'About',    path: '/about',                               external: false },
  { label: 'Resume',   path: '/downloads/Kristin-Burton-Resume.pdf', external: false },
  { label: 'Contact',  path: 'mailto:kristin@kristin-burton.com',    external: true  },
]

export function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Close menu on route change
  useEffect(() => { setIsOpen(false) }, [location.pathname])

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)

  const handleNav = (path: string, external: boolean) => {
    setIsOpen(false)
    if (external) {
      window.location.href = path
    } else {
      navigate(path)
    }
  }

  return (
    <>
      <div className={`nav-bar${scrolled ? ' is-scrolled' : ''}`}>
        <span onClick={() => navigate('/')} className="nav-logo font-condensed">
          KB
        </span>

        <nav className="nav-links">
          {navLinks.map(({ label, path, external }) => {
            const active = !external && isActive(path)
            return (
              <button
                key={label}
                onClick={() => handleNav(path, external)}
                className={`nav-link font-sans${active ? ' is-active' : ''}`}
              >
                {label}
              </button>
            )
          })}
        </nav>

        <button
          onClick={() => setIsOpen(prev => !prev)}
          className="nav-menu-toggle"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      <div className={`nav-mobile-menu${isOpen ? ' is-open' : ''}`}>
        <nav className="nav-mobile-links">
          {navLinks.map(({ label, path, external }) => {
            const active = !external && isActive(path)
            return (
              <button
                key={label}
                onClick={() => handleNav(path, external)}
                className={`nav-mobile-link font-condensed${active ? ' is-active' : ''}`}
              >
                {label}
              </button>
            )
          })}
        </nav>
      </div>
    </>
  )
}
