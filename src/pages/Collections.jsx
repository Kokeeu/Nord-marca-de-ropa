import { useState } from 'react'
import ProductCard from '../components/ProductCard.jsx'
import { products, categories } from '../data/products.js'
import './Collections.css'

function Collections() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? products
    : products.filter((p) => p.category === active)

  return (
    <section className="collections">
      <header className="collections__header">
        <h1 className="collections__title">Colecciones</h1>
        <p className="collections__sub">
          Prendas hechas para el largo camino a casa.
        </p>
      </header>

      <div className="collections__filters">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`collections__filter ${active === cat ? 'is-active' : ''}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="collections__grid">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default Collections
