import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import ProductShowcase from './components/ProductShowcase';
import Footer from './components/Footer';

const App = () => {
  const newArrivals = [
    { name: 'Grey Casual Shirt', price: 800, image: '/assets/images/shirt1.jpg' },
    { name: 'Blue Cotton Hoodie', price: 600, image: '/assets/images/hoodie1.jpg' },
    // Add more products here
  ];

  return (
    <div>
      <Header />
      <HeroSection />
      <AboutUs />
      <ProductShowcase title="New Arrivals" products={newArrivals} />
      <Footer />
    </div>
  );
};

export default App;
