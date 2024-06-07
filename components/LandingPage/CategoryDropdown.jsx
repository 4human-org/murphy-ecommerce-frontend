"use client";
// This will replace the on hover categories when it reaches small phones
// Can be connected to the sandwich in the upper right that appeats on small devices
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../UIcomponents/Dropdown";
import { AlignJustify } from "lucide-react";

export default function CategoryDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="ml-8 rounded-full p-2">
        <AlignJustify />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-50 m-auto mr-[5vw] mt-[5vh] flex w-screen max-w-[500px] flex-wrap justify-center border-none bg-gradient-to-t from-blue-300 via-blue-400 via-5% to-green-400 p-0 pb-4 pt-4">
        <DropdownMenuLabel className="mb-2 w-full p-2 pt-8 text-center text-[2rem]">
          <span className="rounded bg-slate-200 p-4 text-[2rem] shadow-xl">
            Categories
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <a className="" href="/category/health">
          <DropdownMenuItem className="m-2 transform justify-center rounded bg-slate-100 p-4 text-center text-[1.5rem] shadow transition duration-100 ease-in-out hover:scale-105 hover:cursor-pointer hover:bg-green-300 hover:shadow-lg ">
            Health
          </DropdownMenuItem>
        </a>
        <a className="" href="/category/education">
          <DropdownMenuItem className="m-2 transform justify-center rounded bg-slate-100 p-4 text-center text-[1.5rem] shadow transition duration-100 ease-in-out hover:scale-105 hover:cursor-pointer hover:bg-green-300 hover:shadow-lg ">
            Education
          </DropdownMenuItem>
        </a>
        <a className="" href="/category/culture">
          <DropdownMenuItem className="m-2 transform justify-center rounded bg-slate-100 p-4 text-center text-[1.5rem] shadow transition duration-100 ease-in-out hover:scale-105 hover:cursor-pointer hover:bg-green-300 hover:shadow-lg">
            Culture
          </DropdownMenuItem>
        </a>
        <a className="" href="/category/environment">
          <DropdownMenuItem className="m-2 transform justify-center rounded bg-slate-100 p-4 text-center text-[1.5rem] shadow transition duration-100 ease-in-out hover:scale-105 hover:cursor-pointer hover:bg-green-300 hover:shadow-lg">
            Environment
          </DropdownMenuItem>
        </a>
        <a className="" href="/category/agriculture">
          <DropdownMenuItem className="m-2 transform justify-center rounded bg-slate-100 p-4 text-center text-[1.5rem] shadow transition duration-100 ease-in-out hover:scale-105 hover:cursor-pointer hover:bg-green-300 hover:shadow-lg">
            Agriculture
          </DropdownMenuItem>
        </a>
        <a className="" href="/category/energy">
          <DropdownMenuItem className="m-2 transform justify-center rounded bg-slate-100 p-4 text-center text-[1.5rem] shadow transition duration-100 ease-in-out hover:scale-105 hover:cursor-pointer hover:bg-green-300 hover:shadow-lg">
            Energy
          </DropdownMenuItem>
        </a>
        <a className="" href="/category/recreation">
          <DropdownMenuItem className="m-2 transform justify-center rounded bg-slate-100 p-4 text-center text-[1.5rem] shadow transition duration-100 ease-in-out hover:scale-105 hover:cursor-pointer hover:bg-green-300 hover:shadow-lg">
            Recreation
          </DropdownMenuItem>
        </a>
        <a className="" href="/category/vocational">
          <DropdownMenuItem className="m-2 transform justify-center rounded bg-slate-100 p-4 text-center text-[1.5rem] shadow transition duration-100 ease-in-out hover:scale-105 hover:cursor-pointer hover:bg-green-300 hover:shadow-lg">
            Vocational
          </DropdownMenuItem>
        </a>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
