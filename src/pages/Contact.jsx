import { useState } from 'react'

export default function Contact() {
  const [envoye, setEnvoye] = useState(false)

  return (
    <div className="container">
      <header className="page-head">
        <p className="eyebrow">Contact</p>
        <h1>Parlons de votre projet.</h1>
      </header>

      <div className="contact">
        <div className="contact__info">
          <p className="lead">
            Quelques lignes suffisent : qui vous êtes, ce que vous aimeriez,
            et pour quand. Je réponds sous 48 heures ouvrées.
          </p>
          <dl>
            <div><dt>E-mail</dt><dd>bonjour@ressac.example</dd></div>
            <div><dt>Téléphone</dt><dd>01 23 45 67 89</dd></div>
            <div><dt>Atelier</dt><dd>12 rue des Tanneurs<br />Sur rendez-vous</dd></div>
          </dl>
        </div>

        {envoye ? (
          <div className="form form--done" role="status">
            <h2>Merci&nbsp;!</h2>
            <p>Votre messagerie s'ouvre avec le message prêt à partir. Il ne reste qu'à l'envoyer.</p>
            <button className="link-arrow" onClick={() => setEnvoye(false)}>Écrire un autre message</button>
          </div>
        ) : (
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault()
              // Pas de serveur : on prépare l'e-mail dans la messagerie du visiteur.
              const d = new FormData(e.currentTarget)
              const sujet = `${d.get('type')} — ${d.get('nom')}`
              const corps = `${d.get('message')}\n\n${d.get('nom')}\n${d.get('email')}`
              window.location.href = `mailto:bonjour@ressac.example?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(corps)}`
              setEnvoye(true)
            }}
          >
            <label>
              Votre nom
              <input name="nom" required autoComplete="name" />
            </label>
            <label>
              Votre e-mail
              <input name="email" type="email" required autoComplete="email" />
            </label>
            <label>
              Type de projet
              <select name="type" defaultValue="Site vitrine">
                <option>Site vitrine</option>
                <option>Boutique en ligne</option>
                <option>Refonte</option>
                <option>Autre chose</option>
              </select>
            </label>
            <label>
              Votre message
              <textarea name="message" rows="6" required />
            </label>
            <button type="submit" className="button">Envoyer</button>
          </form>
        )}
      </div>
    </div>
  )
}
