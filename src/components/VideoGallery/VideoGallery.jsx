import React, { useRef, useState } from "react";
import "./VideoGallery.css";

const videos = [
  {
    id: 1,
    src: "https://www.youtube.com/embed/JKCxiBghzwI",
    title: "Video Odddddne",
    desc: "Click to play",
  },
  {
    id: 2,
    src: "/src/assets/gallery/img4.jpg",
    title: "Video Two",
    desc: "Click to play",
  },
  {
    id: 3,
    src: "/src/assets/gallery/img4.jpg",
    title: "Video Three",
    desc: "Click to play",
  },
  {
    id: 4,
    src: "/src/assets/gallery/img4.jpg",
    title: "Video Four",
    desc: "Click to play",
  },
];

export default function VideoGallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [paused, setPaused] = useState(false);
  const videoRefs = useRef([]);

  const handleCardClick = (index) => {
    setActiveIndex(index);
    setPaused(true);

    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === index) {
        v.currentTime = 0;
        v.play();
      } else {
        v.pause();
      }
    });
  };

  const handleClose = () => {
    setPaused(false);
    setActiveIndex(null);

    videoRefs.current.forEach((v) => {
      if (v) v.pause();
    });
  };

  return (
    <section className="video-section">
      {/* <div className="video-header">
        <span className="video-pill">Gallery</span>
        <h2>Video Gallery</h2>
        <p>Auto sliding videos with reels-style click to play.</p>
      </div> */}

      {paused && (
        <button className="resume-btn" onClick={handleClose}>
          Resume Auto Slide
        </button>
      )}

      <div className={`video-carousel ${paused ? "is-paused" : ""}`}>
        <div className={`video-track ${paused ? "paused" : ""}`}>
          {[...videos, ...videos].map((video, index) => {
            const realIndex = index % videos.length;
            const isActive = activeIndex === realIndex;

            return (
              <div
                className={`video-card ${isActive ? "active" : ""}`}
                key={`${video.id}-${index}`}
                onClick={() => handleCardClick(realIndex)}
              >
                <video
                  ref={(el) => (videoRefs.current[realIndex] = el)}
                  src={video.src}
                  autoPlay={!paused}
                  muted={!isActive}
                  loop
                  playsInline
                  className="video-player"
                />
                <div className="video-info">
                  <h3>{video.title}</h3>
                  <p>{video.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}