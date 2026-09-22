import { Link } from 'react-router-dom'
import Photo from './Photo.jsx'
import { upcoming } from '../data.js'

// Affiché tant que le club n'a pas de projet à présenter.
export default function SoonProject() {
  return (
    <article className="feat soon rv">
      <Photo src={upcoming.image} position="50% 55%" note="Illustration" alt="Illustration : une idée qui prend forme" label="Illustration à ajouter" />
      <div>
        <span className="tag">En préparation</span>
        <h3>{upcoming.title}</h3>
        <p className="lead">{upcoming.text}</p>
        <Link className="btn" to="/contact" style={{ marginTop: 24 }}>Proposer un besoin local</Link>
      </div>
    </article>
  )
}