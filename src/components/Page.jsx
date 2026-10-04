import { motion, useReducedMotion } from 'framer-motion'

const variants = {
  enter: (dir) => ({ x: dir * 48, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir * -48, opacity: 0 }),
}

// Chaque page glisse depuis la droite quand on avance dans le menu,
// depuis la gauche quand on revient en arrière.
export default function Page({ direction, children }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className="page"
      custom={direction}
      variants={reduce ? undefined : variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.38, ease: [0.22, 0.8, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
