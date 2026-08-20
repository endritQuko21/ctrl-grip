import { Link } from 'react-router-dom';
import { categories } from '../../data/categories';
import './CategoryGrid.css';

function CategoryGrid() {
  return (
    <section className="category-grid">
      <div className="category-grid__header">
        <span className="category-grid__eyebrow">SHOP BY CATEGORY</span>
        <h2 className="category-grid__title">Equípate de pies a cabeza</h2>
      </div>

      <div className="category-grid__list">
        {categories.map((category) => (
          <Link key={category.id} to={category.path} className="category-card">
            <div className="category-card__image-wrap">
              <img src={category.image} alt={category.name} className="category-card__image" />
            </div>
            <div className="category-card__info">
              <h3 className="category-card__name">{category.name}</h3>
              <p className="category-card__desc">{category.description}</p>
              <span className="category-card__link">Ver todo →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CategoryGrid;