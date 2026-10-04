import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const projets = [
  { nom: 'Fournil Morel', type: 'Boutique', annee: 2026, couleur: '#c9a77c', texte: 'Précommande de pain et viennoiseries, retrait en boutique.' },
  { nom: 'Les Ateliers du Canal', type: 'Association', annee: 2026, couleur: '#8a9a7b', texte: "Agenda des stages de poterie et inscriptions en ligne." },
  { nom: 'Cabinet Delorme', type: 'Vitrine', annee: 2025, couleur: '#6f7f8f', texte: "Site d'un cabinet de kinésithérapie, prise de rendez-vous intégrée." },
  { nom: 'Festival Basses Eaux', type: 'Association', annee: 2025, couleur: '#b4532a', texte: 'Programmation, billetterie et carte du site pour 4 000 festivaliers.' },
  { nom: 'Maison Arnaud', type: 'Vitrine', annee: 2024, couleur: '#a38b6d', texte: "Menuisier ébéniste : portfolio et demande de devis." },
  { nom: 'Thé & Tasses', type: 'Boutique', annee: 2024, couleur: '#5e6b55', texte: 'Boutique de thés en vrac, expédition dans toute la France.' },
]

const filtres = ['Tous', 'Vitrine', 'Boutique', 'Association']

export default function Realisations() {
  const [filtre, setFiltre] = useState('Tous')
  const liste = filtre === 'Tous' ? projets : projets.filter((p) => p.type === filtre)

  return (
    <div className="container">
      <header className="page-head">
        <p className="eyebrow">Réalisations</p>
        <h1>Quelques projets récents.</h1>
      </header>

      <div className="filters" role="group" aria-label="Filtrer les projets">
        {filtres.map((f) => (
          <button
            key={f}
            className={`chip ${filtre === f ? 'chip--on' : ''}`}
            aria-pressed={filtre === f}
            onClick={() => setFiltre(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.ul layout className="projects">
        <AnimatePresence initial={false}>
          {liste.map((p) => (
            <motion.li
              key={p.nom}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="project"
            >
              <div className="project__visual" style={{ '--c': p.couleur }} aria-hidden="true">
                <span>{p.nom}</span>
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
