import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { routes } from '../routes.js'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])

  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="brand" aria-label="Ressac, retour à l'accueil">
          <span className="brand__mark">Ressac</span>
          <span className="brand__sub">atelier web</span>
        </Link>

        <button
          className="burger"
          aria-expanded={open}
          aria-controls="nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? 'Fermer' : 'Menu'}
        </button>

        <nav id="nav" className={`nav ${open ? 'nav--open' : ''}`} aria-label="Navigation principale">
          <ol className="nav__list">
            {routes.map((r, i) => (
              <li key={r.path}>
                <NavLink to={r.path} end className="nav__link">
                  {({ isActive }) => (
                    <>
                      <span className="nav__num">{String(i + 1).padStart(2, '0')}</span>
                      {r.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="nav__underline"
                          transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </header>
  )
}
