import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { routes } from '../routes.js'
import { colors, ease } from './motion.jsx'

const MotionLink = motion.create(Link)

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])

  // underline : le soulignement glissant n'existe que dans le menu horizontal.
  const navLink = (r, i, underline) => (
      <NavLink to={r.path} end className="nav__link">
        {({ isActive }) => (
          <motion.span
            className="nav__label"
            initial={false}
            animate={{ color: isActive ? (underline ? colors.ink : colors.accent) : colors.inkSoft }}
            whileHover={{ color: colors.ink }}
            transition={{ duration: 0.2 }}
          >
            <span className="nav__num">{String(i + 1).padStart(2, '0')}</span>
            {r.label}
            {underline && isActive && (
              <motion.span
                layoutId="nav-underline"
                className="nav__underline"
                transition={{ type: 'spring', stiffness: 420, damping: 36 }}
              />
            )}
          </motion.span>
        )}
      </NavLink>
  )

  return (
    <motion.header
      className="header"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease }}
    >
      <div className="header__inner">
        <MotionLink
          to="/"
          className="brand"
          aria-label="Ressac, retour à l'accueil"
          initial="rest"
          animate="rest"
          whileHover="hover"
        >
          <motion.span
            className="brand__mark"
            variants={{ rest: { color: colors.ink, rotate: 0 }, hover: { color: colors.accent, rotate: -3 } }}
            transition={{ type: 'spring', stiffness: 400, damping: 18 }}
          >
            Ressac
          </motion.span>
          <span className="brand__sub">atelier web</span>
        </MotionLink>

        <motion.button
          className="burger"
          aria-expanded={open}
          aria-controls="nav-mobile"
          onClick={() => setOpen((o) => !o)}
          whileHover={{ backgroundColor: colors.ink, color: colors.paper }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.18 }}
        >
          {open ? 'Fermer' : 'Menu'}
        </motion.button>

        <nav className="nav nav--desktop" aria-label="Navigation principale">
          <ol className="nav__list">
            {routes.map((r, i) => <li key={r.path}>{navLink(r, i, true)}</li>)}
          </ol>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="nav-mobile"
            className="nav nav--mobile"
            aria-label="Navigation principale"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease }}
          >
            <motion.ol
              className="nav__list"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } } }}
            >
              {routes.map((r, i) => (
                <motion.li
                  key={r.path}
                  variants={{ hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0 } }}
                >
                  {navLink(r, i, false)}
                </motion.li>
              ))}
            </motion.ol>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
