import { Link } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';
import { useCart } from '../context/CartContext';
import type { Product } from '../types/Product';

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <article className="product-card">
      <div className="product-card__top">
        <FavoriteButton product={product} />
      </div>
      <Link to={`/produto/${product.id}`} className="product-card__image-link">
        <img src={product.image} alt={product.title} className="product-card__image" />
      </Link>
      <div className="product-card__content">
        <span className="badge">{product.category}</span>
        <h3>{product.title}</h3>
        <p className="price">R$ {product.price.toFixed(2)}</p>
        <p className="muted">Vendido por {product.seller}</p>
        <div className="product-card__actions">
          <Link to={`/produto/${product.id}`} className="button button--ghost">Detalhes</Link>
          <button type="button" className="button" onClick={() => addToCart(product)}>Comprar</button>
        </div>
      </div>
    </article>
  );
}
