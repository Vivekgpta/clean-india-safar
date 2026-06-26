import "./Testimonials.css";
import { FaQuoteLeft } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function Testimonials() {
  const testimonials = [
    {
      review:
        "Working with Vivek was an amazing experience. The website was delivered on time with a modern design and excellent performance.",
      name: "Rahul Sharma",
      role: "Business Owner",
    },
    {
      review:
        "The magazine design exceeded our expectations. Every page was beautifully crafted with great attention to detail.",
      name: "Priya Verma",
      role: "Magazine Client",
    },
    {
      review:
        "The sketch portrait was incredibly realistic and became one of the most memorable gifts for my family.",
      name: "Aman Singh",
      role: "Portrait Client",
    },
    {
      review:
        "Professional service, quick delivery and excellent communication throughout the project.",
      name: "Sneha Gupta",
      role: "Website Client",
    },
    {
      review:
        "Highly recommended for modern websites and creative design work.",
      name: "Rohit Jain",
      role: "Startup Founder",
    },
  ];

  return (
    <section className="testimonial">

      <div className="testimonial-header">
        <span>Testimonials</span>
        <h2>Voices of Trust</h2>
        <p>
          Hear from clients who trusted me with their websites,
          creative designs and artwork.
        </p>
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1100: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">

              <FaQuoteLeft className="quote" />

              <p>{item.review}</p>

              <div className="client">
                <div className="avatar">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}