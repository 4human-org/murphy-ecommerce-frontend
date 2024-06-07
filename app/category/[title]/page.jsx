"use client";
import { useParams, useRouter } from "next/navigation";
import CategorySection from "../../../components/CategorySection/CategorySection";
import CategoryDummyData from "../../../CategoryDummyData";
import Sidebar from "components/LandingPage/SideBar";
import Search from "components/LandingPage/Search";
import { Suspense } from "react";

export default function Page() {
  const { title } = useParams();
  const data = CategoryDummyData.filter((data) => {
    return data.category.title.toLowerCase() === title;
  });
  if (!data[0]) {
    const router = useRouter();
    router.push("/error");
    return null;
  }
  const categoryTitle = data[0].category.title;
  const categoryDescription = data[0].category.description;
  return (
    <div className="flex w-screen overflow-x-hidden scroll-smooth">
      <Sidebar />

      <div className="container m-auto mt-16 p-8">
        <Suspense>
          <Search placeholder="Search products..." />
        </Suspense>
        <CategorySection
          categoryHeader={categoryTitle}
          categoryDescription={categoryDescription}
        />
      </div>
    </div>
  );
}
