"use client";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard"

export default function AllUserCards() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/products/")
      .then((response) => response.json())
      .then((productData) => {
        setAllProducts(productData);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  console.log(allProducts);

  return (
    <div className="container m-auto flex flex-wrap justify-center">
      {allProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
