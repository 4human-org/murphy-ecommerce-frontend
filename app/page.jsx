"use client";
import Search from "../components/LandingPage/Search";
import CategorySection from "../components/CategorySection/CategorySection";
import { Suspense } from "react";

export default function Page() {
  return (
    <main className="mt-12 flex w-screen flex-col overflow-x-hidden scroll-smooth">
      <Suspense>
        <Search placeholder="Search products..." />
      </Suspense>
      <CategorySection sectionHeader="Health" />
      <CategorySection sectionHeader="Education" />
      <CategorySection sectionHeader="Culture" />
      <CategorySection sectionHeader="Environment" />
      <CategorySection sectionHeader="Agriculture" />
      <CategorySection sectionHeader="Energy" />
      <CategorySection sectionHeader="Recreation" />
      <CategorySection sectionHeader="Vocational" />
      <CategorySection sectionHeader="Recommended Items" />
      <CategorySection sectionHeader="Popular Items" />
    </main>
  );
}
