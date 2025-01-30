"use client";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 text-white">
      <nav className="flex justify-between items-center p-4">
        {/* Logo */}
        <Link href={'/'}
          className="text-lg font-bold"          
        >
          Monad Drop
        </Link>

        {/* Hamburger Icon for Mobile */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Links */}
        <ul className={`flex space-x-4 ${isOpen ? "hidden" : "hidden"}`}>
          <li>
            <a href="#home" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-gray-300">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
