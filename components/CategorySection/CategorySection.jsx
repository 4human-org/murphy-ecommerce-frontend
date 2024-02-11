"use client";

import GridItemComp from "./GridItemComp.jsx";

export default function CategorySection({ sectionHeader }) {
  return (
    <section className="flex flex-col justify-container items-center">
      <div className="p-4 mx-2 md:mx-6 xl:mx-16 container">
        <h1 className="py-5 text-2xl font-semibold tracking-tight leading-relaxed">
          {sectionHeader}
        </h1>
        <GridItemComp />
      </div>
    </section>
  );
}
