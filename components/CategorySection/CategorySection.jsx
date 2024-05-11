"use client";

import ProductTileGrid from "./ProductTileGrid.jsx";

export default function CategorySection({
  categoryHeader,
  categoryDecription,
}) {
  return (
    <section className="justify-container flex flex-col items-center">
      <div className="container mx-2 p-4 md:mx-6 xl:mx-16">
        <h1 className="text-3xl font-semibold leading-relaxed tracking-tight">
          {categoryHeader}
        </h1>
        <p className="my-6 text-center text-xl">{categoryDecription}</p>
        <ProductTileGrid />
      </div>
    </section>
  );
}
