"use client";

import TempItemComp from "./ItemComp.jsx";
import DummyData from "../../utils/DummyData.js";

export default function GridItemComp() {
  const products = DummyData()
    .slice(0, 6)
    .map(({ productName, price, imageURL }) => (
      <ItemComp
        key={productName}
        productName={productName}
        price={price}
        imageURL={imageURL}
      />
    ));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 pb-10 gap-4 md:grid-cols-3 sm:gap-3 lg:grid-cols-6 xl:gap-5">
      {products}
    </div>
  );
}
