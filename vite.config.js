import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Chemins relatifs : le site fonctionne aussi bien à la racine
// que dans le sous-dossier de GitHub Pages.
export default defineConfig({
  plugins: [react()],
  base: './',
})
