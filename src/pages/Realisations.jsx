import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Stagger, Item, Reveal, colors, ease } from '../components/motion.jsx'

const projets = [
  { nom: 'Fournil Morel', type: 'Boutique', annee: 2026, couleur: '#c9a77c', texte: 'Précommande de pain et viennoiseries, retrait en boutique.' },
  { nom: 'Les Ateliers du Canal', type: 'Association', annee: 2026, couleur: '#8a9a7b', texte: "Agenda des stages de poterie et inscriptions en ligne." },
  { nom: 'Cabinet Delorme', type: 'Vitrine', annee: 2025, couleur: '#6f7f8f', texte: "Site d'un cabinet de kinésithérapie, prise de rendez-vous intégrée." },
  { nom: 'Festival Basses Eaux', type: 'Association', annee: 2025, couleur: '#b4532a', texte: 'Programmation, billetterie et carte du site pour 4 000 festivaliers.' },
  { nom: 'Maison Arnaud', type: 'Vitrine', annee: 2024, couleur: '#a38b6d', texte: "Menuisier ébéniste : portfolio et demande de devis." },
  { nom: 'Thé & Tasses', type: 'Boutique', annee: 2024, couleur: '#5e6b55', texte: 'Boutique de thés en vrac, expédition dans toute la France.' },
]

// Les cartes d'une même rangée arrivent en léger décalé.
const carte = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, ease, delay: (i % 2) * 0.12 } }),
  exit: { opacity: 0, scale: 0.96, transition: { duration: 0.2 } },
}

const filtres = ['Tous', 'Vitrine', 'Boutique', 'Association']

export default function Realisations() {
  const [filtre, setFiltre] = useState('Tous')
  const liste = filtre === 'Tous' ? projets : projets.filter((p) => p.type === filtre)

  return (
    <div className="container">
      <Stagger as="header" className="page-head" onMount>
        <Item as="p" className="eyebrow">Réalisations</Item>
        <Item as="h1">Quelques projets récents.</Item>
      </Stagger>

      <Reveal className="filters" role="group" aria-label="Filtrer les projets" delay={0.2}>
        {filtres.map((f) => (
          <motion.button
            key={f}
            className="chip"
            aria-pressed={filtre === f}
            onClick={() => setFiltre(f)}
            initial={false}
            animate={filtre === f
              ? { backgroundColor: colors.ink, color: colors.paper, borderColor: colors.ink }
              : { backgroundColor: 'rgba(31, 28, 23, 0)', color: colors.ink, borderColor: colors.rule }}
            whileHover={filtre === f ? undefined : { borderColor: colors.ink, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {f}
          </motion.button>
        ))}
      </Reveal>

      <motion.ul layout className="projects">
        <AnimatePresence initial={false}>
          {liste.map((p, i) => (
            <motion.li
              key={p.nom}
              layout
              className="project"
              variants={carte}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              exit="exit"
              whileHover="hover"
              custom={i}
            >
              <div className="project__frame">
                <motion.div
                  className="project__visual"
                  style={{ '--c': p.couleur }}
                  aria-hidden="true"
                  variants={{ hover: { scale: 1.04 } }}
                  transition={{ duration: 0.5, ease }}
                >
                  <motion.span variants={{ hover: { y: -6, letterSpacing: '0.01em' } }} transition={{ duration: 0.4, ease }}>
                    {p.nom}
                  </motion.span>
                </motion.div>
              </div>
              <div className="project__info">
                <h2>{p.nom}</h2>
                <p className="muted">{p.type} · {p.annee}</p>
                <p>{p.texte}</p>
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  )
}
