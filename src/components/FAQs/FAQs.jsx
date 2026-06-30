import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./FAQs.css";

export default function FAQs() {
  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer:
        "Most business websites are completed within 5–10 working days depending on the project requirements.",
    },
    {
      question: "Do you provide responsive websites?",
      answer:
        "Yes. Every website is fully responsive and optimized for mobile, tablet, and desktop devices.",
    },
    {
      question: "Can you redesign my existing website?",
      answer:
        "Absolutely! I can redesign your existing website with a modern UI, better performance, and SEO improvements.",
    },
    {
      question: "Do you provide website maintenance?",
      answer:
        "Yes. I offer maintenance, updates, bug fixes, and ongoing support after the website is delivered.",
    },
    {
      question: "How can I contact you?",
      answer:
        "You can contact me through WhatsApp, email, or the contact form on this website.",
    },
  ];

  const [active, setActive] = useState(0);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="faq" >

      <div className="faq-header">
        <span>FAQs</span>
        <h2>Frequently Asked Questions</h2>
        <p>
          Find answers to the most common questions about my services.
        </p>
      </div>

      <div className="faq-container">
        {faqs.map((item, index) => (
          <div
            className={`faq-item ${active === index ? "active" : ""}`}
            key={index}
          >
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              {item.question}

              {active === index ? <FaMinus /> : <FaPlus />}
            </button>

            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}