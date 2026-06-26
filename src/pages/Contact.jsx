import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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

    const text = `
*New Portfolio Inquiry*

👤 Name: ${formData.name}
📧 Email: ${formData.email}

💬 Message:
${formData.message}
`;

    const whatsappUrl =
      `https://wa.me/919142457610?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <MainLayout>
      <section className="contact-page">
        <div className="contact-header">
          <h1>Let's Work Together</h1>
          <p>Have a project in mind? Let's create something amazing.</p>
        </div>

        <div className="contact-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">
              Send on WhatsApp
            </button>
          </form>
        </div>
      </section>
    </MainLayout>
  );
}