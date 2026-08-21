import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CookieBanner.css';

function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('ctrl-grip-cookie-consent');
    if (!consent) setVisible(true);
  }, []);

  function handleChoice(choice) {
    localStorage.setItem('ctrl-grip-cookie-consent', choice);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <p className="cookie-banner__text">
        Usamos cookies esenciales para el funcionamiento de la tienda y el carrito. Consulta
        nuestra <Link to="/privacy-policy">Política de Privacidad</Link>.
      </p>
      <div className="cookie-banner__actions">
        <button className="cookie-banner__btn cookie-banner__btn--ghost" onClick={() => handleChoice('rejected')}>
          Rechazar
        </button>
        <button className="cookie-banner__btn" onClick={() => handleChoice('accepted')}>
          Aceptar
        </button>
      </div>
    </div>
  );
}

export default CookieBanner;