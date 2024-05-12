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

export default function CategoryDropdown() {
  return (
    <div className="p-4 text-xl">
      <DropdownMenu>
        <DropdownMenuTrigger className="rounded bg-gradient-to-t from-blue-400 to-blue-100 p-2">
          Categories to Support
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel className="p-2">Categories</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="bg-blue-100 p-2">
            <a href="/category/health">Health</a>
          </DropdownMenuItem>
          <DropdownMenuItem className="bg-blue-100 p-2">
            <a href="/category/education">Education</a>
          </DropdownMenuItem>
          <DropdownMenuItem className="bg-blue-100 p-2">
            <a href="/category/culture">Culture</a>
          </DropdownMenuItem>
          <DropdownMenuItem className="bg-blue-100 p-2">
            <a href="/category/environment">Environment</a>
          </DropdownMenuItem>
          <DropdownMenuItem className="bg-blue-100 p-2">
            <a href="/category/agriculture">Agriculture</a>
          </DropdownMenuItem>
          <DropdownMenuItem className="bg-blue-100 p-2">
            <a href="/category/energy">Energy</a>
          </DropdownMenuItem>
          <DropdownMenuItem className="bg-blue-100 p-2">
            <a href="/category/recreation">Recreation</a>
          </DropdownMenuItem>
          <DropdownMenuItem className="bg-blue-100 p-2">
            <a href="/category/vocational">Vocational</a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
