"use client";

import ProductTileGrid from "./ProductTileGrid.jsx";

export default function CategorySection({ sectionHeader }) {
  return (
    <section className="justify-container flex flex-col items-center">
      <div className="container mx-2 p-4 md:mx-6 xl:mx-16">
        <h1 className="py-5 text-2xl font-semibold leading-relaxed tracking-tight">
          {sectionHeader}
        </h1>
        <ProductTileGrid />
      </div>
    </section>
  );
}
