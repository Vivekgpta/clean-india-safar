import "./Donation.css";
import React, { useState } from "react";

import {
  FaHeart,
  FaWhatsapp,
  FaQrcode,
  FaChevronRight,
} from "react-icons/fa";

const Donation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
    message: "",
  });

  const amounts = [500, 1000, 2500, 5000];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const selectAmount = (amount) => {
    setFormData({
      ...formData,
      amount,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `🌱 *New Donation*

👤 Name : ${formData.name}

📧 Email : ${formData.email}

📱 Phone : ${formData.phone}

💰 Amount : ₹${formData.amount}

📝 Message :
${formData.message}`;

    const phone = "91XXXXXXXXXX"; // Replace with your WhatsApp Number

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section id="donation">

      {/* Heading */}

      <div className="donation-heading">

        <span className="badge">
          Support Us
        </span>

        <h2>Make a Donation</h2>

        <p>
          Your contribution directly funds tree planting,
          water conservation and community cleanups.
          Every rupee creates ripples of change.
        </p>

      </div>

      {/* Main Content */}

      <div className="donation-container">

        {/* LEFT */}

        <div className="donation-left">

          {/* QR CARD */}

          <div className="qr-card">

            <div className="qr-box">

              {/* Replace with actual QR image */}

              <FaQrcode />

              <span>Scan to Donate</span>

            </div>

            <h3>UPI Payment</h3>

            <div className="upi-id">
              cleanindiasafar@upi
            </div>

            <p>
              Use any UPI app to scan and donate instantly
            </p>

          </div>

          {/* WHY DONATE */}

          <div className="why-card">

            <h3>

              <FaHeart />

              Why Donate?

            </h3>

            <ul>

              <li>
                <FaChevronRight />
                100% of funds go to on-ground projects
              </li>

              <li>
                <FaChevronRight />
                Quarterly transparency reports
              </li>

              <li>
                <FaChevronRight />
                Tax benefits under Section 80G
              </li>

              <li>
                <FaChevronRight />
                Personalized impact tracking
              </li>

            </ul>

          </div>

        </div>

        {/* RIGHT */}

        <div className="donation-right">

          <form onSubmit={handleSubmit}>

            <div className="row">

              <div className="form-group">

                <label>Full Name</label>

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

              <label>Donation Amount (₹)</label>

              <div className="amount-buttons">

                {amounts.map((amount) => (

                  <button
                    type="button"
                    key={amount}
                    className={
                      formData.amount == amount
                        ? "amount-btn active"
                        : "amount-btn"
                    }
                    onClick={() => selectAmount(amount)}
                  >
                    ₹{amount}
                  </button>

                ))}

              </div>

              <input
                type="number"
                name="amount"
                placeholder="Enter amount"
                value={formData.amount}
                onChange={handleChange}
                required
              />

            </div>

            <div className="form-group">

              <label>Message (Optional)</label>

              <textarea
                rows="4"
                name="message"
                placeholder="Any special instructions..."
                value={formData.message}
                onChange={handleChange}
              />

            </div>

            <button className="donate-btn">

              <FaWhatsapp />

              Donate via WhatsApp

            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default Donation;