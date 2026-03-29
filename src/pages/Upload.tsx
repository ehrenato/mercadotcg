import ProtectedRoute from '../components/ProtectedRoute';

function UploadContent() {
  return (
    <div className="container section-stack">
      <div className="panel section-stack">
        <h1>Novo anúncio</h1>
        <p className="muted">Tela mantida pronta para futura integração com backend e upload real de imagem.</p>
        <input className="input" placeholder="Título do produto" />
        <input className="input" placeholder="Preço" />
        <textarea className="input textarea" placeholder="Descrição do anúncio" rows={5} />
        <button type="button" className="button">Salvar anúncio</button>
      </div>
    </div>
  );
}

export default function Upload() {
  return (
    <ProtectedRoute>
      <UploadContent />
    </ProtectedRoute>
  );
}
