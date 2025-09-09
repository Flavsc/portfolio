import { Outlet } from 'react-router-dom';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import NoiseOverlay from '@components/NoiseOverlay';

export default function MainLayout() {
  return (
    <div className="app">
      <NoiseOverlay />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
