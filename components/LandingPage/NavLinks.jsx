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

export default function NavLinks() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="mx-4 rounded drop-shadow">
          <NavigationMenuTrigger className="w-40 rounded bg-gradient-to-br from-blue-100 from-70% via-green-100 via-95% p-2 drop-shadow-md">
            Our Links
          </NavigationMenuTrigger>
          <NavigationMenuContent className="p-4">
            <div className="flex flex-col p-2">
              <p className="no-wrap">Regular Stuff</p>
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
            <div className="flex flex-col p-2">
              <p>More things</p>
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
              <p>Yet more things</p>
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
