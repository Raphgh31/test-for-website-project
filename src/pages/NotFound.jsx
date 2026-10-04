import { Stagger, Item, ButtonLink } from '../components/motion.jsx'

export default function NotFound() {
  return (
    <Stagger className="container page-head notfound" onMount>
      <Item as="p" className="eyebrow">Erreur 404</Item>
      <Item as="h1">Cette page s'est perdue en chemin.</Item>
      <Item><ButtonLink to="/">Retour à l'accueil</ButtonLink></Item>
    </Stagger>
  )
}
