import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import CategoryGrid from './components/CategoryGrid/CategoryGrid';
import TechFeature from './components/TechFeature/TechFeature';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';

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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;