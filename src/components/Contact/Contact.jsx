import "./Contact.css";
import React, { useState } from "react";

import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `📩 *New Contact Request*

👤 Name : ${formData.name}

📧 Email : ${formData.email}

📌 Subject : ${formData.subject}

📝 Message :
${formData.message}`;

    const phone = "919142457610"; // Replace with your WhatsApp Number

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section id="contact">

      {/* Heading */}

      <div className="contact-heading">

        <span className="badge">
          Get in Touch
        </span>

        <h2>Contact Us</h2>

        <p>
          Have questions or want to collaborate?
          We would love to hear from you.
        </p>

      </div>

      {/* Main Container */}

      <div className="contact-container">

        {/* LEFT */}

        <div className="contact-left">

          <div className="info-card">

            <div className="info-icon">
              <FaLocationDot />
            </div>

            <div>

              <h3>Address</h3>

              <p>
                42 Green Avenue, Sector 18
                <br />
                New Delhi, Delhi 110001, India
              </p>

            </div>

          </div>

          <div className="info-card">

            <div className="info-icon">
              <FaPhone />
            </div>

            <div>

              <h3>Phone</h3>

              <p>
                +91 98765 43210
                <br />
                +91 11 2345 6789
              </p>

            </div>

          </div>

          <div className="info-card">

            <div className="info-icon">
              <FaEnvelope />
            </div>

            <div>

              <h3>Email</h3>

              <p>
                hello@cleanindiasafar.org
                <br />
                partnerships@cleanindiasafar.org
              </p>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="contact-right">

          <form onSubmit={handleSubmit}>

            <div className="row">

              <div className="form-group">

                <label>Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="form-group">

                <label>Email</label>

                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>

            <div className="form-group">

              <label>Subject</label>

              <input
                type="text"
                name="subject"
                placeholder="How can we help?"
                value={formData.subject}
                onChange={handleChange}
                required
              />

            </div>

            <div className="form-group">

              <label>Message</label>

              <textarea
                rows="5"
                name="message"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
              />

            </div>

            <button type="submit" className="contact-btn">

              <FaPaperPlane />

              Send Message

            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default Contact;