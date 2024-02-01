"use client";

import limitString from "../utils/LimitString.js";

export default function TempItemComp({ productName, price, imageURL }) {
  const title = limitString(productName, 9);
  const cost = price?.toFixed(2);
  const img = imageURL ? (
    <img
      src={imageURL}
      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
    />
  ) : (
    <img
      src="https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"
      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
    />
  );

  return (
  <div className="group relative">
    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-56">
      {img}
    </div>
    <div className="mt-4 flex justify-between">
      <div>
        <h3 className="text-sm text-neutral-700">
          <a href="#">
            <span aria-hidden="true" className="absolute inset-0" />
            {title}
          </a>
        </h3>
      </div>
      <p className="text-sm font-medium text-neutral-900">${cost}</p>
    </div>
  </div>
  );
}

