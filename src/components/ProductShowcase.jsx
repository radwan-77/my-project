import React from "react";

const ProductShowcase = ({ products }) => {
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "5 ,1fr ",
  };

  const cardStyle = {
    borderRadius: "8px",
    padding: "15px",
    // textAlign: "center",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
  };
  const productInfoStyle = {
    display: "flex",
    justifyContent: "space-between",
  };

  const productNameStyle = {
    margin: "0",
  };

  const productPriceStyle = {
    margin: "0",
    color: "#555",
  };

  const productGenderStyle = {
    margin: "0",
    color: "#555",
  };

  return (
    <div
      style={{
        ...containerStyle,
        gridTemplateColumns: "repeat(5, 1fr)",
      }}
    >
      {products.map((product, index) => (
        <div key={index} style={cardStyle}>
          <img src={product.image} alt={product.name} style={imageStyle} />
          <div style={productInfoStyle}>
            <h3 style={productNameStyle}>{product.name}</h3>
            <p style={productPriceStyle}>${product.price}</p>
          </div>
          <p style={productGenderStyle}>{product.gender}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductShowcase;
