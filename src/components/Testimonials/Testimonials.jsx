import { testimonials } from '../../data/testimonials';
import './Testimonials.css';

function Stars({ count }) {
  return (
    <div className="testimonial-card__stars" aria-label={`${count} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? 'filled' : ''}>★</span>
      ))}
    </div>
  );
}

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__header">
        <span className="testimonials__eyebrow">TRUSTED BY PLAYERS</span>
        <h2 className="testimonials__title">Lo que dicen los jugadores</h2>
      </div>

      <div className="testimonials__list">
        {testimonials.map((t) => (
          <article key={t.id} className="testimonial-card">
            <Stars count={t.rating} />
            <p className="testimonial-card__text">"{t.text}"</p>
            <div className="testimonial-card__footer">
              <span className="testimonial-card__name">{t.name}</span>
              <span className="testimonial-card__product">{t.product}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;