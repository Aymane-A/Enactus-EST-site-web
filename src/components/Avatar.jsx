// Silhouette anonyme (style "photo de profil par défaut") pour les membres sans photo.
// gender : 'homme', 'femme' ou 'hijab' (femme avec hijab). Sans gender : silhouette homme.
// La couleur suit le vert foncé du site (--acc-deep), en clair comme en sombre.
const SIL = { fill: 'var(--acc-deep)' }

const HOMME = 'M55.8,9.6 53.1,8.8 50.0,8.7 45.8,9.2 41.7,10.5 38.5,12.0 36.4,13.5 34.8,15.1 32.9,17.8 31.2,21.8 30.8,23.8 30.2,27.2 30.2,33.6 30.4,33.8 30.8,37.5 29.7,37.8 29.0,38.6 28.8,39.7 28.8,41.6 29.1,44.2 30.0,47.5 30.7,48.7 31.2,49.2 32.6,50.0 33.5,54.2 34.2,56.2 35.8,59.1 38.2,61.5 37.8,66.9 37.1,71.4 36.2,73.2 35.3,74.2 32.8,76.2 18.9,83.3 13.3,86.5 9.8,89.0 7.5,91.1 5.8,93.3 4.8,95.4 4.1,97.7 3.7,99.9 96.2,99.9 95.5,96.6 94.1,93.3 92.4,91.1 90.6,89.3 87.2,86.9 84.7,85.3 67.1,76.2 64.3,73.9 62.8,71.4 62.2,68.5 61.7,61.3 63.2,59.7 64.4,57.9 65.8,54.8 66.8,50.1 68.0,49.4 69.2,47.8 70.3,44.7 70.6,42.2 70.5,39.1 69.9,38.0 68.5,37.5 69.1,30.6 68.9,24.4 68.2,20.8 67.5,19.2 65.8,16.7 64.6,15.5 63.0,14.5 60.8,13.8 59.3,13.8 58.6,12.3 57.4,10.8Z'

const SHAPES = {
  homme: [HOMME],
  femme: ['M31 40C28 12 72 4 69 40C69 54 73 64 80 72C66 76 34 76 20 72C27 64 31 54 31 40Z', HOMME],
  hijab: ['M27 44C24 10 76 2 73 44C73 60 84 70 100 88V100H0V88C16 70 27 60 27 44Z'],
}

export default function Avatar({ gender }) {
  const paths = SHAPES[gender] ?? SHAPES.homme
  return (
    <svg className="avatar" viewBox="0 0 100 100" aria-hidden="true" focusable="false" style={{ display: 'block', width: '100%', height: 'auto' }}>
      {paths.map((d, i) => <path key={i} d={d} style={SIL} />)}
    </svg>
  )
}