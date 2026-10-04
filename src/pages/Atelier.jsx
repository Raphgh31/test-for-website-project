const etapes = [
  { annee: '2014', texte: 'Premiers sites pour des amis musiciens, codés le soir après le travail.' },
  { annee: '2017', texte: "Cinq ans comme développeuse dans une agence lyonnaise. Beaucoup de projets, trop peu de temps pour chacun." },
  { annee: '2019', texte: "Création de Ressac, avec une règle : jamais plus de trois projets en même temps." },
  { annee: '2024', texte: 'Arrivée de Julien, graphiste, pour les identités visuelles et les illustrations.' },
]

export default function Atelier() {
  return (
    <div className="container">
      <header className="page-head">
        <p className="eyebrow">L'atelier</p>
        <h1>Deux personnes, un bureau sous les toits, et peu de projets à la fois.</h1>
      </header>

      <section className="atelier">
        <figure className="portrait" aria-hidden="true">
          <div className="portrait__img" />
          <figcaption>Claire &amp; Julien, au bureau.</figcaption>
        </figure>
        <div className="prose columns">
          <p>
            Ressac est né d'une fatigue : celle de livrer des sites à la chaîne,
            tous construits sur le même modèle, pour des clients qu'on avait à
            peine eu le temps de rencontrer.
          </p>
          <p>
            Aujourd'hui, l'atelier accompagne une dizaine de projets par an. C'est
            peu, et c'est voulu. Chaque client a droit à des rendez-vous réguliers,
            à des maquettes qu'il peut commenter, et à un site dont il comprend
            le fonctionnement.
          </p>
          <p>
            Nous travaillons surtout avec des commerces de proximité, des
            associations culturelles et des indépendants. Des structures où
            le site doit être simple à mettre à jour, parce que personne n'a
            le temps d'apprendre un outil compliqué.
          </p>
          <p>
            Le nom ? Le ressac, c'est la vague qui revient après avoir touché
            le rivage. On aime l'idée d'un travail qui revient, se reprend, se
            corrige, jusqu'à être juste.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section__head">
          <h2>Quelques dates</h2>
        </div>
        <ol className="timeline">
          {etapes.map((e) => (
            <li key={e.annee}>
              <span className="timeline__year">{e.annee}</span>
              <p>{e.texte}</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  )
}
