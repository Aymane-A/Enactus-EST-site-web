import PageHead from '../components/PageHead.jsx'
import { news } from '../data.js'

export default function News() {
  return (
    <>
      <PageHead title="Actualités" intro="Ateliers, formations, compétitions et actions de terrain." />
      <section className="blk" style={{ paddingTop: 32 }}>
        <div className="wrap">
          <div className="news">
            {news.map(n => (
              <a className="rv" key={n.title} href={n.href ?? undefined}>
                <time>{n.date}</time><b>{n.title}</b><i>→</i>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}