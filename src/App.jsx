import { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import ProductShowcase from "./components/ProductShowcase";
import product1 from "./assets/images/1.jpg";
import product2 from "./assets/images/2.jpg";
import product3 from "./assets/images/3.jpg";
import product4 from "./assets/images/4.jpg";
import product5 from "./assets/images/5.jpg";
import product6 from "./assets/images/6.jpg";
import product7 from "./assets/images/7.jpg";
import product8 from "./assets/images/8.jpg";

const App = () => {
  const [category, setCategory] = useState("New Arrivals");

  const filteredProducts = allProducts.filter(
    (product) => product.category === category
  );

  return (
    <div>
      <Header />

      <HeroSection />

      <AboutUs />
      {/* Category Selector */}
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <button
          style={{
            margin: "0 10px",
            padding: "10px 20px",
            backgroundColor: category === "Sale" ? "#000" : "#fff",
            color: category === "Sale" ? "#fff" : "#000",
            cursor: "pointer",
          }}
          onClick={() => setCategory("Sale")}
        >
          Sale
        </button>

        <button
          style={{
            margin: "0 10px",
            padding: "10px 20px",
            backgroundColor: category === "New Arrivals" ? "#000" : "#fff",
            color: category === "New Arrivals" ? "#fff" : "#000",
            cursor: "pointer",
          }}
          onClick={() => setCategory("New Arrivals")}
        >
          New Arrivals
        </button>
        <button
          style={{
            margin: "0 10px",
            padding: "10px 20px",
            backgroundColor: category === "Best Sellers" ? "#000" : "#fff",
            color: category === "Best Sellers" ? "#fff" : "#000",
            cursor: "pointer",
          }}
          onClick={() => setCategory("Best Sellers")}
        >
          Best Sellers
        </button>
      </div>
      <ProductShowcase products={filteredProducts} />

      <Footer />
    </div>
  );
};
const allProducts = [
  {
    name: "Grey Casual Shirt",
    price: 800,
    image: product1,
    category: "Sale",
    gender: "Men's Wear",
  },
  {
    name: "Blue Cotton Hoodie",
    price: 600,
    image: product2,
    category: "Sale",
    gender: "Men's Wear",
  },
  {
    name: "Red Summer Dress",
    price: 700,
    image: product3,
    category: "Sale",
    gender: "Women's Wear",
  },
  {
    name: "White Sneakers",
    price: 500,
    image: product4,
    category: "Sale",
    gender: "Unisex",
  },
  {
    name: "Black Jeans",
    price: 900,
    image: product5,
    category: "Sale",
    gender: "Men's Wear",
  },
  {
    name: "Black Jeans",
    price: 900,
    image: product5,
    category: "Sale",
    gender: "Men's Wear",
  },
  {
    name: "Black Jeans",
    price: 900,
    image: product5,
    category: "Sale",
    gender: "Men's Wear",
  },
  {
    name: "Black Leather Bag",
    price: 800,
    image: product6,
    category: "Best Sellers",
    gender: "Women's Wear",
  },
  {
    name: "Casual Office Blazer",
    price: 1800,
    image: product7,
    category: "Best Sellers",
    gender: "Women's Wear",
  },
  {
    name: "Running Shoes",
    price: 1200,
    image: product8,
    category: "Best Sellers",
    gender: "Unisex",
  },
  {
    name: "Denim Jacket",
    price: 1500,
    image: product1,
    category: "Best Sellers",
    gender: "Men's Wear",
  },
  {
    name: "Leather Wallet",
    price: 300,
    image: product2,
    category: "Best Sellers",
    gender: "Men's Wear",
  },
  {
    name: "Navy Jacket",
    price: 1200,
    image: product3,
    category: "New Arrivals",
    gender: "Men's Wear",
  },
  {
    name: "Floral Print Dress",
    price: 1100,
    image: product4,
    category: "New Arrivals",
    gender: "Women's Wear",
  },
  {
    name: "Sports Watch",
    price: 2000,
    image: product5,
    category: "New Arrivals",
    gender: "Unisex",
  },
  {
    name: "Graphic T-Shirt",
    price: 400,
    image: product6,
    category: "New Arrivals",
    gender: "Men's Wear",
  },
  {
    name: "Silk Scarf",
    price: 500,
    image: product7,
    category: "New Arrivals",
    gender: "Women's Wear",
  },
];

export default App;
