import { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import ProductShowcase from "./components/ProductShowcase";
import Screenshot from "./assets/2.jpg";

const allProducts = [
  {
    name: "Grey Casual Shirt",
    price: 800,
    image: Screenshot,
    category: "Sale",
    gender: "Men's Wear",
  },
  {
    name: "Blue Cotton Hoodie",
    price: 600,
    image: Screenshot,
    category: "Sale",
    gender: "Men's Wear",
  },
  {
    name: "Black Leather Bag",
    price: 800,
    image: Screenshot,
    category: "Best Sellers",
    gender: "Women's Wear",
  },
  {
    name: "Casual Office Blazer",
    price: 1800,
    image: Screenshot,
    category: "Best Sellers",
    gender: "Women's Wear",
  },
  {
    name: "Navy Jacket",
    price: 1200,
    image: Screenshot,
    category: "New Arrivals",
    gender: "Men's Wear",
  },
];

const App = () => {
  const [category, setCategory] = useState("New Arrivals");

  // Filter products based on the selected category
  const filteredProducts = allProducts.filter(
    (product) => product.category === category
  );

  return (
    <div>
      <Header />

      <HeroSection />

      {/* Category Selector */}
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <button
          style={{
            margin: "0 10px",
            padding: "10px 20px",
            border: "1px solid #ccc",
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
            border: "1px solid #ccc",
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
            border: "1px solid #ccc",
            backgroundColor: category === "Best Sellers" ? "#000" : "#fff",
            color: category === "Best Sellers" ? "#fff" : "#000",
            cursor: "pointer",
          }}
          onClick={() => setCategory("Best Sellers")}
        >
          Best Sellers
        </button>
      </div>

      {/* Product Showcase */}
      <ProductShowcase products={filteredProducts} />

      <AboutUs />

      <Footer />
    </div>
  );
};

export default App;
