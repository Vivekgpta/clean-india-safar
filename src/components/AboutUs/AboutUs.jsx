import "./AboutUs.css";
import aboutImage from "../../assets/aboutUs/aboutUs1.png";

export default function AboutUs() {
  return (
    <section className="about-section">

      <div className="about-container">

        {/* Left Image */}
        <div className="about-left">

          <img
            src={aboutImage}
            alt="Clean India Safar"
          />

        </div>

        {/* Right Content */}
        <div className="about-right">

          <span className="section-tag">
            About Us
          </span>

          <h2>
            Building a
            <span> Cleaner India </span>
            Together
          </h2>

          <p>
            Clean India Safar is a social initiative dedicated to creating a
            cleaner, greener, and more responsible India. Through awareness
            campaigns, cleanliness drives, and community participation, we aim
            to inspire every citizen to take ownership of their surroundings.
          </p>

          <p>
            What began as a personal mission has grown into a movement that
            encourages people from all walks of life to contribute toward a
            cleaner environment. Every small effort matters, and together we
            can build a healthier future for generations to come.
          </p>

       

        </div>

      </div>

    </section>
  );
}