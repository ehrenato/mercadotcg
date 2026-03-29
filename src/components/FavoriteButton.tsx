import { useFavorites } from '../context/FavoritesContext';
import type { Product } from '../types/Product';

export default function FavoriteButton({ product }: { product: Product }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const active = isFavorite(product.id);

  return (
    <button
      type="button"
      className={`icon-button ${active ? 'active' : ''}`}
      onClick={() => toggleFavorite(product)}
      aria-label={active ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
    >
      {active ? '♥' : '♡'}
    </button>
  );
}
