"use client";

import TempItemComp from "./TempItemComp.jsx";
import DummyData from "./DummyData.js";

export default function GridItemComp() {
  const itemComponents = DummyData()
    .slice(0, 6)
    .map(({ productName, price, imageURL }) => (
      <TempItemComp
        key={productName}
        productName={productName}
        price={price}
        imageURL={imageURL}
      />
    ));

  return (
    <div className="grid grid-cols-2 pb-10 gap-4 sm:grid-cols-3 sm:gap-3 lg:grid-cols-6 xl:gap-5">
      {itemComponents}
    </div>
  );
}
