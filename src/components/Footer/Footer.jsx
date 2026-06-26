import { Link } from "react-router-dom";
import "./Footer.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">

          <h2>🌿 Clean India Safar</h2>

          <p>
            Crafting modern digital experiences,
            premium magazine designs and artistic
            sketch portraits that leave a lasting impact.
          </p>

        </div>

        <div className="footer-links">

          <h4>Navigation</h4>

          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/work">Work</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>

        </div>

        <div className="footer-services">

         <h4>Contact</h4>

<div className="footer-contact">

  <div className="contact-item">
    <FaMapMarkerAlt className="contact-icon" />
    <p>42 Green Avenue, New Delhi, 110001</p>
  </div>

  <div className="contact-item">
    <FaPhoneAlt className="contact-icon" />
    <p>7970225295</p>
  </div>

  <div className="contact-item">
    <FaEnvelope className="contact-icon" />
    <p>vikaskkushwaha7970@gmail.com</p>
  </div>

</div>
        </div>

        <div className="footer-social">

          <h4>Connect</h4>

          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
            Instagram
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
            LinkedIn
          </a>

          <a
            href="https://wa.me/919142457610"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
            WhatsApp
          </a>

        </div>

      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Zenith Studio.
          All Rights Reserved.
        </p>

        <button
          className="scroll-top"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          <FaArrowUp />
        </button>

      </div>

    </footer>
  );
}