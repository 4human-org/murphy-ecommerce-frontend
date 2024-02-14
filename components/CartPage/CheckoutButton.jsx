"use client";

export default function CheckoutButton({ checkoutList }) {
  return (
    <button
      type="button"
      class="text-white bg-green-600 hover:bg-green-800 font-medium rounded-lg w-full text-sm px-5 py-2.5"
    >
      Proceed to Checkout
    </button>
  );
}
