import { motion } from 'framer-motion'
import { Reveal, Stagger, Item, ArrowLink, ButtonLink, ease } from '../components/motion.jsx'

const principes = [
  { titre: 'Écouter avant de dessiner', texte: "Un premier rendez-vous d'une heure, sans maquette ni devis. On parle de vous, de vos clients, de ce qui coince aujourd'hui." },
  { titre: 'Écrire le code à la main', texte: 'Pas de thème acheté ni de constructeur de pages. Chaque site est léger, rapide et pensé pour durer plusieurs années.' },
  { titre: 'Rester joignable après', texte: "Une fois en ligne, vous gardez le même interlocuteur. Une question, une correction : un e-mail suffit." },
]

// Le titre apparaît ligne par ligne.
const titre = ['Des sites web faits', <><em>sur mesure</em>, pour des gens</>, 'qui ont quelque chose', 'à raconter.']

export default function Home() {
  return (
    <>
      <Stagger as="section" className="hero container" onMount gap={0.1} delay={0.1}>
        <Item as="p" className="eyebrow">Atelier indépendant · depuis 2019</Item>
        <h1 className="hero__title">
          {titre.map((ligne, i) => (
            <span key={i} className="hero__line">
              <Item
                as="span"
                variants={{
                  hidden: { y: '105%', opacity: 1 },
                  visible: { y: 0, transition: { duration: 0.75, ease } },
                }}
              >
                {ligne}
              </Item>
            </span>
          ))}
        </h1>
        <div className="hero__foot">
          <Item as="p" className="lead">
            Ressac conçoit et développe des sites pour les artisans, les
            associations et les petites entreprises. Un interlocuteur, un
            calendrier clair, un site qui vous ressemble.
          </Item>
          <Item
            as="aside"
            className="note"
            variants={{ hidden: { opacity: 0, x: 24 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } } }}
          >
            <p className="note__label">En ce moment</p>
            <p>Deux créneaux disponibles pour des projets démarrant en novembre.</p>
            <ArrowLink to="/contact">Réserver un échange</ArrowLink>
          </Item>
        </div>
      </Stagger>

      <section className="container section">
        <Reveal className="section__head">
          <h2>Trois habitudes de travail</h2>
          <p className="muted">Ce qui ne change pas, quel que soit le projet.</p>
        </Reveal>
        <Stagger as="ol" className="principes" gap={0.15}>
          {principes.map((p, i) => (
            <Item as="li" key={p.titre}>
              <span className="principes__num">{['i', 'ii', 'iii'][i]}.</span>
              <h3>{p.titre}</h3>
              <p>{p.texte}</p>
            </Item>
          ))}
        </Stagger>
      </section>

      <section className="feature">
        <div className="container feature__inner">
          <motion.div
            className="feature__visual"
            aria-hidden="true"
            initial={{ opacity: 0, rotate: 3, y: 40 }}
            whileInView={{ opacity: 1, rotate: -1.2, y: 0 }}
            whileHover={{ rotate: 0, scale: 1.02 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: 'spring', stiffness: 120, damping: 18 }}
          >
            <span>Boulangerie<br />Fournil Morel</span>
          </motion.div>
          <Stagger>
            <Item as="p" className="eyebrow">Dernier projet livré</Item>
            <Item as="h2">Un site de commande en ligne pour un fournil de quartier</Item>
            <Item as="p">
              Précommande du pain la veille, retrait en boutique, et une page
              qui raconte enfin le levain maison. Les commandes du samedi ont
              doublé en deux mois.
            </Item>
            <Item><ArrowLink to="/realisations">Voir les réalisations</ArrowLink></Item>
          </Stagger>
        </div>
      </section>

      <Stagger as="section" className="container cta">
        <Item as="h2">Un projet en tête&nbsp;?</Item>
        <Item as="p">Racontez-le en quelques lignes, je réponds sous 48 heures.</Item>
        <Item><ButtonLink to="/contact">Écrire à l'atelier</ButtonLink></Item>
      </Stagger>
    </>
  )
}
