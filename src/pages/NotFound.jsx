import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="nf">
      <div className="wrap">
        <h1 tabIndex={-1}>404</h1>
        <p>Cette page n'existe pas ou a été déplacée.</p>
        <Link className="btn" to="/">Retour à l'accueil</Link>
      </div>
    </div>
  )
}