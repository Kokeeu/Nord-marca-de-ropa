import { Link } from 'react-router-dom'
import './GhostTextLink.css'

function GhostTextLink({ to, label }) {
  return (
    <Link to={to} className="ghost-link">
      {label} <span className="ghost-link__arrow">→</span>
    </Link>
  )
}

export default GhostTextLink
