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
    '/culture1.jpg',
    '/japan1.jpg',
    '/japan2.jpg',
    '/japan3.jpg',
    '/japan4.jpg',
    '/japan5.jpg',
  ],
  portrait: [
    '/portrait2.jpg',
    '/portrait1.jpg',
  ],
};

const Slideshow: React.FC<SlideshowProps> = ({ category }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatically change the image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const categoryImages = images[category as keyof typeof images] || [];
        return (prevIndex + 1) % categoryImages.length;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [category]);

  // Reset to the first image when the category changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [category]);

  const categoryImages = images[category as keyof typeof images] || [];
  const currentImage = categoryImages[currentImageIndex] || '';

  if (!currentImage) {
    return null;
  }

  // Handle dot navigation
  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="slideshow">
      <img
        src={currentImage}
        alt={`${category} ${currentImageIndex + 1}`}
        className="slideshow-image"
      />
      <div className="overlay" />

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
