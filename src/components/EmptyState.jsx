import { Link } from 'react-router-dom'

// Bloc affiché quand une liste (équipe, actualités) est encore vide.
export default function EmptyState({ title, text, cta = 'Nous écrire', to = '/contact' }) {
  return (
    <div className="empty rv">
      <h3>{title}</h3>
      <p className="lead">{text}</p>
      <Link className="btn" to={to} style={{ marginTop: 24 }}>{cta}</Link>
    </div>
  )
}
