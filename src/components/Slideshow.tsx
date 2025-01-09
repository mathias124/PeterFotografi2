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
    '/culture1.jpg',
    '/culture2.jpg',
    '/culture3.jpg',
    '/culture4.jpg',
    '/japan1.jpg',
    '/japan2.jpg',
    '/japan3.jpg',
    '/japan4.jpg',
    '/japan5.jpg',
  ],
  portrait: [
    '/placeholder.svg?height=1080&width=1920&text=Portrait+1',
    '/placeholder.svg?height=1080&width=1920&text=Portrait+2',
    '/placeholder.svg?height=1080&width=1920&text=Portrait+3',
  ],
};

const Slideshow: React.FC<SlideshowProps> = ({ category }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const categoryImages = images[category as keyof typeof images] || [];
        return (prevIndex + 1) % categoryImages.length;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [category]);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [category]);

  const categoryImages = images[category as keyof typeof images] || [];
  const currentImage = categoryImages[currentImageIndex] || '';

  if (!currentImage) {
    return null;
  }

  return (
    <div className="slideshow">
      <img
        src={currentImage}
        alt={`${category} ${currentImageIndex + 1}`}
        className="slideshow-image"
      />
      <div className="overlay" />
    </div>
  );
};

export default Slideshow;

