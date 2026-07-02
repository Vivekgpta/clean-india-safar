import React from "react";
import "./ReelsGallery.css";

const reels = [
  {
    id: 1,
    title: "Reel One",
    desc: "Nature vlog",
    poster: "/src/assets/gallery/img4.jpg",
    video: "/videos/reel1.mp4",
    link: "https://www.instagram.com/vkkushwaha663/",
  },
  {
    id: 2,
    title: "Reel Two",
    desc: "Travel moment",
    poster: "/src/assets/gallery/img6.jpg",
    video: "/videos/reel2.mp4",
    link: "https://www.instagram.com/vkkushwaha663/",
  },
  {
    id: 3,
    title: "Reel Three",
    desc: "Product highlight",
    poster: "/src/assets/gallery/img3.jpg",
    video: "/videos/reel3.mp4",
    link: "https://www.instagram.com/vkkushwaha663/",
  },
  {
    id: 4,
    title: "Reel Four",
    desc: "Event clip",
    poster: "/src/assets/gallery/img9.jpg",
    video: "/videos/reel4.mp4",
    link: "https://www.instagram.com/vkkushwaha663/",
  },
  {
  id: 5,
  title: "Reel 18",
  desc: "Clean India Safar",
  poster: "/src/assets/gallery/imgi_18.jpg",
  video: "/videos/reel18.mp4",
  link: "https://www.instagram.com/vkkushwaha663/",
},
{
  id: 6,
  title: "Reel 19",
  desc: "Clean India Safar",
  poster: "/src/assets/gallery/imgi_19.jpg",
  video: "/videos/reel19.mp4",
  link: "https://www.instagram.com/vkkushwaha663/",
},
{
  id: 7,
  title: "Reel 20",
  desc: "Clean India Safar",
  poster: "/src/assets/gallery/imgi_20.jpg",
  video: "/videos/reel20.mp4",
  link: "https://www.instagram.com/vkkushwaha663/",
},
{
  id: 8,
  title: "Reel 21",
  desc: "Clean India Safar",
  poster: "/src/assets/gallery/imgi_21.jpg",
  video: "/videos/reel21.mp4",
  link: "https://www.instagram.com/vkkushwaha663/",
},
{
  id: 9,
  title: "Reel 22",
  desc: "Clean India Safar",
  poster: "/src/assets/gallery/imgi_22.jpg",
  video: "/videos/reel22.mp4",
  link: "https://www.instagram.com/vkkushwaha663/",
},
{
  id: 10,
  title: "Reel 23",
  desc: "Clean India Safar",
  poster: "/src/assets/gallery/imgi_23.jpg",
  video: "/videos/reel23.mp4",
  link: "https://www.instagram.com/vkkushwaha663/",
},
{
  id: 11,
  title: "Reel 24",
  desc: "Clean India Safar",
  poster: "/src/assets/gallery/imgi_24.jpg",
  video: "/videos/reel24.mp4",
  link: "https://www.instagram.com/vkkushwaha663/",
},
{
  id: 12,
  title: "Reel 25",
  desc: "Clean India Safar",
  poster: "/src/assets/gallery/imgi_25.jpg",
  video: "/videos/reel25.mp4",
  link: "https://www.instagram.com/vkkushwaha663/",
},
{
  id: 13,
  title: "Reel 26",
  desc: "Clean India Safar",
  poster: "/src/assets/gallery/imgi_26.jpg",
  video: "/videos/reel26.mp4",
  link: "https://www.instagram.com/vkkushwaha663/",
},
{
  id: 14,
  title: "Reel 27",
  desc: "Clean India Safar",
  poster: "/src/assets/gallery/imgi_27.jpg",
  video: "/videos/reel27.mp4",
  link: "https://www.instagram.com/vkkushwaha663/",
},
{
  id: 16,
  title: "Reel 28",
  desc: "Clean India Safar",
  poster: "/src/assets/gallery/imgi_28.jpg",
  video: "/videos/reel28.mp4",
  link: "https://www.instagram.com/vkkushwaha663/",
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