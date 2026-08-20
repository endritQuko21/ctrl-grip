import { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useCart } from '../../hooks/CartContext';
import './OrderConfirmation.css';

function OrderConfirmation() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const { clearCart } = useCart();

  useEffect(() => {
    if (sessionId) clearCart();
  }, [sessionId]);

  return (
    <section className="order-confirmation">
      <span className="order-confirmation__icon">✓</span>
      <h1 className="order-confirmation__title">Pedido confirmado</h1>
      <p className="order-confirmation__text">
        Gracias por tu compra. Te hemos enviado un email con los detalles del pedido.
      </p>
      <Link to="/shop" className="order-confirmation__cta">Seguir comprando →</Link>
    </section>
  );
}

export default OrderConfirmation;