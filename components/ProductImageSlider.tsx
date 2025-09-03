
import React, { useState } from 'react';

interface ProductImageSliderProps {
  images: string[];
}

const ProductImageSlider: React.FC<ProductImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full h-96">
      <div
        className="absolute top-1/2 left-2 transform -translate-y-1/2 cursor-pointer bg-black bg-opacity-30 text-white p-2 rounded-full z-10 hover:bg-opacity-50"
        onClick={goToPrevious}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </div>
      <div
        className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer bg-black bg-opacity-30 text-white p-2 rounded-full z-10 hover:bg-opacity-50"
        onClick={goToNext}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </div>
      <img
        src={images[currentIndex]}
        alt="Product"
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
              <div key={index} className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}></div>
          ))}
      </div>
    </div>
  );
};

export default ProductImageSlider;
