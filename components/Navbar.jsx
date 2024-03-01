"use client";

import { AlignJustify, ShoppingCart, User } from "lucide-react";
import { Button } from "./ui/Button";
import NavLogo from "./NavLogo";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

// A Next.Js component for the navbar:

export default function Navbar() {
  return (
    <div className="py-2 border">
      <div className="container flex items-center justify-between">
        <NavLogo />

        <div className="flex justify-evenly items-center">
          <AvatarButton />
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
