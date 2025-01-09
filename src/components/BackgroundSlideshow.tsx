import React, { useState, useEffect } from 'react';
import './BackgroundSlideshow.css';

const images = [
  '/placeholder.svg?height=1080&width=1920',
  '/placeholder.svg?height=1080&width=1920',
  '/placeholder.svg?height=1080&width=1920',
];

const BackgroundSlideshow: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="background-slideshow">
      <div
        className="slide active"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      />
    </div>
  );
};

export default BackgroundSlideshow;

