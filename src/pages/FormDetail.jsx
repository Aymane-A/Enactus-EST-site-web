import { useParams, Link } from 'react-router-dom'
import PageHead from '../components/PageHead.jsx'
import EmptyState from '../components/EmptyState.jsx'
import IntegrationForm from '../components/IntegrationForm.jsx'
import { site, forms } from '../data.js'

// Ajoute une entrée ici à chaque fois qu'un nouveau TYPE de formulaire est créé
// (un composant différent d'IntegrationForm, avec d'autres champs).
const FORM_COMPONENTS = {
  integration: IntegrationForm,
}

export default function FormDetail() {
  const { slug } = useParams()
  const form = forms.find(f => f.slug === slug)

  if (!form) {
    return (
      <>
        <PageHead title="Formulaires" heading="Formulaire introuvable" />
        <section className="blk" style={{ paddingTop: 24 }}>
          <div className="wrap">
            <EmptyState title="Ce formulaire n'existe pas ou plus" text="Retourne à la liste des formulaires disponibles." />
            <p style={{ marginTop: 20 }}>
              <Link to="/formulaires" style={{ textDecoration: 'underline' }}>Voir tous les formulaires</Link>
            </p>
          </div>
        </section>
      </>
    )
  }

  const FormComponent = FORM_COMPONENTS[form.kind]

  return (
    <>
      <PageHead title="Formulaires" heading={form.title} intro={form.summary} />
      <section className="blk" style={{ paddingTop: 24 }}>
        <div className="wrap two">
          <div style={{ maxWidth: 640 }}>
            {!form.open ? (
              <EmptyState
                title="Ce formulaire est fermé pour le moment"
                text="Suis nos réseaux ou écris-nous pour être prévenu de la prochaine session."
              />
            ) : form.googleFormUrl ? (
              <>
                <iframe
                  title={form.title}
                  src={form.googleFormUrl}
                  style={{ width: '100%', height: 1400, border: 0, borderRadius: 'var(--r)' }}
                >
                  Chargement…
                </iframe>
                <p className="cap"><a href={form.googleFormUrl} target="_blank" rel="noopener noreferrer">Ouvrir le formulaire dans un nouvel onglet</a></p>
              </>
            ) : FormComponent ? (
              <FormComponent form={form} />
            ) : (
              <EmptyState title="Ce formulaire n'est pas encore configuré" text={`Écris-nous à ${site.email}.`} />
            )}
          </div>
          <aside className="side">
            <h3>Bon à savoir</h3>
            {form.deadline && <p><b>Date limite :</b> {form.deadline}</p>}
            <p>Une question avant de candidater ? <Link to="/contact" style={{ textDecoration: 'underline' }}>Écris-nous</Link>.</p>
          </aside>
        </div>
      </section>
    </>
  )
}