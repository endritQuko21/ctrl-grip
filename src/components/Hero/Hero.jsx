import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  return (
    <section className="hero traction-pattern">
      <div className="hero__inner">
        <span className="hero__eyebrow">ANTI-SLIP FOOTBALL GEAR</span>

        <h1 className="hero__headline">
          TAKE <span className="key-highlight">[CONTROL]</span><br />
          OF THE GAME
        </h1>

        <p className="hero__subtext">
          Calcetines antideslizantes, espinilleras y tape diseñados para que
          nada se interponga entre tú y el balón.
        </p>

        <div className="hero__actions">
          <Link to="/shop" className="hero__cta">Ver colección</Link>
          <Link to="/technology" className="hero__cta hero__cta--ghost">
            Nuestra tecnología
          </Link>
        </div>
      </div>

      <div className="hero__stats">
        <div className="hero__stat">
          <span className="hero__stat-number">45+</span>
          <span className="hero__stat-label">países</span>
        </div>
        <div className="hero__stat">
          <span className="hero__stat-number">500K+</span>
          <span className="hero__stat-label">jugadores</span>
        </div>
        <div className="hero__stat">
          <span className="hero__stat-number">100%</span>
          <span className="hero__stat-label">grip garantizado</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;