import PageHead from '../components/PageHead.jsx'
import Photo from '../components/Photo.jsx'
import EmptyState from '../components/EmptyState.jsx'
import Avatar from '../components/Avatar.jsx'
import { team } from '../data.js'

export default function Team() {
  return (
    <>
      <PageHead title="Équipe" heading="Notre équipe" intro="Les étudiants qui font vivre le club, avec leurs rôles." />
      <section className="blk" style={{ paddingTop: 40 }}>
        <div className="wrap">
          {team.length === 0 ? (
            <EmptyState
              title="L'équipe se présente bientôt"
              text="Les membres du bureau seront présentés ici. Envie de faire partie du club ? Écris-nous."
              cta="Rejoindre le club"
              to="/formulaires"
            />
          ) : (
            <div className="crew">
              {team.map(m => (
                <div className="who rv" key={m.role + m.name}>
                  <Photo src={m.image} alt={m.name ? `${m.name}, ${m.role}` : m.role} label={`Photo : ${m.name || m.role}`}><Avatar gender={m.gender} /></Photo>
                  <b>{m.name || m.role}</b>{m.name && <span>{m.role}</span>}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}