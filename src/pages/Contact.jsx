import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Stagger, Item, Button, ArrowButton, colors, ease } from '../components/motion.jsx'

// Bordure qui s'illumine au survol et au focus des champs.
const champ = {
  initial: { borderColor: colors.rule },
  whileHover: { borderColor: colors.inkSoft },
  whileFocus: { borderColor: colors.accent },
  transition: { duration: 0.2 },
}

export default function Contact() {
  const [envoye, setEnvoye] = useState(false)

  return (
    <div className="container">
      <Stagger as="header" className="page-head" onMount>
        <Item as="p" className="eyebrow">Contact</Item>
        <Item as="h1">Parlons de votre projet.</Item>
      </Stagger>

      <div className="contact">
        <Stagger className="contact__info" onMount delay={0.2}>
          <Item as="p" className="lead">
            Quelques lignes suffisent : qui vous êtes, ce que vous aimeriez,
            et pour quand. Je réponds sous 48 heures ouvrées.
          </Item>
          <dl>
            <Item><dt>E-mail</dt><dd>bonjour@ressac.example</dd></Item>
            <Item><dt>Téléphone</dt><dd>01 23 45 67 89</dd></Item>
            <Item><dt>Atelier</dt><dd>12 rue des Tanneurs<br />Sur rendez-vous</dd></Item>
          </dl>
        </Stagger>

        <AnimatePresence mode="wait" initial={false}>
          {envoye ? (
            <motion.div
              key="done"
              className="form form--done"
              role="status"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.35, ease }}
            >
              <h2>Merci&nbsp;!</h2>
              <p>Votre messagerie s'ouvre avec le message prêt à partir. Il ne reste qu'à l'envoyer.</p>
              <ArrowButton onClick={() => setEnvoye(false)}>Écrire un autre message</ArrowButton>
            </motion.div>
          ) : (
            <Stagger
              as="form"
              key="form"
              className="form"
              onMount
              delay={0.3}
              gap={0.07}
              exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.25 } }}
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
              <Item as="label">
                Votre nom
                <motion.input name="nom" required autoComplete="name" {...champ} />
              </Item>
              <Item as="label">
                Votre e-mail
                <motion.input name="email" type="email" required autoComplete="email" {...champ} />
              </Item>
              <Item as="label">
                Type de projet
                <motion.select name="type" defaultValue="Site vitrine" {...champ}>
                  <option>Site vitrine</option>
                  <option>Boutique en ligne</option>
                  <option>Refonte</option>
                  <option>Autre chose</option>
                </motion.select>
              </Item>
              <Item as="label">
                Votre message
                <motion.textarea name="message" rows="6" required {...champ} />
              </Item>
              <Item><Button type="submit">Envoyer</Button></Item>
            </Stagger>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
