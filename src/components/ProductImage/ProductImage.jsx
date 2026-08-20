import { useState } from 'react';
import './ProductImage.css';

// Genera un color determinista a partir del nombre, para que cada
// producto tenga siempre el mismo gradiente (no cambia al recargar).
function colorFromString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash) % 360;
  return hue;
}

function ProductImage({ src, alt, className = '' }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    const hue = colorFromString(alt || 'CTRL-GRIP');
    const initial = (alt || '?').trim().charAt(0).toUpperCase();

    return (
      <div
        className={`product-image product-image--placeholder ${className}`}
        style={{
          background: `linear-gradient(135deg, hsl(${hue}, 45%, 16%), hsl(${hue}, 55%, 24%))`,
        }}
        role="img"
        aria-label={alt}
      >
        <span className="product-image__initial">{initial}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`product-image ${className}`}
      onError={() => setFailed(true)}
    />
  );
}

export default ProductImage;