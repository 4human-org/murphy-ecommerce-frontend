"use client";

import { useEffect, useState } from "react";
import limitString from "../../utils/LimitString.js";
import QuantityButton from "../QuantityButton.jsx";
import { getQuantity, incrementQuantity, decrementQuantity, removeFromCart} from "@/utils/CartManagement";

function handleRemove(productId, setCheckoutList) {
  setCheckoutList((prevCheckoutList) =>
    prevCheckoutList.filter((item) => item.productId !== productId)
  );
}

export default function CartItem({ product, setCheckoutList }) {
  
  const [productQuantity, setProductQuantity] = useState(() => getQuantity(product.productId));
  const [cost, setCost] = useState(product.price?.toFixed(2));

  useEffect(() => {
    setCost((product.price * productQuantity)?.toFixed(2));
  }, [productQuantity]);

  return (
    <div className="flex max-h-36 text-sm font-medium text-neutral-900 mx-2 my-1 rounded-2xl hover:bg-gray-50">
      <img
        src={
          product.imagesUrl[0]
            ? product.imagesUrl[0]
            : "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"
        }
        className="h-auto w-36 object-cover object-center p-2.5 rounded-2xl "
      />
      <div className="flex flex-col grow p-4 justify-center">
        <div className="flex justify-between">
          <h3 className="text-base font-semibold">{product.name}</h3>
          <span className="font-semibold flex items-center">${cost}</span>
        </div>
        <span>
          <span className="text-gray-500">Color</span> {product.imageUrl}
        </span>
        <div className="sm:flex items-center">
          <QuantityButton
            productId={product.productId}
            setCheckoutList={setCheckoutList}
            setProductQuantity={setProductQuantity}
          />
          <button
            className="inline text-red-700 px-2"
            onClick={() => handleRemove(product.productId, setCheckoutList)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
