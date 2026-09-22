import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Team from './pages/Team.jsx'
import News from './pages/News.jsx'
import Forms from './pages/Forms.jsx'
import FormDetail from './pages/FormDetail.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import { forms, site } from './data.js'

const SITE_URL = 'https://enactus-tetouan.ma'

const titles = {
  '/': 'Accueil',
  '/a-propos': 'À propos',
  '/projets': 'Projets',
  '/equipe': 'Équipe',
  '/actualites': 'Actualités',
  '/formulaires': 'Formulaires',
  '/contact': 'Contact',
}

const descriptions = {
  '/': `${site.name} : ${site.tagline}`,
  '/a-propos': "Découvrez Enactus Tétouan : notre mission, nos valeurs et notre histoire au sein de l'EST Tétouan.",
  '/projets': "Les projets d'entrepreneuriat social portés par Enactus Tétouan.",
  '/equipe': "L'équipe étudiante qui anime Enactus Tétouan.",
  '/actualites': "Actualités, événements et réalisations d'Enactus Tétouan.",
  '/formulaires': "Formulaires d'adhésion et de participation aux activités d'Enactus Tétouan.",
  '/contact': "Contactez Enactus Tétouan.",
}

function pageMeta(pathname) {
  if (titles[pathname]) {
    return { title: titles[pathname], description: descriptions[pathname] }
  }
  if (pathname.startsWith('/formulaires/')) {
    const slug = pathname.slice('/formulaires/'.length)
    const form = forms.find(f => f.slug === slug)
    return {
      title: form?.title ?? 'Formulaire',
      description: form ? `${form.title} — formulaire Enactus Tétouan.` : "Formulaire Enactus Tétouan.",
    }
  }
  return { title: 'Page introuvable', description: "Cette page n'existe pas sur Enactus Tétouan." }
}

function setMeta(selector, attr, value) {
  const el = document.querySelector(selector)
  if (el) el.setAttribute(attr, value)
}

export default function App() {
  const location = useLocation()

  useEffect(() => {
    const { title, description } = pageMeta(location.pathname)
    const fullTitle = `${title} | ${site.name}`
    const url = `${SITE_URL}${location.pathname}`

    document.title = fullTitle
    setMeta('meta[name="description"]', 'content', description)
    setMeta('link[rel="canonical"]', 'href', url)
    setMeta('meta[property="og:title"]', 'content', fullTitle)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[property="og:url"]', 'content', url)
    setMeta('meta[name="twitter:title"]', 'content', fullTitle)
    setMeta('meta[name="twitter:description"]', 'content', description)

    window.scrollTo(0, 0)
    document.querySelector('main h1')?.focus({ preventScroll: true })

    const els = document.querySelectorAll('.rv:not(.in)')
    if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('in')); return }
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
    }), { threshold: 0.15 })
    els.forEach(el => {
      const i = [...el.parentElement.children].indexOf(el)
      el.style.setProperty('--d', Math.min(i, 5) * 0.09 + 's')
      io.observe(el)
    })
    return () => io.disconnect()
  }, [location.pathname])

  return (
    <>
      <a className="skip" href="#main">Aller au contenu</a>
      <Header />
      <main id="main" tabIndex={-1}>
        <div className="page" key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/projets" element={<Projects />} />
            <Route path="/equipe" element={<Team />} />
            <Route path="/actualites" element={<News />} />
            <Route path="/formulaires" element={<Forms />} />
            <Route path="/formulaires/:slug" element={<FormDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </>
  )
}