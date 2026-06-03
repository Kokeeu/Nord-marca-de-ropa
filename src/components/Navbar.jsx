import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="navbar__brand">
        NORD
      </Link>
      <nav className="navbar__nav">
        <NavLink to="/collections" className="navbar__link">Colecciones</NavLink>
        <NavLink to="/about" className="navbar__link">Nosotros</NavLink>
        <NavLink to="/contact" className="navbar__link">Contacto</NavLink>
      </nav>
    </header>
  )
}

export default Navbar
