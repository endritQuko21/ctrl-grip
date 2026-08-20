import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../../data/products';
import { useCart } from '../../hooks/CartContext';
import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const product = getProductById(id);
  const { addItem } = useCart();

  const [size, setSize] = useState(product?.sizes?.[0] || null);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

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
    <section className="product-detail">
      <div className="product-detail__image-wrap">
        <img src={product.image} alt={product.name} className="product-detail__image" />
      </div>

      <div className="product-detail__info">
        <span className="product-detail__category">{product.category}</span>
        <h1 className="product-detail__name">{product.name}</h1>
        <span className="product-detail__price">{product.price.toFixed(2)} €</span>
        <p className="product-detail__desc">{product.description}</p>

        {product.sizes.length > 0 && (
          <div className="product-detail__sizes">
            <span className="product-detail__label">Talla</span>
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

        <div className="product-detail__qty">
          <span className="product-detail__label">Cantidad</span>
          <div className="product-detail__qty-control">
            <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Restar">−</button>
            <span>{qty}</span>
            <button onClick={() => setQty((q) => q + 1)} aria-label="Sumar">+</button>
          </div>
        </div>

        <button className="product-detail__add-btn" onClick={handleAddToCart}>
          {added ? 'Añadido ✓' : 'Añadir al carrito'}
        </button>
      </div>
    </section>
  );
}

export default ProductDetail;