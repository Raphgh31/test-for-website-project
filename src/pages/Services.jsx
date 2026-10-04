import { motion } from 'framer-motion'
import { Reveal, Stagger, Item, ButtonLink, colors, ease } from '../components/motion.jsx'

const services = [
  { titre: 'Site vitrine', prix: 'à partir de 2 400 €', delai: '4 à 6 semaines', texte: "Cinq à huit pages pour présenter votre activité, vos horaires, votre équipe. Vous modifiez les textes vous-même depuis une interface simple." },
  { titre: 'Boutique en ligne', prix: 'à partir de 4 800 €', delai: '8 à 10 semaines', texte: 'Catalogue, paiement, gestion des stocks et des retraits. Pensée pour une petite structure qui expédie elle-même.' },
  { titre: 'Refonte', prix: 'sur devis', delai: 'selon le site', texte: 'Votre site existe mais il est lent, daté ou difficile à faire évoluer. On garde ce qui marche, on reconstruit le reste.' },
  { titre: 'Suivi et maintenance', prix: '60 € / mois', delai: 'sans engagement', texte: "Mises à jour, sauvegardes, petites modifications et une heure d'accompagnement par mois." },
]

const deroule = ['Premier échange', 'Proposition écrite', 'Maquettes', 'Développement', 'Mise en ligne']

// Les lignes de service : apparition décalée, fond qui se teinte et numéro
// qui glisse au survol. Avec son propre whileHover, une ligne n'hérite plus
// des variantes du parent : elle déclenche donc elle-même son apparition.
const row = {
  hidden: { opacity: 0, y: 24, backgroundColor: 'rgba(235, 227, 213, 0)' },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    backgroundColor: 'rgba(235, 227, 213, 0)',
    transition: { duration: 0.55, ease, delay: i * 0.08 },
  }),
  hover: { backgroundColor: 'rgba(235, 227, 213, 0.7)' },
}

export default function Services() {
  return (
    <div className="container">
      <Stagger as="header" className="page-head page-head--split" onMount>
        <div>
          <Item as="p" className="eyebrow">Services</Item>
          <Item as="h1">Ce que l'atelier peut faire pour vous.</Item>
        </div>
        <Item as="p" className="lead">
          Les prix sont indicatifs. Chaque projet fait l'objet d'une
          proposition détaillée, gratuite et sans engagement.
        </Item>
      </Stagger>

      <ul className="services">
        {services.map((s, i) => (
          <motion.li
            key={s.titre}
            className="service"
            variants={row}
            custom={i}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.span
              className="service__num"
              variants={{ visible: { x: 0, color: colors.accent }, hover: { x: 8, color: colors.accentInk } }}
              transition={{ type: 'spring', stiffness: 400, damping: 22 }}
            >
              {String(i + 1).padStart(2, '0')}
            </motion.span>
            <div className="service__body">
              <h2>{s.titre}</h2>
              <p>{s.texte}</p>
            </div>
            <dl className="service__meta">
              <div><dt>Tarif</dt><dd>{s.prix}</dd></div>
              <div><dt>Délai</dt><dd>{s.delai}</dd></div>
            </dl>
          </motion.li>
        ))}
      </ul>

      <section className="section">
        <Reveal className="section__head">
          <h2>Comment se passe un projet</h2>
        </Reveal>
        <Stagger as="ol" className="steps" gap={0.14}>
          {deroule.map((d, i) => (
            <Item
              as="li"
              key={d}
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease } } }}
            >
              <motion.span
                whileHover={{ scale: 1.12, backgroundColor: colors.ink, color: colors.paper }}
                transition={{ type: 'spring', stiffness: 400, damping: 18 }}
              >
                {i + 1}
              </motion.span>
              {d}
            </Item>
          ))}
        </Stagger>
        <Reveal className="center">
          <ButtonLink to="/contact">Demander une proposition</ButtonLink>
        </Reveal>
      </section>
    </div>
  )
}
