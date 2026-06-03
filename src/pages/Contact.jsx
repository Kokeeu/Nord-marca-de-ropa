import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Todos los campos son obligatorios.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Por favor ingresa un correo válido.')
      return
    }
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section className="contact">
      <div className="contact__grid">
        <div className="contact__intro">
          <span className="contact__eyebrow">— Contacto</span>
          <h1 className="contact__title">Ponte en contacto.</h1>
          <p className="contact__sub">
            Para prensa, ventas al por mayor, reparaciones o cualquier
            otra cosa. Respondemos en dos días laborables.
          </p>

          <div className="contact__details">
            <div className="contact__detail">
              <span className="contact__detail-label">Estudio</span>
              <span className="contact__detail-value">12 Långholmsgatan, Estocolmo</span>
            </div>
            <div className="contact__detail">
              <span className="contact__detail-label">Correo</span>
              <span className="contact__detail-value">hello@nord.studio</span>
            </div>
            <div className="contact__detail">
              <span className="contact__detail-label">Horario</span>
              <span className="contact__detail-value">Lun–Vie, 10:00–18:00 CET</span>
            </div>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          {sent ? (
            <div className="contact__success">
              <span className="contact__success-mark">—</span>
              <h2>Mensaje recibido.</h2>
              <p>Nos pondremos en contacto pronto.</p>
              <button
                type="button"
                className="ghost-link"
                onClick={() => setSent(false)}
              >
                Enviar otro <span className="ghost-link__arrow">→</span>
              </button>
            </div>
          ) : (
            <>
              <div className="contact__field">
                <label htmlFor="name" className="contact__label">Nombre</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  className="contact__input"
                  autoComplete="name"
                />
              </div>

              <div className="contact__field">
                <label htmlFor="email" className="contact__label">Correo</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="contact__input"
                  autoComplete="email"
                />
              </div>

              <div className="contact__field">
                <label htmlFor="message" className="contact__label">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={form.message}
                  onChange={handleChange}
                  className="contact__input contact__input--area"
                />
              </div>

              {error && <p className="contact__error">{error}</p>}

              <button type="submit" className="contact__submit">
                Enviar mensaje <span className="contact__submit-arrow">→</span>
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
