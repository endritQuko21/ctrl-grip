import { Link } from 'react-router-dom';
import { usePageMeta } from '../../hooks/usePageMeta';
import './NotFound.css';

function NotFound() {
  usePageMeta({ title: 'Página no encontrada' });

  return (
    <section className="not-found traction-pattern">
      <span className="not-found__code">[404]</span>
      <h1 className="not-found__title">Fuera de juego</h1>
      <p className="not-found__text">
        La página que buscas no existe o se ha movido de sitio.
      </p>
      <Link to="/" className="not-found__cta">Volver al inicio</Link>
    </section>
  );
}

export default NotFound;