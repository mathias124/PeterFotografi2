import React, { useState, useEffect } from 'react';
import './Slideshow.css';

interface SlideshowProps {
  category: string;
}




const images = {
"Cities / Countries": [
    '/nature1.jpg',

  ],

  "Black & White": [
    '/sorthvid/Billede 271.jpg',
'/sorthvid/image_references.txt',
'/sorthvid/IMG_0231.JPG',
'/sorthvid/IMG_0410.JPG',
'/sorthvid/IMG_0490.jpeg',
'/sorthvid/IMG_1143.JPG',
'/sorthvid/IMG_2433.JPG',
'/sorthvid/IMG_3162.jpeg',
'/sorthvid/IMG_3612.jpeg',
'/sorthvid/IMG_3791.JPG',
'/sorthvid/IMG_4377.JPG',
'/sorthvid/IMG_4391.JPG',
'/sorthvid/IMG_4447.JPG',
'/sorthvid/IMG_4692.JPG',
'/sorthvid/IMG_4764.JPG',
'/sorthvid/IMG_6216.JPG',
'/sorthvid/IMG_6998.JPG',
'/sorthvid/IMG_7456.JPG',
'/sorthvid/IMG_8785.JPG',
'/sorthvid/IMG_8791.JPG',
'/sorthvid/scan gam orginaler 012.jpg',
'/sorthvid/scan gam orginaler 034.jpg',
'/sorthvid/scan gam orginaler 041.jpg',
'/sorthvid/scan gam orginaler 050.jpg',
'/sorthvid/_Q9A0536.jpg',
'/sorthvid/_Q9A0876.jpg',
'/sorthvid/_Q9A1006.jpg',
'/sorthvid/_Q9A1061.jpg',
'/sorthvid/_Q9A1202.jpg',
'/sorthvid/_Q9A1209.jpg',
'/sorthvid/_Q9A1235.jpg',
'/sorthvid/_Q9A1552.jpg',
'/sorthvid/_Q9A1752.jpg',
'/sorthvid/_Q9A1858.jpg',
'/sorthvid/_Q9A2329.jpg',
'/sorthvid/_Q9A2358.jpg',
'/sorthvid/_Q9A2432.jpg',
'/sorthvid/_Q9A2473-2.jpg',
'/sorthvid/_Q9A2480.jpg',
'/sorthvid/_Q9A2487.jpg',
'/sorthvid/_Q9A2511.jpg',
'/sorthvid/_Q9A2514.jpg',
'/sorthvid/_Q9A2835.jpg',
'/sorthvid/_Q9A2854.jpg',
'/sorthvid/_Q9A2869.jpg',
'/sorthvid/_Q9A3034.jpg',
'/sorthvid/_Q9A3136-2.jpg',
'/sorthvid/_Q9A3869.jpg',
'/sorthvid/_Q9A3915.jpg',
'/sorthvid/_Q9A4015.jpg',
'/sorthvid/_Q9A4023.jpg',
'/sorthvid/_Q9A4035.jpg',
'/sorthvid/_Q9A4038.jpg',
'/sorthvid/_Q9A4039.jpg',
'/sorthvid/_Q9A4052.jpg',
'/sorthvid/_Q9A4060.jpg',
'/sorthvid/_Q9A4074.jpg',
'/sorthvid/_Q9A4075.jpg',
'/sorthvid/_Q9A4083.jpg',
'/sorthvid/_Q9A4184.jpg',
'/sorthvid/_Q9A4333.jpg',
'/sorthvid/_Q9A5042.jpg',
'/sorthvid/_Q9A5079.jpg',
'/sorthvid/_Q9A5094.jpg',
'/sorthvid/_Q9A5236.jpg',
'/sorthvid/_Q9A5333.jpg',
'/sorthvid/_Q9A5386.jpg',
'/sorthvid/_Q9A5397.jpg',
'/sorthvid/_Q9A5433.jpg',
'/sorthvid/_Q9A5439.jpg',
'/sorthvid/_Q9A5469.jpg',
'/sorthvid/_Q9A5520.jpg',
'/sorthvid/_Q9A5584.jpg',
'/sorthvid/_Q9A5654.jpg',
'/sorthvid/_Q9A5884.jpg',
'/sorthvid/_Q9A5888.jpg',
'/sorthvid/_Q9A5893.jpg',
'/sorthvid/_Q9A5919.jpg',
'/sorthvid/_Q9A5953.jpg',
'/sorthvid/_Q9A6036.jpg',
'/sorthvid/_Q9A6077.jpg',
'/sorthvid/_Q9A6109.jpg',
'/sorthvid/_Q9A6156.jpg',
'/sorthvid/_Q9A6183.jpg',
'/sorthvid/_Q9A6195.jpg',
'/sorthvid/_Q9A6198.jpg',
'/sorthvid/_Q9A6337.jpg',
'/sorthvid/_Q9A6365.jpg',
'/sorthvid/_Q9A6418.jpg',
'/sorthvid/_Q9A6463.jpg',
'/sorthvid/_Q9A6487.jpg',
'/sorthvid/_Q9A6500.jpg',
'/sorthvid/_Q9A6507.jpg',
'/sorthvid/_Q9A6783.jpg',
'/sorthvid/_Q9A6785.jpg',
'/sorthvid/_Q9A6828.jpg',
'/sorthvid/_Q9A6860.jpg',
'/sorthvid/_Q9A6882.jpg',
'/sorthvid/_Q9A7215.jpg',
'/sorthvid/_Q9A7235.jpg',
'/sorthvid/_Q9A7383.jpg',
'/sorthvid/_Q9A7407.jpg',
'/sorthvid/_Q9A7408.jpg',
'/sorthvid/_Q9A7409.jpg',
'/sorthvid/_Q9A7463.jpg',
'/sorthvid/_Q9A7484.jpg',
'/sorthvid/_Q9A7698.jpg',

  ],
  "something else": [
    '/nature1.jpg',

  ],

  "Nature & Landscape": [
    '/nature1.jpg',
    '/nature2.jpg',
    '/nature3.jpg',
  ],
  "Street Life": [
    '/culture2.jpg',
    '/culture4.jpg',
    '/culture3.jpg',
    '/japan1.jpg',
    '/japan2.jpg',
    '/japan3.jpg',
    '/japan5.jpg',
  ],
  concert: [
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
