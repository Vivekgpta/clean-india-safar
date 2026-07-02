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
import logo from "../../assets/logo.png";
export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-brand">

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

          <p>
            Crafting modern digital experiences,
            premium magazine designs and artistic
            sketch portraits that leave a lasting impact.
          </p>

        </div>

        <div className="footer-links">

          <h4>Navigation</h4>

          <a href="#home">Home</a>

        {/* <a href="#about">About Us</a> */}
        <a href="#mission">Mission</a>
        <a href="#gallery">Gallery</a>
        {/* <a href="#volunteer">Volunteer</a> */}

        <a href="#faqs">FAQs</a>
        <a href="#contact">Contact</a>

        </div>

        <div className="footer-services">

         <h4>Contact</h4>

<div className="footer-contact">

  <div className="contact-item">
    <FaMapMarkerAlt className="contact-icon" />
    <p>42 Green Avenue, Bhopal, M.P.</p>
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
            href="https://www.instagram.com/vkkushwaha663/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
            Instagram
          </a>

          <a
            href="https://www.linkedin.com/in/vk-kushwaha-1278a3361/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
            LinkedIn
          </a>

          <a
            href="https://www.whatsapp.com/channel/0029Vb8P257HrDZXtvknPZ0n?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnq0XT1q0FpbGz9-tC4EFMK0CPRJpCt-nUzaiiAo9888agDONUApnsHIl2DrY_aem_cG2YohZttQAd2VdJnKKGTA"
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
          © {new Date().getFullYear()} VK CLEAN BHOPAL.
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