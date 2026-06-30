import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

import logo from "../../assets/logo.png";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      {/* <div className="logo">🌿 Clean India Safar</div> */}

      <div className="logo">
        <img src={logo} alt="Clean India Safar" className="logo-img" />

        <div className="logo-text">
          <h3>
            <span className="green">VK</span> CLEAN{" "}
            <span className="green">BHOPAL</span>
          </h3>

          <p>TOGETHER WE CLEAN, TOGETHER WE CHANGE</p>
        </div>
      </div>
      {/* Desktop Navigation */}
      <div className="nav-links">
        <a href="#home">Home</a>

        <a href="#about">About Us</a>
        <a href="#mission">Mission</a>
        <a href="#gallery">Gallery</a>
        <a href="#volunteer">Volunteer</a>

        <a href="#faqs">FAQs</a>
        <a href="#contact">Contact</a>
      </div>

      {/* Right Side */}
      <div className="navbar-right">
        <a href="#donation" className="hire-btn">
          Donate Now
        </a>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <a href="#home" onClick={closeMenu}>
          Home
        </a>

        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#mission" onClick={closeMenu}>
          Mission
        </a>

        <a href="#gallery" onClick={closeMenu}>
          Gallery
        </a>
        <a href="#volunteer" onClick={closeMenu}>
          Volunteer
        </a>

        <a href="#faqs" onClick={closeMenu}>
          FAQs
        </a>
        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>

        <a href="#donation" className="hire-btn" onClick={closeMenu}>
          Donate Now
        </a>
      </div>
    </nav>
  );
}
