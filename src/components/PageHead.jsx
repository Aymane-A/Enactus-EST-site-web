import { Link } from 'react-router-dom'

export default function PageHead({ title, heading, intro }) {
  return (
    <div className="wrap ph">
      <div className="crumb"><Link to="/">Accueil</Link> / {title}</div>
      <h1 tabIndex={-1}>{heading ?? title}</h1>
      <p>{intro}</p>
    </div>
  )
}