import { Link } from 'react-router-dom'

const principes = [
  { titre: 'Écouter avant de dessiner', texte: "Un premier rendez-vous d'une heure, sans maquette ni devis. On parle de vous, de vos clients, de ce qui coince aujourd'hui." },
  { titre: 'Écrire le code à la main', texte: 'Pas de thème acheté ni de constructeur de pages. Chaque site est léger, rapide et pensé pour durer plusieurs années.' },
  { titre: 'Rester joignable après', texte: "Une fois en ligne, vous gardez le même interlocuteur. Une question, une correction : un e-mail suffit." },
]

export default function Home() {
  return (
    <>
      <section className="hero container">
        <p className="eyebrow">Atelier indépendant · depuis 2019</p>
        <h1 className="hero__title">
          Des sites web faits <em>sur mesure</em>, pour des gens qui ont
          quelque chose à raconter.
        </h1>
        <div className="hero__foot">
          <p className="lead">
            Ressac conçoit et développe des sites pour les artisans, les
            associations et les petites entreprises. Un interlocuteur, un
            calendrier clair, un site qui vous ressemble.
          </p>
          <aside className="note">
            <p className="note__label">En ce moment</p>
            <p>Deux créneaux disponibles pour des projets démarrant en novembre.</p>
            <Link to="/contact" className="link-arrow">Réserver un échange</Link>
          </aside>
        </div>
      </section>

      <section className="container section">
        <div className="section__head">
          <h2>Trois habitudes de travail</h2>
          <p className="muted">Ce qui ne change pas, quel que soit le projet.</p>
        </div>
        <ol className="principes">
          {principes.map((p, i) => (
            <li key={p.titre}>
              <span className="principes__num">{['i', 'ii', 'iii'][i]}.</span>
              <h3>{p.titre}</h3>
              <p>{p.texte}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="feature">
        <div className="container feature__inner">
          <div className="feature__visual" aria-hidden="true">
            <span>Boulangerie<br />Fournil Morel</span>
          </div>
          <div>
            <p className="eyebrow">Dernier projet livré</p>
            <h2>Un site de commande en ligne pour un fournil de quartier</h2>
            <p>
              Précommande du pain la veille, retrait en boutique, et une page
              qui raconte enfin le levain maison. Les commandes du samedi ont
              doublé en deux mois.
            </p>
            <Link to="/realisations" className="link-arrow">Voir les réalisations</Link>
          </div>
        </div>
      </section>

      <section className="container cta">
        <h2>Un projet en tête&nbsp;?</h2>
        <p>Racontez-le en quelques lignes, je réponds sous 48 heures.</p>
        <Link to="/contact" className="button">Écrire à l'atelier</Link>
      </section>
    </>
  )
}
