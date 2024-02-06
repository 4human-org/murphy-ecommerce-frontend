"use client";

import DummyData from "../../utils/DummyData.js";
import CartItem from "./CartItem.jsx";
import QuantityButton from "../QuantityButton.jsx";

export default function CartPage() {
  const cartItemAmount = 1;
  const itemText = cartItemAmount > 1 ? "ITEMS" : "ITEM";
  const products = DummyData()
    .slice(0, 3)
    .map(({ productName, price, imageURL }) => (
      <CartItem
        key={productName}
        productName={productName}
        price={price}
        imageURL={imageURL}
      />
      // <div>{productName} {price} {imageURL}</div>
    ));

  return (
    <div className="mx-5 my-1">
      <h4 className="text-sm font-medium text-neutral-900 mb-3">
        <span className="mx-4 text-2xl">Cart</span>
        <span className="text-gray-500">
          {cartItemAmount} {itemText}
        </span>
      </h4>
      <main className="flex flex-col rounded-xl pb-8 bg-murphy-bg-salmon border-2 border-murphy-border-salmon">
        {products}
      </main>
    </div>
  );
}
