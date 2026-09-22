// L'oiseau origami du logo Enactus, en SVG (pas besoin d'image).
export default function Bird({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 230 230" aria-hidden="true" focusable="false">
      <path fill="#FEC121" d="M83 0V147H0L82 229L163 147H229Z" />
      <path fill="#D6A017" d="M79 148H84L83 226L79 218Z" />
      <path fill="#D6A017" d="M172 147L198 116L189 147Z" />
    </svg>
  )
}