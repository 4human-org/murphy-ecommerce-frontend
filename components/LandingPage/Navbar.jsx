"use client";

import { AlignJustify, ShoppingCart, User } from "lucide-react";
import NavLogo from "./NavLogo";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/UIcomponents/Avatar";
import Button from "../UIcomponents/Button";
import Link from "next/link";
import CategoryDropdown from "../LandingPage/CategoryDropdown";

export default function Navbar() {
  return (
    <div className="fixed top-0 z-10 w-screen">
      <div className="container absolute top-0 z-20 flex max-w-[100%] items-center justify-between border bg-white py-2">
        <NavLogo />
        <div className="flex flex-row">
          <div className="flex items-center justify-evenly">
            <AvatarButton />
            <CartButton />
            <CategoryDropdown />
          </div>
        </div>
      </div>
    </div>
  );
}

function AvatarButton() {
  return (
    <Link href="/profile">
      <Avatar>
        <AvatarFallback>
          <User />
        </AvatarFallback>
      </Avatar>
    </Link>
  );
}

function CartButton() {
  return (
    <Link href="/cart">
      <Button variant="ghost" size="icon" className="ml-8">
        <ShoppingCart />
      </Button>
    </Link>
  );
}
