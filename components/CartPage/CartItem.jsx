"use client";

import limitString from "../../utils/LimitString.js";

export default function CartItem({ productName, price, imageURL }) {
  const title = limitString(productName, 9);
  const cost = price?.toFixed(2);
  const placeHolderColor = "123";

  return (
    <div className="flex max-h-36 text-sm font-medium text-neutral-900 mx-2 my-1 border-2 border-b-gray-300 border-t-murphy-bg-salmon border-r-murphy-bg-salmon border-l-murphy-bg-salmon hover:rounded-xl hover:border-2 hover:border-murphy-border-salmon hover:bg-murphy-hover-salmon">
      <img
        src={
          imageURL
            ? imageURL
            : "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"
        }
        className="h-auto w-36 object-cover object-center p-2.5"
      />
      <div className="flex flex-col grow p-4 justify-center">
        <div className="flex justify-between">
          <h4 className="text-base font-semibold">{productName}</h4>
          <h4 className="font-semibold flex items-center">${cost}</h4>
        </div>
        <h5>
          <span className="text-gray-500">Color</span> {placeHolderColor}
        </h5>
        <div>
          <div className="inline">button here </div>
          <div className="inline text-red-700 px-2">Remove</div>
        </div>
      </div>
    </div>
  );
}
