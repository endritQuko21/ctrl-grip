import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/CartContext';
import ProductImage from '../../components/ProductImage/ProductImage';
import './Cart.css';

function Cart() {
  const { items, updateQty, removeItem, totalPrice } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleCheckout() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error || 'Error desconocido');

      window.location.href = data.url;
    } catch (err) {
      setError('No se pudo iniciar el pago. Inténtalo de nuevo.');
      setLoading(false);
    }
  }

  if (items.length === 0) {
    return (
      <div className="cart cart--empty">
        <h1 className="cart__title">Tu carrito está vacío</h1>
        <Link to="/shop" className="cart__cta">Ir a la tienda →</Link>
      </div>
    );
  }

  return (
    <section className="cart">
      <h1 className="cart__title">Tu carrito</h1>

      <div className="cart__list">
        {items.map((item) => (
          <div key={item.lineId} className="cart-item">
            <ProductImage src={item.image} alt={item.name} className="cart-item__image" />

            <div className="cart-item__info">
              <span className="cart-item__name">{item.name}</span>
              {item.size && <span className="cart-item__size">Talla: {item.size}</span>}
              <span className="cart-item__price">{item.price.toFixed(2)} €</span>
            </div>

            <div className="cart-item__qty">
              <button onClick={() => updateQty(item.lineId, item.qty - 1)} aria-label="Restar">−</button>
              <span>{item.qty}</span>
              <button onClick={() => updateQty(item.lineId, item.qty + 1)} aria-label="Sumar">+</button>
            </div>

            <span className="cart-item__subtotal">{(item.price * item.qty).toFixed(2)} €</span>

            <button className="cart-item__remove" onClick={() => removeItem(item.lineId)} aria-label="Eliminar">
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className="cart__summary">
        <div className="cart__summary-row">
          <span>Total</span>
          <span className="cart__summary-total">{totalPrice.toFixed(2)} €</span>
        </div>

        {error && <p className="cart__error">{error}</p>}

        <button className="cart__checkout-btn" onClick={handleCheckout} disabled={loading}>
          {loading ? 'Redirigiendo...' : 'Proceder al pago'}
        </button>
        <Link to="/shop" className="cart__continue">Seguir comprando</Link>
      </div>
    </section>
  );
}

export default Cart;