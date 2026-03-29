import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Checkout() {
  const navigate = useNavigate();
  const { total, clearCart } = useCart();

  const handlePayment = () => {
    clearCart();
    navigate('/sucesso');
  };

  return (
    <div className="container section-stack">
      <div className="panel section-stack">
        <h1>Checkout</h1>
        <p className="muted">Resumo simplificado para validar o fluxo da aplicação.</p>
        <p className="price price--large">Total: R$ {total.toFixed(2)}</p>
        <button type="button" className="button" onClick={handlePayment}>Finalizar pagamento</button>
      </div>
    </div>
  );
}
