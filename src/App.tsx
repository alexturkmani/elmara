import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ShopByCategory from './pages/ShopByCategory';
import ShopByCollection from './pages/ShopByCollection';
import CategoryDetail from './pages/CategoryDetail';
import CollectionDetail from './pages/CollectionDetail';
import ProductDetail from './pages/ProductDetail';

export default function App() {
  return (
    <div className="min-h-screen bg-ivory-100">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/categories" element={<ShopByCategory />} />
          <Route path="/collections" element={<ShopByCollection />} />
          <Route path="/category/:id" element={<CategoryDetail />} />
          <Route path="/collection/:id" element={<CollectionDetail />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
