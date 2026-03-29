import ProtectedRoute from '../components/ProtectedRoute';

function OrdersContent() {
  return (
    <div className="container section-stack">
      <div className="panel section-stack">
        <h1>Meus pedidos</h1>
        <p className="muted">Nenhum pedido sincronizado ainda. Esta página está coerente com a navegação e pronta para backend.</p>
      </div>
    </div>
  );
}

export default function Orders() {
  return (
    <ProtectedRoute>
      <OrdersContent />
    </ProtectedRoute>
  );
}
