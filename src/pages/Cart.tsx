import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cart, addToCart, decreaseQuantity, removeFromCart, total } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container section-stack">
        <div className="panel empty-state">
          <h1>Seu carrinho está vazio</h1>
          <p>Adicione produtos da vitrine para continuar.</p>
          <Link to="/" className="button">Voltar para Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container section-stack">
      <h1>Carrinho</h1>
      <div className="section-stack">
        {cart.map((item) => (
          <article key={item.id} className="panel cart-row">
            <img src={item.image} alt={item.title} className="cart-row__image" />
            <div className="cart-row__content">
              <h2>{item.title}</h2>
              <p className="muted">Quantidade: {item.quantity}</p>
              <p className="price">R$ {(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <div className="cart-row__actions">
              <button type="button" className="button button--ghost" onClick={() => decreaseQuantity(item.id)}>-</button>
              <button type="button" className="button button--ghost" onClick={() => addToCart(item)}>+</button>
              <button type="button" className="button" onClick={() => removeFromCart(item.id)}>Remover</button>
            </div>
          </article>
        ))}
      </div>
      <div className="panel checkout-box">
        <h2>Total</h2>
        <p className="price price--large">R$ {total.toFixed(2)}</p>
        <Link to="/checkout" className="button">Ir para pagamento</Link>
      </div>
    </div>
  );
}
