import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/CartContext';
import ProductImage from '../ProductImage/ProductImage';
import './ProductCard.css';

function ProductCard({ product }) {
  const { addItem } = useCart();

  function handleQuickAdd(e) {
    e.preventDefault();
    addItem(product, product.sizes?.[0] || null, 1);
  }

  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-card__image-wrap">
        <ProductImage src={product.image} alt={product.name} className="product-card__image" />

        <button className="product-card__quick-add" onClick={handleQuickAdd}>
          Añadir al carrito
        </button>
      </div>

      <div className="product-card__info">
        <span className="product-card__category">{product.category}</span>
        <h3 className="product-card__name">{product.name}</h3>
        <span className="product-card__price">{product.price.toFixed(2)} €</span>
      </div>
    </Link>
  );
}

export default ProductCard;