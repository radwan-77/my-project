import product1 from "../assets/images/1.jpg";
import product2 from "../assets/images/2.jpg";
import product3 from "../assets/images/3.jpg";
import product4 from "../assets/images/4.jpg";
import product5 from "../assets/images/5.jpg";
import product6 from "../assets/images/6.jpg";
import product7 from "../assets/images/7.jpg";
import product8 from "../assets/images/8.jpg";
import React from "react";

const AboutUs = () => {
  // Inline styles
  const sectionStyle = {
    textAlign: "center",
    fontFamily: "'Arial', sans-serif",
    maxWidth: "1200px",
    margin: "0 auto", // to center the section height then the width
  };

  const titleStyle = {
    fontSize: "2.5rem",
    marginBottom: "15px",
    fontWeight: "bold",
  };

  const subtitleStyle = {
    fontSize: "1.2rem",
    color: "#555",
    marginBottom: "50px",
  };

  const imageGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(5, 2fr)",
    gap: "5px", // 5 images in a row
  };

  const imageStyle1 = {
    gridColumn: "span 1",
    gridRow: "span 2",
    position: "relative",
    top: "50px",
    // Changed to span 2 columns
    width: "100%",
    height: "100%", // Changed height to 100%
    borderRadius: "10px",
    objectFit: "cover",
  };

  const imageStyle2 = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    objectFit: "cover",
  };

  const buttonStyle = {
    marginTop: "80px",
    padding: "12px 25px",
    fontSize: "1.1rem",
    color: "white",
    backgroundColor: "black",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    textTransform: "uppercase",
    letterSpacing: "1px",
  };

  return (
    <section style={sectionStyle}>
      <div>
        <h2 style={titleStyle}>Behind Your Everyday Confidence</h2>
        <p style={subtitleStyle}>
          Discover timeless pieces and on-trend looks that empower you to
          express yourself with confidence.
        </p>
      </div>
      <div style={imageGridStyle}>
        <img src={product1} alt="Style 1" style={imageStyle2} />
        <img src={product3} alt="Style 2" style={imageStyle1} />
        <img src={product2} alt="Style 3" style={imageStyle2} />
        <img src={product6} alt="Style 4" style={imageStyle1} />
        <img src={product7} alt="Style 5" style={imageStyle2} />
      </div>
      <button
        style={buttonStyle}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#333")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "black")}
      >
        View More →
      </button>
    </section>
  );
};

export default AboutUs;
