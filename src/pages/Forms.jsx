import { Link } from 'react-router-dom'
import PageHead from '../components/PageHead.jsx'
import EmptyState from '../components/EmptyState.jsx'
import { forms } from '../data.js'

export default function Forms() {
  return (
    <>
      <PageHead title="Formulaires" heading="Formulaires" intro="Retrouve ici tous les formulaires ouverts par le club." />
      <section className="blk" style={{ paddingTop: 24 }}>
        <div className="wrap">
          {forms.length === 0 ? (
            <EmptyState
              title="Aucun formulaire pour le moment"
              text="Reviens plus tard, ou écris-nous si tu cherches quelque chose de précis."
            />
          ) : (
            <div className="fgrid">
              {forms.map(form => (
                <Link className="fcard" key={form.slug} to={`/formulaires/${form.slug}`}>
                  <span className={`badge ${form.open ? 'on' : 'off'}`}>{form.open ? 'Ouvert' : 'Fermé'}</span>
                  <h3>{form.title}</h3>
                  <p>{form.summary}</p>
                  {form.deadline && <span className="cap">Date limite : {form.deadline}</span>}
                  <span className="fcard-cta">Voir le formulaire<span className="arr">→</span></span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}