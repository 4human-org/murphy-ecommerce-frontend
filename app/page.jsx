"use client";
import Search from "../components/LandingPage/Search";
import AllCategories from "../components/CategorySection/AllCategories";
import { Suspense } from "react";

export default function Page() {
  return (
    <main className="mt-12 flex w-screen flex-col overflow-x-hidden scroll-smooth">
      <Suspense>
        <Search placeholder="Search products..." />
      </Suspense>
      <AllCategories />
    </main>
  );
}
