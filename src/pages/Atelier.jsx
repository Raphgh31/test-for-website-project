import { motion } from 'framer-motion'
import { Reveal, Stagger, Item, colors, ease } from '../components/motion.jsx'

const etapes = [
  { annee: '2014', texte: 'Premiers sites pour des amis musiciens, codés le soir après le travail.' },
  { annee: '2017', texte: "Cinq ans comme développeuse dans une agence lyonnaise. Beaucoup de projets, trop peu de temps pour chacun." },
  { annee: '2019', texte: "Création de Ressac, avec une règle : jamais plus de trois projets en même temps." },
  { annee: '2024', texte: 'Arrivée de Julien, graphiste, pour les identités visuelles et les illustrations.' },
]

const paragraphes = [
  "Ressac est né d'une fatigue : celle de livrer des sites à la chaîne, tous construits sur le même modèle, pour des clients qu'on avait à peine eu le temps de rencontrer.",
  "Aujourd'hui, l'atelier accompagne une dizaine de projets par an. C'est peu, et c'est voulu. Chaque client a droit à des rendez-vous réguliers, à des maquettes qu'il peut commenter, et à un site dont il comprend le fonctionnement.",
  "Nous travaillons surtout avec des commerces de proximité, des associations culturelles et des indépendants. Des structures où le site doit être simple à mettre à jour, parce que personne n'a le temps d'apprendre un outil compliqué.",
  "Le nom ? Le ressac, c'est la vague qui revient après avoir touché le rivage. On aime l'idée d'un travail qui revient, se reprend, se corrige, jusqu'à être juste.",
]

export default function Atelier() {
  return (
    <div className="container">
      <Stagger as="header" className="page-head" onMount>
        <Item as="p" className="eyebrow">L'atelier</Item>
        <Item as="h1">Deux personnes, un bureau sous les toits, et peu de projets à la fois.</Item>
      </Stagger>

      <section className="atelier">
        <figure className="portrait" aria-hidden="true">
          <motion.div
            className="portrait__img"
            initial={{ clipPath: 'inset(100% 0 0 0)' }}
            animate={{ clipPath: 'inset(0% 0 0 0)' }}
            transition={{ duration: 0.9, ease, delay: 0.25 }}
          />
          <Reveal as="figcaption" delay={0.6}>Claire &amp; Julien, au bureau.</Reveal>
        </figure>
        <Stagger className="prose columns" gap={0.12} delay={0.2}>
          {paragraphes.map((t) => <Item as="p" key={t.slice(0, 12)}>{t}</Item>)}
        </Stagger>
      </section>

      <section className="section">
        <Reveal className="section__head">
          <h2>Quelques dates</h2>
        </Reveal>
        <Stagger as="ol" className="timeline" gap={0.12}>
          {etapes.map((e) => (
            <Item
              as="li"
              key={e.annee}
              variants={{ hidden: { opacity: 0, x: -24 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease } } }}
            >
              <motion.span
                className="timeline__year"
                whileHover={{ x: 6, color: colors.accentInk }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                {e.annee}
              </motion.span>
              <p>{e.texte}</p>
            </Item>
          ))}
        </Stagger>
      </section>
    </div>
  )
}
