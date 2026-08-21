import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getProductById } from '../../data/products';
import { useCart } from '../../hooks/CartContext';
import ProductImage from '../ProductImage/ProductImage';
import './Hero.css';

const featuredProduct = getProductById('grip-socks-pro');

const trustPoints = [
  {
    label: 'Envío 24-48h',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="1" y="7" width="13" height="9" rx="1" />
        <path d="M14 10h4l4 3.5V16h-8z" />
        <circle cx="6" cy="18.5" r="1.6" />
        <circle cx="17.5" cy="18.5" r="1.6" />
      </svg>
    ),
  },
  {
    label: 'Devolución 14 días',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 12a9 9 0 1 1 3 6.7" />
        <path d="M3 21v-6h6" />
      </svg>
    ),
  },
  {
    label: 'Pago seguro',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2l8 3.5v5.5c0 5-3.4 8.3-8 11-4.6-2.7-8-6-8-11V5.5z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

function Hero() {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleQuickAdd() {
    addItem(featuredProduct, featuredProduct.sizes[0], 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  return (
    <section className="hero">
      <span className="hero__ghost-text" aria-hidden="true">GRIP</span>
      <div className="hero__pattern traction-pattern" aria-hidden="true" />

      <div className="hero__announce">
        <div className="hero__announce-track">
          <span>ENVÍO GRATIS DESDE 40€</span>
          <span>·</span>
          <span>DEVOLUCIÓN GRATUITA EN 14 DÍAS</span>
          <span>·</span>
          <span>PAGO 100% SEGURO CON STRIPE</span>
          <span>·</span>
        </div>
      </div>

      <div className="hero__inner">
        <div className="hero__content">
          <span className="hero__eyebrow">NUEVA COLECCIÓN SS25</span>

          <h1 className="hero__headline">
            TAKE <span className="key-highlight">[CONTROL]</span>
            <br />
            OF THE GAME
          </h1>

          <p className="hero__subtext">
            Equipación técnica antideslizante para futbolistas que no quieren
            perder ni un gesto por culpa del material.
          </p>

          <div className="hero__actions">
            <Link to="/shop" className="hero__cta">
              Comprar ahora
              <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </Link>
            <Link to="/technology" className="hero__cta hero__cta--ghost">
              Cómo funciona el grip
            </Link>
          </div>

          <div className="hero__trust">
            {trustPoints.map((point) => (
              <div className="hero__trust-item" key={point.label}>
                <span className="hero__trust-icon">{point.icon}</span>
                <span>{point.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__visual">
          <Link to={`/product/${featuredProduct.id}`} className="hero__product-card">
            <span className="hero__product-ribbon">Más vendido</span>

            <div className="hero__product-image">
              <ProductImage src={featuredProduct.image} alt={featuredProduct.name} />
            </div>

            <div className="hero__product-info">
              <div className="hero__product-rating">
                <span className="hero__product-stars">★★★★★</span>
                <span className="hero__product-rating-count">(312)</span>
              </div>

              <span className="hero__product-name">{featuredProduct.name}</span>

              <div className="hero__product-price-row">
                <span className="hero__product-price">{featuredProduct.price.toFixed(2)} €</span>
                <span className="hero__product-price-old">
                  {(featuredProduct.price * 1.25).toFixed(2)} €
                </span>
              </div>

              <button
                type="button"
                className="hero__product-add"
                onClick={(e) => {
                  e.preventDefault();
                  handleQuickAdd();
                }}
              >
                {added ? 'Añadido ✓' : 'Añadir al carrito'}
              </button>
            </div>
          </Link>

          <div className="hero__social-proof">
            <span className="hero__social-proof-value">4.9</span>
            <span className="hero__social-proof-label">
              ★ valoración media
              <br />
              +8.400 pedidos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;