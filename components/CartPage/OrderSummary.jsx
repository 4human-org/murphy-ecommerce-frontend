"use client";

import CheckoutButton from "./CheckOutButton.jsx";

export default function OrderSummary({ checkoutList, checkoutPrice }) {
  const discount = 31.9;
  const total =
    (checkoutPrice - discount).toFixed(2) < 0
      ? "0.00"
      : (checkoutPrice - discount).toFixed(2);

  return (
    <section className="flex flex-col text-sm p-8 rounded-xl bg-murphy-bg-salmon min-w-[300px] h-max border-2 border-bg-gray-400 gap-8 ">
      <div className="flex font-medium text-xl">
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
