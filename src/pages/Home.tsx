import { useMemo, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import type { Category } from '../types/Product';

const categories: Array<Category | 'Todos'> = ['Todos', 'Pokémon', 'Treinador', 'Energia', 'Acessórios'];

export default function Home() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<Category | 'Todos'>('Todos');

  const filteredProducts = useMemo(() => products.filter((product) => {
    const matchSearch = product.title.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === 'Todos' || product.category === category;
    return matchSearch && matchCategory;
  }), [search, category]);

  return (
    <div className="container section-stack">
      <section className="hero">
        <div>
          <span className="eyebrow">Marketplace de cartas Pokémon</span>
          <h1>Compre, anuncie e organize sua coleção com uma base sólida.</h1>
          <p>Projeto refatorado para manter rotas, contexto, tipagem e componentes coerentes entre si.</p>
        </div>
      </section>

      <section className="panel filters">
        <input
          className="input"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Buscar por nome da carta"
        />

        <div className="chips">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              className={`chip ${category === item ? 'chip--active' : ''}`}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      <section className="products-grid">
        {filteredProducts.length > 0 ? filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        )) : (
          <div className="panel empty-state">Nenhum produto encontrado para os filtros informados.</div>
        )}
      </section>
    </div>
  );
}
