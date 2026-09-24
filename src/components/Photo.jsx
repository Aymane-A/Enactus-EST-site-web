// Affiche une vraie photo si "src" est fourni, sinon un emplacement étiqueté.
// "position" règle le cadrage (object-position), ex. "36% 50%".
// "note" ajoute une petite étiquette dans l'angle (ex. "Illustration").
// "priority" : à mettre sur l'image la plus visible au chargement (ex. hero) pour
// qu'elle soit chargée en priorité ; toutes les autres restent en lazy par défaut.
export default function Photo({ src, alt = '', label = 'Photo à ajouter', position, note, priority = false, children }) {
  if (src) {
    return (
      <div className="img photo">
        <img
          src={src}
          alt={alt}
          style={position ? { objectPosition: position } : undefined}
          loading={priority ? 'eager' : 'lazy'}
          fetchpriority={priority ? 'high' : 'auto'}
          decoding={priority ? 'sync' : 'async'}
        />
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