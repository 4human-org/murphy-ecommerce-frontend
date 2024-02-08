"use client";

export default function CheckoutButton({ checkoutList }) {
  return (
    <button
      type="button"
      class="text-white bg-green-600 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
    >
      Proceed to Checkout
    </button>
  );
}
