"use client"

import { AlignJustify, ShoppingCart, User } from "lucide-react";
import { Button } from "./ui/Button";
// A Next.Js component for the navbar:

function NavLogo() {
  const imgUrl = "/logo.webp";

  return (
    <a href="/">
      <div className="flex items-center">
        <img className="rounded-full h-16" src={imgUrl} />
        <div className="ml-2 hidden lg:block">
          <div className="text-[#064790] font-bold">
            <h1>MURPHY CHARITABLE FOUNDATION UGANDA</h1>
          </div>
          <div className="text-[#67B32E] font-bold flex justify-evenly items-center break-none">
            <div className="bg-[#67B32E] w-full h-[2px] mr-2"></div>
            <div className="whitespace-nowrap">SINCE 2018</div>
            <div className="bg-[#67B32E] w-full h-[2px] ml-2"></div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default function Navbar() {
  return (
    <div className="py-2 border">
      <div className="container flex items-center justify-between">
        <NavLogo />

        <div className="flex justify-evenly items-center">
          <a className="ml-10 hidden md:flex hover:underline" href="#">
            Shop
          </a>
          <a className="ml-10 hidden md:flex hover:underline" href="#">
            About Us
          </a>

          <Button variant="ghost" size="icon" className="ml-20 hidden md:flex">
            <User />
          </Button>
          <Button variant="ghost" size="icon" className="ml-8">
            <ShoppingCart />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden ml-8">
            <AlignJustify />
          </Button>
        </div>
      </div>
    </div>
  );
}
