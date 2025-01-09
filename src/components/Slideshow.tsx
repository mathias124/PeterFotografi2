import React, { useState, useEffect } from 'react';
import './Slideshow.css';

interface SlideshowProps {
  category: string;
}

const images = {
  nature: [
    '/nature1.jpg',
    '/nature2.jpg',
    '/nature3.jpg',
  ],
  culture: [
    '/culture2.jpg',
    '/culture4.jpg',
    '/culture3.jpg',
    '/japan1.jpg',
    '/japan2.jpg',
    '/japan3.jpg',
    '/japan5.jpg',
  ],
  portrait: [
    '/portrait2.jpg',
    '/portrait1.jpg',
  ],
};

const Slideshow: React.FC<SlideshowProps> = ({ category }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const categoryImages = images[category as keyof typeof images] || [];

  // Automatically change the image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % categoryImages.length);
        setIsAnimating(false);
      }, 500); // Animation duration matches the CSS
    }, 4000);

    return () => clearInterval(interval);
  }, [category, categoryImages.length]);

  // Reset to the first image when the category changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [category]);

  const handleDotClick = (index: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentImageIndex(index);
      setIsAnimating(false);
    }, 500); // Animation duration matches the CSS
  };

  return (
    <div className="slideshow">
      {/* Sliding container for images */}
      <div
        className={`slideshow-images ${isAnimating ? 'sliding' : ''}`}
        style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
      >
        {categoryImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${category} ${index + 1}`}
            className="slideshow-image"
          />
        ))}
      </div>

      {/* Dots for navigation */}
      <div className="slideshow-dots">
        {categoryImages.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
