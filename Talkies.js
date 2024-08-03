import React, { useState } from 'react';
import './Talkies.css';

// List of video files and their thumbnail images
const videos = [
  { src: "/assets/v1.mp4", poster: "/assets/thumbnail0.jpg" },
  { src: "/assets/v2.mp4", poster: "/assets/thumbnail.jpg" },
  { src: "/assets/v3.mp4", poster: "/assets/thumbnail2.jpg" },
];

const Talkies = () => {
  const [currentVideo, setCurrentVideo] = useState(null);

  const handleVideoClick = (src) => {
    setCurrentVideo(src);
  };

  const handleBackClick = () => {
    setCurrentVideo(null);
  };

  return (
    <div className="talkies">
      {currentVideo ? (
        <div className="video-player">
          <button className="back-button" onClick={handleBackClick}>Back to Thumbnails</button>
          <video
            width="80%"
            height="auto"
            controls
            autoPlay
          >
            <source src={currentVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <div className="thumbnail-list">
          {videos.map((video, index) => (
            <div key={index} className="thumbnail-item">
              <img
                src={video.poster}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => handleVideoClick(video.src)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Talkies;