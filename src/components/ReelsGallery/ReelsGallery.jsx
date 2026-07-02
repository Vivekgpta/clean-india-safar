import React from "react";
import "./ReelsGallery.css";
import img3 from "../assets/gallery/img3.jpg";
import img4 from "../../assets/gallery/img4.jpg";
import img6 from "../../assets/gallery/img6.jpg";
import img9 from "../../assets/gallery/img9.jpg";

import imgi18 from "../../assets/gallery/imgi_18.jpg";
import imgi19 from "../../assets/gallery/imgi_19.jpg";
import imgi20 from "../../assets/gallery/imgi_20.jpg";
import imgi21 from "../../assets/gallery/imgi_21.jpg";
import imgi22 from "../../assets/gallery/imgi_22.jpg";
import imgi23 from "../../assets/gallery/imgi_23.jpg";
import imgi24 from "../../assets/gallery/imgi_24.jpg";
import imgi25 from "../../assets/gallery/imgi_25.jpg";
import imgi26 from "../../assets/gallery/imgi_26.jpg";
import imgi27 from "../../assets/gallery/imgi_27.jpg";
import imgi28 from "../../assets/gallery/imgi_28.jpg";

// const reels = [
//   {
//     id: 1,
//     title: "Reel One",
//     desc: "Nature vlog",
//     poster: "img4",
//     // video: "/videos/reel1.mp4",
//     link: "https://www.instagram.com/vkkushwaha663/",
//   },
//   {
//     id: 2,
//     title: "Reel Two",
//     desc: "Travel moment",
//     poster: "img6",
//     // video: "/videos/reel2.mp4",
//     link: "https://www.instagram.com/vkkushwaha663/",
//   },
//   {
//     id: 3,
//     title: "Reel Three",
//     desc: "Product highlight",
//     poster: "img3",
//     // video: "/videos/reel3.mp4",
//     link: "https://www.instagram.com/vkkushwaha663/",
//   },
//   {
//     id: 4,
//     title: "Reel Four",
//     desc: "Event clip",
//     poster: "img9",
//     // video: "/videos/reel4.mp4",
//     link: "https://www.instagram.com/vkkushwaha663/",
//   },
//   {
//     id: 5,
//     title: "Reel 18",
//     desc: "Clean India Safar",
//     poster: "imgi_18",
//     // video: "/videos/reel18.mp4",
//     link: "https://www.instagram.com/vkkushwaha663/",
//   },
//   {
//     id: 6,
//     title: "Reel 19",
//     desc: "Clean India Safar",
//     poster: "imgi_19",
//     // video: "/videos/reel19",
//     link: "https://www.instagram.com/vkkushwaha663/",
//   },
//   {
//     id: 7,
//     title: "Reel 20",
//     desc: "Clean India Safar",
//     poster: "/src/assets/gallery/imgi_20.jpg",
//     // video: "/videos/reel20.mp4",
//     link: "https://www.instagram.com/vkkushwaha663/",
//   },
//   {
//     id: 8,
//     title: "Reel 21",
//     desc: "Clean India Safar",
//     poster: "/src/assets/gallery/imgi_21.jpg",
//     video: "/videos/reel21.mp4",
//     link: "https://www.instagram.com/vkkushwaha663/",
//   },
//   {
//     id: 9,
//     title: "Reel 22",
//     desc: "Clean India Safar",
//     poster: "/src/assets/gallery/imgi_22.jpg",
//     video: "/videos/reel22.mp4",
//     link: "https://www.instagram.com/vkkushwaha663/",
//   },
//   {
//     id: 10,
//     title: "Reel 23",
//     desc: "Clean India Safar",
//     poster: "/src/assets/gallery/imgi_23.jpg",
//     video: "/videos/reel23.mp4",
//     link: "https://www.instagram.com/vkkushwaha663/",
//   },
//   {
//     id: 11,
//     title: "Reel 24",
//     desc: "Clean India Safar",
//     poster: "/src/assets/gallery/imgi_24.jpg",
//     video: "/videos/reel24.mp4",
//     link: "https://www.instagram.com/vkkushwaha663/",
//   },
//   {
//     id: 12,
//     title: "Reel 25",
//     desc: "Clean India Safar",
//     poster: "/src/assets/gallery/imgi_25.jpg",
//     video: "/videos/reel25.mp4",
//     link: "https://www.instagram.com/vkkushwaha663/",
//   },
//   {
//     id: 13,
//     title: "Reel 26",
//     desc: "Clean India Safar",
//     poster: "/src/assets/gallery/imgi_26.jpg",
//     video: "/videos/reel26.mp4",
//     link: "https://www.instagram.com/vkkushwaha663/",
//   },
//   {
//     id: 14,
//     title: "Reel 27",
//     desc: "Clean India Safar",
//     poster: "/src/assets/gallery/imgi_27.jpg",
//     video: "/videos/reel27.mp4",
//     link: "https://www.instagram.com/vkkushwaha663/",
//   },
//   {
//     id: 16,
//     title: "Reel 28",
//     desc: "Clean India Safar",
//     poster: "/src/assets/gallery/imgi_28.jpg",
//     video: "/videos/reel28.mp4",
//     link: "https://www.instagram.com/vkkushwaha663/",
//   },
// ];
const reels = [
  {
    id: 1,
    title: "Reel One",
    desc: "Nature vlog",
    poster: img4,
    link: "https://www.instagram.com/vkkushwaha663/",
  },
  {
    id: 2,
    title: "Reel Two",
    desc: "Travel moment",
    poster: img6,
    link: "https://www.instagram.com/vkkushwaha663/",
  },
  {
    id: 3,
    title: "Reel Three",
    desc: "Product highlight",
    poster: img3,
    link: "https://www.instagram.com/vkkushwaha663/",
  },
  {
    id: 4,
    title: "Reel Four",
    desc: "Event clip",
    poster: img9,
    link: "https://www.instagram.com/vkkushwaha663/",
  },
  {
    id: 5,
    title: "Reel 18",
    desc: "Clean India Safar",
    poster: imgi18,
    link: "https://www.instagram.com/vkkushwaha663/",
  },
  {
    id: 6,
    title: "Reel 19",
    desc: "Clean India Safar",
    poster: imgi19,
    link: "https://www.instagram.com/vkkushwaha663/",
  },
  {
    id: 7,
    title: "Reel 20",
    desc: "Clean India Safar",
    poster: imgi20,
    link: "https://www.instagram.com/vkkushwaha663/",
  },
  {
    id: 8,
    title: "Reel 21",
    desc: "Clean India Safar",
    poster: imgi21,
    link: "https://www.instagram.com/vkkushwaha663/",
  },
  {
    id: 9,
    title: "Reel 22",
    desc: "Clean India Safar",
    poster: imgi22,
    link: "https://www.instagram.com/vkkushwaha663/",
  },
  {
    id: 10,
    title: "Reel 23",
    desc: "Clean India Safar",
    poster: imgi23,
    link: "https://www.instagram.com/vkkushwaha663/",
  },
  {
    id: 11,
    title: "Reel 24",
    desc: "Clean India Safar",
    poster: imgi24,
    link: "https://www.instagram.com/vkkushwaha663/",
  },
  {
    id: 12,
    title: "Reel 25",
    desc: "Clean India Safar",
    poster: imgi25,
    link: "https://www.instagram.com/vkkushwaha663/",
  },
  {
    id: 13,
    title: "Reel 26",
    desc: "Clean India Safar",
    poster: imgi26,
    link: "https://www.instagram.com/vkkushwaha663/",
  },
  {
    id: 14,
    title: "Reel 27",
    desc: "Clean India Safar",
    poster: imgi27,
    link: "https://www.instagram.com/vkkushwaha663/",
  },
  {
    id: 15,
    title: "Reel 28",
    desc: "Clean India Safar",
    poster: imgi28,
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
                <img
                  src={item.poster}
                  alt={item.title}
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
