import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Bird from '../components/Bird.jsx'
import Photo from '../components/Photo.jsx'
import SoonProject from '../components/SoonProject.jsx'
import { projects, site } from '../data.js'

// Met ta photo du campus dans src/assets sous le nom "campus.jpg" (ou .jpeg, .png, .webp).
// Si le fichier n'existe pas, un emplacement gris s'affiche à la place.
const campus = Object.values(
  import.meta.glob('../assets/campus.{jpg,jpeg,png,webp}', { eager: true, query: '?url', import: 'default' })
)[0]

export default function Home() {
  // L'oiseau ne vole qu'une fois par session
  const [seen] = useState(() => { try { return sessionStorage.getItem('flew') === '1' } catch { return false } })
  useEffect(() => { try { sessionStorage.setItem('flew', '1') } catch {} }, [])
  const [big, b, c] = projects // la grille demande 3 projets ; sinon, bloc "en préparation"

  return (
    <>
      <div className="hero">
        <div className="wrap">
          <div>
            <h1 tabIndex={-1}>Des étudiants de Tétouan qui entreprennent pour leur ville.</h1>
            <p>{site.tagline}</p>
            <Link className="btn" to="/projets">Voir les projets</Link>
            <Link className="link" to="/formulaires">Rejoindre le club</Link>          
          </div>
          <div className="stage">
            <Photo src={campus} position="36% 50%" label="Photo du campus à ajouter" alt="Le campus de l'EST Tétouan" priority />
            <Bird className={`flyer${seen ? ' done' : ''}`} />
          </div>
        </div>
      </div>

      <div className="band statement">
        <div className="wrap">
          <p>Nous partons d'un besoin réel à Tétouan. Nous <b>entreprenons</b> pour y répondre, nous <b>agissons</b> sur le terrain et nous <b>avançons ensemble</b> avec les enseignants et les professionnels qui nous accompagnent.</p>
        </div>
      </div>

      <section className="blk">
        <div className="wrap">
          <h2 className="t">Projets</h2>
          {projects.length < 3 ? (
            <div style={{ marginTop: 36 }}><SoonProject /></div>
          ) : (
            <div className="bento">
              <article className="cell a rv">
                <Photo src={big.image} position="50% 55%" alt={big.title} label="Photo du projet à ajouter" />
                <div className="txt"><h3>{big.title}</h3><p>{big.summary}</p></div>
              </article>
              <article className="cell b rv">
                <div><h3>{b.title}</h3><p>{b.summary}</p></div>
                <span className="tag">À compléter</span>
              </article>
              <article className="cell c rv">
                <div><h3>{c.title}</h3><p>{c.summary}</p></div>
                <span className="tag">À compléter</span>
              </article>
            </div>
          )}
        </div>
      </section>

      <section className="wrap wide rv">
        <Photo src={campus} position="50% 55%" label="Photo du campus à ajouter" alt="Façade de l'EST Tétouan" />
        <p className="cap">Le campus de l'EST Tétouan.</p>
      </section>
    </>
  )
}