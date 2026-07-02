import "./VolunteerForm.css";
import React, { useState } from "react";
import {
  FaPeopleGroup,
  FaSeedling,
  FaDroplet,
  FaWhatsapp,
} from "react-icons/fa6";

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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

  const message = `🌿 *New Volunteer Registration*

👤 Full Name: ${formData.name}

📧 Email: ${formData.email}

📱 Phone: ${formData.phone}

📝 Message:
${formData.message}`;

  const phone = "9142457610"; // Apna WhatsApp Number

  window.open(
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};
  return (
    <section id="volunteerForm">

      {/* Left Side */}

      <div className="volunteer-left">

        <span className="join-badge">Join Us</span>

        <h3>
          Volunteer Registration
        </h3>

        <p className="volunteer-description">
          Whether you can spare an hour or a lifetime, your contribution
          matters. Fill out the form and our team will connect with you via
          WhatsApp to discuss opportunities that match your skills and
          availability.
        </p>

        <div className="feature-list">

          <div className="feature-card">

            <div className="feature-icon">
              <FaPeopleGroup />
            </div>

            <div>
              <h3>Community Drives</h3>
              <p>Join local cleanup and plantation events.</p>
            </div>

          </div>

          <div className="feature-card">

            <div className="feature-icon">
              <FaSeedling />
            </div>

            <div>
              <h3>Green Ambassadors</h3>
              <p>Lead environmental awareness in your area.</p>
            </div>

          </div>

          <div className="feature-card">

            <div className="feature-icon">
              <FaDroplet />
            </div>

            <div>
              <h3>Water Warriors</h3>
              <p>Help restore and protect water resources.</p>
            </div>

          </div>

        </div>

      </div>

      {/* Right Side */}

      <div className="volunteer-right">

        <div className="form-card">

          <form onSubmit={handleSubmit}>

            <div className="form-group">

              <label>Full Name</label>

              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />

            </div>

            <div className="form-group">

              <label>Email Address</label>

              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>

            <div className="form-group">

              <label>Phone Number</label>

              <input
                type="tel"
                name="phone"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={handleChange}
                required
              />

            </div>

            <div className="form-group">

              <label>Message (Optional)</label>

              <textarea
                rows="5"
                name="message"
                placeholder="Tell us about your interests..."
                value={formData.message}
                onChange={handleChange}
              />

            </div>

            <button type="submit" className="submit-btn">
              <FaWhatsapp />
              Submit via WhatsApp
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default VolunteerForm;