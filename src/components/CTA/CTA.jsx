import "./CTA.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function CTA() {
  return (
    <div className="main-cta">


        <section className="cta">

      <div className="cta-glow"></div>

      <div className="cta-content">

        <span className="cta-badge">
          Ready To Start?
        </span>

        <h2>
          Be a Good Citizen
          {/* <span> Reality</span> */}
        </h2>

        <p>
        Change begins with you. Small actions — picking up litter, planting a tree, conserving water — create ripples that transform communities. Join the movement of responsible citizens building a better India.
        </p>

        <div className="cta-buttons">

          <a
            href="#volunteerform"
            className="cta-primary"
          >
           Start Volunteering
            <FaArrowRight />
          </a>

          <a
            href="https://wa.me/919142457610"
            target="_blank"
            rel="noreferrer"
            className="cta-secondary"
          >
            Support Our Cause
          </a>

        </div>

      </div>

    </section>
    </div>
  
  );
}