"use client";

import CheckoutButton from "./CheckoutButton.jsx";

export default function OrderSummary({ checkoutList, checkoutPrice }) {
  const discount = 31.9;
  const total =
    (checkoutPrice - discount).toFixed(2) < 0
      ? "0.00"
      : (checkoutPrice - discount).toFixed(2);


  return (
    <section className="bg-murphy-bg-salmon border-bg-gray-400 flex h-max min-w-[300px] flex-col gap-8 rounded-xl border-2 p-8 text-sm ">
      <div className="flex text-xl font-medium">
        <h2>Order Summary</h2>
      </div>
      <div className="flex justify-between">
        Price <span>${checkoutPrice}</span>
      </div>

      <div className="flex justify-between">
        Discount <span>${discount}</span>
      </div>
      <div className="flex justify-between">
        Shipping <span className="text-green-600">Free</span>
      </div>
      <div className="flex justify-between">
        Coupon Applied <span>$0.00</span>
      </div>
      <div className="flex justify-between border-t-2 pt-8">
        Total <span className="font-medium">${total}</span>
      </div>
      <CheckoutButton checkoutList={checkoutList} />
    </section>
  );
}
