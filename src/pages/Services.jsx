import { Link } from 'react-router-dom'

const services = [
  { titre: 'Site vitrine', prix: 'à partir de 2 400 €', delai: '4 à 6 semaines', texte: "Cinq à huit pages pour présenter votre activité, vos horaires, votre équipe. Vous modifiez les textes vous-même depuis une interface simple." },
  { titre: 'Boutique en ligne', prix: 'à partir de 4 800 €', delai: '8 à 10 semaines', texte: 'Catalogue, paiement, gestion des stocks et des retraits. Pensée pour une petite structure qui expédie elle-même.' },
  { titre: 'Refonte', prix: 'sur devis', delai: 'selon le site', texte: 'Votre site existe mais il est lent, daté ou difficile à faire évoluer. On garde ce qui marche, on reconstruit le reste.' },
  { titre: 'Suivi et maintenance', prix: '60 € / mois', delai: 'sans engagement', texte: "Mises à jour, sauvegardes, petites modifications et une heure d'accompagnement par mois." },
]

const deroule = ['Premier échange', 'Proposition écrite', 'Maquettes', 'Développement', 'Mise en ligne']

export default function Services() {
  return (
    <div className="container">
      <header className="page-head page-head--split">
        <div>
          <p className="eyebrow">Services</p>
          <h1>Ce que l'atelier peut faire pour vous.</h1>
        </div>
        <p className="lead">
          Les prix sont indicatifs. Chaque projet fait l'objet d'une
          proposition détaillée, gratuite et sans engagement.
        </p>
      </header>

      <ul className="services">
        {services.map((s, i) => (
          <li key={s.titre} className="service">
            <span className="service__num">{String(i + 1).padStart(2, '0')}</span>
            <div className="service__body">
              <h2>{s.titre}</h2>
              <p>{s.texte}</p>
            </div>
            <dl className="service__meta">
              <div><dt>Tarif</dt><dd>{s.prix}</dd></div>
              <div><dt>Délai</dt><dd>{s.delai}</dd></div>
            </dl>
          </li>
        ))}
      </ul>

      <section className="section">
        <div className="section__head">
          <h2>Comment se passe un projet</h2>
        </div>
        <ol className="steps">
          {deroule.map((d, i) => (
            <li key={d}><span>{i + 1}</span>{d}</li>
          ))}
        </ol>
        <p className="center">
          <Link to="/contact" className="button">Demander une proposition</Link>
        </p>
      </section>
    </div>
  )
}
