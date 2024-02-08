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
    getOrderSummaryPrice(checkoutList).toFixed(2)
  );

  useEffect(() => {
    setCheckoutPrice(getOrderSummaryPrice(checkoutList).toFixed(2));
  }, [checkoutList]);

  return (
    <div className="mx-5 my-1 md:flex">
      <div className="md:grow md:mr-2 xl:mr-6">
        <h4 className="text-sm font-medium text-neutral-900 mb-3">
          <span className="mx-4 text-2xl">Cart</span>
          <span className="text-gray-500">
            {cartItemAmount} {itemText}
          </span>
        </h4>
        <section className="flex flex-col rounded-xl pb-8 bg-murphy-bg-salmon border-2 border-murphy-border-salmon">
          {products}
        </section>
      </div>
      <OrderSummary checkoutList={checkoutList} checkoutPrice={checkoutPrice} />
    </div>
  );
}
