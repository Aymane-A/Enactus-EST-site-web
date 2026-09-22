import { Link } from 'react-router-dom'
import Bird from './Bird.jsx'
import { site } from '../data.js'

const LABELS = { instagram: 'Instagram', linkedin: 'LinkedIn', facebook: 'Facebook' }

export default function Footer() {
  const socials = Object.entries(site.socials ?? {}).filter(([, url]) => url)

  return (
    <footer>
      <div className="wrap">
        <div>
          <div className="fbrand">
            <Bird />
            <span>Enactus<small>EST Tétouan</small></span>
          </div>
          <p style={{ maxWidth: '36ch', marginTop: 18 }}>{site.tagline}</p>
        </div>
        <div>
          <h3>Pages</h3>
          <Link to="/a-propos">À propos</Link>
          <Link to="/projets">Projets</Link>
          <Link to="/equipe">Équipe</Link>
          <Link to="/actualites">Actualités</Link>
        </div>
        <div>
          <h3>Réseaux</h3>
          {socials.length === 0 && <span className="off">Bientôt</span>}
          {socials.map(([name, url]) => (
            <a key={name} href={url} target="_blank" rel="noopener noreferrer">{LABELS[name] ?? name}</a>
          ))}
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </div>
    </footer>
  )
}