import React from 'react';
import './ImageGallery.css';

interface ImageGalleryProps {
  category: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ category }) => {
  const images = {
    nature: [
      '/placeholder.svg?height=300&width=400',
      '/placeholder.svg?height=300&width=400',
      '/placeholder.svg?height=300&width=400',
    ],
    culture: [
      '/placeholder.svg?height=300&width=400',
      '/placeholder.svg?height=300&width=400',
      '/placeholder.svg?height=300&width=400',
    ],
    portrait: [
      '/placeholder.svg?height=300&width=400',
      '/placeholder.svg?height=300&width=400',
      '/placeholder.svg?height=300&width=400',
    ],
  };

  return (
    <div className="image-gallery">
      {images[category as keyof typeof images].map((image, index) => (
        <div key={index} className="image-container">
          <img src={image} alt={`${category} ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;

