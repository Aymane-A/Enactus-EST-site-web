import { Link } from 'react-router-dom'

const Icon = ({ children }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
)

const items = [
  {
    to: '/formulaires',
    label: 'Formulaires',
    sub: 'Postuler, devenir membre',
    icon: (
      <Icon>
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
        <path d="M14 3v5h5M9 13h6M9 17h6" />
      </Icon>
    ),
  },
  {
    href: 'https://instagram.com/enactusestt',
    label: 'Instagram',
    sub: '@enactusestt',
    icon: (
      <Icon>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" />
      </Icon>
    ),
  },
  {
    href: 'https://www.linkedin.com/company/enactus-est-t%C3%A9touan',
    label: 'LinkedIn',
    sub: 'Enactus EST Tétouan',
    icon: (
      <Icon>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M8 11v5M8 8v.01M12 16v-5M12 13a2.5 2.5 0 0 1 5 0v3" />
      </Icon>
    ),
  },
  {
    href: 'https://www.facebook.com/share/1F7fXQtZSL/',
    label: 'Facebook',
    sub: 'Enactus EST Tétouan',
    icon: (
      <Icon>
        <path d="M15 3h-2.5A3.5 3.5 0 0 0 9 6.5V9H6.5v3H9v9h3v-9h2.5l.5-3H12V6.5a.5.5 0 0 1 .5-.5H15z" />
      </Icon>
    ),
  },
  {
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=enactus.estt@gmail.com',
    label: 'Email',
    sub: 'enactus.estt@gmail.com',
    icon: (
      <Icon>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </Icon>
    ),
  },
]

function Card({ item }) {
  const inner = (
    <>
      <span className="ico">{item.icon}</span>
      <span>
        <b>{item.label}</b>
        <span className="sub">{item.sub}</span>
      </span>
      <span className="arr" aria-hidden="true">→</span>
    </>
  )
  if (item.to) {
    return <Link className="lcard" to={item.to}>{inner}</Link>
  }
  const external = item.href.startsWith('http')
  return (
    <a
      className="lcard"
      href={item.href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {inner}
    </a>
  )
}

export default function Links() {
  return (
    <>
      <div className="wrap ph">
        <div className="crumb">
          <Link to="/">Accueil</Link> / Liens
        </div>
        <h1 tabIndex={-1}>Liens</h1>
        <p>Retrouve ici tous les liens utiles d'Enactus EST Tétouan.</p>
      </div>
      <section className="blk" style={{ paddingTop: 24 }}>
        <div className="wrap">
          <div className="lgrid">
            {items.map(item => (
              <Card key={item.label} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}