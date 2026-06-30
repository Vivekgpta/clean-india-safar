import "./Mission.css";
import Navbar from "../Navbar/Navbar";

import aboutUs1 from "../../assets/gallery/img2.jpg";
// import aboutUs2 from "../../assets/gallery/img1.jpg";
// import aboutUs3 from "../../assets/gallery/img3.jpg";
// import aboutUs4 from "../../assets/gallery/img9.jpg";
export default function Mission() {
  const images = [
    // aboutUs3,
    aboutUs1,
    // aboutUs2,
    // aboutUs4,
  ];

  return (
    <section className="mission">
      <Navbar />
      <div className="mission-left">
        <h2>
          Our <span>Mission</span>
        </h2>

        <p>
          Our mission is to empower businesses, startups, and individuals by
          delivering innovative digital solutions that combine creativity,
          technology, and user-focused design.
        </p>

        <p>
          MY Bharat offers a range of Experiential Learning Programmes across
          various sectors, empowering young individuals to learn and grow
          through practical application. These programs provide hands-on
          opportunities to gain real-world experience, develop essential skills,
          and contribute meaningfully to society. By immersing themselves in
          diverse fields, participants can bridge the gap between theoretical
          knowledge and practical implementation, fostering a deeper
          understanding and appreciation for their chosen career paths.
        </p>

        {/* <button>Explore</button> */}
      </div>

      <div className="mission-right">
        {images.map((img, index) => (
          <div key={index} className="mission-image">
            <img src={img} alt={`Mission ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}