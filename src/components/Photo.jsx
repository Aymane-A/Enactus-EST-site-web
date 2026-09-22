// Affiche une vraie photo si "src" est fourni, sinon un emplacement étiqueté.
// "position" règle le cadrage (object-position), ex. "36% 50%".
// "note" ajoute une petite étiquette dans l'angle (ex. "Illustration").
export default function Photo({ src, alt = '', label = 'Photo à ajouter', position, note, children }) {
  if (src) {
    return (
      <div className="img photo">
        <img src={src} alt={alt} style={position ? { objectPosition: position } : undefined} />
        {note && <span className="note">{note}</span>}
      </div>
    )
  }
  return (
    <div className="img" role="img" aria-label={`Emplacement : ${label}`}>
      {children ?? <span>{label}</span>}
    </div>
  )
}