"use client";

import GridItemComp from "./GridItemComp.jsx";

export default function CategorySection({ sectionHeader }) {
  return (
    <section className="flex flex-col justify-container items-center mb-24">
      <div className="px-8 bg-murphy-gray mx-2 rounded-3xl md:mx-6 xl:mx-16">
        <h1 className="py-2 text-2xl py-5 leading-relaxed tracking-wide">
          {sectionHeader}
        </h1>
        <GridItemComp />
      </div>
    </section>
  );
}
