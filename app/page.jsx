"use client";
import Search from "../components/LandingPage/Search";
import AllCategories from "../components/CategorySection/AllCategories";
import { Suspense } from "react";
import SideBar from "../components/LandingPage/SideBar";

export default function Page() {
  return (
    <main className="flex w-screen overflow-x-hidden scroll-smooth">
      <SideBar />
      <div className="container m-auto mt-16 p-8">
        <Suspense>
          <Search placeholder="Search products..." />
        </Suspense>
        <AllCategories />
      </div>
    </main>
  );
}
