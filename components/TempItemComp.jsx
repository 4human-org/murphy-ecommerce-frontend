"use client";

import limitString from "../utils/LimitString.js";

export default function TempItemComp({ productName, price, imageURL }) {
  const title = limitString(productName, 9);
  const cost = price?.toFixed(2);
  const img = imageURL ? (
    <img
      src={imageURL}
      className="w-full h-full max-h-52 max-w-56 rounded-lg object-cover"
    />
  ) : (
    <img
      src="https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"
      className="w-full h-full max-h-52 max-w-56 rounded-lg object-fit"
    />
  );

  return (
    <div className="p-4 text-xs transition ease-in-out rounded-md border-neutral-100/75 hover:border-neutral-300 border hover:bg-neutral-200/75 sm:text-lg">
      {img}
      <h4 className="mt-2">{title}</h4>
      <h4 className="font-semibold">${cost}</h4>
    </div>
  );
}
