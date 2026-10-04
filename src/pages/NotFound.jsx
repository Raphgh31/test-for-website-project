import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container page-head notfound">
      <p className="eyebrow">Erreur 404</p>
      <h1>Cette page s'est perdue en chemin.</h1>
      <Link to="/" className="button">Retour à l'accueil</Link>
    </div>
  )
}
