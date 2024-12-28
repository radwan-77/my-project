// src/components/Footer.jsx
const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <h3 className="font-bold">Menu</h3>
            <ul className="mt-2">
              <li>Home</li>
              <li>Shop</li>
              <li>Lookbook</li>
            </ul>
          </div>
          {/* Add more sections as needed */}
        </div>
        <p className="text-center mt-8">© 2024 Modenna. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;
  