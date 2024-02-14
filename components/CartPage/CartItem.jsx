"use client";

import { useEffect, useState } from "react";
import limitString from "../../utils/LimitString.js";
import QuantityButton from "../QuantityButton.jsx";

function handleRemove(productId, setCheckoutList) {
  setCheckoutList((prevCheckoutList) =>
    prevCheckoutList.filter((item) => item.productId !== productId)
  );
}

export default function CartItem({ product, setCheckoutList }) {
  const { productId, productName, price, imageURL, quantity } = product;
  const [productQuantity, setProductQuantity] = useState(quantity);
  const [cost, setCost] = useState(price?.toFixed(2));
  const title = limitString(productName, 9);
  const placeHolderColor = "123";

  useEffect(() => {
    setCost((price * productQuantity)?.toFixed(2));
  }, [productQuantity]);

  return (
    <div className="flex max-h-36 text-sm font-medium text-neutral-900 mx-2 my-1 border-b-gray-300 hover:rounded-xl hover:border-2 ">
      <img
        src={
          imageURL
            ? imageURL
            : "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"
        }
        className="h-auto w-36 object-cover object-center p-2.5 rounded-2xl "
      />
      <div className="flex flex-col grow p-4 justify-center">
        <div className="flex justify-between">
          <h4 className="text-base font-semibold">{title}</h4>
          <h4 className="font-semibold flex items-center">${cost}</h4>
        </div>
        <h5>
          <span className="text-gray-500">Color</span> {placeHolderColor}
        </h5>
        <div className="sm:flex items-center">
          <QuantityButton
            productId={productId}
            setCheckoutList={setCheckoutList}
            setProductQuantity={setProductQuantity}
          />
          <button
            className="inline text-red-700 px-2"
            onClick={() => handleRemove(productId, setCheckoutList)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
