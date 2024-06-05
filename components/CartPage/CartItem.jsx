"use client";

import { useEffect, useState } from "react";
import limitString from "../../utils/LimitString.js";
import { setCart } from "utils/cartFunctions.js";
import QuantityButton from "../QuantityButton.jsx";

function handleRemove(productId, productName, setCheckoutList) {
  setCheckoutList((prevCheckoutList) => {
    const newList = prevCheckoutList.filter((item) => item.productName !== productName) 
    setCart(newList)
    return newList
  });
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
    <div className="mx-2 my-1 flex max-h-36 rounded-2xl text-sm font-medium text-neutral-900 hover:bg-gray-50">
      <img
        src={
          imageURL
            ? imageURL
            : "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"
        }
        className="h-auto w-36 rounded-2xl object-cover object-center p-2.5 "
      />
      <div className="flex grow flex-col justify-center p-4">
        <div className="flex justify-between">
          <h3 className="text-base font-semibold">{title}</h3>
          <span className="flex items-center font-semibold">${cost}</span>
        </div>
        <span>
          <span className="text-gray-500">Color</span> {placeHolderColor}
        </span>
        <div className="items-center sm:flex">
          <QuantityButton
            productName={productName}
            productId={productId}
            setCheckoutList={setCheckoutList}
            setProductQuantity={setProductQuantity}
          />
          <button
            className="inline px-2 text-red-700"
            onClick={() => handleRemove(productId, productName, setCheckoutList)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
