import React from "react";

const ProductShowcase = ({ products }) => {
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    padding: "20px",
  };

  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "15px",
    textAlign: "center",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  };

  return (
    <div style={containerStyle}>
      {products.map((product, index) => (
        <div key={index} style={cardStyle}>
          <img src={product.image} alt={product.name} style={imageStyle} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <p>{product.gender}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductShowcase;
