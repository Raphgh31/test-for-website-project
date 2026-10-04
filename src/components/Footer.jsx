import { Link } from 'react-router-dom'
import { routes } from '../routes.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <p className="footer__brand">Ressac</p>
          <p className="muted">Design et développement de sites,<br />à la main, sans gabarit.</p>
        </div>
        <ul className="footer__links">
          {routes.map((r) => (
            <li key={r.path}><Link to={r.path}>{r.label}</Link></li>
          ))}
        </ul>
        <div className="footer__contact">
          <p>bonjour@ressac.example</p>
          <p className="muted">Lun – ven, 9 h – 18 h</p>
        </div>
      </div>
      <p className="footer__legal">© {new Date().getFullYear()} Ressac — contenu de démonstration</p>
    </footer>
  )
}
