# test-for-website-project

Site Vite + React avec routage (React Router) et transitions de pages (framer-motion).

## Commandes

```bash
npm install      # dépendances
npm run dev      # serveur de développement
npm run build    # version de production dans dist/
npm run preview  # aperçu local de dist/
```

## Structure

- `src/routes.js` : liste et ordre des pages du menu (l'ordre fixe le sens du glissement)
- `src/pages/` : une page par fichier
- `src/components/` : en-tête, pied de page, transition de page
- `src/styles.css` : couleurs et typographies définies en haut du fichier

## Déploiement

`.github/workflows/deploy.yml` construit le site et le publie sur GitHub Pages à chaque push sur `main`.
Dans *Settings → Pages*, la source doit être réglée sur **GitHub Actions**.
