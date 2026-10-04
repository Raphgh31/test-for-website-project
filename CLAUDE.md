# CLAUDE.md

Site vitrine en Vite + React. Le contenu actuel (« Ressac », atelier web) est
fictif : c'est un site de démonstration, à remplacer par le vrai sujet.

## Commandes

```bash
npm install      # dépendances
npm run dev      # serveur de développement
npm run build    # build de production dans dist/ (à lancer avant tout push)
npm run preview  # sert dist/ en local
```

Il n'y a ni tests ni linter : `npm run build` sans erreur est la vérification minimale.

## Pile technique

- **Vite** avec `base: './'` (chemins relatifs, compatible sous-dossier GitHub Pages).
- **React** + **React Router** en `HashRouter` (URLs `#/services`) : GitHub Pages
  n'a pas de repli SPA, les URLs sans `#` donneraient un 404 au rechargement.
- **Framer Motion** pour toutes les animations (voir plus bas).
- CSS simple dans `src/styles.css`, pas de framework CSS.

## Structure

- `src/routes.js` : liste des pages du menu. L'ordre fixe la numérotation (01, 02…)
  et le sens du glissement entre les pages. Ajouter une page = l'ajouter ici,
  créer `src/pages/X.jsx` et déclarer la `<Route>` dans `src/App.jsx`.
- `src/components/Header.jsx` : barre de navigation fixe (soulignement animé
  sur desktop, menu déroulant animé sur mobile).
- `src/components/Page.jsx` : transition horizontale entre pages.
- `src/components/motion.jsx` : briques d'animation réutilisables et couleurs.
- `src/pages/` : une page par fichier.

## Animations : règles

- Toutes les animations passent par Framer Motion. Pas de `transition` ni de
  `:hover` animé en CSS.
- Utiliser les composants de `src/components/motion.jsx` :
  `Reveal` (fondu au défilement), `Stagger` + `Item` (apparitions séquentielles,
  `onMount` pour le haut de page), `ButtonLink`/`Button`, `ArrowLink`/`ArrowButton`,
  `FooterLink`.
- Les couleurs animées viennent de l'objet `colors` de `motion.jsx`. Elles doivent
  rester synchronisées avec les variables CSS de `:root` dans `styles.css`.
- Piège : un élément qui reçoit son propre `whileHover="label"` (ou tout autre
  prop en label de variante) n'hérite plus de l'apparition du `Stagger` parent.
  Il lui faut alors son propre `initial` / `whileInView` (voir les lignes de
  `Services.jsx`).
- Ne pas remettre `initial={false}` sur l'`AnimatePresence` de `App.jsx` : cela
  désactive toutes les animations d'entrée au premier chargement.
- `MotionConfig reducedMotion="user"` respecte le réglage « réduire les animations ».

## Consignes de style (préférences du propriétaire)

- Rendu professionnel, original et « humain », qui ne fasse pas « généré par IA » :
  pas de dégradés violets, de verre dépoli, d'émojis en guise d'icônes, ni de
  coins arrondis et d'ombres partout.
- De vraies pages distinctes, accessibles depuis une barre de navigation en
  haut, et non une seule longue page à faire défiler.
- Textes du site en français.

## Déploiement

`.github/workflows/deploy.yml` construit et publie sur GitHub Pages à chaque push
sur `main`. Dans *Settings → Pages*, la source doit être **GitHub Actions**.
URL : https://raphgh31.github.io/test-for-website-project/

## Formulaire de contact

Pas de backend : à l'envoi, le formulaire ouvre la messagerie du visiteur
(`mailto:`) avec le message pré-rempli. Brancher un vrai service (Formspree,
etc.) si un envoi direct est souhaité.
