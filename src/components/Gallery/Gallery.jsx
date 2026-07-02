// import MainLayout from "../layouts/MainLayout";
// import MainLayout from "../../layouts/MainLayout";
import "./Gallery.css";
import Navbar from "../Navbar/Navbar";
import VideoGallery from "../VideoGallery/VideoGallery";
import ReelsGallery from "../ReelsGallery/ReelsGallery";

import img2 from "../../assets/gallery/img2.jpg";
import img4 from "../../assets/gallery/img4.jpg";
import img5 from "../../assets/gallery/img5.jpg";
import img6 from "../../assets/gallery/img6.jpg";
import img7 from "../../assets/gallery/img7.jpg";
import img9 from "../../assets/gallery/img9.jpg";

export default function Gallery() {
  // const gallery = [
  //   //  "/src/assets/aboutUs/aboutUs1.png",
  //   // "",
  //   "/src/assets/gallery/img2.jpg",
  //   // "/src/assets/gallery/img3.jpg",
  //   "/src/assets/gallery/img4.jpg",
  //   "/src/assets/gallery/img5.jpg",
  //   "/src/assets/gallery/img6.jpg",
  //   "/src/assets/gallery/img7.jpg",
  //   "/src/assets/gallery/img9.jpg",
  //   // "/src/assets/gallery/img8.jpg",
  //   // "/src/assets/gallery/img2.jpg",
  //   // "/src/assets/aboutUs/aboutUs1.png",
  //   // "/src/assets/aboutUs/aboutUs1.png",
  //   // "/src/assets/aboutUs/aboutUs1.png",
  //   // "/src/assets/aboutUs/aboutUs1.png",
  //   // "/gallery/gallery3.jpg",
  //   // "/gallery/gallery4.jpg",
  //   // "/gallery/gallery5.jpg",
  //   // "/gallery/gallery6.jpg",
  //   // "/gallery/gallery7.jpg",
  //   // "/gallery/gallery8.jpg",
  //   // "/gallery/gallery9.jpg",
  //   // "/gallery/gallery10.jpg",
  //   // "/gallery/gallery11.jpg",
  //   // "/gallery/gallery12.jpg",
  // ];
  const gallery = [img2, img4, img5, img6, img7, img9];

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

      {/* <VideoGallery/> */}
    </section>
    // </MainLayout>
  );
}
