"use client";

import GridItemComp from "./GridItemComp.jsx";

export default function CategorySection({ sectionHeader }) {
  return (
    <section className="flex bg-neutral-100/75 flex-col justify-container items-center mb-12">
      <div className="p-4 mx-2 md:mx-6 xl:mx-16">
        <h1 className="p-4 text-2xl font-semibold tracking-tight leading-relaxed">
          {sectionHeader}
        </h1>
        <GridItemComp />
      </div>
    </section>
  );
}
