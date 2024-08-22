import React, { useState, useEffect } from "react";
import searchIcon from "../assets/icons/Search.svg";
import dayNightIcon from "../assets/icons/Day and Night.svg";
import fastCartIcon from "../assets/icons/Fast Cart.svg";
import menuIcon from "../assets/icons/Menu.svg";
import closeIcon from "../assets/icons/Close.svg"; // Import the close icon

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  // Toggle menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Toggle cart
  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const menu = document.querySelector(".mobile-menu");
      const menuButton = document.querySelector(".menu-button");

      if (
        menu &&
        menuButton &&
        !menu.contains(target) &&
        !menuButton.contains(target)
      ) {
        setMenuOpen(false); // Close the menu if clicking outside
      }
    };

    if (menuOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="bg-[#122B3E] text-white relative">
      {/* Top Section: Logo and Contact Info */}
      <div className="flex flex-col md:flex-row justify-between items-center p-4 mx-5 space-y-4 md:space-y-0">
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-bold">Mom's Keepsakes</h1>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-8 space-y-2 md:space-y-0 text-center md:text-left">
          <div>
            <p className="text-sm md:text-base">Phone</p>
            <p className="text-sm md:text-base">+1 800-123-4567</p>
          </div>
          <div>
            <p className="text-sm md:text-base">Email</p>
            <p className="text-sm md:text-base">info@momsk.com</p>
          </div>
        </div>
      </div>

      {/* Navigation and Icons */}
      <div className="flex justify-between items-center p-2 bg-white text-black">
        {/* Burger Menu Icon */}
        <button
          onClick={toggleMenu}
          className="menu-button md:hidden focus:outline-none"
        >
          <img
            src={menuOpen ? closeIcon : menuIcon}
            alt="Menu"
            className="w-6 h-6"
          />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-6 ml-9">
          <a href="#home" className="text-lg">
            Home
          </a>
          <a href="#shop" className="text-lg">
            Shop
          </a>
          <a href="#features" className="text-lg">
            Features
          </a>
          <a href="#about" className="text-lg">
            About
          </a>
          <a href="#contact" className="text-lg">
            Contact
          </a>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4 md:space-x-6 mr-9">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="focus:outline-none"
          >
            <img
              src={searchIcon}
              alt="Search"
              className="w-5 h-5 md:w-6 md:h-6"
            />
          </button>

          <img
            src={dayNightIcon}
            alt="Day/Night"
            className="w-5 h-5 md:w-6 md:h-6"
          />

          <button onClick={toggleCart} className="relative focus:outline-none">
            <img
              src={fastCartIcon}
              alt="Cart"
              className="w-5 h-5 md:w-6 md:h-6"
            />
            <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full text-xs px-1">
              9
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu fixed inset-0 bg-black bg-opacity-75 z-20 flex justify-center items-start pt-16">
          <div className="absolute top-16 w-full bg-white p-6 text-center space-y-4 shadow-lg">
            {/* Close button */}
            <button onClick={toggleMenu} className="absolute top-2 right-4">
              <img src={closeIcon} alt="Close Menu" className="w-6 h-6" />
            </button>
            <a href="#home" className="block text-lg text-black">
              Home
            </a>
            <a href="#shop" className="block text-lg text-black">
              Shop
            </a>
            <a href="#features" className="block text-lg text-black">
              Features
            </a>
            <a href="#about" className="block text-lg text-black">
              About
            </a>
            <a href="#contact" className="block text-lg text-black">
              Contact
            </a>
          </div>
        </div>
      )}

      {/* Cart Popup */}
      {cartOpen && (
        <div className="absolute top-16 right-10 w-80 bg-white border border-gray-300 shadow-lg p-4 rounded-lg z-20">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-bold text-[#122B3E]">Your cart</h4>
            {/* Use close icon for the cart */}
            <button onClick={toggleCart} className="focus:outline-none">
              <img src={closeIcon} alt="Close Cart" className="w-6 h-6" />
            </button>
          </div>
          <ul className="list-none mb-4">
            <li className="flex justify-between mb-2">
              <div>
                <h6 className="text-md text-[#122B3E]">Grey Hoodie</h6>
                <small className="text-gray-500">Brief description</small>
              </div>
              <span className="text-gray-500">$12</span>
            </li>
            <li className="flex justify-between mb-2">
              <div>
                <h6 className="text-md text-[#122B3E]">Dog Food</h6>
                <small className="text-gray-500">Brief description</small>
              </div>
              <span className="text-gray-500">$8</span>
            </li>
            <li className="flex justify-between mb-2">
              <div>
                <h6 className="text-md text-[#122B3E]">Soft Toy</h6>
                <small className="text-gray-500">Brief description</small>
              </div>
              <span className="text-gray-500">$5</span>
            </li>
            <li className="flex justify-between font-bold border-t pt-2 mt-2">
              <span>Total (USD)</span>
              <strong>$25</strong>
            </li>
          </ul>
          <button className="w-full bg-[#122B3E] text-white py-2 rounded-lg">
            Continue to checkout
          </button>
        </div>
      )}

      {/* Search Input */}
      {searchOpen && (
        <div className="absolute top-16 right-10 w-80 bg-white border border-gray-300 shadow-lg p-4 rounded-lg z-20">
          <input
            type="text"
            placeholder="Search for products"
            className="w-full px-4 py-2 border rounded"
          />
        </div>
      )}
    </header>
  );
};

export default Header;
