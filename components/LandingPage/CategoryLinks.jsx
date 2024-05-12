"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../UIcomponents/NavigationMenu";

export default function CategoryLinks() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="rounded shadow drop-shadow-md">
          <NavigationMenuTrigger className="rounded bg-gradient-to-br from-blue-300 from-70% via-green-100 via-95% p-2 drop-shadow-md">
            Categories
          </NavigationMenuTrigger>
          <NavigationMenuContent className="m-auto flex flex-row p-4">
            <div className="flex flex-col">
              <NavigationMenuLink
                href="/category/health"
                className="m-2 rounded bg-gradient-to-br from-blue-100 from-10% via-green-100 via-green-100 via-80% p-2 shadow-md drop-shadow-md hover:invert"
              >
                Health
              </NavigationMenuLink>
              <NavigationMenuLink
                href="/category/education"
                className="m-2 rounded bg-gradient-to-br from-blue-100 from-10% via-green-100 via-green-100 via-80% p-2 shadow-md drop-shadow-md hover:invert"
              >
                Education
              </NavigationMenuLink>
              <NavigationMenuLink
                href="/category/culture"
                className="m-2 rounded bg-gradient-to-br from-blue-100 from-10% via-green-100 via-green-100 via-80% p-2 shadow-md drop-shadow-md hover:invert"
              >
                Culture
              </NavigationMenuLink>
            </div>
            <div className="flex flex-col">
              <NavigationMenuLink
                href="/category/environment"
                className="m-2 rounded bg-gradient-to-br from-blue-100 from-10% via-green-100 via-green-100 via-80% p-2 shadow-md drop-shadow-md hover:invert"
              >
                Environment
              </NavigationMenuLink>
              <NavigationMenuLink
                href="/category/agriculture"
                className="m-2 rounded bg-gradient-to-br from-blue-100 from-10% via-green-100 via-green-100 via-80% p-2 shadow-md drop-shadow-md hover:invert"
              >
                Agriculture
              </NavigationMenuLink>
              <NavigationMenuLink
                href="/category/energy"
                className="m-2 rounded bg-gradient-to-br from-blue-100 from-10% via-green-100 via-green-100 via-80% p-2 shadow-md drop-shadow-md hover:invert"
              >
                Energy
              </NavigationMenuLink>
            </div>
            <div className="flex flex-col">
              <NavigationMenuLink
                href="/category/recreation"
                className="m-2 rounded bg-gradient-to-br from-blue-100 from-10% via-green-100 via-green-100 via-80% p-2 shadow-md drop-shadow-md hover:invert"
              >
                Recreation
              </NavigationMenuLink>
              <NavigationMenuLink
                href="/category/vocational"
                className="m-2 rounded bg-gradient-to-br from-blue-100 from-10% via-green-100 via-green-100 via-80% via-95% p-2 shadow-md drop-shadow-md hover:invert"
              >
                Vocational
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
