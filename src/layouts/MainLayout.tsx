import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function MainLayout() {
  const { pathname } = useLocation();
  const hideNavbar = pathname === '/auth';

  return (
    <>
      {!hideNavbar && <Navbar />}
      <main className="page-shell">
        <Outlet />
      </main>
    </>
  );
}
