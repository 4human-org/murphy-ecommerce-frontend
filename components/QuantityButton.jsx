"use client";

import { useState } from "react";

export default function QuantityButton({
  productId,
  setCheckoutList,
  setProductQuantity,
}) {
  const [number, setNumber] = useState(1);

  const handleIncrement = () => {
    setNumber(number + 1);
    setProductQuantity((prev) => prev + 1);
    setCheckoutList((prevList) => {
      return prevList.map((item) => {
        if (item.productId === productId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    });
  };

  const handleDecrement = () => {
    if (number > 1) {
      setNumber(number - 1);
      setProductQuantity((prev) => prev - 1);
      setCheckoutList((prevList) => {
        return prevList.map((item) => {
          if (item.productId === productId) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
      });
    }
  };

  return (
    <div className="custom-number-input w-fit ">
      <label
        htmlFor="custom-input-number"
        className="w-full text-gray-700 text-sm font-semibold"
      ></label>
      <div className="flex flex-row h-10 w-full rounded relative bg-transparent mt-1 border">
        <button
          onClick={handleDecrement}
          className="flex justify-center items-center max-w-8 bg-murphy-bg-salmon text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
        >
          <span className="m-auto text-2xl font-thin">-</span>
        </button>
        <div className="flex">
          <div
            id="custom-input-number"
            className="flex justify-evenly w-8 h-full w-full outline-none focus:outline-none text-center bg-murphy-bg-salmon font-medium text-md hover:text-black focus:text-black md:text-base cursor-default flex items-center text-gray-700 outline-none"
            name="custom-input-number"
          >
            {number}
          </div>
        </div>
        <button
          onClick={handleIncrement}
          className="flex justify-center items-center max-w-8 bg-murphy-bg-salmon text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
        >
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  );
}
