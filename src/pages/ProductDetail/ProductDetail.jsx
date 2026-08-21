import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../../data/products';
import { useCart } from '../../hooks/CartContext';
import ProductImage from '../../components/ProductImage/ProductImage';
import { usePageMeta } from '../../hooks/usePageMeta';
import './ProductDetail.css';

const trustPoints = [
  { label: 'Envío 24-48h' },
  { label: 'Devolución 14 días' },
  { label: 'Pago seguro' },
];

function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="product-detail__accordion-item">
      <button
        className="product-detail__accordion-trigger"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {title}
        <span className={`product-detail__accordion-icon ${open ? 'product-detail__accordion-icon--open' : ''}`}>+</span>
      </button>
      {open && <div className="product-detail__accordion-body">{children}</div>}
    </div>
  );
}

function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();

  const [size, setSize] = useState(product?.sizes?.[0] || null);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  usePageMeta({
    title: product?.name,
    description: product?.description,
  });

  if (!product) {
    return (
      <div className="product-detail product-detail--empty">
        <p>Producto no encontrado.</p>
        <Link to="/shop" className="product-detail__back">← Volver a la tienda</Link>
      </div>
    );
  }

  function handleAddToCart() {
    addItem(product, size, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="product-detail">
      <div className="product-detail__container">
        <nav className="product-detail__breadcrumb">
          <Link to="/">Inicio</Link>
          <span>/</span>
          <Link to="/shop">Tienda</Link>
          <span>/</span>
          <span className="product-detail__breadcrumb-current">{product.name}</span>
        </nav>

        <div className="product-detail__layout">
          <div className="product-detail__gallery">
            <div className="product-detail__image-wrap">
              <ProductImage src={product.image} alt={product.name} className="product-detail__image" />
            </div>
          </div>

          <div className="product-detail__info">
            <span className="product-detail__category">{product.category}</span>
            <h1 className="product-detail__name">{product.name}</h1>
            <span className="product-detail__price">{product.price.toFixed(2)} €</span>
            <p className="product-detail__desc">{product.description}</p>

            {product.sizes.length > 0 && (
              <div className="product-detail__sizes">
                <div className="product-detail__label-row">
                  <span className="product-detail__label">Talla</span>
                  <button className="product-detail__size-guide">Guía de tallas</button>
                </div>
                <div className="product-detail__size-list">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      className={`product-detail__size ${size === s ? 'product-detail__size--active' : ''}`}
                      onClick={() => setSize(s)}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="product-detail__purchase-row">
              <div className="product-detail__qty-control">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Restar">−</button>
                <span>{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} aria-label="Sumar">+</button>
              </div>

              <button className="product-detail__add-btn" onClick={handleAddToCart}>
                {added ? 'Añadido ✓' : 'Añadir al carrito'}
              </button>
            </div>

            <div className="product-detail__trust">
              {trustPoints.map((point) => (
                <span key={point.label} className="product-detail__trust-item">
                  <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M4 10l4 4 8-8" />
                  </svg>
                  {point.label}
                </span>
              ))}
            </div>

            <div className="product-detail__accordion">
              <AccordionItem title="Descripción" defaultOpen>
                <p>{product.description}</p>
              </AccordionItem>
              <AccordionItem title="Envío y devoluciones">
                <p>
                  Envío en 24-48h laborables. Devolución gratuita en 14 días desde
                  la recepción del pedido, sin necesidad de justificación.
                </p>
              </AccordionItem>
              <AccordionItem title="Cuidados">
                <p>
                  Lavado a máquina en frío, sin lejía. Secar al aire para conservar
                  la trama antideslizante de la suela.
                </p>
              </AccordionItem>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;