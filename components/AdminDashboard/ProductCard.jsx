"use client";

export default function ProductCard({ product }) {
  return (
    <div className="m-4 rounded-lg bg-slate-200 p-6 text-xl shadow-lg w-full">
      <p><strong>Name:</strong> {product.name}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Categories:</strong> {product.categories.join(', ')}</p>
      <p><strong>Sourcing:</strong> {product.sourcing}</p>
      <p><strong>Price:</strong> {product.price}</p>
      <p><strong>Stock:</strong> {product.stock}</p>
    </div>
  );
}
