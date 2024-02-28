'use client'

import { useState } from 'react';

// Swaps images based on index of the image the user clicks on
const ImageSwapper = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className='border-solid rounded flex justify-center'>
      <div className='flex flex-col p-8 max-w-3/4'>
        <div className='relative'>
          <img
            src={images[currentImageIndex]}
            alt='Swappable Image'
            className='object-cover w-full h-full'
          />
        </div>
        <div className='flex mt-4 justify-center space-x-4'>
          {images.map((image, index) => (
            <div key={index} className='relative w-1/3'>
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index}`}
                className={` object-cover w-full h-full ${
                  index === currentImageIndex
                    ? 'border-4 border-indigo-200 rounded'
                    : ''
                } cursor-pointer`}
                onClick={() => setCurrentImageIndex(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSwapper;
