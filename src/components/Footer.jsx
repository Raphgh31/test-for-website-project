import { routes } from '../routes.js'
import { Stagger, Item, FooterLink } from './motion.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <Stagger className="footer__inner">
        <Item>
          <p className="footer__brand">Ressac</p>
          <p className="muted">Design et développement de sites,<br />à la main, sans gabarit.</p>
        </Item>
        <Item as="ul" className="footer__links">
          {routes.map((r) => (
            <li key={r.path}><FooterLink to={r.path}>{r.label}</FooterLink></li>
          ))}
        </Item>
        <Item className="footer__contact">
          <p>bonjour@ressac.example</p>
          <p className="muted">Lun – ven, 9 h – 18 h</p>
        </Item>
      </Stagger>
      <p className="footer__legal">© {new Date().getFullYear()} Ressac — contenu de démonstration</p>
    </footer>
  )
}
