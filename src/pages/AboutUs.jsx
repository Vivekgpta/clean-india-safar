import "./AboutUs.css";
import Navbar from "../components/Navbar/Navbar";
import aboutUs1 from "../assets/aboutUs/aboutUs1.png";

export default function AboutUs() {
  return (
    <>
      <Navbar />

      <section className="about-hero">

        <div className="about-left">

          <span className="about-tag">
            🌿 WHO WE ARE
          </span>

          <h2>
            Together We Can Build
            <span> A Cleaner India</span>
          </h2>

          <p>
            Clean India Safar is a community-driven initiative committed to
            creating cleaner, greener, and healthier surroundings. We inspire
            citizens to participate in cleanliness drives and sustainable
            practices that create lasting environmental impact.
          </p>

          <p>
            Every volunteer, every clean-up drive, and every tree planted brings
            us one step closer to a cleaner and more sustainable future.
          </p>

          <div className="about-buttons">
            <button>Join Our Mission</button>
          </div>

        </div>

        <div className="about-right">

          <img
            src={aboutUs1}
            alt="Clean India"
          />

        </div>

      </section>

      {/* IMPACT */}

      <section className="impact">

        <h2>Our Impact</h2>

        <div className="impact-grid">

          <div className="impact-card">
            <h3>500+</h3>
            <p>Volunteers</p>
          </div>

          <div className="impact-card">
            <h3>150+</h3>
            <p>Cleanliness Drives</p>
          </div>

          <div className="impact-card">
            <h3>50+</h3>
            <p>Cities Connected</p>
          </div>

          <div className="impact-card">
            <h3>10K+</h3>
            <p>Kg Waste Collected</p>
          </div>

        </div>

      </section>

      {/* VALUES */}

      <section className="values">

        <h2>Our Core Values</h2>

        <div className="values-grid">

          <div className="value-card">
            🌱
            <h3>Sustainability</h3>
            <p>Encouraging eco-friendly practices for future generations.</p>
          </div>

          <div className="value-card">
            🤝
            <h3>Community</h3>
            <p>Working together to build cleaner and healthier cities.</p>
          </div>

          <div className="value-card">
            ♻️
            <h3>Recycling</h3>
            <p>Promoting responsible waste management and recycling.</p>
          </div>

          <div className="value-card">
            🌍
            <h3>Green Future</h3>
            <p>Creating sustainable communities through collective action.</p>
          </div>

        </div>

      </section>

    </>
  );
}