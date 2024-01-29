"use client";

export default function TempItemComp({ productName, price, imageURL }) {
  // remove grid row gap and add y padding - adjust max-h-28
  return (
    <div className="text-lg">
      <img
        src={imageURL}
        className="w-full h-full max-h-28 max-w-56 rounded-xl object-cover"
      />
      <h4 className="mt-2">{productName}</h4>
      <h4>${price?.toFixed(2)}</h4>
    </div>
  );
}
