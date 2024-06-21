"use client";
import Link from "next/link";

export default function CheckoutButton({ checkoutList }) {
  return (
    <button
      type="button"
      className="mb-2 me-2 rounded-lg bg-green-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-800"
    >
      <Link href="/checkout">
        Proceed to Checkout
      </Link>
    </button>
  );
}
