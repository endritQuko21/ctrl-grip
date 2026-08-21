import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error();

      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="contact">
      <span className="contact__eyebrow">CONTACTO</span>
      <h1 className="contact__title">¿Hablamos?</h1>
      <p className="contact__subtext">
        Dudas sobre un pedido, una talla o cualquier cosa que necesites — te respondemos lo antes posible.
      </p>

      {status === 'success' ? (
        <p className="contact__success">¡Mensaje enviado! Te responderemos pronto.</p>
      ) : (
        <form className="contact__form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            value={form.name}
            onChange={handleChange}
            required
            className="contact__input"
          />
          <input
            type="email"
            name="email"
            placeholder="Tu email"
            value={form.email}
            onChange={handleChange}
            required
            className="contact__input"
          />
          <textarea
            name="message"
            placeholder="Tu mensaje"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="contact__textarea"
          />

          {status === 'error' && (
            <p className="contact__error">Hubo un problema al enviar el mensaje. Inténtalo de nuevo.</p>
          )}

          <button type="submit" className="contact__submit" disabled={status === 'loading'}>
            {status === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
          </button>
        </form>
      )}
    </section>
  );
}

export default Contact;