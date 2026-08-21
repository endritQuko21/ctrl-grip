import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { categories } from '../../data/categories';
import { getProductsByCategory } from '../../data/products';
import ProductCard from '../../components/ProductCard/ProductCard';
import { usePageMeta } from '../../hooks/usePageMeta';
import './Shop.css';

const ALL_SIZES = ['S', 'M', 'L'];

function Shop() {
  const { category } = useParams();
  const [sortBy, setSortBy] = useState('relevance');
  const [sizeFilter, setSizeFilter] = useState(null);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const activeCategory = categories.find((c) => c.id === category);
  const baseProducts = getProductsByCategory(category);

  usePageMeta({
    title: activeCategory ? activeCategory.name : 'Tienda',
    description: 'Calcetines antideslizantes, espinilleras y tape para futbolistas.',
  });

  const products = useMemo(() => {
    let list = baseProducts.filter(
      (p) => !sizeFilter || p.sizes.length === 0 || p.sizes.includes(sizeFilter)
    );

    if (sortBy === 'price-asc') list = [...list].sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') list = [...list].sort((a, b) => b.price - a.price);

    return list;
  }, [baseProducts, sortBy, sizeFilter]);

  return (
    <div className="shop">
      <div className="shop__container">
        <nav className="shop__breadcrumb">
          <Link to="/">Inicio</Link>
          <span>/</span>
          <Link to="/shop">Tienda</Link>
          {activeCategory && (
            <>
              <span>/</span>
              <span className="shop__breadcrumb-current">{activeCategory.name}</span>
            </>
          )}
        </nav>

        <div className="shop__header">
          <h1 className="shop__title">{activeCategory ? activeCategory.name : 'Todos los productos'}</h1>
          <p className="shop__count">{products.length} producto{products.length !== 1 ? 's' : ''}</p>
        </div>

        <div className="shop__layout">
          <aside className={`shop__sidebar ${filtersOpen ? 'shop__sidebar--open' : ''}`}>
            <div className="shop__filter-group">
              <span className="shop__filter-title">Categoría</span>
              <nav className="shop__category-list">
                <Link
                  to="/shop"
                  className={`shop__category-link ${!category ? 'shop__category-link--active' : ''}`}
                  onClick={() => setFiltersOpen(false)}
                >
                  Todo
                </Link>
                {categories.map((c) => (
                  <Link
                    key={c.id}
                    to={c.path}
                    className={`shop__category-link ${category === c.id ? 'shop__category-link--active' : ''}`}
                    onClick={() => setFiltersOpen(false)}
                  >
                    {c.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="shop__filter-group">
              <span className="shop__filter-title">Talla</span>
              <div className="shop__size-list">
                {ALL_SIZES.map((s) => (
                  <button
                    key={s}
                    className={`shop__size-btn ${sizeFilter === s ? 'shop__size-btn--active' : ''}`}
                    onClick={() => setSizeFilter(sizeFilter === s ? null : s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {(sizeFilter || category) && (
              <button className="shop__clear-filters" onClick={() => setSizeFilter(null)}>
                Limpiar talla
              </button>
            )}
          </aside>

          <div className="shop__main">
            <div className="shop__toolbar">
              <button className="shop__filter-toggle" onClick={() => setFiltersOpen((v) => !v)}>
                <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M3 5h14M6 10h8M8 15h4" />
                </svg>
                Filtros
              </button>

              <div className="shop__sort">
                <label htmlFor="sort" className="shop__sort-label">Ordenar por</label>
                <select
                  id="sort"
                  className="shop__sort-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="relevance">Relevancia</option>
                  <option value="price-asc">Precio: menor a mayor</option>
                  <option value="price-desc">Precio: mayor a menor</option>
                </select>
              </div>
            </div>

            {products.length === 0 ? (
              <div className="shop__empty">
                <span className="shop__empty-title">Sin resultados</span>
                <p>No hay productos que coincidan con este filtro. Prueba a quitar la talla seleccionada.</p>
              </div>
            ) : (
              <div className="shop__grid">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;