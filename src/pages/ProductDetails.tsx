import { Navigate, useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="container section-stack">
      <section className="product-details">
        <img src={product.image} alt={product.title} className="product-details__image" />
        <div className="panel section-stack">
          <span className="badge">{product.category}</span>
          <h1>{product.title}</h1>
          <p className="price price--large">R$ {product.price.toFixed(2)}</p>
          <p>{product.description}</p>
          <p className="muted">Condição: {product.condition}</p>
          <p className="muted">Vendedor: {product.seller}</p>
          <button type="button" className="button" onClick={() => addToCart(product)}>
            Adicionar ao carrinho
          </button>
        </div>
      </section>
    </div>
  );
}
