"use client";

import { useEffect, useState } from "react";
import { ProductTile, ProductTileSkeleton } from "./ProductTile.jsx";

export default function ProductTileGrid() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the API. Need to use the apiUrl variable from the env and have the backend server running.
        const response = await fetch("http://localhost:3030/products");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(
          "Fetching data failed, falling back to backup data:",
          error,
        );

        // Fetch backup dummy data from GitHub
        const backupData = await fetch(
          "https://raw.githubusercontent.com/4human-org/murphy-ecommerce-backend/main/util/products.json",
        ).then((res) => res.json());
        setProducts(backupData);
      } finally {
        setIsLoading(false); // Set loading to false when data is fetched
      }
    };
    fetchData();
  }, []);

  const displayedProducts = isLoading ? [] : products.slice(0, 8);

  return (
    <div className="grid grid-cols-1 gap-4 pb-10 sm:grid-cols-2 sm:gap-3 md:grid-cols-3 lg:grid-cols-4 xl:gap-5">
      {isLoading
        ? Array.from({ length: 8 }).map((_, index) => (
            <ProductTileSkeleton key={index} />
          ))
        : displayedProducts.map(({ name, price, imagesUrl, id }) => (
            <ProductTile
              key={name}
              productName={name}
              price={price}
              imageURL={imagesUrl[0]}
              id={id}
            />
          ))}
    </div>
  );
}
