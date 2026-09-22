import { useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Bird from './Bird.jsx'

const links = [
  ['/', 'Accueil'],
  ['/a-propos', 'À propos'],
  ['/projets', 'Projets'],
  ['/equipe', 'Équipe'],
  ['/actualites', 'Actualités'],
  ['/formulaires', 'Formulaires'],
  ['/contact', 'Contact'],
]

export default function Header() {
  const ref = useRef(null)
  useEffect(() => {
    const onScroll = () => ref.current?.classList.toggle('sc', window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header ref={ref}>
      <div className="wrap">
        <Link className="logo" to="/">
          <Bird />
          Enactus EST Tétouan
        </Link>
        <nav aria-label="Navigation principale">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === '/'}>{label}</NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}