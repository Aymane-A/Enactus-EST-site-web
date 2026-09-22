import PageHead from '../components/PageHead.jsx'
import Photo from '../components/Photo.jsx'
import SoonProject from '../components/SoonProject.jsx'
import { projects } from '../data.js'

function Details({ p }) {
  return (
    <dl>
      <dt>Problème</dt><dd>{p.problem}</dd>
      <dt>Solution</dt><dd>{p.solution}</dd>
      {p.impact && (<><dt>Impact</dt><dd>{p.impact}</dd></>)}
    </dl>
  )
}

export default function Projects() {
  const [first, ...rest] = projects
  return (
    <>
      <PageHead title="Projets" heading="Nos projets" intro="Chaque projet répond à un besoin précis de notre région." />
      <section className="blk" style={{ paddingTop: 40 }}>
        <div className="wrap">
          {!first && <SoonProject />}
          {first && (
            <article className="feat rv">
              <Photo src={first.image} alt={first.title} label="Photo du projet à ajouter" />
              <div><h3>{first.title}</h3><Details p={first} /></div>
            </article>
          )}
          {rest.length > 0 && (
            <div className="pjs">
              {rest.map(p => (
                <article className="pj rv" key={p.id}>
                  <Photo src={p.image} alt={p.title} label="Photo à ajouter" />
                  <h3>{p.title}</h3><Details p={p} />
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}