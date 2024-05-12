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
import NavLinks from "./NavLinks";

// A Next.Js component for the navbar:

export default function Navbar() {
  return (
    <div className="border py-2">
      <div className="container flex items-center justify-between">
        <NavLogo />
        <div className="flex flex-row">
          <NavLinks />
          <div className="flex items-center justify-evenly">
            <AvatarButton />
            <CartButton />
            <Button variant="ghost" size="icon" className="ml-8 md:hidden">
              <AlignJustify />
            </Button>
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
