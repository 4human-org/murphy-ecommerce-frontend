"use client";

import { useState } from "react";
import { incrementWithProdName, decrementWithProdName, getQuantityWithProdNume } from "utils/cartFunctions.js";

export default function QuantityButton({
  productName,
  productId,
  setCheckoutList,
  setProductQuantity,
}) {
  const [number, setNumber] = useState(getQuantityWithProdNume(productName)); // change to id when backend finished

  const handleIncrement = () => {
    incrementWithProdName(productName) // change to id when backend finished
    setNumber(number + 1);
    setProductQuantity((prev) => prev + 1);
    setCheckoutList((prevList) => {
      return prevList.map((item) => {
        if (item.productName === productName) { // change to productId when backend finished
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    });
  };

  const handleDecrement = () => {
    decrementWithProdName(productName) // change to id when backend finished
    setNumber(number - 1);
    setProductQuantity((prev) => prev - 1);
    setCheckoutList((prevList) => {
      let newList = prevList.map((item) => {
        if (item.productName !== productName) { // change to productId when backend finished
          return item;
        } else {
          return { ...item, quantity: item.quantity - 1 };
        }
      });

      newList = newList.filter(prod => prod.quantity > 0)
      return newList
    });
    
  };

  return (
    <div className="custom-number-input w-fit ">
      <label
        htmlFor="custom-input-number"
        className="w-full text-sm font-semibold text-gray-700"
      ></label>
      <div className="relative mt-1 flex h-10 w-full flex-row rounded border bg-transparent">
        <button
          onClick={handleDecrement}
          className="bg-murphy-bg-salmon flex h-full w-20 max-w-8 cursor-pointer items-center justify-center rounded-l text-gray-600 outline-none hover:bg-gray-400 hover:text-gray-700"
        >
          <span className="m-auto text-2xl font-thin">-</span>
        </button>
        <div className="flex">
          <div
            id="custom-input-number"
            className="bg-murphy-bg-salmon text-md flex h-full w-8 cursor-default items-center justify-evenly text-center font-medium text-gray-700 outline-none hover:text-black focus:text-black focus:outline-none md:text-base"
            name="custom-input-number"
          >
            {number}
          </div>
        </div>
        <button
          onClick={handleIncrement}
          className="bg-murphy-bg-salmon flex h-full w-20 max-w-8 cursor-pointer items-center justify-center rounded-r text-gray-600 hover:bg-gray-400 hover:text-gray-700"
        >
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  );
}
