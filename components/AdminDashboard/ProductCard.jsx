"use client";
import { useRouter } from "next/navigation";

export default function ProductCard({ product }) {
  const router = useRouter();
  const itemUrl = "./manageinventory/" + product.id;

  function handleClick() {
    localStorage.setItem("product", JSON.stringify(product));
    console.log(JSON.parse(localStorage.getItem("product")));
    router.push("./" + itemUrl);
  }

  return (
    <div className="m-4 rounded-lg bg-slate-200 p-6 text-xl shadow-lg w-full">
      <p><strong>Name:</strong> {product.name}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Categories:</strong> {product.categories.join(', ')}</p>
      <p><strong>Sourcing:</strong> {product.sourcing}</p>
      <p><strong>Price:</strong> {product.price}</p>
      <p><strong>Stock:</strong> {product.stock}</p>
      <p className="text-center">
        <a href={itemUrl}>
            <button
                className="m-2 cursor-pointer rounded bg-slate-100 p-2 text-center shadow w-full m-3"
                onClick={() => handleClick(product)}
            >
                Edit Product
            </button>
        </a>
      </p>
    </div>
  );
}
