"use client";
import Search from "@/components/Search";
import CategorySection from "../components/CategorySection/CategorySection";
import { Suspense } from "react";

export default function Page() {
  return (
    <main className="flex-col flex w-screen overflow-x-hidden scroll-smooth mt-12">
      <Suspense>
        <Search placeholder="Search products..." />
      </Suspense>
      <CategorySection sectionHeader="Recommended Items" />
      <CategorySection sectionHeader="Popular Items" />
    </main>
  );
}