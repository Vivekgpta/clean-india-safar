import "./AboutUs.css";
import Navbar from "../components/Navbar/Navbar";

import {
  FaLeaf,
  FaHeart,
  FaUsers,
  FaShieldAlt
} from "react-icons/fa";

export default function AboutUs() {
  return (
    <>
      <Navbar />

      <section className="about">

        <div className="about-heading">

          <span className="about-badge">
            <FaLeaf />
            About Us
          </span>

          <h1>
            Rooted in Purpose,
            <br />
            Growing with People
          </h1>

          <div className="divider">
            <span></span>
            <FaLeaf />
            <span></span>
          </div>

          <p>
            Clean India Safar is a nationwide movement dedicated to restoring
            India's natural beauty. We believe that every citizen has the
            power to create change, and we provide the platform, tools,
            and community to make that happen.
          </p>

        </div>

        <div className="cards">

          <div className="card">

            <div className="icon">
              <FaLeaf />
            </div>

            <h3>Sustainability</h3>

            <p>
              Building lasting environmental
              solutions for future generations.
            </p>

          </div>

          <div className="card">

            <div className="icon">
              <FaHeart />
            </div>

            <h3>Compassion</h3>

            <p>
              Serving communities with
              empathy and genuine care.
            </p>

          </div>

          <div className="card">

            <div className="icon">
              <FaUsers />
            </div>

            <h3>Community</h3>

            <p>
              Uniting people from every walk
              of life for a common cause.
            </p>

          </div>

          <div className="card">

            <div className="icon">
              <FaShieldAlt />
            </div>

            <h3>Integrity</h3>

            <p>
              Operating with transparency
              and accountability.
            </p>

          </div>

        </div>

        <div className="about-btn">

          <button>
            <FaLeaf />
            Join Our Mission
          </button>

        </div>

      </section>
    </>
  );
}