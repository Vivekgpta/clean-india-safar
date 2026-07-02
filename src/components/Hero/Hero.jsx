import "./Hero.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

import hero1 from "../../assets/hero/hero1.jpg";
import hero2 from "../../assets/hero/hero2.jpg";
import hero3 from "../../assets/hero/hero3.png";
import sliderImg from "../../assets/hero/sliderImg.jpg";


export default function Hero() {
  return (
    <section className="hero">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={1200}
        className="hero-slider"
      >
        <SwiperSlide>
          <img src={hero1} alt="Clean India" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={hero2} alt="Awareness Drive" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={hero3} alt="Volunteer Campaign" />
        </SwiperSlide>
        

        
      </Swiper>

      

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>
          Together We Can
          <span> Build a Cleaner India</span>
        </h1>

        <p>
          Join our mission to inspire communities, reduce pollution,
          spread environmental awareness, and create a cleaner,
          greener India for future generations.
        </p>

        <div className="hero-buttons">
          <a href="#donation" className="primary-btn">
            Donate Now
          </a>

          <a href="#volunteerForm" className="secondary-btn">
            Become a Volunteer
          </a>
        </div>
      </div>

      {/* Floating Social Bar */}

      <div className="social-bar">
        {/* <span className="social-text">Join Social</span> */}

        <a
          href="https://www.instagram.com/vkkushwaha663/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.facebook.com/p/Vk-Kushwaha-61590893836783/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>

        <a
          href="https://www.linkedin.com/in/vk-kushwaha-1278a3361/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://www.youtube.com/@YourVkkushwaha/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube />
        </a>

        <a
          href="https://www.whatsapp.com/channel/0029Vb8P257HrDZXtvknPZ0n?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnq0XT1q0FpbGz9-tC4EFMK0CPRJpCt-nUzaiiAo9888agDONUApnsHIl2DrY_aem_cG2YohZttQAd2VdJnKKGTA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
      </div>
    </section>
  );
}