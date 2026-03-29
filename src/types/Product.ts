export type Category = 'Pokémon' | 'Treinador' | 'Energia' | 'Acessórios';

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: Category;
  condition: 'Novo' | 'Seminovo';
  seller: string;
  description: string;
}
