"use client";

import { useEffect, useState } from "react";
import getOrderSummaryPrice from "../../utils/CalcOrderSummary.js";
import OrderSummary from "./OrderSummary.jsx";

export default function CartPageBody({
  cartItemAmount,
  itemText,
  products,
  checkoutList,
}) {
  const [checkoutPrice, setCheckoutPrice] = useState(
    getOrderSummaryPrice(checkoutList).toFixed(2),
  );

  useEffect(() => {
    setCheckoutPrice(getOrderSummaryPrice(checkoutList).toFixed(2));
  }, [checkoutList]);

  return (
    <div className="container md:flex">
      <div className="md:mr-2 md:grow xl:mr-6">
        <h2 className="mb-3 text-sm font-medium text-neutral-900">
          <span className="mx-4 text-2xl">Cart</span>
          <span className="text-gray-500">
            {cartItemAmount} {itemText}
          </span>
        </h2>
        <section className="mb-12 flex flex-col">{products}</section>
      </div>
      <div className="sticky top-0">
        <OrderSummary
          checkoutList={checkoutList}
          checkoutPrice={checkoutPrice}
        />
      </div>
    </div>
  );
}
