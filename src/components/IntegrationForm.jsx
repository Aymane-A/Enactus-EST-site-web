import { useState } from 'react'
import { site } from '../data.js'

// Poles : une clé stable (indépendante de la langue) + un libellé par langue,
// pour que la sélection ne se perde pas quand on bascule FR <-> AR.
const POLE_KEYS = ['rh', 'com', 'events', 'social', 'design', 'video', 'unsure']
const POLE_LABELS = {
  fr: {
    rh: { name: 'Responsable Ressources humaines', desc: 'Recrutement, suivi et vie des membres du club.' },
    com: { name: 'Responsable Communication', desc: 'Rédaction et diffusion des messages du club.' },
    events: { name: 'Responsable Événementiel', desc: 'Organisation et logistique des événements du club.' },
    social: { name: 'Responsable Social Média', desc: 'Gestion des réseaux sociaux et du contenu du club.' },
    design: { name: 'Responsable Design', desc: 'Visuels, affiches et identité graphique des projets.' },
    video: { name: 'Éditeur vidéo', desc: 'Montage des vidéos du club pour les réseaux et les événements.' },
    unsure: { name: 'Je ne sais pas encore', desc: "Pas de souci, on t'aide à trouver ta place." },
  },
  ar: {
    rh: { name: 'مسؤول الموارد البشرية', desc: 'التوظيف ومتابعة حياة أعضاء النادي.' },
    com: { name: 'مسؤول التواصل', desc: 'كتابة ونشر رسائل النادي.' },
    events: { name: 'مسؤول الفعاليات', desc: 'تنظيم ولوجستيك فعاليات النادي.' },
    social: { name: 'مسؤول وسائل التواصل الاجتماعي', desc: 'تسيير شبكات النادي ومحتواها.' },
    design: { name: 'مسؤول التصميم', desc: 'تصاميم وملصقات والهوية البصرية للمشاريع.' },
    video: { name: 'مونتير الفيديو', desc: 'مونتاج فيديوهات النادي للشبكات والفعاليات.' },
    unsure: { name: 'لا أعرف بعد', desc: 'لا مشكلة، سنساعدك على إيجاد مكانك.' },
  },
}

const ANNEES = {
  fr: ['1ère année', '2ème année', '3ème année', 'Autre'],
  ar: ['السنة الأولى', 'السنة الثانية', 'السنة الثالثة', 'أخرى'],
}

const T = {
  fr: {
    langBtn: 'العربية',
    prenom: 'Prénom', nom: 'Nom', email: 'Email',
    emailHint: 'Utilise de préférence ton email institutionnel.',
    tel: 'Téléphone ou WhatsApp',
    opt: '(facultatif)', filiere: 'Filière', annee: 'Année', choisir: 'Choisir',
    polesLegend: "Pôles qui t'intéressent", polesHint: '(plusieurs choix possibles)',
    designerNote: 'Remarque : pour le pôle Design, il faut une connaissance intermédiaire de Photoshop ou de Canva.',
    videoNote: "Remarque : pour le pôle Éditeur vidéo, il faut une connaissance intermédiaire des outils de montage (CapCut, DaVinci Resolve, etc.).",
    motivation: 'Pourquoi veux-tu rejoindre Enactus ?',
    competences: 'Quelles sont tes compétences ?',
    experience: 'As-tu déjà une expérience dans ce domaine ?',
    apport: "Qu'est-ce que tu peux apporter au club ?",
    idee: 'As-tu déjà une idée de projet à partager ?',
    consent: "J'accepte que le club utilise ces informations uniquement pour traiter ma candidature.",
    submit: 'Envoyer ma candidature', sending: 'Envoi…',
    sentTitle: 'Candidature envoyée',
    sentText: 'Merci ! Nous avons bien reçu ta candidature et nous te répondrons par email.',
    sentBtn: 'Envoyer une autre candidature',
    errName: 'Renseigne ton prénom et ton nom.',
    errEmail: 'Renseigne un email valide.',
    errFiliere: 'Renseigne ta filière.',
    errMotivation: 'Explique-nous pourquoi tu veux rejoindre le club.',
    errCompetences: 'Renseigne tes compétences.',
    errExperience: 'Dis-nous si tu as déjà une expérience dans ce domaine.',
    errApport: 'Dis-nous ce que tu peux apporter au club.',
    errConsent: "Coche la case d'acceptation pour envoyer ta candidature.",
    errSend: email => `L'envoi a échoué. Réessaie, ou écris-nous à ${email}.`,
  },
  ar: {
    langBtn: 'Français',
    prenom: 'الاسم الشخصي', nom: 'الاسم العائلي', email: 'البريد الإلكتروني',
    emailHint: 'يفضل استعمال بريدك الإلكتروني المؤسساتي.',
    tel: 'الهاتف أو واتساب',
    opt: '(اختياري)', filiere: 'الشعبة', annee: 'السنة', choisir: 'اختر',
    polesLegend: 'الأقطاب التي تهمك', polesHint: '(يمكن اختيار أكثر من واحد)',
    designerNote: 'ملاحظة: لقطب التصميم، يجب توفر معرفة متوسطة ببرنامجي Photoshop و Canva.',
    videoNote: 'ملاحظة: لقطب تحرير الفيديو، يجب توفر معرفة متوسطة بأدوات المونتاج (CapCut، DaVinci Resolve، إلخ).',
    motivation: 'لماذا تريد الانضمام إلى Enactus؟',
    competences: 'ما هي مهاراتك؟',
    experience: 'هل لديك تجربة سابقة في هذا المجال؟',
    apport: 'ما الذي يمكنك أن تقدمه للنادي؟',
    idee: 'هل لديك فكرة مشروع تريد مشاركتها؟',
    consent: 'أوافق على أن يستخدم النادي هذه المعلومات فقط لمعالجة ترشيحي.',
    submit: 'إرسال ترشيحي', sending: 'جارٍ الإرسال…',
    sentTitle: 'تم إرسال الترشيح',
    sentText: 'شكرًا! لقد استلمنا ترشيحك وسنرد عليك عبر البريد الإلكتروني.',
    sentBtn: 'إرسال ترشيح آخر',
    errName: 'أدخل اسمك الشخصي والعائلي.',
    errEmail: 'أدخل بريدًا إلكترونيًا صحيحًا.',
    errFiliere: 'أدخل شعبتك.',
    errMotivation: 'أخبرنا لماذا تريد الانضمام إلى النادي.',
    errCompetences: 'أدخل مهاراتك.',
    errExperience: 'أخبرنا إن كانت لديك تجربة سابقة في هذا المجال.',
    errApport: 'أخبرنا بما يمكنك تقديمه للنادي.',
    errConsent: 'ضع علامة على الموافقة قبل إرسال الترشيح.',
    errSend: email => `فشل الإرسال. أعد المحاولة، أو راسلنا على ${email}.`,
  },
}

const VIDE = {
  prenom: '', nom: '', email: '', tel: '', filiere: '', annee: '',
  poles: [], motivation: '', competences: '', experience: '', apport: '', idee: '',
  consent: false, website: '',
}

// Formulaire de type "integration" : candidature avec pôles, motivation, compétences et idée de projet.
// Bilingue FR/AR : le bouton en haut bascule tout le formulaire (labels, pôles, erreurs) et son sens (RTL en arabe).
// Reçoit la config du formulaire (title, endpoint) depuis src/data.js via FormDetail.jsx,
// ce qui permet de réutiliser ce même composant pour plusieurs formulaires du même type.
export default function IntegrationForm({ form }) {
  const [lang, setLang] = useState('fr')
  const [f, setF] = useState(VIDE)
  const [err, setErr] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const t = T[lang]
  const poles = POLE_LABELS[lang]
  const annees = ANNEES[lang]

  const set = k => e => setF({ ...f, [k]: e.target.value })
  const togglePole = key =>
    setF({ ...f, poles: f.poles.includes(key) ? f.poles.filter(x => x !== key) : [...f.poles, key] })

  function validate() {
    if (!f.prenom.trim() || !f.nom.trim()) return t.errName
    if (!/^\S+@\S+\.\S+$/.test(f.email.trim())) return t.errEmail
    if (!f.filiere.trim()) return t.errFiliere
    if (!f.motivation.trim()) return t.errMotivation
    if (!f.competences.trim()) return t.errCompetences
    if (!f.experience.trim()) return t.errExperience
    if (!f.apport.trim()) return t.errApport
    if (!f.consent) return t.errConsent
    return ''
  }

  async function submit(e) {
    e.preventDefault()
    const problem = validate()
    if (problem) { setErr(problem); return }
    setErr('')
    if (f.website) return // champ caché : rempli seulement par les robots

    // On soumet toujours les libellés en français, pour que les candidatures
    // restent lisibles de façon homogène côté club, quelle que soit la langue utilisée.
    const data = {
      Prénom: f.prenom, Nom: f.nom, Email: f.email, Téléphone: f.tel, Filière: f.filiere,
      Année: f.annee, 'Pôles souhaités': f.poles.map(k => POLE_LABELS.fr[k].name).join(', '),
      Motivation: f.motivation, Compétences: f.competences, 'Expérience préalable': f.experience,
      'Ce qu\'il/elle peut apporter au club': f.apport, 'Idée de projet': f.idee,
    }

    // Sans point d'envoi configuré pour ce formulaire, on ouvre le mail du visiteur avec sa candidature.
    if (!form.endpoint) {
      const body = Object.entries(data).map(([k, v]) => `${k} : ${v}`).join('\n')
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(form.title)}&body=${encodeURIComponent(body)}`
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(form.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('envoi refusé')
      setStatus('sent')
      setF(VIDE)
    } catch {
      setStatus('idle')
      setErr(t.errSend(site.email))
    }
  }

  const dir = lang === 'ar' ? 'rtl' : 'ltr'

  if (status === 'sent') {
    return (
      <div className="ok" role="status" dir={dir}>
        <h3 style={{ fontSize: 26, marginBottom: 10 }}>{t.sentTitle}</h3>
        <p className="lead">{t.sentText}</p>
        <button className="btn" type="button" style={{ marginTop: 22 }} onClick={() => setStatus('idle')}>{t.sentBtn}</button>
      </div>
    )
  }

  return (
    <>
      <button type="button" className="lang-toggle" onClick={() => setLang(l => (l === 'fr' ? 'ar' : 'fr'))}>
        {t.langBtn}
      </button>
      <form onSubmit={submit} noValidate dir={dir}>
        <div className="row2">
          <div><label htmlFor="prenom">{t.prenom}</label><input id="prenom" autoComplete="given-name" value={f.prenom} onChange={set('prenom')} /></div>
          <div><label htmlFor="nom">{t.nom}</label><input id="nom" autoComplete="family-name" value={f.nom} onChange={set('nom')} /></div>
        </div>
        <div className="row2">
          <div>
            <label htmlFor="email">{t.email}</label>
            <input id="email" type="email" autoComplete="email" value={f.email} onChange={set('email')} />
            <small className="hint">{t.emailHint}</small>
          </div>
          <div><label htmlFor="tel">{t.tel} <span className="opt">{t.opt}</span></label><input id="tel" type="tel" autoComplete="tel" value={f.tel} onChange={set('tel')} /></div>
        </div>
        <div className="row2">
          <div><label htmlFor="filiere">{t.filiere}</label><input id="filiere" value={f.filiere} onChange={set('filiere')} /></div>
          <div>
            <label htmlFor="annee">{t.annee}</label>
            <select id="annee" value={f.annee} onChange={set('annee')}>
              <option value="">{t.choisir}</option>
              {annees.map(a => <option key={a}>{a}</option>)}
            </select>
          </div>
        </div>

        <fieldset>
          <legend>{t.polesLegend} <span className="opt">{t.polesHint}</span></legend>
          <div className="checks">
            {POLE_KEYS.map(key => (
              <label className="check" key={key}>
                <input type="checkbox" checked={f.poles.includes(key)} onChange={() => togglePole(key)} />
                <span>
                  <b>{poles[key].name}</b>
                  <small>{poles[key].desc}</small>
                </span>
              </label>
            ))}
          </div>
          {f.poles.includes('design') && (
            <p className="callout">{t.designerNote}</p>
          )}
          {f.poles.includes('video') && (
            <p className="callout">{t.videoNote}</p>
        )}
        </fieldset>

        <label htmlFor="motivation">{t.motivation}</label>
        <textarea id="motivation" rows="5" value={f.motivation} onChange={set('motivation')} />

        <label htmlFor="competences">{t.competences}</label>
        <textarea id="competences" rows="3" value={f.competences} onChange={set('competences')} />

        <label htmlFor="experience">{t.experience}</label>
        <textarea id="experience" rows="3" value={f.experience} onChange={set('experience')} />

        <label htmlFor="apport">{t.apport}</label>
        <textarea id="apport" rows="3" value={f.apport} onChange={set('apport')} />

        <label htmlFor="idee">{t.idee} <span className="opt">{t.opt}</span></label>
        <textarea id="idee" rows="3" value={f.idee} onChange={set('idee')} />

        {/* Anti-spam : champ invisible pour les humains */}
        <input className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" value={f.website} onChange={set('website')} name="website" />

        <label className="consent" htmlFor="consent">
          <input id="consent" type="checkbox" checked={f.consent} onChange={e => setF({ ...f, consent: e.target.checked })} />
          {t.consent}
        </label>

        <p className="err" role="alert">{err}</p>
        <button className="btn" type="submit" disabled={status === 'sending'} style={{ marginTop: 12 }}>
          {status === 'sending' ? t.sending : t.submit}
        </button>
      </form>
    </>
  )
}