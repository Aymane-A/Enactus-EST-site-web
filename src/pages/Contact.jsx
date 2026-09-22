import { useState } from 'react'
import PageHead from '../components/PageHead.jsx'
import { site } from '../data.js'

export default function Contact() {
  const [f, setF] = useState({ nom: '', mail: '', fil: '', mot: '' })
  const [err, setErr] = useState('')
  const set = k => e => setF({ ...f, [k]: e.target.value })

  function send() {
    if (!f.nom.trim() || !/^\S+@\S+\.\S+$/.test(f.mail.trim())) {
      setErr('Renseigne ton nom et un email valide.')
      return
    }
    setErr('')
    const body = `Nom: ${f.nom}\nEmail: ${f.mail}\nFilière: ${f.fil}\n\n${f.mot}`
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(`Message ${site.name}`)}&body=${encodeURIComponent(body)}`
  }

  return (
    <>
      <PageHead title="Contact" heading="Contact et adhésion" intro="Écris-nous ou candidate pour rejoindre le club." />
      <section className="blk" style={{ paddingTop: 24 }}>
        <div className="wrap two">
          <div style={{ maxWidth: 560 }}>
            <label htmlFor="nom">Nom complet</label>
            <input id="nom" autoComplete="name" value={f.nom} onChange={set('nom')} />
            <label htmlFor="mail">Email</label>
            <input id="mail" type="email" autoComplete="email" value={f.mail} onChange={set('mail')} />
            <label htmlFor="fil">Filière</label>
            <input id="fil" value={f.fil} onChange={set('fil')} />
            <label htmlFor="mot">Message</label>
            <textarea id="mot" rows="5" value={f.mot} onChange={set('mot')} />
            <p className="err" role="alert">{err}</p>
            <button className="btn" type="button" style={{ marginTop: 12 }} onClick={send}>Envoyer par email</button>
          </div>
          <aside className="side">
            <h3>Coordonnées</h3>
            <p>EST Tétouan<br />{site.email}</p>
          </aside>
        </div>
      </section>
    </>
  )
}