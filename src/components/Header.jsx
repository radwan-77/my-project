import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px',
    backgroundColor: 'white',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000,
    transition: 'top 0.3s',
    top: isVisible ? '0' : '-100px'
  };

  const titleStyle = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: 'black'
  };

  const navStyle = {
    display: 'flex',
    gap: '24px',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '50px',
    marginRight: '50px',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'black'
  };

  const buttonstyle = {
    display: "flex",
    padding: '8px 16px',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    margin: '0',
  };

  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>Modenna</h1>
      <ul style={{ display: 'flex', gap: '24px', listStyle: 'none', margin: 0, padding: 0 }}>
        <li><a href="#" style={linkStyle}>Home</a></li>
        <li><a href="#" style={linkStyle}>About</a></li>
        <li><a href="#" style={linkStyle}>Shop</a></li>
        <li><a href="#" style={linkStyle}>Lookbook</a></li>
      </ul>
      <nav style={{ ...navStyle }}>
        <button style={buttonstyle}>Sign Up</button>
      </nav>
    </header>
  );
};

export default Header;