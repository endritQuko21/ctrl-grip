import { Link } from 'react-router-dom';
import { categories } from '../../data/categories';
import { getProductsByCategory } from '../../data/products';
import ProductImage from '../ProductImage/ProductImage';
import './CategoryGrid.css';

function CategoryGrid() {
  return (
    <section className="category-grid">
      <div className="category-grid__header">
        <div>
          <span className="category-grid__eyebrow">
            <span className="category-grid__eyebrow-dot" />
            SHOP BY CATEGORY
          </span>
          <h2 className="category-grid__title">Equípate de pies a cabeza</h2>
        </div>

        <Link to="/shop" className="category-grid__view-all">
          Ver toda la tienda
          <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </Link>
      </div>

      <div className="category-grid__list">
        {categories.map((category) => {
          const count = getProductsByCategory(category.id).length;

          return (
            <Link key={category.id} to={category.path} className="category-card">
              <div className="category-card__image-wrap">
                <ProductImage src={category.image} alt={category.name} className="category-card__image" />
                <span className="category-card__scrim" aria-hidden="true" />
              </div>

              <span className="category-card__count">
                {count} producto{count !== 1 ? 's' : ''}
              </span>

              <div className="category-card__content">
                <h3 className="category-card__name">{category.name}</h3>
                <p className="category-card__desc">{category.description}</p>
              </div>

              <span className="category-card__arrow">
                <svg viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 12L12 4M6 4h6v6" />
                </svg>
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default CategoryGrid;