import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import CategoryGrid from './components/CategoryGrid/CategoryGrid';
import TechFeature from './components/TechFeature/TechFeature';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import CookieBanner from './components/CookieBanner/CookieBanner';
import Shop from './pages/Shop/Shop';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Cart from './pages/Cart/Cart';
import OrderConfirmation from './pages/OrderConfirmation/OrderConfirmation';
import Contact from './pages/Contact/Contact';
import LegalNotice from './pages/Legal/LegalNotice';
import PrivacyPolicy from './pages/Legal/PrivacyPolicy';
import TermsConditions from './pages/Legal/TermsConditions';
import ReturnsPolicy from './pages/Legal/ReturnsPolicy';
import NotFound from './pages/NotFound/NotFound';

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
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:category" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal-notice" element={<LegalNotice />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/returns-policy" element={<ReturnsPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <CookieBanner />
    </BrowserRouter>
  );
}

export default App;