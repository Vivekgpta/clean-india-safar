// import MainLayout from "../layouts/MainLayout";
// import MainLayout from "../../layouts/MainLayout";
import "./Gallery.css";
import Navbar from "../components/Navbar/Navbar";

export default function Gallery() {
  const gallery = [
    //  "/src/assets/aboutUs/aboutUs1.png",
    "/src/assets/aboutUs/aboutUs1.png",
    "/src/assets/aboutUs/aboutUs1.png",
    "/src/assets/aboutUs/aboutUs1.png",
    "/src/assets/aboutUs/aboutUs1.png",
    "/src/assets/aboutUs/aboutUs1.png",
    "/src/assets/aboutUs/aboutUs1.png",
    // "/gallery/gallery3.jpg",
    // "/gallery/gallery4.jpg",
    // "/gallery/gallery5.jpg",
    // "/gallery/gallery6.jpg",
    // "/gallery/gallery7.jpg",
    // "/gallery/gallery8.jpg",
    // "/gallery/gallery9.jpg",
    // "/gallery/gallery10.jpg",
    // "/gallery/gallery11.jpg",
    // "/gallery/gallery12.jpg",
  ];

  return (
    // <MainLayout>
    <section className="gallery-page">
      <Navbar />
      <div className="gallery-hero">
        <span>OUR GALLERY</span>

        <h1>Moments That Inspire</h1>

        <p>
          Explore our collection of memorable moments, events, achievements and
          activities that showcase our journey, creativity and dedication.
        </p>
      </div>

      <div className="gallery-grid">
        {gallery.map((image, index) => (
          <div className="gallery-card" key={index}>
            <img src={image} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
    // </MainLayout>
  );
}
