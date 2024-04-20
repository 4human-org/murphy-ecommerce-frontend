"use client";

import { useState } from "react";

// Swaps images based on index of the image the user clicks on
const ImageSwapper = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="flex justify-center rounded border-solid">
      <div className="max-w-3/4 flex flex-col p-8">
        <div className="relative">
          <img
            src={images[currentImageIndex]}
            alt="Swappable Image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="mt-4 flex justify-center space-x-4">
          {images.map((image, index) => (
            <div key={index} className="relative w-1/3">
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index}`}
                className={` h-full w-full object-cover ${
                  index === currentImageIndex
                    ? "rounded border-4 border-indigo-200"
                    : ""
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
