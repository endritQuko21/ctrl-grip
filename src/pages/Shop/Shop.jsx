import { useParams, Link } from 'react-router-dom';
import { categories } from '../../data/categories';
import { getProductsByCategory } from '../../data/products';
import ProductCard from '../../components/ProductCard/ProductCard';
import './Shop.css';
import { usePageMeta } from '../../hooks/usePageMeta';

function Shop() {
  const { category } = useParams();
  const products = getProductsByCategory(category);
  const activeCategory = categories.find((c) => c.id === category);

  return (
    <section className="shop">
      <div className="shop__header">
        <span className="shop__eyebrow">SHOP</span>
        <h1 className="shop__title">{activeCategory ? activeCategory.name : 'Todos los productos'}</h1>
      </div>

      <nav className="shop__tabs">
        <Link to="/shop" className={`shop__tab ${!category ? 'shop__tab--active' : ''}`}>
          Todo
        </Link>
        {categories.map((c) => (
          <Link
            key={c.id}
            to={c.path}
            className={`shop__tab ${category === c.id ? 'shop__tab--active' : ''}`}
          >
            {c.name}
          </Link>
        ))}
      </nav>

      {products.length === 0 ? (
        <p className="shop__empty">No hay productos en esta categoría todavía.</p>
      ) : (
        <div className="shop__grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Shop;