import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

// Mêmes valeurs que les variables CSS : framer-motion a besoin de couleurs
// concrètes pour les interpoler.
export const colors = {
  paper: '#f4efe6',
  paperDeep: '#ebe3d5',
  ink: '#1f1c17',
  inkSoft: '#5b544a',
  rule: '#d6ccbb',
  accent: '#b4532a',
  accentInk: '#8f3f1d',
}

export const ease = [0.22, 0.8, 0.3, 1]
const viewport = { once: true, amount: 0.2 }

/* ---------- Apparitions ---------- */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

// Fondu vers le haut quand l'élément entre dans l'écran.
export function Reveal({ as = 'div', delay = 0, children, ...props }) {
  const Tag = motion[as]
  return (
    <Tag
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={{
        hidden: fadeUp.hidden,
        visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay } },
      }}
      {...props}
    >
      {children}
    </Tag>
  )
}

// Conteneur dont les <Item> apparaissent l'un après l'autre.
// onMount : se déclenche au chargement plutôt qu'au défilement (haut de page).
export function Stagger({ as = 'div', gap = 0.09, delay = 0, onMount = false, children, ...props }) {
  const Tag = motion[as]
  const trigger = onMount ? { animate: 'visible' } : { whileInView: 'visible', viewport }
  return (
    <Tag
      initial="hidden"
      {...trigger}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: gap, delayChildren: delay } } }}
      {...props}
    >
      {children}
    </Tag>
  )
}

export function Item({ as = 'div', variants, children, ...props }) {
  const Tag = motion[as]
  return (
    <Tag variants={{ ...fadeUp, ...variants }} {...props}>
      {children}
    </Tag>
  )
}

/* ---------- Éléments interactifs ---------- */

const MotionLink = motion.create(Link)

const buttonMotion = {
  initial: { backgroundColor: colors.ink },
  whileHover: { backgroundColor: colors.accent, y: -2 },
  whileTap: { scale: 0.97, y: 0 },
  transition: { type: 'spring', stiffness: 400, damping: 28 },
}

export function ButtonLink({ to, children }) {
  return <MotionLink to={to} className="button" {...buttonMotion}>{children}</MotionLink>
}

export function Button({ children, ...props }) {
  return <motion.button className="button" {...buttonMotion} {...props}>{children}</motion.button>
}

const arrow = {
  rest: { x: 0 },
  hover: { x: 5, transition: { type: 'spring', stiffness: 500, damping: 22 } },
}
const arrowParent = {
  initial: 'rest',
  animate: 'rest',
  whileHover: 'hover',
  variants: { rest: { color: colors.accentInk }, hover: { color: colors.accent } },
}

export function ArrowLink({ to, children }) {
  return (
    <MotionLink to={to} className="link-arrow" {...arrowParent}>
      {children}
      <motion.span className="link-arrow__icon" variants={arrow} aria-hidden="true">→</motion.span>
    </MotionLink>
  )
}

export function ArrowButton({ children, ...props }) {
  return (
    <motion.button type="button" className="link-arrow" {...arrowParent} {...props}>
      {children}
      <motion.span className="link-arrow__icon" variants={arrow} aria-hidden="true">→</motion.span>
    </motion.button>
  )
}

export function FooterLink({ to, children }) {
  return (
    <MotionLink
      to={to}
      initial={{ color: '#d8d0c3', x: 0 }}
      whileHover={{ color: colors.paper, x: 4 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </MotionLink>
  )
}
