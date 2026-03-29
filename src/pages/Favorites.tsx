import ProductCard from '../components/ProductCard';
import { useFavorites } from '../context/FavoritesContext';

export default function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div className="container section-stack">
      <h1>Favoritos</h1>
      {favorites.length > 0 ? (
        <section className="products-grid">
          {favorites.map((product) => <ProductCard key={product.id} product={product} />)}
        </section>
      ) : (
        <div className="panel empty-state">Você ainda não marcou nenhum item como favorito.</div>
      )}
    </div>
  );
}
