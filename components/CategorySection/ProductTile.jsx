"use client";

import Skeleton from "@/components/ui/skeleton";

function ProductTile({ productName, price, imageURL, id }) {
  const cost = price?.toFixed(2);

  return (
    <div className="group relative">
      <a href={"/product/" + id}>
        <div className="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-56">
          <img
            src={
              imageURL
                ? imageURL
                : "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg"
            }
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between gap-4">
          <div className="w-full text-sm text-neutral-700">{productName}</div>
          <div className="text-sm font-medium text-neutral-900">${cost}</div>
        </div>
      </a>
    </div>
  );
}

// Skeleton for loading state
function ProductTileSkeleton() {
  return (
    <div className="group relative">
      <div>
        <Skeleton className="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-56" />
      </div>
      <div className="mt-4 flex justify-between">
        <div className="w-full">
          <Skeleton className="h-4 w-full" />
        </div>
      </div>
    </div>
  );
}

export { ProductTile, ProductTileSkeleton };
