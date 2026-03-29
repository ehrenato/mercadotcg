import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const { cart } = useCart();
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="brand">MercadoTCG</Link>

        <nav className="navbar__nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/favoritos">Favoritos</NavLink>
          <NavLink to="/upload">Anunciar</NavLink>
          <NavLink to="/pedidos">Pedidos</NavLink>
          <NavLink to="/carrinho">Carrinho ({cartCount})</NavLink>
        </nav>

        <div className="navbar__auth">
          {isAuthenticated ? (
            <>
              <span className="muted">Olá, {user?.name}</span>
              <button type="button" className="button button--ghost" onClick={logout}>Sair</button>
            </>
          ) : (
            <Link to="/auth" className="button button--ghost">Entrar</Link>
          )}
        </div>
      </div>
    </header>
  );
}
