"use client";

import limitString from "../utils/LimitString.js";

export default function TempItemComp({ productName, price, imageURL }) {
  const title = limitString(productName, 9);
  const cost = price?.toFixed(2);
  const img = imageURL ? (
    <img
      src={imageURL}
      className="w-full h-full max-h-28 max-w-56 rounded-xl object-cover"
    />
  ) : (
    <img
      src="https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"
      className="w-full h-full max-h-28 max-w-56 rounded-xl object-fit"
    />
  );

  return (
    <div className="p-4 text-xs transition ease-in-out duration-300 rounded-xl hover:bg-murphy-hover sm:text-lg">
      {img}
      <h4 className="mt-2">{title}</h4>
      <h4 className="font-semibold">${cost}</h4>
    </div>
  );
}
