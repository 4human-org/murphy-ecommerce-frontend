"use client";

import { useEffect, useState } from "react";
import ImageSwapper from "../../../components/ProductPage/ImageSwapper";
import ErrorPage from "next/error";
import ProductInformation from "../../../components/ProductPage/ProductInformation";

export default function Page({ params }) {
  const [product, setProduct] = useState({
    id: "1",
    name: "School Backpack",
    price: 25,
    description: "Durable backpack for carrying school supplies.",
    categories: ["Education"],
    imagesUrl: ["https://picsum.photos/200"],
    stock: 100,
    sourcing: "Donated by XYZ Company",
  });

  return (
    <div className="align-center mx-16 mt-4 flex justify-center px-2">
      <div className="basis-1/3">
        <ImageSwapper images={product.imagesUrl} />
      </div>
      <div className="basis-1/3">
        <ProductInformation
          id={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
          categories={product.categories}
          imageUrl={product.imagesUrl[0]}
          stock={product.stock}
          sourcing={product.sourcing}
        />
      </div>
    </div>
  );
}
