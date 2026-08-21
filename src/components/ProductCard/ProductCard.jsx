import { Link } from 'react-router-dom';
import ProductImage from '../ProductImage/ProductImage';
import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-card__image-wrap">
        <ProductImage src={product.image} alt={product.name} className="product-card__image" />
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