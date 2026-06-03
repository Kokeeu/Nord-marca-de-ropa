import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { products } from '../data/products.js'
import CategoryTag from '../components/CategoryTag.jsx'
import './ProductDetail.css'

function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const [size, setSize] = useState(null)
  const [activeImage, setActiveImage] = useState(0)

  if (!product) {
    return (
      <section className="product-detail">
        <div className="product-detail__empty">
          <h1>Producto no encontrado</h1>
          <Link to="/collections" className="ghost-link">Volver a colecciones <span className="ghost-link__arrow">→</span></Link>
        </div>
      </section>
    )
  }

  return (
    <section className="product-detail">
      <div className="product-detail__grid">
        <div className="product-detail__gallery">
          <div className="product-detail__image-main">
            <img src={product.gallery[activeImage]} alt={product.name} />
          </div>
          <div className="product-detail__thumbs">
            {product.gallery.map((src, i) => (
              <button
                key={i}
                type="button"
                className={`product-detail__thumb ${activeImage === i ? 'is-active' : ''}`}
                onClick={() => setActiveImage(i)}
                aria-label={`Ver imagen ${i + 1}`}
              >
                <img src={src} alt="" />
              </button>
            ))}
          </div>
        </div>

        <div className="product-detail__info">
          <CategoryTag label={product.category} />
          <h1 className="product-detail__name">{product.name}</h1>
          <p className="product-detail__price">{product.price}</p>
          <p className="product-detail__desc">{product.description}</p>

          <div className="product-detail__sizes">
            <span className="product-detail__label">Talla</span>
            <div className="product-detail__size-list">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  type="button"
                  className={`product-detail__size ${size === s ? 'is-active' : ''}`}
                  onClick={() => setSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <button type="button" className="product-detail__cta" disabled={!size}>
            {size ? `Añadir a la bolsa — ${size}` : 'Selecciona una talla'}
          </button>

          <div className="product-detail__meta">
            <div className="product-detail__meta-row">
              <span className="product-detail__meta-label">Envío</span>
              <span className="product-detail__meta-value">Mundial, 3–5 días</span>
            </div>
            <div className="product-detail__meta-row">
              <span className="product-detail__meta-label">Devoluciones</span>
              <span className="product-detail__meta-value">30 días, sin preguntas</span>
            </div>
            <div className="product-detail__meta-row">
              <span className="product-detail__meta-label">Materiales</span>
              <span className="product-detail__meta-value">Obtenidos y terminados en Europa</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetail
