import "./AboutUs.css";
import Navbar from "../components/Navbar/Navbar";
import aboutUs1 from "../assets/aboutUs/aboutUs1.png";
import aboutUs2 from "../assets/aboutUs/aboutUs2.png";

export default function AboutUs() {
  return (
    <section className="about-section">
      <Navbar />
      <div className="about-container">
        <div className="about-image">
          <img
            src={aboutUs1}
            alt="About us"
          />
        </div>

        <div className="about-content">
          <h2>About</h2>
          <br />
          <h3>Rooted in Purpose, Growing with People</h3>

          <p>
            We create meaningful digital experiences that help brands, NGOs,
            and businesses connect with people. Our work is focused on clean
            design, smooth performance, and real impact.
          </p>

          <p>
            From websites to creative visuals, we build solutions that are
            modern, responsive, and user-friendly.
          </p>
        </div>
      </div>
    </section>
  );
}