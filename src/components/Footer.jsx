import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">NORD</div>
        <nav className="footer__links">
          <Link to="/collections" className="footer__link">Colecciones</Link>
          <Link to="/about" className="footer__link">Nosotros</Link>
          <Link to="/contact" className="footer__link">Contacto</Link>
        </nav>
        <div className="footer__copy">
          © 2026 NORD. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}

export default Footer
