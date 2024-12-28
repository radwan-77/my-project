import Screenshot from "../assets/2.jpg";
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
    gridTemplateColumns: "repeat(5, 2fr)", // 5 images in a row
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
        <img src={Screenshot} alt="Style 1" style={imageStyle2} />
        <img src={Screenshot} alt="Style 2" style={imageStyle1} />
        <img src={Screenshot} alt="Style 3" style={imageStyle2} />
        <img src={Screenshot} alt="Style 4" style={imageStyle1} />
        <img src={Screenshot} alt="Style 5" style={imageStyle2} />
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
