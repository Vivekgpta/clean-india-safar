import "./Hero.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import hero1 from "../../assets/hero/hero1.jpg";
import hero2 from "../../assets/hero/hero2.jpg";
import hero3 from "../../assets/hero/hero3.png";

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

        {/* <span className="hero-badge">
          🇮🇳 Clean India Safar
        </span> */}

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

          <a href="#mission" className="primary-btn">
            Donate Now
          </a>

          <a href="#volunteer" className="secondary-btn">
            Become a Volunteer

          </a>

        </div>

      </div>

    </section>
  );
}