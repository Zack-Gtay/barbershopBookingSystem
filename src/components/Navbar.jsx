import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount] = useState(3);

  // Links data
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Product", path: "/product" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="flex items-center justify-between px-3 md:px-20 lg:px-20 py-4 text-white relative">
      {/* Logo */}
      <a href="/" className="text-2xl flex flex-col gap-0">
        <p className="font-satisfy text-customOrange text-4xl mb-[-10px]">The</p>
        <p>
          <span className="text-black font-semibold">LICERIA</span>
          <span className="text-customOrange">SALON</span>
        </p>
      </a>

      {/* Navigation Links */}
      <ul
        className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg z-20 transform transition-transform duration-300 ease-in-out flex flex-col justify-center items-center space-y-6 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:static md:flex md:flex-row md:space-x-8 md:space-y-0 lg:space-x-14 font-light text-lg text-gray-600 md:translate-x-0 md:bg-transparent md:shadow-none`}
      >
        {navLinks.map((link) => (
          <li key={link.path}>
            <a
              href=""
              className="hover:text-customOrange cursor-pointer py-2 md:py-0 transition-all duration-300"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Shopping Cart */}
      <div className="relative invisible md:visible lg:visible">
        <button className="text-xl hover:text-customOrange text-black transition-all duration-300">
          <FiShoppingCart />
        </button>
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-customOrange text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
            {cartCount}
          </span>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl text-black hover:text-customOrange transition-all duration-300 z-30"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>

      {/* Overlay for Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
