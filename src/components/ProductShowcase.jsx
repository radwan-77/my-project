// src/components/ProductShowcase.jsx
const ProductShowcase = ({ title, products }) => {
    return (
      <section className="py-16">
        <h2 className="text-3xl font-semibold text-center">{title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {products.map((product, index) => (
            <div key={index} className="border p-4">
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
              <h3 className="mt-2 text-lg">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default ProductShowcase;
  