import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AuthPage from './pages/AuthPage';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Failure from './pages/Failure';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import Orders from './pages/Orders';
import Pending from './pages/Pending';
import ProductDetails from './pages/ProductDetails';
import Success from './pages/Success';
import Upload from './pages/Upload';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/produto/:id" element={<ProductDetails />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/carrinho" element={<Cart />} />
          <Route path="/favoritos" element={<Favorites />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/pedidos" element={<Orders />} />
          <Route path="/sucesso" element={<Success />} />
          <Route path="/falha" element={<Failure />} />
          <Route path="/pendente" element={<Pending />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
