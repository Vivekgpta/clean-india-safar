import React from "react";
import "./ReelsGallery.css";

const reels = [
  {
    id: 1,
    title: "Reel One",
    desc: "Nature vlog",
    poster: "/src/assets/gallery/img4.jpg",
    video: "/videos/reel1.mp4",
    link: "https://www.instagram.com/reel/your-reel-id-1/",
  },
  {
    id: 2,
    title: "Reel Two",
    desc: "Travel moment",
    poster: "/src/assets/gallery/img6.jpg",
    video: "/videos/reel2.mp4",
    link: "https://www.instagram.com/reel/your-reel-id-2/",
  },
  {
    id: 3,
    title: "Reel Three",
    desc: "Product highlight",
    poster: "/src/assets/gallery/img3.jpg",
    video: "/videos/reel3.mp4",
    link: "https://www.instagram.com/reel/your-reel-id-3/",
  },
  {
    id: 4,
    title: "Reel Four",
    desc: "Event clip",
    poster: "/src/assets/gallery/img9.jpg",
    video: "/videos/reel4.mp4",
    link: "https://www.instagram.com/reel/your-reel-id-4/",
  },
];

export default function ReelsGallery() {
  return (
    <section className="reels-section">
      <div className="reels-header">
        <span className="reels-pill">Reels Gallery</span>
        <h2>Instagram Style Video Gallery</h2>
        <p>Auto sliding cards with thumbnails and clickable reel links.</p>
      </div>

      <div className="reels-carousel">
        <div className="reels-track">
          {[...reels, ...reels].map((item, index) => (
            <a
              key={`${item.id}-${index}`}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="reel-card"
            >
              <div className="reel-video-wrap">
                <video
                  src={item.video}
                  poster={item.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="reel-video"
                />
                <div className="reel-overlay">
                  <span className="play-badge">▶</span>
                </div>
              </div>

              <div className="reel-info">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}