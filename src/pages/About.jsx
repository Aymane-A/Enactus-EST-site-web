import { Link } from 'react-router-dom'
import PageHead from '../components/PageHead.jsx'
import Photo from '../components/Photo.jsx'
import { steps } from '../data.js'

// Photos : src/assets/entree.jpg et src/assets/maroc.jpg (sinon, un emplacement avec le motif s'affiche)
const entree = Object.values(
  import.meta.glob('../assets/entree.{jpg,jpeg,png,webp}', { eager: true, query: '?url', import: 'default' })
)[0]
const maroc = Object.values(
  import.meta.glob('../assets/maroc.{jpg,jpeg,png,webp}', { eager: true, query: '?url', import: 'default' })
)[0]

const stats = [
  { n: '33', label: 'Pays', icon: 'flag' },
  { n: '42 450', label: 'Membres étudiants chaque année', icon: 'grad' },
  { n: '1 064', label: 'Programmes sur les campus', icon: 'book' },
  { n: '1 626', label: "Projets d'équipe", icon: 'check' },
  { n: '13,1M', label: 'Vies impactées', icon: 'people' },
]

const cycle = [
  { title: 'Étudiants', text: "Tout commence par des étudiants motivés à s'engager." },
  { title: 'Idées', text: 'Ces étudiants imaginent des idées pour répondre à un besoin réel.' },
  { title: 'Projets', text: 'Les idées deviennent des projets concrets, testés sur le terrain.' },
  { title: 'Entrepreneuriat', text: 'Les projets prennent une forme entrepreneuriale et durable.' },
  { title: 'Impact', text: 'Un impact positif et mesurable pour la communauté.' },
]

const icons = {
  flag: <path d="M5 21V4m0 0h11l-2 4 2 4H5" />,
  grad: <><path d="M12 3 2 8l10 5 10-5-10-5Z" /><path d="M6 10.5V16c0 1.5 2.5 3 6 3s6-1.5 6-3v-5.5" /></>,
  book: <><path d="M4 5.5C4 4.7 4.7 4 5.5 4H12v16H5.5A1.5 1.5 0 0 1 4 18.5v-13Z" /><path d="M20 5.5c0-.8-.7-1.5-1.5-1.5H12v16h6.5a1.5 1.5 0 0 0 1.5-1.5v-13Z" /></>,
  check: <><rect x="4" y="3" width="16" height="18" rx="2" /><path d="m9 12 2 2 4-4" /></>,
  people: <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3 20c0-3 2.5-5 6-5s6 2 6 5M14.5 20c.2-2.3 1.7-4 4-4.3 1.7.2 3 1.6 3 3.3" /></>,
}

export default function About() {
  return (
    <>
      <PageHead title="À propos" intro="Le club Enactus de l'EST Tétouan et le réseau dont il fait partie." />

      <section className="blk" style={{ paddingTop: 40 }}>
        <div className="wrap two">
          <div>
            <h2 className="t">Qu'est-ce qu'Enactus ?</h2>
            <p className="lead">Enactus est une communauté mondiale d'étudiants, d'universitaires et de chefs d'entreprise qui utilisent l'entrepreneuriat pour créer un impact réel et durable.</p>
            <h2 className="t" style={{ marginTop: 56 }}>Le parcours d'une équipe</h2>
            <ol className="tl">
              {steps.map(s => (
                <li className="rv" key={s.title}><b>{s.title}</b><span>{s.text}</span></li>
              ))}
            </ol>
            <h2 className="t" style={{ marginTop: 40 }}>Notre mission</h2>
            <p className="lead">Nous sommes des étudiants de l'EST Tétouan qui croient qu'une bonne idée devient utile quand elle est testée sur le terrain. Chaque projet du club part d'un besoin local et cherche un effet durable pour ceux qu'il touche.</p>
          </div>
          <aside className="side rv">
            <Photo src={entree} label="Photo de l'entrée à ajouter" alt="L'entrée de l'EST Tétouan" />
            <h3>Envie de participer ?</h3>
            <p>Tous les profils sont les bienvenus : développement, design, gestion, communication.</p>
            <Link className="btn" to="/contact">Écrire au club</Link>
          </aside>
        </div>
      </section>

      <section className="blk band">
        <div className="wrap">
          <h2 className="t">Enactus en chiffres</h2>
          <p className="lead">Le réseau international Enactus, dont fait partie notre chapitre.</p>
          <div className="stats">
            {stats.map(s => (
              <div className="stat rv" key={s.label}>
                <span className="ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    {icons[s.icon]}
                  </svg>
                </span>
                <b>{s.n}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="blk">
        <div className="wrap">
          <h2 className="t">Comment ça marche ?</h2>
          <ol className="tl">
            {cycle.map(c => (
              <li className="rv" key={c.title}><b>{c.title}</b><span>{c.text}</span></li>
            ))}
          </ol>
          <p className="lead" style={{ marginTop: 24, fontStyle: 'italic' }}>Chaque changement commence par une idée.</p>
        </div>
      </section>

      <section className="blk band">
        <div className="wrap feat">
          <div>
            <h2 className="t">Enactus au Maroc</h2>
            <p className="lead">Nous faisons partie d'Enactus Morocco, un réseau national qui connecte les étudiants à travers tout le pays. Ensemble, nous donnons aux étudiants les moyens de transformer leurs idées en solutions entrepreneuriales qui répondent à des défis réels et créent un changement positif dans leurs communautés.</p>
          </div>
          <Photo src={maroc} label="Photo Enactus World Cup à ajouter" alt="Délégation Enactus Morocco" />
        </div>
      </section>

      <section className="statement">
        <div className="wrap">
          <p>Notre chapitre commence ici : <b>construire l'équipe</b>, <b>créer des solutions</b> et laisser une empreinte positive sur la communauté de Tétouan.</p>
          <p className="cap" style={{ marginTop: 20 }}>Enactus EST Tétouan — 2026 · 2027</p>
          <Link className="btn" to="/formulaires" style={{ marginTop: 32 }}>Rejoindre l'aventure</Link>
        </div>
      </section>
    </>
  )
}