import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import CategoryGrid from './components/CategoryGrid/CategoryGrid';
import TechFeature from './components/TechFeature/TechFeature';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import Shop from './pages/Shop/Shop';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Cart from './pages/Cart/Cart';
import OrderConfirmation from './pages/OrderConfirmation/OrderConfirmation';

function Home() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <TechFeature />
      <Testimonials />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:category" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;