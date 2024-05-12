"use client";
import Search from "../components/LandingPage/Search";
import AllCategories from "../components/CategorySection/AllCategories";
import { Suspense } from "react";
import CategoryLinks from "../components/LandingPage/CategoryLinks";

export default function Page() {
  return (
    <main className="container mt-12 flex w-screen overflow-x-hidden scroll-smooth">
      <div className="m-10">
        <CategoryLinks />
      </div>
      <div>
        <Suspense>
          <Search placeholder="Search products..." />
        </Suspense>
        <AllCategories />
      </div>
    </main>
  );
}
