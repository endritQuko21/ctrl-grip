import { useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../../data/navLinks';
import './Footer.css';

function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <footer className="footer">
      <div className="footer__newsletter">
        <h2 className="footer__newsletter-title">
          Únete y llévate un <span className="key-highlight">10%</span> de descuento
        </h2>
        {submitted ? (
          <p className="footer__newsletter-success">¡Listo! Revisa tu correo.</p>
        ) : (
          <form className="footer__newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="footer__newsletter-input"
            />
            <button type="submit" className="footer__newsletter-btn">Suscribirme</button>
          </form>
        )}
      </div>

      <div className="footer__main">
        <div className="footer__brand">
          <span className="footer__logo">CTRL-GRIP</span>
          <p className="footer__tagline">Take Control of the Game</p>
        </div>

        <div className="footer__col">
          <h3 className="footer__col-title">Shop</h3>
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className="footer__link">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="footer__col">
          <h3 className="footer__col-title">Empresa</h3>
          <Link to="/technology" className="footer__link">Tecnología</Link>
          <Link to="/contact" className="footer__link">Contacto</Link>
          <Link to="/returns-policy" className="footer__link">Devoluciones</Link>
        </div>

        <div className="footer__col">
          <h3 className="footer__col-title">Legal</h3>
          <Link to="/legal-notice" className="footer__link">Aviso Legal</Link>
          <Link to="/privacy-policy" className="footer__link">Privacidad</Link>
          <Link to="/terms-conditions" className="footer__link">Términos</Link>
        </div>

        <div className="footer__col">
          <h3 className="footer__col-title">Síguenos</h3>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer__link">Instagram</a>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="footer__link">TikTok</a>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} CTRL-GRIP. Todos los derechos reservados.</span>
      </div>
    </footer>
  );
}

export default Footer;