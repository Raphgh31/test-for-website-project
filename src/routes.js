// L'ordre compte : il définit le sens du glissement entre les pages.
export const routes = [
  { path: '/', label: 'Accueil' },
  { path: '/atelier', label: "L'atelier" },
  { path: '/services', label: 'Services' },
  { path: '/realisations', label: 'Réalisations' },
  { path: '/contact', label: 'Contact' },
]

export const routeIndex = (pathname) => {
  const i = routes.findIndex((r) => r.path === pathname)
  return i === -1 ? routes.length : i
}
