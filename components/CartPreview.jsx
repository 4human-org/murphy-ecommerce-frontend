"use client";

import { Button } from "@/components/ui/NavBarButton";
import { Trash, Plus, Minus } from "lucide-react";

function CartItem() {
  const imgUrl =
    "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg";
  return (
    <div className="flex mt-3 bg-[#fafafa] p-2 rounded-md">
      <div className="h-[100px] w-[100px] flex justify-center items-center">
        <img className="h-full max-w-[100px] object-cover" src={imgUrl} />
      </div>

      <div className="ml-6 flex flex-col justify-between">
        <div className="flex justify-between w-[250px]">
          <div className="pl-2 font-medium text-lg">Water Bottle</div>
          <div className="font-light">$4.99</div>
        </div>
        <div className="flex h-12 w-full items-center justify-between">
          <div className="flex items-center">
            <Button variant="ghost" size="smicon">
              <Minus />
            </Button>
            <div className="w-8 flex justify-center"> 3 </div>
            <Button variant="ghost" size="smicon">
              <Plus />
            </Button>
          </div>

          <Button variant="remove" size="smicon">
            <Trash />
          </Button>
        </div>
      </div>
    </div>
  );
}

function CartPreview() {
  return (
    <div className="">
      <div className="font-bold text-lg">Cart Items (3)</div>

      <div>
        <CartItem />
        <CartItem />
        <CartItem />
      </div>

      <Button className="w-full">Checkout</Button>
    </div>
  );
}

export default CartPreview;
