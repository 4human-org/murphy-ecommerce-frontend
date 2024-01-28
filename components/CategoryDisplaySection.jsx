"use client";

import PlaceHolder from "./PlaceHolder";

export default function CategoryDisplaySection() {
  return (
    <section className="flex flex-col justify-container items-center">
      <div className="px-8 bg-red-500 max-w-fit mx-2 my-10 rounded-3xl sm:mx-2 sm:mx-4 md:mx-2 lg:my-20 xl:mx-24">
        <h1 className="py-2 text-2xl py-5">PlaceHolder Items</h1>
        <div className="grid grid-cols-2 pb-10 gap-4 sm:grid-cols-3 sm:gap-3 lg:grid-cols-6 xl:gap-5">
          <PlaceHolder />
          <PlaceHolder />
          <PlaceHolder />
          <PlaceHolder />
          <PlaceHolder />
          <PlaceHolder />
        </div>
      </div>
    </section>
  );
}
