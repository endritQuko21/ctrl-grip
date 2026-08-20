import { Link } from 'react-router-dom';
import './TechFeature.css';

function TechFeature() {
  return (
    <section className="tech-feature">
      <div className="tech-feature__visual traction-pattern">
        <div className="tech-feature__badge">
          <span className="tech-feature__badge-number">100%</span>
          <span className="tech-feature__badge-label">GRIP</span>
        </div>
      </div>

      <div className="tech-feature__content">
        <span className="tech-feature__eyebrow">HIGH-GRIP TECHNOLOGY</span>
        <h2 className="tech-feature__title">
          Siente el <span className="key-highlight">[control]</span> real del balón
        </h2>
        <p className="tech-feature__text">
          Nuestra trama de silicona en la suela se adapta a la forma de tu pie
          dentro de la bota, eliminando el deslizamiento interno que te hace
          perder potencia y precisión en cada gesto técnico.
        </p>

        <ul className="tech-feature__list">
          <li>Cero deslizamiento dentro de la bota</li>
          <li>Mayor sensibilidad y control del balón</li>
          <li>Tejido transpirable de compresión gradual</li>
        </ul>

        <Link to="/technology" className="tech-feature__cta">
          Descubre la tecnología →
        </Link>
      </div>
    </section>
  );
}

export default TechFeature;