import React from "react";
import Logo from "../assets/2.jpg";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "black",
    justifyContent: "space-between",
    color: "white",
    padding: "20px 40px",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    height: "20vh",
  };

  const logoStyle = {
    display: "flex",
    alignItems: "center",
  };

  const logoImageStyle = {
    height: "120px",
    width: "120px",
    marginRight: "10px",
  };

  const linksStyle = {
    display: "grid",
    gap: "40px",
    listStyle: "none",
    margin: "0",
    padding: "0px 20px",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "0.9rem",
    fontWeight: "bold",
  };

  const copyrightStyle = {
    marginTop: "10px",
    fontSize: "0.8rem",
    width: "100%",
    color: "#bbb",
  };

  return (
    <footer style={footerStyle}>
      {/* Logo Section */}
      <div style={logoStyle}>
        <img src={Logo} alt="Logo" style={logoImageStyle} />
      </div>

      {/* Links Section */}
      <ul style={linksStyle}>
        <li>
          <a href="#about" style={linkStyle}>
            About
          </a>
        </li>
        <li>
          <a href="#contact" style={linkStyle}>
            Contact
          </a>
        </li>
        <li>
          <a href="#terms" style={linkStyle}>
            Terms
          </a>
        </li>
      </ul>
      {/* / */}
      <ul style={linksStyle}>
        <li>
          <a href="#about" style={linkStyle}>
            About
          </a>
        </li>
        <li>
          <a href="#contact" style={linkStyle}>
            Contact
          </a>
        </li>
        <li>
          <a href="#terms" style={linkStyle}>
            Terms
          </a>
        </li>
      </ul>
      {/* / */}
      <ul style={linksStyle}>
        <li>
          <a href="#about" style={linkStyle}>
            About
          </a>
        </li>
        <li>
          <a href="#contact" style={linkStyle}>
            Contact
          </a>
        </li>
        <li>
          <a href="#terms" style={linkStyle}>
            Terms
          </a>
        </li>
      </ul>
      {/*  */}
      <ul style={linksStyle}>
        <li>
          <a href="#about" style={linkStyle}>
            About
          </a>
        </li>
        <li>
          <a href="#contact" style={linkStyle}>
            Contact
          </a>
        </li>
        <li>
          <a href="#terms" style={linkStyle}>
            Terms
          </a>
        </li>
      </ul>

      {/* Copyright */}
      <div style={copyrightStyle}>
        © 2024 Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
