import { Link } from 'react-router-dom'
import CategoryTag from './CategoryTag.jsx'
import './ProductCard.css'

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-card__image-wrap">
        <img src={product.image} alt={product.name} className="product-card__image" loading="lazy" />
      </div>
      <div className="product-card__body">
        <div className="product-card__tag">
          <CategoryTag label={product.category} />
        </div>
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__price">{product.price}</p>
        <p className="product-card__desc">{product.description}</p>
        <div className="product-card__links">
          <span className="product-card__link">Ver detalles <span className="product-card__arrow">→</span></span>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
